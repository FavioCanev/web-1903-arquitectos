# Decisiones de arquitectura (ADR)

Una **ADR** (registro de decisión de arquitectura) es una ficha corta que explica una decisión importante del proyecto: el contexto, las opciones que se consideraron, la decisión tomada y sus consecuencias. Sirven para que quien llegue después entienda **por qué** la web está hecha así, sin haber estado en las reuniones, y para no volver a discutir lo que ya se decidió.

Las fichas aprobadas no se editan. Si una decisión cambia, se escribe una ficha nueva y la anterior pasa a estado "Reemplazada", con un enlace a la que la reemplaza.

| N.º | Decisión | Estado | Fecha |
|---|---|---|---|
| [0001](0001-sitio-estatico-con-astro.md) | Sitio estático generado con Astro | Aceptada | 05/11/2026 |
| [0002](0002-varias-paginas.md) | Varias páginas en lugar de una sola | Aceptada | 05/11/2026 |
| [0003](0003-sin-panel-de-administracion.md) | Sin panel de administración | Aceptada | 21/10/2026 |
| [0004](0004-publicacion-en-cloudflare.md) | Publicación en Cloudflare | Aceptada | 05/11/2026 |
| [0005](0005-formulario-por-whatsapp.md) | Formulario de contacto que abre WhatsApp, sin guardar datos | Aceptada | 03/11/2026 |
| [0006](0006-cursos-en-hotmart.md) | Cursos en Hotmart | Aceptada | 02/11/2026 |
| [0007](0007-privacidad-sin-cookies.md) | Privacidad: web sin cookies, mapa como imagen y aviso de privacidad | Aceptada | 05/11/2026 |
| [0008](0008-fuente-jost-alojada.md) | Fuente Jost alojada en la propia web | Aceptada | 29/10/2026 |
| [0009](0009-liston-animado.md) | Listón animado con el patrón de baldosa | Reemplazada por la [0015](0015-liston-como-rollo-a-la-derecha.md) | 03/11/2026 |
| [0010](0010-repositorio-publico-lista-blanca.md) | Repositorio público con lista blanca de archivos | Aceptada | 05/11/2026 |
| [0011](0011-fotos-en-cloudflare-r2.md) | Fotos en Cloudflare R2, limpias y optimizadas al construir la web | Aceptada | 05/11/2026 |
| [0012](0012-estrategia-de-animacion.md) | Estrategia de animación | Reemplazada por la [0016](0016-animaciones-con-css-y-grilla-fija.md) | 06/11/2026 |
| [0013](0013-accesibilidad-wcag-2-2-aa.md) | Accesibilidad: WCAG 2.2 nivel AA | Aceptada | 06/11/2026 |
| [0014](0014-analisis-de-seguridad-codeql.md) | Análisis de seguridad del código con CodeQL | Aceptada | 06/11/2026 |
| [0015](0015-liston-como-rollo-a-la-derecha.md) | Listón como rollo a la derecha y velo en los textos | Aceptada | 16/11/2026 |
| [0016](0016-animaciones-con-css-y-grilla-fija.md) | Animaciones con CSS nativo y grilla fija en el Inicio | Reemplazada por la [0017](0017-entradas-al-scroll-y-microinteracciones.md) | 16/11/2026 |
| [0017](0017-entradas-al-scroll-y-microinteracciones.md) | Entradas al hacer scroll y micro-interacciones en CSS nativo | Aceptada | 17/11/2026 |
| [0018](0018-version-en-ingles.md) | Versión en inglés bajo `/en/` y selector en la barra superior | Aceptada | 20/11/2026 |

*Leyenda: "N.º" es el número de la ficha, que fija su orden; al hacer clic se abre la ficha. "Decisión" es su título. "Estado" indica si la decisión está vigente (Aceptada), en discusión (Propuesta) o fue cambiada por otra (Reemplazada). "Fecha" es el día en que se tomó la decisión; algunas fichas se completaron días después, y lo indican en su encabezado.*

## Cómo agregar una ficha

1. Copiar una ficha existente y darle el número siguiente y un título corto en el nombre del archivo (por ejemplo, `0015-titulo-corto.md`).
2. Completar sus secciones: estado, fecha, quién decide, contexto, opciones consideradas, decisión y consecuencias. Cada tabla lleva su leyenda.
3. Agregarla a la tabla de arriba.
