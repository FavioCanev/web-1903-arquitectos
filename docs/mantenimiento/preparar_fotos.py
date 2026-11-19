"""Prepara las fotos del estudio para la web (ADR 0011).

Para cada foto de docs/mantenimiento/seleccion.json (soporta JPG, PNG, WebP, AVIF, HEIC/HEIF de iPhone,
TIFF y BMP): la gira según su EXIF, la reduce a 2400 px en el lado más largo (nunca la agranda), la pasa a
sRGB, estampa el logo vertical centrado abajo (blanco o negro según contraste), la guarda como JPEG y BORRA
todos sus metadatos (EXIF, XMP, perfil de color, datos de Photoshop, comentarios). Luego verifica los
archivos escritos.

Uso (desde la raíz del repositorio; las originales viven fuera, en material/, que nunca se sube):
    python docs/mantenimiento/preparar_fotos.py --origen "material/Fotografías Arquitectura"
    python docs/mantenimiento/preparar_fotos.py --solo-verificar
Se puede correr otra vez cuando lleguen fotos nuevas: reescribe los archivos de la selección.
Requiere:  pip install pillow pillow-heif
"""
import argparse
import io
import json
import sys
from pathlib import Path

from PIL import Image, ImageCms, ImageOps, ImageStat

try:
    import pillow_heif

    pillow_heif.register_heif_opener()
    TIENE_HEIF = True
except ImportError:
    TIENE_HEIF = False

LADO_MAXIMO = 2400
CALIDAD = 88
RAIZ = Path(__file__).resolve().parent.parent.parent
DESTINO = RAIZ / "src" / "assets" / "proyectos"
SELECCION = Path(__file__).with_name("seleccion.json")
LOGO_MASCARA = Path(__file__).with_name("logo-v-mascara.png")
SRGB = ImageCms.createProfile("sRGB")


def _luminancia_srgb(rgb: tuple[float, float, float]) -> float:
    def _lin(c: float) -> float:
        c /= 255.0
        return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4

    r, g, b = (_lin(v) for v in rgb)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def estampar_logo(img: Image.Image) -> Image.Image:
    """Coloca el logo vertical centrado abajo, eligiendo blanco o negro según mayor contraste."""
    if not LOGO_MASCARA.exists():
        raise FileNotFoundError(f"Falta la máscara del logo en {LOGO_MASCARA}")
    with Image.open(LOGO_MASCARA) as m:
        alfa = m.convert("RGBA").getchannel("A")
        alto_logo = max(48, round(min(img.width, img.height) * 0.068))
        ancho_logo = max(24, round(alto_logo * (m.width / m.height)))
        alfa = alfa.resize((ancho_logo, alto_logo), Image.Resampling.LANCZOS)

    margen_inf = max(24, round(img.height * 0.032))
    x = (img.width - ancho_logo) // 2
    y = max(0, img.height - alto_logo - margen_inf)

    recorte = img.crop((x, y, x + ancho_logo, y + alto_logo))
    media_rgb = ImageStat.Stat(recorte).mean[:3]
    l_fondo = _luminancia_srgb((media_rgb[0], media_rgb[1], media_rgb[2]))
    l_blanco = _luminancia_srgb((253, 253, 253))
    l_negro = _luminancia_srgb((26, 26, 26))
    c_blanco = (max(l_blanco, l_fondo) + 0.05) / (min(l_blanco, l_fondo) + 0.05)
    c_negro = (max(l_negro, l_fondo) + 0.05) / (min(l_negro, l_fondo) + 0.05)
    color = (253, 253, 253, 255) if c_blanco >= c_negro else (26, 26, 26, 255)

    capa_logo = Image.new("RGBA", (ancho_logo, alto_logo), color)
    capa_logo.putalpha(alfa)
    base = img.convert("RGBA")
    base.alpha_composite(capa_logo, (x, y))
    return base.convert("RGB")


def a_srgb(img: Image.Image) -> Image.Image:
    """Convierte al espacio sRGB si la foto trae otro perfil; si no trae, se asume sRGB."""
    icc = img.info.get("icc_profile")
    if icc:
        try:
            origen = ImageCms.ImageCmsProfile(io.BytesIO(icc))
            img = ImageCms.profileToProfile(img.convert("RGB"), origen, SRGB, outputMode="RGB")
        except ImageCms.PyCMSError:
            pass  # perfil ilegible: se deja como está y se borra igual
    return img.convert("RGB")


