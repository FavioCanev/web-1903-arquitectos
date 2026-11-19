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

- `docs/ESTRUCTURA.md`: qué hay en cada carpeta del proyecto y cuál es el código de la web.
- Fotos reales de seis proyectos (Café San Luis, Tacos Cajamarquinos Jr. Ayacucho, Estación de servicio Labanda, Cafétos, Refugio VV y Estancia del Alba), con texto alternativo y crédito del fotógrafo. Van dentro del repositorio por ahora (a R2 más adelante). El script `scripts/preparar_fotos.py` las reduce a 2400 px, las pasa a sRGB y borra todos sus datos EXIF, XMP y demás, y verifica el resultado.
- Las fotos se optimizan al construir (AVIF y WebP, varios tamaños, carga diferida).
- Proyectos nuevos: Refugio VV, Estación de servicio Labanda y Tacos Cajamarquinos - La Colmena (este, con sus datos y fotos [pendientes]).
- Ícono de la pestaña (favicon) en SVG: logo vertical en blanco sobre un cuadrado vino.
- Fichas de decisión [ADR 0015](docs/adr/0015-liston-como-rollo-a-la-derecha.md) (listón como rollo a la derecha y velo en los textos, que reemplaza a la ADR 0009), [ADR 0016](docs/adr/0016-animaciones-con-css-y-grilla-fija.md) (animaciones con CSS nativo y grilla fija en el Inicio, que reemplaza a la ADR 0012) y [ADR 0017](docs/adr/0017-entradas-al-scroll-y-microinteracciones.md) (entradas suaves de bloques al hacer scroll y micro-interacciones en CSS nativo; reemplaza a la ADR 0016).
- Esqueleto de carga animado (`shimmer` en `--pendiente`) dentro de los marcos de fotos (`Foto.astro` y `CollageProyecto.astro`) mientras descargan las imágenes (`src/styles/base.css` y `src/layouts/Layout.astro`).
- Logotipo del Colegio de Arquitectos del Perú (`public/img/logo-cap.webp`) en la sección «Certificado» de `src/pages/cursos.astro`.
- Soporte de enlaces directos prellenados a Gmail redactar (`enlaceGmail`, `asuntoContacto` y alternativa `enlaceMailto`) en `src/lib/whatsapp.ts`.
- Revisión automática de fotos limpias (`npm run fotos`, integrada en `npm run revisar` y en `.github/workflows/revisiones.yml`) para comprobar que todo archivo de `src/assets/proyectos/` sea `.jpg` de hasta 2400 px y sin metadatos EXIF.
- Carpeta `docs/mantenimiento/` que reúne el script `preparar_fotos.py` (con soporte `.heic`/formatos alternativos y logo vertical adaptativo según contraste), el asistente visual `nuevo-proyecto.html` (con vista previa en vivo de la página de proyecto, selector de foto principal/portada y soporte `.heic` local sin internet) y el manual ilustrado para el estudio (`manual-de-mantenimiento.md` y `.pdf` con capturas y guía de errores).
- Secciones opcionales de fotos `proceso` y `renders` en el esquema de proyectos (`src/content.config.ts`) y soporte en `docs/mantenimiento/preparar_fotos.py`.
- Fotos reales y datos completos de la hoja para La Chola - Cruz de piedra, Cafetería Rafael y Frutaliss, además de las secciones `renders` de Cafétos, Estancia del Alba, San Luis Café y Tacos Cajamarquinos - Jr. Ayacucho.
- Sincronización con Google Drive y la hoja de cálculo: nuevas fotos terminadas y sección `Proceso` en Hito - complejo de estación de servicio Labanda y Estancia del Alba; área, encargo y solución en Estancia del Alba, Tacos Cajamarquinos - La Colmena y Eco Lounge - Jardín Porongo; sección `Proceso` en Cafétos, Refugio VV y La Chola - La roja; sección `Renders` en Tacos Cajamarquinos - La Colmena; nuevo proyecto Casa Brisa Morín (ampliado a 12 renders desde Drive) y nuevo proyecto Horizonte Bazán - Rooftop en «Proyectos en diseño»; actualización completa de Eco Lounge - Jardín Porongo (9 renders, incluyendo las 2 fachadas reparadas); páginas propias para los proyectos en diseño con vistas reales (`Ayni - Bazán`, `La colina - casa Lozada`, `Eco Lounge - Jardín Porongo`, `Casa Brisa Morín` y `Horizonte Bazán - Rooftop`); crédito de fotografía/visualización `1903 Arquitectos` en proyectos tomados por el estudio; y tres preguntas frecuentes aprobadas del PDF en `/servicios/`.
- Metadatos SEO en todas las páginas (`Open Graph`, `Twitter Card`, `canonical` al configurar `site`, `public/robots.txt` y datos estructurados `ArchitectureFirm` JSON-LD en Inicio).
- Componente `CollageProyecto.astro` (con zoom suave al pasar el cursor y visor en grande al hacer clic) y proyecto de prueba (`src/content/proyectos/proyecto-de-prueba.json`) con las tres secciones de collage y los textos al final.
- Mapa estático de ubicación de OpenStreetMap (`src/assets/mapa-estudio.png`) con enlace directo a Google Maps en `src/pages/contacto.astro` y `src/config.ts`, junto con el render del showroom de materiales y oficinas (`src/assets/showroom.jpg`) en `src/pages/estudio.astro`.

