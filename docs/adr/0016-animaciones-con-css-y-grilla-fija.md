# ADR 0016 — Animaciones con CSS nativo y grilla fija en el Inicio

| Campo | Valor |
|---|---|
| Estado | Aceptada (reemplaza a la [ADR 0012](0012-estrategia-de-animacion.md)) |
| Fecha | 16/11/2026 |
| Quién decide | 1903 Arquitectos (aprobó la grilla fija) y Favio Canevaro Asto (decidió la implementación técnica) |

*Leyenda: "Estado" indica si la decisión está vigente (Aceptada), en discusión (Propuesta) o fue cambiada por otra (Reemplazada). "Fecha" es el día en que se tomó la decisión. "Quién decide" es la persona o el equipo responsable de la decisión.*

## Contexto

La [ADR 0012](0012-estrategia-de-animacion.md) preveía usar la librería **Motion** para las animaciones ligadas al scroll, junto con fundidos al entrar en pantalla y una transición donde la foto de cada tarjeta crecía hasta la portada de su proyecto.

Al construir la web comprobamos dos cosas:

- **Los navegadores modernos ya animan con el scroll desde CSS**, mediante `animation-timeline: view()` y `scroll()`, sin instalar dependencias externas.
- **Para el Inicio se diseñó una grilla fija animada en "Obra terminada"** (`GrillaFija.astro`), que reemplaza al mosaico estático inicial; el estudio la revisó y la aprobó. En cambio, ni los fundidos generales ni el crecimiento de la foto desde la tarjeta llegaron a hacer falta.

## Opciones consideradas

| Opción | Qué implica | A favor | En contra |
|---|---|---|---|
| CSS + enrutador de Astro + librería Motion (ADR 0012) | Instalar Motion para animar fotos con el scroll y mantener la lista de 6 efectos previos | Funciona también en navegadores que aún no activan `animation-timeline` en CSS | Agrega una dependencia y código JavaScript extra cuando el diseño actual ya se resuelve sin él |
| **CSS nativo (`animation-timeline`) + enrutador de Astro** | Todas las animaciones de scroll viven en CSS (`GrillaFija.astro` y `parallax.css`), con respaldo estático automático donde no hay soporte | Cero librerías de animación que descargar o mantener; las reglas de contraste y accesibilidad por teclado siguen funcionando con CSS | En navegadores sin `animation-timeline` (como Firefox por defecto) las grillas y galerías se muestran quietas en lugar de animadas |

*Leyenda: "Opción" es la combinación de herramientas evaluada. "Qué implica" resume cómo se construyen las animaciones. "A favor" y "En contra" comparan sus ventajas y desventajas en esta web. "CSS" es el lenguaje de estilos de la web. "Enrutador" es el código de Astro que anima el cambio entre páginas. "Scroll" es el desplazamiento vertical de la página.*

## Decisión

Mantenemos el **enrutador de Astro (`ClientRouter`)**, las variables de tiempo en `src/styles/tokens.css` y el principio de **cero librerías externas de animación**: todas las animaciones ligadas al scroll se escriben en **CSS nativo** dentro de `@supports (animation-timeline: view())` y `@media (prefers-reduced-motion: no-preference)`.

**1. Lista cerrada de animaciones vigentes:**

1. **Listón como rollo y pausa de la portada** en el Inicio ([ADR 0015](0015-liston-como-rollo-a-la-derecha.md)).
2. **Grilla fija de "Obra terminada" en el Inicio (`GrillaFija.astro`):** sección alta (`420vh`) con un escenario fijo (`position: sticky`) en pantallas de más de 900 px; al bajar, las 3 columnas de fotos suben o bajan a distinto ritmo, hacen un leve zoom y las laterales se abren, revelando al final el botón "Ver todos los proyectos". Si una tarjeta recibe el foco con el teclado (`:focus-visible`), el CSS vuelve a la grilla estática y un breve script la lleva a la vista para cumplir WCAG 2.4.11.
3. **Desplazamiento suave con el scroll (`src/styles/parallax.css`):** en el titular de la portada del Inicio (`.parallax-portada`), en las tarjetas de `/proyectos/` (`MosaicoProyectos.astro`) y en las fotos de la galería de cada proyecto (`.parallax`).
4. **Foto principal fija "como ventana"** en cada página de proyecto (`background-attachment: fixed` en escritorio); en pantallas de hasta 900 px y en Safari para iOS vuelve a `scroll` para evitar el fallo donde la imagen se estira.
5. **Cambio entre páginas con `ClientRouter`:** mantiene vivo el listón (`transition:persist`), precarga enlaces y exige que los scripts de página escuchen `astro:page-load`.
6. **Reacciones breves al pasar el mouse o enfocar** en botones y tarjetas (`transform`, color o subrayado).

No se instala Motion y quedan fuera de esta versión los fundidos de bloques y el crecimiento de la foto de la tarjeta a la portada.

**2. Con "reducir movimiento" activado, en pantallas angostas (≤ 900 px) o sin soporte de `animation-timeline`:**

- La grilla de "Obra terminada" se muestra como una grilla estática normal, con el título arriba y el botón abajo.
- Las fotos de galerías y mosaicos no se desplazan (`parallax.css` no se activa).
- Las duraciones de CSS en `tokens.css` pasan a `0ms`.

## Consecuencias

**Positivas**

- Menos peso para el visitante y una dependencia menos que actualizar en `package.json`.
- La grilla fija del Inicio funciona sin mover el scroll con JavaScript ni calcular posiciones cuadro a cuadro.
- Quienes navegan con teclado, activan "reducir movimiento" o visitan desde celular ven una grilla directa y accesible sin perder contenido.

**Negativas**

- Quienes visiten la web desde navegadores que todavía no activan `animation-timeline: view()` ven el respaldo quieto en lugar de las animaciones de scroll.
- Cada script nuevo de la web debe seguir reiniciándose en `astro:page-load` mientras se use `ClientRouter` (se mantiene el plan B de quitar `ClientRouter` si llegara a dar problemas).
