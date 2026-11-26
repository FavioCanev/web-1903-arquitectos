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

- Retratos de estudio del equipo (`Arq. Jorge Muñoz`, `Arq. Carla Llerena` y `Arq. Loren Bazán`) procesados sin metadatos EXIF en `src/assets/equipo/` y publicados en `/estudio/` y `/en/studio/` (`src/views/EstudioVista.astro`).
- Mejoras de UX sin librerías externas: navegación con flechas, teclado (`←` / `→`), deslizamiento táctil (*swipe*), contador centrado, vista previa instantánea y precarga de fotografías vecinas en el visor ampliado (`CollageProyecto.astro`); botón discreto para copiar el correo en Contacto (`ContactoVista.astro`); contador `1 / 6` en el carrusel «Proyectos en diseño» (`CarruselRenders.astro`); y enlace «Volver arriba ↑» en el pie de página (`Pie.astro`, `Layout.astro`).
- Versión completa en inglés bajo rutas estáticas `/en/` (`projects`, `services`, `courses`, `studio`, `contact`, `privacy`, `accessibility` y páginas individuales de proyecto conservando sus slugs), con selector de idioma `ES / EN` en la barra superior de información (`BarraInfo.astro`, compacto en móvil ≤ 600 px), vistas compartidas (`src/views/`), capa de rutas y traducciones (`src/i18n/`), campos opcionales `encargoEn`, `solucionEn` y `altEn` en los proyectos, mensajes de WhatsApp y correo en el idioma activo de la página (`src/lib/whatsapp.ts`), metadatos `<html lang>`, `og:locale` y `hreflang` (`Layout.astro`), y ficha [ADR 0018](docs/adr/0018-version-en-ingles.md).
- Ficha [ADR 0019](docs/adr/0019-entradas-sin-transparencia-pie-amarillo-y-sin-boton-flotante.md): entradas al hacer scroll sin transparencia, pie amarillo en todo el sitio y sin botón flotante de WhatsApp (reemplaza a la ADR 0017).
- `docs/ESTRUCTURA.md`: qué hay en cada carpeta del proyecto y cuál es el código de la web.
- Fotos reales de seis proyectos (Café San Luis, Tacos Cajamarquinos Jr. Ayacucho, Estación de servicio Labanda, Cafétos, Refugio VV y Estancia del Alba), con texto alternativo y crédito del fotógrafo. Van dentro del repositorio por ahora (a R2 más adelante). El script `docs/mantenimiento/preparar_fotos.py` las reduce a 2400 px, las pasa a sRGB y borra todos sus datos EXIF, XMP y demás, y verifica el resultado.
- Las fotos se optimizan al construir (AVIF y WebP, varios tamaños, carga diferida).
- Proyectos nuevos: Refugio VV, Estación de servicio Labanda y Tacos Cajamarquinos - La Colmena (este, con sus datos y fotos [pendientes]).
- Ícono de la pestaña (favicon) en SVG: logo vertical en blanco sobre un cuadrado vino.
- Fichas de decisión [ADR 0015](docs/adr/0015-liston-como-rollo-a-la-derecha.md) (listón como rollo a la derecha y velo en los textos, que reemplaza a la ADR 0009), [ADR 0016](docs/adr/0016-animaciones-con-css-y-grilla-fija.md) (animaciones con CSS nativo y grilla fija en el Inicio, que reemplaza a la ADR 0012) y [ADR 0017](docs/adr/0017-entradas-al-scroll-y-microinteracciones.md) (entradas suaves de bloques al hacer scroll y micro-interacciones en CSS nativo; reemplaza a la ADR 0016 y después fue reemplazada por la ADR 0019).
- Esqueleto de carga animado (`shimmer` en `--pendiente`) dentro de los marcos de fotos (`Foto.astro` y `CollageProyecto.astro`) mientras descargan las imágenes (`src/styles/base.css` y `src/layouts/Layout.astro`).
- Logotipo del Colegio de Arquitectos del Perú (`public/img/logo-cap.webp`) en la sección «Certificado» de `src/pages/cursos.astro`.
- Soporte de enlaces directos prellenados a Gmail redactar (`enlaceGmail`, `asuntoContacto` y alternativa `enlaceMailto`) en `src/lib/whatsapp.ts`.
- Revisión automática de fotos limpias (`npm run fotos`, integrada en `npm run revisar` y en `.github/workflows/revisiones.yml`) para comprobar que todo archivo de `src/assets/proyectos/` sea `.jpg` de hasta 2400 px y sin metadatos EXIF.
- Carpeta `docs/mantenimiento/` que reúne el script `preparar_fotos.py` (con soporte `.heic`/formatos alternativos y logo vertical adaptativo según contraste), el asistente visual `nuevo-proyecto.html` (con vista previa en vivo de la página de proyecto, selector de foto principal/portada y soporte `.heic` local sin internet) y el manual ilustrado para el estudio (`manual-de-mantenimiento.md` y `.pdf` con capturas y guía de errores).
- Secciones opcionales de fotos `proceso` y `renders` en el esquema de proyectos (`src/content.config.ts`) y soporte en `docs/mantenimiento/preparar_fotos.py`.
- Fotos reales y datos de la hoja para La Chola - Cruz de piedra, Cafetería Rafael y Frutaliss, además de las secciones `renders` de Cafétos, Estancia del Alba, San Luis Café y Tacos Cajamarquinos - Jr. Ayacucho.
- Sincronización con Google Drive y la hoja de cálculo: nuevas fotos terminadas y sección `Proceso` en Hito - complejo de estación de servicio Labanda y Estancia del Alba; ampliación de fotos terminadas en San Luis Café (15 fotos), Tacos Cajamarquinos - Jr. Ayacucho (9 fotos), Cafétos (8 fotos) y La Chola - Cruz de piedra (12 fotos, incluyendo toma limpia sin comensal); actualización de la foto principal de Frutaliss (`20230118_093035.jpg` como portada derecha); área, encargo y solución en Estancia del Alba, Tacos Cajamarquinos - La Colmena y Eco Lounge - Jardín Porongo; sección `Proceso` en Cafétos, Refugio VV y La Chola - La roja; sección `Renders` en Tacos Cajamarquinos - La Colmena; nuevo proyecto Casa Brisa Morín (ampliado a 12 renders desde Drive) y nuevo proyecto Horizonte Bazán - Rooftop en «Proyectos en diseño»; actualización completa de Eco Lounge - Jardín Porongo (9 renders, incluyendo las 2 fachadas reparadas); 3 renders de maqueta volumétrica en Wasi - La Torre (habilitando su propia página); páginas propias para los proyectos en diseño con vistas reales (`Ayni - Bazán`, `La colina - casa Lozada`, `Eco Lounge - Jardín Porongo`, `Casa Brisa Morín`, `Horizonte Bazán - Rooftop` y `Wasi - La Torre`); crédito de fotografía/visualización `1903 Arquitectos` en proyectos tomados por el estudio; y tres preguntas frecuentes aprobadas del PDF en `/servicios/`.
- Metadatos SEO en todas las páginas (`Open Graph`, `Twitter Card`, `canonical` al configurar `site`, `public/robots.txt` y datos estructurados `ArchitectureFirm` JSON-LD en Inicio).
- Componente `CollageProyecto.astro` (con zoom suave al pasar el cursor y visor en grande al hacer clic) para las secciones `Proyecto terminado`, `Proceso` y `Renders` de cada proyecto.
- Mapa estático de ubicación de OpenStreetMap (`src/assets/mapa-estudio.png`) con enlace directo a Google Maps en `src/pages/contacto.astro` y `src/config.ts`, junto con el render del showroom de materiales y oficinas (`src/assets/showroom.jpg`) en `src/pages/estudio.astro`.

