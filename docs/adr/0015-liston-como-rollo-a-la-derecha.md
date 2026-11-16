# ADR 0015 — Listón como rollo a la derecha y velo en los textos

| Campo | Valor |
|---|---|
| Estado | Aceptada (reemplaza a la [ADR 0009](0009-liston-animado.md)) |
| Fecha | 16/11/2026 |
| Quién decide | 1903 Arquitectos (aprobó el diseño en la revisión) y Favio Canevaro Asto (lo diseñó e implementó) |

*Leyenda: "Estado" indica si la decisión está vigente (Aceptada), en discusión (Propuesta) o fue cambiada por otra (Reemplazada). "Fecha" es el día en que se tomó la decisión. "Quién decide" es la persona o el equipo responsable de la decisión.*

## Contexto

La [ADR 0009](0009-liston-animado.md) propuso un listón plano de 40 px pegado al margen izquierdo, animado solo con CSS (`animation-timeline: scroll()`) y escondido detrás de los bloques con fondo de color.

Al construir la web y probarlo en pantalla surgieron tres límites:

- **Estaba del mismo lado que los textos.** Todos los títulos, párrafos y etiquetas se alinean a la izquierda, así que el listón quedaba apretado contra el borde del contenido y dejaba el lado derecho vacío.
- **El estudio pidió darle más presencia al mosaico.** En la reunión del 02/11/2026 pidieron jugar con capas y opacidades para que el patrón de baldosa tuviera más protagonismo sin tapar la fotografía.
- **Un listón fijo o que pasa detrás de las fotos pierde fuerza.** Se buscó que el listón cuelgue como una tela real que se desenrolla de un rollo cilíndrico al bajar por la página y que pueda pasar por encima de los fondos de la portada y de la banda de renders, manteniendo siempre legible el texto que tiene delante (WCAG 2.2 AA, [ADR 0013](0013-accesibilidad-wcag-2-2-aa.md)).

## Opciones consideradas

| Opción | Cómo funciona | A favor | En contra |
|---|---|---|---|
| Franja plana a la izquierda (ADR 0009) | Tira de 40 px pegada al margen izquierdo con CSS ligado al scroll | Simple y sin JavaScript | Compite con el margen de lectura izquierdo; en Firefox aún necesita respaldo |
| Listón centrado | Bajar por el centro de la pantalla (50 % del ancho) | Simétrico | Cruza justo por la mitad de todas las fotos y del contenido principal |
| **Rollo a la derecha (80 % del ancho) con velo en cada texto** | Tira de 52 px al 80 % del ancho que se desenrolla de un rollo que gira y se gasta con el scroll; los textos llevan un velo semitransparente | Descarga el lado izquierdo, da protagonismo al mosaico con capas y protege la lectura sobre cualquier parte del listón | Requiere cálculo en JavaScript en cada movimiento del scroll y cuidar que los selectores del velo no alteren bloques grandes |

*Leyenda: "Opción" es la ubicación y comportamiento del listón evaluados. "Cómo funciona" los resume en una línea. "A favor" y "En contra" son sus ventajas y desventajas para esta web. "Scroll" es el desplazamiento vertical de la página. "JavaScript" es el código que corre en el navegador del visitante. "WCAG 2.2 AA" es el estándar internacional de accesibilidad web que sigue la web.*

## Decisión

El listón se ubica **a la derecha, al 80 % del ancho de la ventana (`80vw`)**, con **52 px de ancho**, y se desenrolla de un **rollo cilíndrico animado** que aprobó el estudio:

- **Desenrollado y rollo:** al cargar la página parte con 3,5 baldosas desplegadas; mientras el visitante baja por la portada del Inicio, esta queda fija en pantalla hasta que el rollo baja al 72 % del alto de la ventana. A medida que avanza la página, el rollo gira, tiene un leve vaivén y se adelgaza en proporción a la tela restante, hasta gastarse por completo en la última baldosa (`patron-final.svg`, sin las dos piezas inferiores). Todo se calcula en `src/components/Liston.astro` dentro de `requestAnimationFrame` y el componente persiste entre páginas (`transition:persist`).
- **Capas y velo en los textos:** por defecto las secciones quedan por encima del listón, salvo la portada y "Proyectos en diseño" (marcadas `.liston-sobre`), donde el listón pasa por encima del fondo. Para que el texto siempre tenga contraste, cada texto dentro de `main` y `.pie` lleva un rectángulo con esquinas redondeadas de 6 px del color de su fondo al 82 % (`--velo-*`), ajustado al ancho del texto (`width: fit-content; max-width: 100%`). Esta regla se limita a elementos de texto puro para no encoger bloques con campos o imágenes (como el formulario de contacto o los retratos del equipo).
- **Titular de la portada del Inicio:** va sin rectángulo y en blanco (`--claro`) cuando el proyecto destacado tiene foto; la foto lleva un velo plano negro al 40 % para garantizar contraste sin tapar la arquitectura. Si faltara la foto, el titular conserva el color vino sobre el fondo `--pendiente`.
- **Accesibilidad y pantallas pequeñas:** el listón lleva `aria-hidden="true"` (es decorativo), con "reducir movimiento" se muestra completo y quieto sin rollo ni pausa de portada, y en pantallas de hasta 600 px de ancho se oculta; en celulares el patrón completo sigue viéndose en el pie de página.

## Consecuencias

**Positivas**

- El lado izquierdo queda limpio para leer los textos y el listón acompaña todo el recorrido como firma gráfica de marca.
- El rollo y la pausa inicial le dan ritmo visual a la portada sin depender de librerías externas.
- Los velos rectangulares garantizan la legibilidad de todos los textos aunque crucen el listón.
- Funciona de forma uniforme en todos los navegadores modernos, incluido Firefox.

**Negativas**

- Depende de un script continuo durante el scroll (mitigado con `requestAnimationFrame` y oyentes `passive`), en lugar de ser solo CSS.
- Si se agrega un bloque nuevo con fondo propio, debe declarar su variable `--velo`; y si se agregan elementos dentro de `<li>` o `<label>`, hay que vigilar que `fit-content` no los encoja.
- Mantiene la excepción a la regla de no usar posiciones absolutas (junto con el botón flotante de WhatsApp).