### Cambiado

- Sección «Obra terminada» del Inicio (`src/components/GrillaFija.astro`): en móvil y tablet pasa a mostrarse en una grilla de 2 columnas escalonadas (con 1 foto por proyecto) para reducir el recorrido vertical.
- Auditoría y mejoras de estructura UI/UX (Fases 1 y 2):
  - Grilla modular de 12 columnas (`--columnas`, `--canal`, `.grilla-12`) y escala tipográfica de 6 pasos (`--t-xs` a `--t-2xl`) en `src/styles/tokens.css` y `src/styles/base.css`, con la clase compartida `.pildora` y tokens para colores que estaban sueltos.
  - Corte intermedio de tablet (2 columnas entre 601 px y 900 px) en `MosaicoProyectos.astro`, `GrillaFija.astro`, `servicios.astro` (pasos), `cursos.astro` y `estudio.astro`.
  - Filtro de categorías en `MosaicoProyectos.astro` con `:nth-child(... of :not([hidden]))` para conservar el escalonado al filtrar.
  - Recorrido de `GrillaFija.astro` ajustado de `420vh` a `280vh`.
  - Formulario de `contacto.astro` con campos obligatorios marcados, errores ligados por campo (`aria-invalid`, `aria-describedby`), foco al primer error y encabezados `h2` para lectores de pantalla.
  - Jerarquía de títulos (`h2` en `/proyectos/`) y nombre accesible (`aria-label`) en `TarjetaProyecto.astro` cuando `soloFoto` está activo; eliminado `tabindex="-1"` de `<main>` en `Layout.astro` y agregado `loading="lazy"` al logo de `Pie.astro`.
  - Ficha de proyecto (`src/pages/proyectos/[id].astro`) y `CollageProyecto.astro` unificados a la escala tipográfica (`--t-xl`) y a la grilla de 12 columnas (`4 + 8` y ancho completo del contenedor).
- Auditoría UI/UX (Fase 3):
  - `CarruselRenders.astro`: carril de borde a borde (*full-bleed*) y botones Anterior/Siguiente accesibles de 44 × 44 px.
  - `TarjetaProyecto.astro`: tipo apilado debajo del nombre del proyecto.
  - `Pie.astro`: columna de mapa del sitio en 12 columnas y altura mínima de 24 px en enlaces sueltos (WCAG 2.5.8).
  - `src/pages/proyectos/[id].astro`: enlaces anterior/siguiente en una columna por debajo de 600 px.
  - `src/pages/cursos.astro`: estado "Inscripción próximamente" con estilo de etiqueta `.pildora` en lugar de botón falso.