### Cambiado

- Listón con el patrón (`src/components/Liston.astro` y `docs/mapa-del-sitio.md`): el rollo ahora termina de desenrollarse por completo antes de alcanzar el pie de página (con un margen mínimo de `32 px`), evitando que se cruce con el footer amarillo.
- Pie de página (`src/components/Pie.astro`, `src/i18n/textos.ts` y `docs/mapa-del-sitio.md`): rediseñado con estructura compacta de 4 columnas (marca + lema, «Explora», «Estudio» con contacto y legales, y bloque «¡Síguenos!» con íconos circulares), manteniendo el fondo amarillo (`--amarillo`), tinta vino (`--vino` / `--vino-2`), la franja del patrón de baldosa de borde a borde y los derechos de autor `© 2026 1903 Arquitectos S.A.C. · Cajamarca, Perú. Todos los derechos reservados.` junto al horario y «Volver arriba ↑».
- Página de Contacto (`src/views/ContactoVista.astro`, `src/assets/mapa-estudio.png` y `docs/mapa-del-sitio.md`): el mapa ilustrado propio del estudio ocupa todo el fondo de la sección principal en una escala cercana a su tamaño original y en un solo pantallazo en escritorio (por encima del listón, con el pin y calles visibles a la derecha, textos de cabecera sobre fondo blanco sólido al 100 %, tarjeta destacada de dirección + «Cómo llegar ↗» abajo a la derecha, el formulario en la tarjeta vino a la izquierda con altura fija entre pasos y botón «← Anterior» fijo arriba a la derecha junto al indicador de paso, y recorte enfocado en el pin en móvil), y se retira la banda vino de datos debajo del mapa al estar ya presentes en el pie de página.
- Títulos de pestaña (`<title>` en `textos.ts`, `proyectos.ts`, `ProyectoDetalleVista.astro`, `404.astro` y `docs/mapa-del-sitio.md`): el Inicio pasa a `1903 Arquitectos` y el resto de páginas (ES, EN, proyectos y `404`) adoptan el formato corto `{Sección o Proyecto} | 1903 Arquitectos`.
- Botones (`.boton--primario` y `.boton--secundario` en `tokens.css` y `base.css`): al pasar el cursor (`:hover`), refuerzan el texto sin variar su ancho (`text-shadow` de 0,45 px) y oscurecen su fondo (`#bf4d00` con letra blanca sobre fondos claros; `--amarillo` con letra vino sobre portada oscura y bloques vino en los primarios; tono más oscuro con letra vino en los secundarios), añadiendo compresión sutil al pulsar (`:active`).
- Etiqueta de las fotografías de renders (`TarjetaProyecto.astro`, `ProyectoDetalleVista.astro`, `EstudioVista.astro`, `base.css`, `textos.ts`): pasa de «Render» a «Propuesta visual» («Visual proposal» en inglés), mostrando automáticamente la forma abreviada «Propuesta» («Proposal») en pantallas de hasta 480 px.
- Proyectos sin fotos principales (`src/lib/proyectos.ts`): `obrasTerminadas()` y `rendersEnDesarrollo()` filtran los proyectos sin imágenes reales en `fotos` para no mostrar tarjetas ni portadas pendientes de cara al público (ocultando temporalmente `La Chola - La roja` y `Tacos Cajamarquinos - La Colmena` hasta contar con fotos reales de obra terminada).
- Hito - complejo de estación de servicio Labanda (`src/content/proyectos/estacion-de-servicio-labanda.json`): retiradas 2 fotos de obra terminada (`06.jpg` y `07.jpg`), quedando 5 fotos principales y 5 de `Proceso`.
- Declaración de accesibilidad (`/accesibilidad/` y `/en/accessibility/`): completada la sección «Limitaciones conocidas» / «Known limitations» tras las pruebas de navegador (`src/i18n/textos.ts`, `src/views/AccesibilidadVista.astro`), junto con mejoras de accesibilidad no visuales: `tabindex="-1"` en `<main>` para «Saltar al contenido» (`Layout.astro`), cierre con `Escape` en el menú móvil (`Nav.astro`), respeto a `prefers-reduced-motion` en portada de proyecto y desplazamiento del carrusel (`ProyectoDetalleVista.astro`, `CarruselRenders.astro`), textos `altEn` en `casa-en-matara.json` y avisos ocultos de nueva pestaña en enlaces externos de `ContactoVista.astro`.
- En la página de cada proyecto, las migas de pan pasan encima del título, a la izquierda, porque el listón tapaba su comienzo a 1440 px (`src/views/ProyectoDetalleVista.astro`).
- Pregunta frecuente «¿Trabajan fuera de Cajamarca?»: suma Chiclayo a las ciudades donde el estudio ya tiene proyectos (Trujillo, Chiclayo, Arequipa y Tumbes), en español y en inglés.
- Pregunta frecuente sobre el tiempo de la etapa de diseño: pasa de «entre 2 y 4 meses» a «desde un mes» (plazo exacto en la cotización), en español y en inglés, para no contradecir «¿Cuánto tiempo toma?» [por aprobar por el estudio].
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
- Pie de página amarillo (`--amarillo`) unificado en todo el sitio (`src/components/Pie.astro`, `src/layouts/Layout.astro`), y retiro del botón flotante de WhatsApp (`BotonWhatsapp.astro`) ([ADR 0019](docs/adr/0019-entradas-sin-transparencia-pie-amarillo-y-sin-boton-flotante.md)).
- Página de Contacto (`src/pages/contacto.astro`): asistente paso a paso con botones (sin listas desplegables) para elegir acción, tipo de proyecto, canal preferido (`WhatsApp`, `Correo` o `Llamada`), idea opcional y datos finales con salida a WhatsApp o Gmail redactar prellenado (más acceso directo).
- Collage de proyecto (`src/components/CollageProyecto.astro`): distribución determinística por semilla de proyecto y sección respetando orientación horizontal/vertical con límites acotados, y 2 columnas para 2–5 fotos (`Proceso`).
- Grilla fija del Inicio (`src/components/GrillaFija.astro` y `src/styles/parallax.css`): excluida `GrillaFija` de la animación de entrada `revelar-bloque` para que sus fotos no se desvanezcan al desplazarse dentro de la sección, retirado el fondo del velo detrás de «Proyectos · Obra terminada», y abierto un espacio vertical en la columna central para que el texto y el botón reposen sobre el fondo blanco entre las fotografías sin mover los márgenes horizontales.
- El material interno del estudio (presentaciones, prototipo, referencias, capturas, datos y documentos) pasa a la carpeta `material/`. No cambia lo que se sube al repositorio.
- Categorías: "Arquitectura comercial" pasa a "Arquitectura", "Vivienda" a "Interiorismo residencial" y "Hotel" desaparece (pasa a "Interiorismo comercial"). "Cocina Labanda" y "Estación de servicio Labanda" son un solo proyecto, y "Otro" sale del tipo de proyecto del formulario. El formulario de contacto y las descripciones de Inicio y Proyectos usan los nombres nuevos.
- Datos de la hoja: nombres nuevos, lugar, m², año, fotógrafo, encargo y solución de los proyectos que ya los tienen; "Dormitorio Amyra" y "Casa con terraza y mesa de tronco" son un solo proyecto, "Refugio VV"; "Cocina Labanda" pasa a "Hito - complejo de estación de servicio Labanda"; "La Chola" es ahora "La Chola - Cruz de piedra".
- Servicios tomados de la hoja, con "Construcción de obra, de inicio a fin" como servicio aparte. Preguntas frecuentes: las 14 aprobadas de la hoja (`Preguntas frecuentes` y `Preguntas (del PDF)`).
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

