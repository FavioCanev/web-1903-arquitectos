# ADR 0008 — Fuente Jost alojada en la propia web

| Campo | Valor |
|---|---|
| Estado | Aceptada |
| Fecha | 29/10/2026 (completada el 06/11/2026 con el formato y los pesos) |
| Quién decide | Favio Canevaro Asto, con potestad delegada por 1903 Arquitectos |

*Leyenda: "Estado" indica si la decisión está vigente (Aceptada), en discusión (Propuesta) o fue cambiada por otra (Reemplazada). "Fecha" es el día en que se tomó la decisión. "Quién decide" es la persona responsable de la decisión.*

## Contexto

El estudio no tiene una tipografía definida para su marca. Su logo usa unas letras "ARQ" de estilo geométrico, parecidas a **Futura**, una tipografía clásica del diseño moderno. La web necesita una sola familia tipográfica para todos sus textos, con carácter propio pero sin competir con las fotos.

Además, hay que decidir **desde dónde se descarga la fuente**. Si se descarga desde un servicio externo, como Google Fonts, ese servicio recibe la dirección IP de cada visitante (ver la ADR 0007). Y el peso de los archivos de la fuente influye en lo rápido que carga la web, sobre todo en un celular.

En los wireframes, la fuente está alojada en la web en formato TTF, con tres pesos: Regular (400), Medium (500) y Bold (700). Los textos solo usan Regular y Medium.

## Opciones consideradas

| Opción | A favor | En contra |
|---|---|---|
| Jost desde Google Fonts | Nada que alojar ni mantener | Google recibe la dirección IP de cada visitante; una conexión extra al cargar la página. Descartada en la ADR 0007 |
| Jost en TTF alojada en la web (los wireframes) | Sin terceros | El formato TTF no está comprimido para la web y pesa más; los archivos se convirtieron a mano y nadie los actualiza |
| **Jost en WOFF2 alojada en la web, con el paquete Fontsource** | Sin terceros. Formato comprimido para la web, más liviano. La fuente queda como una dependencia con versión, que se actualiza como las demás y trae su licencia incluida | Una dependencia más en el proyecto |
| Fuentes del sistema (Segoe UI en Windows, San Francisco en Apple, Roboto en Android) | No se descarga nada; lo más rápido | Cada visitante ve una letra distinta y se pierde la relación con el logo |
| Geist (la del primer prototipo) | Gratuita y moderna | Más neutra; no se relaciona con las letras del logo |

*Leyenda: "Opción" es la fuente evaluada y la forma de cargarla. "A favor" y "En contra" son sus ventajas y desventajas para esta web. "TTF" y "WOFF2" son formatos de archivo de fuentes; WOFF2 es el formato pensado para la web, comprimido para pesar menos. "Fontsource" es un proyecto gratuito que publica fuentes de licencia abierta como paquetes instalables, para alojarlas en la propia web. "Dirección IP" es el número con el que cada conexión se identifica en internet.*

## Decisión

Usamos **Jost** para todos los textos de la web, **alojada en la propia web en formato WOFF2**, con el paquete **Fontsource** (`@fontsource/jost`).

- **Por qué Jost:** se inspira en Futura, como las letras "ARQ" del logo, así que la web y la marca hablan el mismo idioma visual. Es gratuita y tiene licencia abierta **SIL Open Font License (OFL) 1.1**, que permite usarla en una web comercial.
- **Solo los pesos que se usan:** Regular (400) y Medium (500). El Bold (700) se quita porque ningún texto lo usa; si algún diseño lo necesita, se agrega en una línea.
- **Solo el grupo de caracteres "latin":** cubre el español (tildes, ñ, ¿, ¡) y el inglés, además de signos como "²" y "—". El grupo de caracteres no afecta el posicionamiento en buscadores: Google lee el texto del HTML, no el archivo de la fuente. El idioma de cada página se indica con el atributo `lang` y, cuando se agregue el inglés, con las etiquetas `hreflang`.

La versión exacta de Fontsource queda fijada en el archivo `package.json` del proyecto.

## Consecuencias

**Positivas**

- Ningún servicio externo se entera de quién visita la web por la fuente.
- La web carga más rápido: dos archivos WOFF2 livianos en lugar de tres TTF.
- La fuente se actualiza como cualquier otra dependencia, con su licencia incluida.
- La tipografía refuerza la identidad del logo.

**Negativas**

- Una dependencia más que mantener actualizada.
- Si algún texto usa una letra fuera del grupo "latin" (por ejemplo, de otro alfabeto), esa letra se dibuja con una fuente del sistema. Se lee y se indexa igual, pero se ve distinta.
