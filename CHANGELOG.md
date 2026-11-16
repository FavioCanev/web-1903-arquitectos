# Registro de cambios

Aquí se anotan los cambios de cada versión de la web. El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y las versiones siguen el [versionado semántico](https://semver.org/lang/es/): 0.x mientras se construye y 1.0.0 el día de la publicación.

Cada versión agrupa sus cambios así:

- **Agregado:** lo nuevo.
- **Cambiado:** lo que ahora funciona distinto.
- **Corregido:** errores arreglados.
- **Eliminado:** lo que se quitó.
- **Seguridad:** arreglos o protecciones de seguridad.

La sección "Sin publicar" reúne lo que ya está en `main` pero todavía no tiene número de versión.

## [Sin publicar]

### Agregado

- Fotos reales de seis proyectos (Café San Luis, Tacos Cajamarquinos Jr. Ayacucho, Estación de servicio Labanda, Cafétos, Refugio VV y Estancia del Alba), con texto alternativo y crédito del fotógrafo. Van dentro del repositorio por ahora (a R2 más adelante). El script `scripts/preparar_fotos.py` las reduce a 2400 px, las pasa a sRGB y borra todos sus datos EXIF, XMP y demás, y verifica el resultado.
- Las fotos se optimizan al construir (AVIF y WebP, varios tamaños, carga diferida).
- Proyectos nuevos: Refugio VV, Estación de servicio Labanda y Tacos Cajamarquinos - La Colmena (este, con sus datos y fotos [pendientes]).
- Ícono de la pestaña (favicon) en SVG: logo vertical en blanco sobre un cuadrado vino.

### Cambiado

- Categorías: "Arquitectura comercial" pasa a "Arquitectura", "Vivienda" a "Interiorismo residencial" y "Hotel" desaparece (pasa a "Interiorismo comercial"). "Cocina Labanda" y "Estación de servicio Labanda" son un solo proyecto, y "Otro" sale del tipo de proyecto del formulario. El formulario de contacto y las descripciones de Inicio y Proyectos usan los nombres nuevos.
- Datos de la hoja: nombres nuevos, lugar, m², año, fotógrafo, encargo y solución de los proyectos que ya los tienen; "Dormitorio Amyra" y "Casa con terraza y mesa de tronco" son un solo proyecto, "Refugio VV"; "Cocina Labanda" pasa a "Hito - complejo de estación de servicio Labanda"; "La Chola" es ahora "La Chola - Cruz de piedra".
- Servicios tomados de la hoja, con "Construcción de obra, de inicio a fin" como servicio aparte. Preguntas frecuentes: solo las 4 principales de la hoja ("¿Trabajan fuera de Cajamarca?" queda con "[Respuesta pendiente]"); las secundarias se ponen en otro lugar.
- Se agrega "La Chola - La roja" y se completan los datos de Tacos La Colmena y de los renders que el estudio ya confirmó.
- Una foto con archivo ya puede tener el pie [pendiente]; el texto alternativo sigue siendo obligatorio.
- Las fotos llenan todo su recuadro: se recortan lo justo por los bordes (hacia el punto de enfoque de cada foto, que se puede ajustar) y nunca se estiran ni se salen. La portada del Inicio muestra la foto principal del proyecto destacado, y la de cada proyecto, su primera foto.
- El inicio muestra "Obra terminada" como una grilla fija animada con el scroll, solo con fotos (prueba).
- El pie de página ya no repite los enlaces de la barra de navegación.
- El listón pasa al lado derecho, al 80 % del ancho, para descargar el lado izquierdo, donde está el texto (prueba).
- El listón se desenrolla de un rollo que gira y se gasta justo al final de la página; la última baldosa no lleva las dos piezas de abajo (prueba).
- La portada queda quieta mientras el listón baja hasta unas tres cuartas partes de la pantalla (prueba).
- Cada texto vuelve a llevar un rectángulo del color de su fondo, con las esquinas apenas redondeadas, que cubre el texto de inicio a fin y atenúa el listón detrás (prueba).
- La portada del Inicio ya no lleva el enlace de texto "Ver el proyecto: …": la foto principal es el enlace a la página del proyecto destacado. Como prueba para el estudio, el destacado es Estación de servicio Labanda (Hito), con su segunda foto (el pasillo de ladrillo); un proyecto puede indicar qué foto usa la portada con `portada`.
- El titular de la portada del Inicio va en blanco (el tono claro de la paleta) y la foto lleva encima un velo plano negro al 40 %, sin degradado, para que el titular tenga contraste (3:1 o más en el 99,96 % o más de los píxeles detrás del texto). El titular se excluye de la revisión automática de contraste, que no ve la foto.
- En la sección "Obra terminada" animada, la etiqueta "Proyectos" va centrada sobre el título.
- Todos los botones llevan fondo sólido al 100 % y sin borde. El titular de la portada va sin rectángulo, y el rectángulo del texto mide lo que mide el texto, no el ancho de su bloque (solo en los elementos que contienen únicamente texto; el formulario de contacto y los retratos del equipo conservan su tamaño).
- En la galería de cada proyecto, cada foto va a un bloque de su misma orientación: las horizontales al bloque ancho (3:2) y las verticales a bloques de 2:3 en filas de 7+5 y de 4+4+4, con el orden que dio el estudio. Así casi no se recorta nada (la foto se ve entera). Cada foto tiene además un punto de enfoque propio.
- Fotos de los renders de Galería Bazán (Ayni - Bazán), Casa de playa (La colina - casa Lozada) y Jardín Porongo (Eco Lounge), tomadas de la carpeta "Fotos proyectos" del Drive.

## [0.3.0] — 09/11/2026

### Agregado

- Proyecto Astro 7 con TypeScript estricto, en varias páginas: Inicio, Proyectos (con filtros), una página por obra, Servicios, Cursos, Estudio, Contacto, Aviso de privacidad, Declaración de accesibilidad y la página 404. Los wireframes se reemplazan por esta versión, con recuadros "Pendiente" en lugar de fotos.
- Sistema de diseño con todas las variables (colores, espaciado, tipografía y tiempos de animación) en `src/styles/tokens.css`.
- Datos del estudio en un solo lugar (`src/config.ts`).
- Plantilla común: barra superior con la hora de Cajamarca en vivo, navegación con menú en celular, pie con el patrón de borde a borde, botón flotante de WhatsApp, listón animado que se mantiene entre páginas y enlace "Saltar al contenido".
- Proyectos como archivos de datos con esquema validado: la construcción falla si falta un dato obligatorio, o si una foto con archivo tiene su texto alternativo o su pie todavía [pendiente].
- Formulario de contacto que abre WhatsApp con el mensaje escrito, con casilla de consentimiento obligatoria y botón de respaldo sin JavaScript.
- Revisiones automáticas en cada *pull request*: tipos, prueba del mensaje de WhatsApp, construcción, enlaces internos y accesibilidad (pa11y-ci, WCAG 2.2 AA).
- Nivel 3 de la arquitectura (componentes de Astro) en `docs/arquitectura.md`.

### Cambiado

- La fuente Jost pasa de TTF a WOFF2, con `@fontsource/jost` (pesos 400 y 500).
- Los números de "Cómo trabajamos" pasan de naranja a vino, porque el naranja sobre fondo claro no llegaba al contraste mínimo de WCAG 2.2 AA.
- El anillo de foco del teclado pasa de naranja a vino, por la misma razón.
- El README explica cómo arrancar el proyecto con `npm`.

### Eliminado

- La carpeta `web/` con los wireframes en HTML y CSS (queda en el historial y en la etiqueta `v0.1.0`).

## [0.2.0] — 06/11/2026

### Agregado

- 14 decisiones de arquitectura (ADR) en `docs/adr/`, con su índice.
- Mapa del sitio con las secciones, las prioridades y los criterios de aceptación de cada página (`docs/mapa-del-sitio.md`).
- Arquitectura de la web con diagramas C4 de nivel 1 y 2, metas de calidad y riesgos (`docs/arquitectura.md`).
- `README.md` con el estado del proyecto, cómo arrancarlo, la forma de trabajo y la documentación.
- `LICENSE`: el código es de 1903 ARQUITECTOS S.A.C., con todos los derechos reservados.
- Este registro de cambios.

### Corregido

- El número de WhatsApp de la web pasa al 924 285 500; el anterior dejó de funcionar.

### Seguridad

- Detección de secretos con bloqueo al subir, Dependabot y análisis del código con CodeQL, activados en el repositorio.

## [0.1.0] — 05/11/2026

### Agregado

- Wireframes v2 en HTML y CSS: la página de inicio y una página de proyecto de ejemplo, en escritorio y en celular.
- Logos del estudio y patrón de baldosa, vectorizados en SVG.
- Fuente Jost alojada en la web, con su licencia.
- PDF de los wireframes v2.
- `.gitignore` como lista blanca, para que no se suba información interna del estudio.

[Sin publicar]: https://github.com/FavioCanev/web-1903-arquitectos/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/FavioCanev/web-1903-arquitectos/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/FavioCanev/web-1903-arquitectos/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/FavioCanev/web-1903-arquitectos/releases/tag/v0.1.0