def procesar(origen: Path, destino: Path, con_logo: bool = True) -> tuple[int, int]:
    if origen.suffix.lower() in (".heic", ".heif") and not TIENE_HEIF:
        raise RuntimeError(f"Para abrir {origen.name} instala pillow-heif: pip install pillow-heif")
    with Image.open(origen) as foto:
        foto = ImageOps.exif_transpose(foto)  # aplica la orientación antes de borrar el EXIF
        foto = a_srgb(foto)
        foto.thumbnail((LADO_MAXIMO, LADO_MAXIMO), Image.Resampling.LANCZOS)  # solo reduce
        if con_logo:
            foto = estampar_logo(foto)
        destino.parent.mkdir(parents=True, exist_ok=True)
        # Sin exif=, icc_profile= ni xmp=: Pillow no escribe ningún metadato.
        foto.save(destino, "JPEG", quality=CALIDAD, optimize=True, progressive=True, subsampling=0)
        return foto.size


def segmentos_prohibidos(datos: bytes) -> list[str]:
    """Recorre los segmentos del JPEG y devuelve los que llevan metadatos."""
    if datos[:2] != b"\xff\xd8":
        return ["no es un JPEG"]
    malos, i = [], 2
    while i + 4 <= len(datos):
        if datos[i] != 0xFF:
            break
        marca = datos[i + 1]
        if marca == 0xDA:  # inicio de la imagen: ya no hay más segmentos de cabecera
            break
        largo = int.from_bytes(datos[i + 2 : i + 4], "big")
        if marca in (0xE1, 0xE2, 0xED, 0xFE) or 0xE3 <= marca <= 0xEF:  # EXIF/XMP, ICC, Photoshop, comentario, otros APPn
            malos.append(f"segmento 0x{marca:02X}")
        i += 2 + largo
    return malos


def verificar(carpeta: Path) -> int:
    """Devuelve la cantidad de archivos que no sean .jpg, tengan metadatos o midan más de 2400 px."""
    fallos = 0
    for archivo in sorted(p for p in carpeta.rglob("*") if p.is_file()):
        problemas = []
        if archivo.suffix != ".jpg":
            problemas.append("debe ser .jpg en minúsculas")
        problemas.extend(segmentos_prohibidos(archivo.read_bytes()))
        try:
            with Image.open(archivo) as img:
                if img.getexif() or img.info.get("xmp") or img.info.get("icc_profile"):
                    problemas.append("Pillow aún ve metadatos")
                if max(img.size) > LADO_MAXIMO:
                    problemas.append(f"mide {img.size}")
        except Exception as exc:
            problemas.append(f"no se pudo abrir como imagen ({exc})")
        if problemas:
            fallos += 1
            print(f"FALLA {archivo.relative_to(RAIZ)}: {', '.join(problemas)}")
    return fallos


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--origen", type=Path, help="carpeta con las carpetas originales de cada proyecto")
    ap.add_argument("--solo-verificar", action="store_true")
    args = ap.parse_args()

    if not args.solo_verificar:
        if not args.origen:
            ap.error("falta --origen")
        seleccion = json.loads(SELECCION.read_text(encoding="utf-8"))
        for slug, datos in seleccion.items():
            carpeta = args.origen / datos["carpeta"]
            for clave, sub in (("fotos", ""), ("proceso", "proceso"), ("renders", "renders")):
                lista = datos.get(clave, [])
                carpeta_sec = args.origen / datos.get(f"carpeta_{sub}", datos["carpeta"]) if sub else carpeta
                salida = DESTINO / slug / sub if sub else DESTINO / slug
                if salida.exists():
                    for viejo in salida.glob("*.jpg"):  # si la selección se acorta, no quedan fotos sobrantes
                        viejo.unlink()
                for n, item in enumerate(lista, start=1):
                    nombre = item["archivo"] if isinstance(item, dict) else item
                    con_logo = item.get("logo", True) if isinstance(item, dict) else True
                    ancho, alto = procesar(carpeta_sec / nombre, salida / f"{n:02d}.jpg", con_logo=con_logo)
                    etiqueta = f"{slug}/{sub}/{n:02d}.jpg" if sub else f"{slug}/{n:02d}.jpg"
                    print(f"{etiqueta}  <-  {nombre}  ({ancho}x{alto})")

    fallos = verificar(DESTINO)
    print("Verificación:", "todas las fotos están limpias" if not fallos else f"{fallos} con problemas")
    return 1 if fallos else 0


if __name__ == "__main__":
    sys.exit(main())
