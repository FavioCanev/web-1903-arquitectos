# ADR 0019 — Entradas sin transparencia, pie amarillo en todo el sitio y sin botón flotante

| Campo | Valor |
|---|---|
| Estado | Aceptada (reemplaza a la [ADR 0017](0017-entradas-al-scroll-y-microinteracciones.md)) |
| Fecha | 19/11/2026 (ficha escrita el 20/11/2026) |
| Quién decide | 1903 Arquitectos (pidió el pie amarillo en todo el sitio y retirar el botón flotante de WhatsApp) y Favio Canevaro Asto (quitó la transparencia de las entradas al hacer scroll, por accesibilidad) |

*Leyenda: "Estado" indica si la decisión está vigente (Aceptada), en discusión (Propuesta) o fue cambiada por otra (Reemplazada). "Fecha" es el día en que se tomó la decisión; la ficha se escribió un día después. "Quién decide" es la persona o el equipo responsable de la decisión.*

## Contexto

El 19/11/2026 se hicieron tres cambios que contradicen lo registrado hasta entonces y que no tenían ficha:

- **Entradas al hacer scroll:** la [ADR 0017](0017-entradas-al-scroll-y-microinteracciones.md) decía que los bloques aparecen pasando de transparentes a visibles (`opacity` de `0` a `1`) mientras suben `22 px`. Mientras un bloque está transparente, su texto no tiene el contraste mínimo de WCAG 2.2 AA ([ADR 0013](0013-accesibilidad-wcag-2-2-aa.md)), y la revisión automática (`pa11y-ci`) lo marcaba como error al cargar la página.
- **Pie de página:** en la reunión del 02/11/2026 se acordó el pie amarillo solo en la página de cada proyecto. El estudio pidió después llevarlo a toda la web.
- **Botón flotante de WhatsApp:** estaba en todas las páginas y era, junto con el listón, una de las dos excepciones a la regla de no usar posiciones fijas ni absolutas ([ADR 0009](0009-liston-animado.md) y [ADR 0015](0015-liston-como-rollo-a-la-derecha.md)). El estudio pidió retirarlo.

## Opciones consideradas

| Tema | Opción | A favor | En contra |
|---|---|---|---|
| Entradas al hacer scroll | Mantener la transparencia (ADR 0017) | Entrada más suave | El texto pasa un momento por debajo del contraste mínimo y la revisión automática falla |
| Entradas al hacer scroll | **Solo el desplazamiento de `22 px`, sin transparencia** | El texto siempre tiene su contraste completo y la revisión automática pasa | La entrada es más discreta |
| Entradas al hacer scroll | Quitar las entradas por completo | Lo más simple | Se pierde la sensación de movimiento que pidió el estudio en la ADR 0017 |
| Pie de página | **Amarillo en toda la web** | Un solo pie, igual en todas las páginas; lo pidió el estudio | La página de proyecto deja de tener un pie propio |
| Botón flotante | **Retirarlo** | Lo pidió el estudio; la pantalla queda más limpia y el listón es la única pieza fija | WhatsApp queda a un clic más: se llega por el botón "Contacto", la portada del Inicio y el pie |

*Leyenda: "Tema" es el asunto de cada decisión. "Opción" es la alternativa evaluada; la elegida va en negrita. "A favor" y "En contra" recogen sus ventajas y limitaciones. "Contraste" es la diferencia de luminosidad entre el texto y su fondo; WCAG 2.2 AA pide al menos 4.5 a 1 en texto normal.*

## Decisión

Se mantiene todo lo de la [ADR 0017](0017-entradas-al-scroll-y-microinteracciones.md) (CSS nativo, cero librerías externas, `ClientRouter`, micro-interacciones al pasar el cursor y enfocar, y las mismas exclusiones), con estos cambios:

1. **Entradas al hacer scroll sin transparencia:** `@keyframes revelar-bloque` en `src/styles/parallax.css` anima solo `transform: translateY(22px)` a `translateY(0)`. Sigue dentro de `@supports (animation-timeline: view())` y `@media (prefers-reduced-motion: no-preference)`.
2. **Pie amarillo (`--amarillo`) en todas las páginas** (`src/components/Pie.astro` y `src/layouts/Layout.astro`).
3. **Sin botón flotante de WhatsApp:** se retira `BotonWhatsapp.astro`. El listón queda como la única excepción a la regla de no usar posiciones fijas ni absolutas. WhatsApp sigue disponible desde el botón "Contacto" de la barra de navegación, el botón "Escríbenos por WhatsApp" de la portada del Inicio y el pie de página.
4. **Las micro-interacciones de «Proyecto anterior» y «Proyecto siguiente»** viven ahora en `src/views/ProyectoDetalleVista.astro`, la vista compartida entre español e inglés ([ADR 0018](0018-version-en-ingles.md)), y ya no en `src/pages/proyectos/[id].astro`.

## Consecuencias

**Positivas**

- El texto conserva su contraste desde la carga de la página, y `pa11y-ci` pasa en todas las páginas.
- La web tiene un solo pie, igual en todas las páginas.
- Hay una pieza fija menos en la pantalla, y en celular no hay un botón que tape el contenido.

**Negativas**

- Las entradas al hacer scroll se notan menos que con la transparencia.
- Para escribir por WhatsApp desde la mitad de una página hay que ir a la barra de navegación o al pie.
- Las menciones al botón flotante en las ADR 0002, 0009 y 0015 quedan como registro histórico: esas fichas no se editan, y esta las corrige.