- Página de cada proyecto (`src/pages/proyectos/[id].astro`) rediseñada siguiendo la referencia de `Casa Mulix` (Arkham Projects): foto principal con título y migas de pan encima, seguida de la ficha e información en dos columnas (`Sobre el proyecto`, `Datos del proyecto`, `El encargo` y `La solución`) y debajo los collages cuadrados al 80 % del ancho por sección (`Proyecto terminado`, y opcionalmente `Proceso` y `Renders`) sin desplazamiento parallax.
- Pie de página (`src/components/Pie.astro`): Instagram y Facebook pasan de enlaces de texto en la columna superior al centro de la franja inferior como íconos vectoriales circulares.
- Micro-interacciones al pasar el cursor y enfocar en «Proyecto anterior» y «Proyecto siguiente» (`src/pages/proyectos/[id].astro`), zoom suave en las fotos de tarjetas (`src/components/TarjetaProyecto.astro`), transiciones suaves de borde/subrayado en botones secundarios y enlaces (`src/styles/base.css`), y entradas suaves de bloques al hacer scroll en CSS nativo (`src/styles/parallax.css`).
- Página de error `404` (`src/pages/404.astro`) renovada con lámina de retícula arquitectónica, cotas, `404` tipográfico, logo vertical y franja de baldosa del estudio.
- Barra de navegación (`src/config.ts`, `src/components/Nav.astro`): eliminado el enlace duplicado a `/contacto/`, el botón naranja pasa a llamarse «Contacto», y en móvil se usa un ícono hamburguesa SVG de tres barras.
- Pie de página amarillo (`--amarillo`) unificado en todo el sitio (`src/components/Pie.astro`, `src/layouts/Layout.astro`), y retiro del botón flotante de WhatsApp (`BotonWhatsapp.astro`).
- Página de Contacto (`src/pages/contacto.astro`): asistente paso a paso con botones (sin listas desplegables) para elegir acción, tipo de proyecto, canal preferido (`WhatsApp`, `Correo` o `Llamada`), idea opcional y datos finales con salida a WhatsApp o Gmail redactar prellenado (más acceso directo).
- Collage de proyecto (`src/components/CollageProyecto.astro`): distribución determinística por semilla de proyecto y sección respetando orientación horizontal/vertical con límites acotados, 2 columnas para 2–5 fotos (`Proceso`) y proyecto de prueba ajustado a 11 terminado / 5 proceso / 10 renders.
- Grilla fija del Inicio (`src/components/GrillaFija.astro` y `src/styles/parallax.css`): excluida `GrillaFija` de la animación de entrada `revelar-bloque` para que sus fotos no se desvanezcan al desplazarse dentro de la sección, retirado el fondo del velo detrás de «Proyectos · Obra terminada», y abierto un espacio vertical en la columna central para que el texto y el botón reposen sobre el fondo blanco entre las fotografías sin mover los márgenes horizontales.
- El material interno del estudio (presentaciones, prototipo, referencias, capturas, datos y documentos) pasa a la carpeta `material/`. No cambia lo que se sube al repositorio.
- Categorías: "Arquitectura comercial" pasa a "Arquitectura", "Vivienda" a "Interiorismo residencial" y "Hotel" desaparece (pasa a "Interiorismo comercial"). "Cocina Labanda" y "Estación de servicio Labanda" son un solo proyecto, y "Otro" sale del tipo de proyecto del formulario. El formulario de contacto y las descripciones de Inicio y Proyectos usan los nombres nuevos.
- Datos de la hoja: nombres nuevos, lugar, m², año, fotógrafo, encargo y solución de los proyectos que ya los tienen; "Dormitorio Amyra" y "Casa con terraza y mesa de tronco" son un solo proyecto, "Refugio VV"; "Cocina Labanda" pasa a "Hito - complejo de estación de servicio Labanda"; "La Chola" es ahora "La Chola - Cruz de piedra".
- Servicios tomados de la hoja, con "Construcción de obra, de inicio a fin" como servicio aparte. Preguntas frecuentes: solo las 4 principales de la hoja ("¿Trabajan fuera de Cajamarca?" queda con "[Respuesta pendiente]"); las secundarias se ponen en otro lugar.
- Se agrega "La Chola - La roja" y se completan los datos de Tacos La Colmena y de los renders que el estudio ya confirmó.
- Las fotos llenan todo su recuadro: se recortan lo justo por los bordes (hacia el punto de enfoque de cada foto, que se puede ajustar) y nunca se estiran ni se salen. La portada del Inicio muestra la foto principal del proyecto destacado, y la de cada proyecto, su primera foto.
- El inicio muestra "Obra terminada" como una grilla fija animada con el scroll, solo con fotos.
- El pie de página ya no repite los enlaces de la barra de navegación.
- El listón pasa al lado derecho, al 80 % del ancho, para descargar el lado izquierdo, donde está el texto.
- El listón se desenrolla de un rollo que gira y se gasta justo al final de la página; la última baldosa no lleva las dos piezas de abajo.
- La portada queda quieta mientras el listón baja hasta unas tres cuartas partes de la pantalla.
- Cada texto lleva un rectángulo del color de su fondo, con las esquinas apenas redondeadas, que cubre el texto de inicio a fin y atenúa el listón detrás.
- La portada del Inicio ya no lleva el enlace de texto "Ver el proyecto: …": la foto principal es el enlace a la página del proyecto destacado. El proyecto destacado es Hito - complejo de estación de servicio Labanda, con su segunda foto (el pasillo de ladrillo); un proyecto puede indicar qué foto usa la portada con `portada`.
- El titular de la portada del Inicio va en blanco (el tono claro de la paleta) cuando hay foto, y la foto lleva encima un velo plano negro al 40 %, sin degradado, para que el titular tenga contraste (3:1 o más en el 99,96 % o más de los píxeles detrás del texto). El titular se excluye de la revisión automática de contraste, que no ve la foto.
- En la sección "Obra terminada" animada, la etiqueta "Proyectos" va centrada sobre el título.
- Todos los botones llevan fondo sólido al 100 % y sin borde. El titular de la portada va sin rectángulo, y el rectángulo del texto mide lo que mide el texto, no el ancho de su bloque (solo en los elementos que contienen únicamente texto; el formulario de contacto y los retratos del equipo conservan su tamaño).
- En la galería de cada proyecto, cada foto va a un bloque de su misma orientación: las horizontales al bloque ancho (3:2) y las verticales a bloques de 2:3 en filas de 7+5 y de 4+4+4, con el orden que dio el estudio. Así casi no se recorta nada (la foto se ve entera). Cada foto tiene además un punto de enfoque propio.
- Fotos de los renders de Galería Bazán (Ayni - Bazán), Casa de playa (La colina - casa Lozada) y Jardín Porongo (Eco Lounge), tomadas de la carpeta "Fotos proyectos" del Drive.

### Corregido

- En la página de proyecto, la descripción para buscadores toma la primera oración del encargo cuando existe, y la foto principal respeta su punto de enfoque y desactiva el fondo fijo en celulares y Safari de iOS. En el Inicio, el titular de la portada solo pasa a blanco cuando hay foto.
- Se quitan los avisos pendientes ya aprobados en `/privacidad/` y `/cursos/`.

### Eliminado

- Los pies de foto de la galería de cada proyecto (en el esquema, la plantilla y los archivos de datos); cada foto conserva su texto alternativo y el crédito del fotógrafo.
- El archivo de datos `proyecto-de-prueba.json`, reemplazado por las secciones `Proceso` y `Renders` en los proyectos reales.

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
