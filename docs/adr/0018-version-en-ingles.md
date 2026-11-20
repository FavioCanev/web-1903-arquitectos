# ADR 0018 — Versión en inglés bajo `/en/` y selector en la barra superior

| Campo | Valor |
|---|---|
| Estado | Aceptada (amplía el alcance de idioma de la [ADR 0002](0002-varias-paginas.md)) |
| Fecha | 20/11/2026 |
| Quién decide | Favio Canevaro Asto, a solicitud directa de 1903 Arquitectos (20/11/2026) |

*Leyenda: "Estado" indica si la decisión está vigente (Aceptada), en discusión (Propuesta) o fue cambiada por otra (Reemplazada). "Fecha" es el día en que se tomó la decisión. "Quién decide" es la persona o el equipo responsable de la decisión.*

## Contexto

La [ADR 0002](0002-varias-paginas.md) dejó prevista la versión en inglés bajo rutas `/en/` y dejó pendiente decidir si los nombres de las secciones en la barra de direcciones se traducirían. Posteriormente se pidió incorporar de inmediato el cambio de idioma español/inglés (`ES / EN`) en la barra superior de información (`BarraInfo.astro`, donde aparecen la ciudad y la hora local), sin recargar la barra de navegación ni usar *cookies* ([ADR 0007](0007-privacidad-sin-cookies.md)).

## Opciones consideradas

| Opción | Cómo sería | A favor | En contra |
|---|---|---|---|
| **Páginas estáticas bajo `/en/` con secciones traducidas y vistas compartidas** | `src/pages/en/` y `src/pages/` comparten las mismas vistas (`src/views/`) y un diccionario (`src/i18n/`); el selector es un enlace HTML real | Funciona sin JavaScript ni *cookies*, SEO y accesibilidad completos (`<html lang>`, `hreflang`), URLs claras en ambos idiomas y cero duplicación de estilos o scripts | Duplica los archivos de entrada en `src/pages/en/` (envoltorios de 5 líneas) y requiere traducir los textos y `alt` nuevos |
| Páginas bajo `/en/` manteniendo las secciones en español | Rutas como `/en/servicios/` y `/en/contacto/` | Menos mapeo de rutas | Menos natural para visitantes y buscadores en inglés |
| Traducción dinámica en el navegador con JavaScript | Un solo HTML que reemplaza textos con un script y guarda la preferencia | Un único árbol de archivos en `src/pages/` | Sin URL propia por idioma para compartir o indexar, parpadeo al cargar y dependencia de JavaScript |

*Leyenda: "Opción" es la alternativa evaluada. "Cómo sería" resume su funcionamiento técnico. "A favor" y "En contra" recogen sus ventajas y limitaciones para este sitio.*

## Decisión

1. **Rutas estáticas espejo bajo `/en/` con nombres de sección traducidos:**
   - `/` ↔ `/en/`
   - `/proyectos/` ↔ `/en/projects/`
   - `/proyectos/<slug>/` ↔ `/en/projects/<slug>/` (se conservan sin cambios los identificadores propios de cada obra)
   - `/servicios/` ↔ `/en/services/`
   - `/cursos/` ↔ `/en/courses/`
   - `/estudio/` ↔ `/en/studio/`
   - `/contacto/` ↔ `/en/contact/`
   - `/privacidad/` ↔ `/en/privacy/`
   - `/accesibilidad/` ↔ `/en/accessibility/`
2. **Selector `ES / EN` en `BarraInfo.astro`:** ubicado a la derecha junto a la hora local (`Cajamarca, Perú` / `Cajamarca, Peru` a la izquierda; `Hora local HH:MM | ES / EN` a la derecha). En pantallas de hasta 600 px se oculta el texto `Hora local` / `Local time` para mantener una sola fila sin desplazamiento horizontal. El selector usa enlaces HTML reales (`<a>` con `hreflang` y `lang`), sin *cookies* ni redirección automática, área táctil mínima de 28 × 36 px y foco visible en `--amarillo` ([ADR 0013](0013-accesibilidad-wcag-2-2-aa.md)).
3. **Vistas compartidas y diccionario centralizado:** la lógica, estructura HTML, estilos y scripts viven una sola vez en `src/views/` y `src/components/`, alimentados por `src/i18n/rutas.ts` y `src/i18n/textos.ts`.
4. **Traducción opcional en proyectos:** el esquema (`src/content.config.ts` y `src/lib/esquemas.ts`) agrega `encargoEn`, `solucionEn` y `altEn` opcionales (con respaldo al español si un proyecto futuro se carga primero en español). Si una foto con archivo incluye `altEn`, no puede dejarse como `[pendiente]`.
5. **Mensajes en el idioma activo:** el asistente de contacto y los enlaces de cursos presenciales (`src/lib/whatsapp.ts`) arman los borradores de WhatsApp y correo en el idioma de la página donde se encuentra el visitante (`es` o `en`).
6. **Referencia legal en páginas normativas:** `/en/privacy/` y `/en/accessibility/` aclaran que la versión en español sigue siendo la referencia legal vigente en el Perú (Leyes 29733 y 29973). Los textos traducidos quedan sujetos a la revisión y aprobación del estudio antes de publicar.

## Consecuencias

**Positivas**

- El visitante cambia de idioma en cualquier página o proyecto y aterriza en su equivalente exacto, sin *cookies* ni pérdida de rendimiento estático.
- Toda página en español e inglés comparte las mismas vistas y estilos (`src/views/`), evitando divergencias visuales entre idiomas.
- Las revisiones automáticas (`npm run enlaces` y `pa11y-ci` en WCAG 2.2 AA) cubren automáticamente todas las rutas nuevas generadas en `dist/`.

**Negativas**

- Cada cambio futuro de contenido permanente en páginas o proyectos nuevos requiere actualizar su texto equivalente en `src/i18n/textos.ts` o en los campos `*En` del JSON del proyecto (con respaldo seguro al español mientras tanto).
