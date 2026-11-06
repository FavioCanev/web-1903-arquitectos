# ADR 0011 — Fotos en Cloudflare R2, limpias y optimizadas al construir la web

| Campo | Valor |
|---|---|
| Estado | Aceptada |
| Fecha | 05/11/2026 (completada el 06/11/2026: las fotos pasan de GitHub a Cloudflare R2) |
| Quién decide | Favio Canevaro Asto, con potestad delegada por 1903 Arquitectos |

*Leyenda: "Estado" indica si la decisión está vigente (Aceptada), en discusión (Propuesta) o fue cambiada por otra (Reemplazada). "Fecha" es el día en que se tomó la decisión. "Quién decide" es la persona responsable de la decisión.*

## Contexto

Las fotos de la obra del estudio son las protagonistas de la web. Los fotógrafos las entregan en alta resolución: cada una pesa entre 10 y 20 MB, y la web tendrá alrededor de 120.

Hay cuatro problemas que resolver:

- **Peso:** una foto original es demasiado pesada para mostrarla en la web, sobre todo en un celular.
- **Privacidad:** las fotos de cámaras y celulares guardan datos ocultos, llamados **EXIF**: el modelo de la cámara, la fecha y, muchas veces, **las coordenadas GPS de donde se tomaron**. En la foto de una vivienda, eso revela dónde vive un cliente, un dato protegido por la Ley 29733.
- **Derechos:** las fotos son de sus autores y del estudio. El repositorio del código es público (ver la ADR 0010), así que todo lo que entre ahí se puede descargar de una vez.
- **Orden:** cada foto necesita su pie de foto, su texto alternativo y el crédito del fotógrafo, en el orden de la galería.

## Opciones consideradas

| Opción | Cómo funciona | A favor | En contra |
|---|---|---|---|
| Fotos originales en el repositorio | Se suben tal como las entrega el fotógrafo | Nada que preparar | Varios GB: GitHub se vuelve lento y avisa a partir de 1 GB. Cualquiera puede descargar todo el trabajo de los fotógrafos |
| Fotos "maestras" en el repositorio | Se suben versiones reducidas (unos 500 KB) y las originales quedan en el Drive | Simple: todo en un solo lugar | Las fotos quedan en un repositorio público |
| Git LFS | Un complemento de Git para archivos pesados | Mantiene Git liviano | Su cuota gratuita en GitHub es chica; las fotos siguen en un repositorio público |
| **Cloudflare R2** | Un almacenamiento de archivos en la cuenta de Cloudflare del estudio, separado del código | Las fotos quedan en la cuenta del estudio, junto a su dominio, y no en el repositorio público. Gratis hasta 10 GB | Un paso más para publicar (subir las fotos a R2) y una clave de acceso que guardar |
| Cloudflare Images | Un servicio que guarda y optimiza fotos | Optimiza solo | Es de pago |

*Leyenda: "Opción" es el lugar donde se guardan las fotos. "Cómo funciona" lo describe en una línea. "A favor" y "En contra" son sus ventajas y desventajas para esta web. "MB", "GB" y "KB" son unidades de tamaño de archivo (1 GB = 1000 MB = 1 000 000 KB). "Repositorio" es el lugar donde se guarda el código con su historial (ver la ADR 0010). "Clave de acceso" es un dato secreto que permite a un programa leer o escribir en R2.*

## Decisión

Las fotos se guardan en **Cloudflare R2**, en la cuenta de Cloudflare del estudio. La forma de pago es la misma que el estudio registra para comprar el dominio; mientras se use dentro del tramo gratuito, no se cobra nada.

**1. Las originales se quedan en el Drive del estudio**, como respaldo. Nunca se suben a R2 ni al repositorio.

**2. Cada foto se prepara con un script** guardado en el repositorio (un programa corto en Python), que:

- la reduce a **2400 px** en su lado más largo;
- la guarda en JPEG de buena calidad, en el espacio de color estándar de la web (sRGB);
- **borra todos sus datos EXIF**, incluida la ubicación GPS.

Después de correr el script, se revisa que no quede ningún dato EXIF antes de subir las fotos. El resultado es una **foto maestra** de unos 500 KB.

**3. Las maestras se suben a R2**, ordenadas en una carpeta por proyecto y numeradas en el orden de la galería (por ejemplo, `cafetos/01.jpg`, `cafetos/02.jpg`). Para cambiar el orden, se renombran.

**4. Al construir la web, Astro descarga las maestras de R2 y genera las versiones para los visitantes:**

- cada foto en **varios tamaños**, en los formatos **AVIF y WebP** (modernos y livianos) y en JPEG para navegadores antiguos;
- el navegador de cada visitante **descarga una sola versión**: la que mejor se ajusta a su pantalla. Un celular baja una versión chica, de unos 80 KB, en lugar de la maestra;
- las fotos que están más abajo en la página se cargan **recién cuando el visitante se acerca a ellas**; la foto principal de cada página se carga de inmediato.

**5. Los textos de cada foto** (pie de foto y texto alternativo) **y el crédito del fotógrafo** van en el archivo de datos de cada proyecto, junto al resto de sus datos. El estudio sigue llenando la hoja del Drive (columnas Encargo, Solución y Pies de foto), y quien mantiene la web los pasa a ese archivo.

- El **pie de foto** dice qué espacio es; lo da el estudio.
- El **texto alternativo** describe lo que se ve, para quien usa un lector de pantalla (por ejemplo, "barra de madera con lámparas colgantes y muro rojo"). Lo escribe quien mantiene la web, describiendo solo lo visible, y lo revisa antes de publicar.

**6. La clave de acceso a R2** se guarda en los ajustes privados de Cloudflare, nunca en el código (ver la ADR 0010).

**7. Derechos:** el README del repositorio y la web indican que las fotografías son de sus autores y de 1903 Arquitectos, y que no se pueden reutilizar. [Por confirmar con el estudio: que los fotógrafos autorizaron publicar sus fotos en la web.]

**Plan B:** si R2 dejara de estar disponible o de ser gratuito para este uso, las fotos maestras pasan al repositorio. El script, el orden y los textos no cambian.

## Consecuencias

**Positivas**

- La web carga rápido: cada visitante descarga la versión justa de cada foto.
- Ninguna foto publica la ubicación de una vivienda ni otros datos ocultos.
- Las fotos están en la cuenta del estudio, junto a su dominio, y no en el repositorio público.
- El repositorio queda liviano y ordenado.
- Cambiar el orden de la galería o un pie de foto es simple y no requiere tocar el diseño.

**Negativas**

- Publicar fotos nuevas tiene un paso más: prepararlas con el script y subirlas a R2 antes de construir la web.
- La construcción de la web depende de que R2 esté disponible. Si R2 falla, la web ya publicada sigue en línea; solo no se puede publicar una versión nueva hasta que vuelva.
- Hay una clave de acceso más que cuidar.
- Las copias en varios tamaños y formatos ocupan más espacio en el servidor (no en el dispositivo del visitante), dentro del tramo gratuito.