- `@keyframes revelar-bloque` en `src/styles/parallax.css` anima únicamente `translateY` (sin `opacity: 0`) para conservar contraste WCAG 2.2 AA desde la carga inicial y pasar `pa11y-ci` en todas las páginas.
- Menú móvil y pie de página sin salto de diseño ni avisos de HTML5/accesibilidad (`Nav.astro`, `Pie.astro`, `BarraInfo.astro`, `estudio.astro` y `<meta>` en `pages.yml`): marcado síncrono de `data-js`, dimensiones explícitas en los logos, `<span>` para la hora dinámica, `role="group"` en redes sociales y texto alternativo conciso en el showroom.
- En `src/styles/parallax.css`, las animaciones ligadas al scroll usan propiedades largas (en lugar del shorthand `animation:`) para evitar que LightningCSS genere sintaxis inválida al construir para producción, y se suma el efecto parallax a la foto de portada del Inicio (`src/pages/index.astro`).
- En la página de proyecto, la descripción para buscadores toma la primera oración del encargo cuando existe, y la foto principal respeta su punto de enfoque y desactiva el fondo fijo en celulares y Safari de iOS. En el Inicio, el titular de la portada solo pasa a blanco cuando hay foto.
- Se quitan los avisos pendientes ya aprobados en `/privacidad/` y `/cursos/`.

### Eliminado

- Los pies de foto de la galería de cada proyecto (en el esquema, la plantilla y los archivos de datos); cada foto conserva su texto alternativo y el crédito del fotógrafo.

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
