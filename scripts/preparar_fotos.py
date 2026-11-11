"""Prepara las fotos del estudio para la web (ADR 0011).

Para cada foto de scripts/seleccion.json: la gira según su EXIF, la reduce a 2400 px en el lado más largo
(nunca la agranda), la pasa a sRGB, la guarda como JPEG y BORRA todos sus metadatos (EXIF, XMP, perfil de
color, datos de Photoshop, comentarios). Luego verifica los archivos escritos.

Uso (desde la raíz del repositorio; las originales viven fuera, en material/, que nunca se sube):
    python scripts/preparar_fotos.py --origen "C:/ruta/a/Fotografías Arquitectura"
    python scripts/preparar_fotos.py --solo-verificar      # revisa lo ya escrito en src/assets/proyectos/
Se puede correr otra vez cuando lleguen fotos nuevas: reescribe los archivos de la selección.
Requiere Pillow:  pip install pillow
"""
import argparse
import io
import json
import sys
from pathlib import Path

from PIL import Image, ImageCms, ImageOps

LADO_MAXIMO = 2400
CALIDAD = 88
RAIZ = Path(__file__).resolve().parent.parent
DESTINO = RAIZ / "src" / "assets" / "proyectos"
SELECCION = Path(__file__).with_name("seleccion.json")
SRGB = ImageCms.createProfile("sRGB")


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


def procesar(origen: Path, destino: Path) -> tuple[int, int]:
    with Image.open(origen) as foto:
        foto = ImageOps.exif_transpose(foto)  # aplica la orientación antes de borrar el EXIF
        foto = a_srgb(foto)
        foto.thumbnail((LADO_MAXIMO, LADO_MAXIMO), Image.Resampling.LANCZOS)  # solo reduce
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
    """Devuelve la cantidad de archivos con metadatos o con más de 2400 px."""
    fallos = 0
    for jpg in sorted(carpeta.rglob("*.jpg")):
        problemas = segmentos_prohibidos(jpg.read_bytes())
        with Image.open(jpg) as img:
            if img.getexif() or img.info.get("xmp") or img.info.get("icc_profile"):
                problemas.append("Pillow aún ve metadatos")
            if max(img.size) > LADO_MAXIMO:
                problemas.append(f"mide {img.size}")
        if problemas:
            fallos += 1
            print(f"FALLA {jpg.relative_to(RAIZ)}: {', '.join(problemas)}")
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
            salida = DESTINO / slug
            for viejo in salida.glob("*.jpg"):  # si la selección se acorta, no quedan fotos sobrantes
                viejo.unlink()
            for n, nombre in enumerate(datos["fotos"], start=1):
                ancho, alto = procesar(carpeta / nombre, salida / f"{n:02d}.jpg")
                print(f"{slug}/{n:02d}.jpg  <-  {nombre}  ({ancho}x{alto})")

    fallos = verificar(DESTINO)
    print("Verificación:", "todas las fotos están limpias" if not fallos else f"{fallos} con problemas")
    return 1 if fallos else 0


if __name__ == "__main__":
    sys.exit(main())
