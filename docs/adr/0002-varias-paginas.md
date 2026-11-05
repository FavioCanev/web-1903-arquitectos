# ADR 0002 — Varias páginas en lugar de una sola

| Campo | Valor |
|---|---|
| Estado | Aceptada |
| Fecha | 05/11/2026 |
| Quién decide | Favio Canevaro Asto, con potestad delegada por 1903 Arquitectos |

*Leyenda: "Estado" indica si la decisión está vigente (Aceptada), en discusión (Propuesta) o fue cambiada por otra (Reemplazada). "Fecha" es el día en que se tomó la decisión. "Quién decide" es la persona responsable de la decisión.*

## Contexto

Los primeros wireframes ponían casi todo en una sola página larga: inicio, proyectos, renders, servicios, cursos, estudio, showroom, cómo trabajamos, preguntas frecuentes y contacto. Aparte había una página de proyecto que solo cambia de fotos y textos.

Al revisar las webs de otros estudios de arquitectura vimos que casi todos separan su contenido en varias páginas. Hay tres razones para hacer lo mismo:

- **Orden.** Cada página responde a lo que busca un tipo de visitante: el cliente que quiere ver obra, el que quiere saber qué hace el estudio y el alumno que busca un curso. En una página larga, cada uno tiene que bajar entre secciones que no le interesan.
- **Buscadores como Google.** Cada página puede tener su propio título y su propia descripción (por ejemplo, "Cursos de AutoCAD y V-Ray en Cajamarca"). Así la web aparece en más búsquedas que una sola página que intenta hablar de todo a la vez.
- **Lo que esperan los visitantes.** Una barra de navegación que lleva a páginas distintas es lo habitual en las webs de estudios, y la web gana seriedad, que es uno de los objetivos del estudio.

## Opciones consideradas

| Opción | Cómo sería | A favor | En contra |
|---|---|---|---|
| Una sola página larga | Todo en el inicio; la barra de navegación salta a cada sección | Todo a la vista bajando; menos archivos | Página muy larga y pesada; un solo título para Google; el visitante pasa por secciones que no le interesan |
| **Varias páginas** | El inicio muestra solo el portafolio; cada enlace de la barra lleva a su propia página | Cada página tiene un tema, un título y una descripción propios; inicio más corto y rápido | Un clic más para llegar a algunas secciones |
| Mezcla | Inicio largo con todo resumido, y además páginas aparte con el detalle | El visitante ve un resumen de todo sin cambiar de página | El mismo contenido vive en dos lugares y hay que mantenerlo dos veces; es fácil que se contradigan |

*Leyenda: "Opción" es la forma de organizar la web. "Cómo sería" la describe en una línea. "A favor" y "En contra" son sus ventajas y desventajas para esta web.*

## Decisión

La web tiene **varias páginas**. El inicio se queda solo con el portafolio, y cada enlace de la barra de navegación (Proyectos, Servicios, Cursos, Estudio, Contacto) lleva a su propia página. El botón "Escríbenos" lleva a Contacto.

### Mapa del sitio al 05/11/2026

| Página | Dirección | Secciones |
|---|---|---|
| Inicio | `/` | Foto del proyecto destacado a pantalla completa, con el lema y los botones "Ver proyectos" y "Escríbenos por WhatsApp" · selección de 6 obras terminadas con el enlace "Ver todos" · carrusel "Proyectos en diseño" (renders) |
| Proyectos | `/proyectos/` | Todas las obras terminadas, con filtros · al final, "En desarrollo" (renders), separado de la obra terminada |
| Proyecto (una por obra) | `/proyectos/nombre-del-proyecto/` (por ejemplo `/proyectos/cafetos/`) | Foto principal fija · ficha (lugar, m², año, tipo) · encargo y solución · galería con pies de foto · crédito del fotógrafo · proyecto anterior y siguiente |
| Servicios | `/servicios/` | Los servicios del estudio · Cómo trabajamos (4 pasos) · Preguntas frecuentes |
| Cursos | `/cursos/` | Una ficha por curso con el botón "Inscribirme", que lleva a Hotmart · certificado asociado al Colegio de Arquitectos del Perú |
| Estudio | `/estudio/` | Por qué "1903" · misión y visión · equipo · Showroom |
| Contacto | `/contacto/` | Formulario que abre WhatsApp · mapa con el botón "Cómo llegar" · dirección, horario y correo |
| Aviso de privacidad | `/privacidad/` | Qué datos se tratan y cómo pedir que se borren (ver la ADR 0007). Se enlaza desde el pie, no desde la barra |

*Leyenda: "Página" es el nombre de la página. "Dirección" es lo que va después del dominio en el enlace (por ejemplo, `1903arq.com/servicios/`). "Secciones" son los bloques de la página, de arriba hacia abajo; se separan con "·". Todas las páginas comparten la barra superior, la barra de navegación, el pie, el botón flotante de WhatsApp y el listón con el patrón de baldosa. "Renders" son imágenes hechas por computadora de proyectos que todavía no se construyen. "Hotmart" es la plataforma externa donde se venden los cursos.*

Este mapa es una foto del día de la decisión. El mapa vigente, con los criterios para dar cada página por terminada, está en [`docs/mapa-del-sitio.md`](../mapa-del-sitio.md).

## Consecuencias

**Positivas**

- Cada página tiene un solo tema, su propio título y su propia descripción para Google.
- El inicio es más corto y carga más rápido, con el portafolio como protagonista.
- Las preguntas frecuentes quedan junto a los servicios, que es donde surgen esas dudas, y el showroom junto a la historia del estudio.

**Negativas**

- El visitante necesita un clic más para llegar a Contacto o a Servicios. Lo compensan el botón flotante de WhatsApp y el botón "Escríbenos", que están en todas las páginas.
- Las direcciones de las páginas quedan fijas desde el inicio. Cambiarlas después rompe los enlaces que la gente ya compartió, así que solo se cambian con una redirección. Cuando se agregue el inglés, sus páginas irán bajo `/en/`, sin tocar las direcciones en español. Si el resto de esas direcciones se traduce (por ejemplo, `/en/services/`) se decide en ese momento. [Por decidir.]
