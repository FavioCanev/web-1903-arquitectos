# ADR 0017 — Entradas al hacer scroll y micro-interacciones en CSS nativo

| Campo | Valor |
|---|---|
| Estado | Reemplazada por la [ADR 0019](0019-entradas-sin-transparencia-pie-amarillo-y-sin-boton-flotante.md) (antes reemplazó a la [ADR 0016](0016-animaciones-con-css-y-grilla-fija.md)) |
| Fecha | 17/11/2026 |
| Quién decide | 1903 Arquitectos (solicitó mayor interactividad y aprobó la vista previa) y Favio Canevaro Asto (implementación técnica) |

*Leyenda: "Estado" indica si la decisión está vigente (Aceptada), en discusión (Propuesta) o fue cambiada por otra (Reemplazada). "Fecha" es el día en que se tomó la decisión. "Quién decide" es la persona o el equipo responsable de la decisión.*

## Contexto

La [ADR 0016](0016-animaciones-con-css-y-grilla-fija.md) dejaba fuera las apariciones suaves de bloques al hacer scroll. Posteriormente, el estudio pidió que la web se sintiera más viva e interactiva al navegar: reacciones más claras al pasar el cursor (enlaces «Proyecto anterior / siguiente», tarjetas de proyecto, botones secundarios y enlaces de texto) y entradas suaves al bajar por la página, manteniendo el principio de cero librerías externas.

## Opciones consideradas

| Opción | Qué implica | A favor | En contra |
|---|---|---|---|
| CSS nativo (`animation-timeline: view()`) + transiciones CSS | Añadir `revelar-bloque` en `src/styles/parallax.css` dentro de `@supports (animation-timeline: view())` y micro-interacciones CSS en componentes y `base.css` | Cero JavaScript adicional, sin carreras con `ClientRouter`, respaldo estático y visible automático en navegadores sin soporte y con `prefers-reduced-motion: reduce` | En navegadores que aún no activan `animation-timeline: view()` los bloques entran de forma directa sin transición de scroll |
| `IntersectionObserver` en JavaScript | Registrar observadores en `astro:page-load` para alternar clases `.visible` | Funciona en navegadores sin `animation-timeline` | Agrega código JS en todas las páginas, exige sincronizar limpieza con `ClientRouter` y puede dejar bloques ocultos si falla la carga |

*Leyenda: "Opción" es el mecanismo evaluado. "Qué implica" resume los cambios técnicos. "A favor" y "En contra" comparan fiabilidad, peso y soporte entre navegadores.*

## Decisión

Se mantiene la arquitectura de la [ADR 0016](0016-animaciones-con-css-y-grilla-fija.md) (**CSS nativo**, cero librerías externas y `ClientRouter`) y se amplía su lista de animaciones vigentes con:

1. **Entradas suaves al hacer scroll (`src/styles/parallax.css`):** bloques de lectura, cabeceras, celdas del collage, tarjetas sin parallax y navegación entre proyectos aparecen suavemente (`opacity` de `0` a `1` y `translateY(22px)` a `0` en `entry 0% cover 20%`) dentro de `@supports (animation-timeline: view())` y `@media (prefers-reduced-motion: no-preference)`. Se excluyen explícitamente las portadas, `GrillaFija.astro`, capas `.parallax` y elementos con `:focus-within` para garantizar visibilidad inmediata por teclado (WCAG 2.4.11).
2. **Micro-interacciones al pasar el cursor y enfocar:**
   - «Proyecto anterior» y «Proyecto siguiente» en `src/pages/proyectos/[id].astro`: crecimiento `scale(1.03)` desde su borde de alineación, desplazamiento de `4 px` y subrayado naranja (`--naranja`).
   - Tarjetas en `src/components/TarjetaProyecto.astro`: zoom suave `scale(1.03)` dentro de `.marco` y transición de subrayado naranja.
   - Botones secundarios y enlaces en `src/styles/base.css`: transición corta (`150 ms`) en borde (`--vino-2`) y subrayado (`--naranja`).

## Consecuencias

**Positivas**

- Toda la animación sigue viviendo en CSS nativo sin dependencias externas ni scripts extra que mantener con `ClientRouter`.
- Con `prefers-reduced-motion: reduce`, al navegar con teclado o en navegadores sin `animation-timeline: view()`, todo el contenido permanece visible y utilizable desde el primer momento.

**Negativas**

- En navegadores sin soporte para `animation-timeline: view()` solo se ven las micro-interacciones al pasar el cursor, no las entradas ligadas al scroll.
