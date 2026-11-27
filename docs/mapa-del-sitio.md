# Mapa del sitio

Este documento describe **cada página de la web**: para quién es, qué debe lograr, sus secciones y los criterios con los que se da por terminada. Es el mapa vigente; el de la [ADR 0002](adr/0002-varias-paginas.md) es la foto del día en que se decidió tener varias páginas.

Lo que está entre [corchetes] es un dato o un texto pendiente: no se inventa, se completa cuando el estudio lo entregue o lo apruebe.

## Cómo leer este documento

**Prioridad (MoSCoW).** Cada sección lleva una prioridad pensada para la publicación:

| Prioridad | Significado |
|---|---|
| Must | Tiene que estar el día de la publicación |
| Should | Debería estar; si se atrasa, se publica sin ella y se agrega después |
| Could | Podría estar si hay tiempo |
| Won't | Esta vez no; queda para una versión posterior |

*Leyenda: "Prioridad" es el grupo del método MoSCoW, que toma su nombre de las iniciales en inglés de los cuatro grupos (Must, Should, Could, Won't). "Significado" explica qué implica para la publicación.*

**Criterios de aceptación.** Son afirmaciones que se comprueban con un sí o un no. Una página está terminada cuando se cumplen todos sus criterios. Cada uno lleva una marca:

- **[auto]:** lo comprueba una prueba automática en cada cambio.
- **[manual]:** lo comprueba una persona antes de publicar.

**SEO y vista previa al compartir.** Cada página incluye `<title>`, `<meta name="description">`, etiquetas Open Graph (`og:*`) y Twitter Card con imagen en `1200 px`, `public/robots.txt`, enlace `canonical` automático al configurar `site` en `astro.config.mjs`, y datos estructurados `ArchitectureFirm` (JSON-LD) en el Inicio.

---

## Elementos comunes a todas las páginas

| Elemento | Contenido | Prioridad |
|---|---|---|
| Enlace "Saltar al contenido" | Primer elemento de la página; solo se ve al navegar con el teclado | Must |
| Barra superior | "Cajamarca, Perú" / "Cajamarca, Peru", la hora de Cajamarca en vivo y el selector de idioma `ES / EN` | Must (la hora en vivo: Should) |
| Barra de navegación | Logo horizontal (lleva al Inicio; cambia automáticamente según temporada: Carnavales del 8 feb al 7 mar, Fiestas Patrias del 15 al 31 jul, Halloween del 1 al 31 oct y Navidad del 1 al 31 dic) · Proyectos · Servicios · Cursos · Estudio · botón único "Contacto" (lleva a Contacto). En celular, botón hamburguesa con ícono de tres líneas que despliega el menú | Must |
| Listón con el patrón | Baja por el lado derecho, al 80 % del ancho, desenrollándose de un rollo cilíndrico a medida que se avanza en la página y terminando de desenrollarse antes de llegar al pie de página (ver la [ADR 0015](adr/0015-liston-como-rollo-a-la-derecha.md)); oculto en pantallas de hasta 600 px | Should |
| Pie de página | Sobre fondo amarillo oficial (`--amarillo`) en cuatro columnas compactas: (1) logo horizontal (con el mismo cambio automático por temporada) y lema del estudio, (2) mapa del sitio («Explora»: Proyectos, Servicios, Cursos, Estudio y Contacto), (3) datos de contacto (`1903arq@gmail.com`, WhatsApp `924 285 500` y `Jr. Amancaes 262, Cajamarca`) separados de los enlaces legales (`Aviso de privacidad` y `Declaración de accesibilidad`), y (4) bloque «Redes sociales / ¡Síguenos!» con íconos circulares de Instagram y Facebook · debajo, franja de baldosa de borde a borde (`40 px` con `16 px` de separación) · franja inferior con `© 2026 1903 Arquitectos S.A.C. · Cajamarca, Perú. Todos los derechos reservados.`, horario de atención (lunes a viernes de 8:30 a 13:00 y de 15:00 a 19:00; sábados de 8:30 a 13:00) y el enlace «Volver arriba ↑» | Must |

*Leyenda: "Elemento" es la parte que se repite en todas las páginas. "Contenido" es lo que lleva. "Prioridad" es su grupo MoSCoW (ver arriba). El RUC no va en el pie: está en el aviso de privacidad, donde la Ley 29733 pide identificar al responsable de los datos.*

**Criterios de aceptación comunes**

- [auto] Cada página tiene título, descripción y metadatos Open Graph propios, y el idioma declarado (`lang="es"` o `lang="en"`).
- [auto] Ninguna página tiene enlaces rotos.
- [auto] Ninguna página tiene errores de accesibilidad en la revisión automática (ver la ADR 0013).
- [manual] Al presionar Tab por primera vez aparece el enlace "Saltar al contenido" (o "Skip to content"), y al usarlo el foco salta al contenido principal.
- [manual] Todos los enlaces y botones se pueden usar con el teclado, con el foco visible.
- [manual] La hora de la barra superior es la de Cajamarca y se actualiza sola, también después de cambiar de página.
- [manual] El selector `ES / EN` de la barra superior lleva a la página equivalente exacta en el otro idioma, cabe en una sola fila en móvil (390 px) y mantiene los mensajes de WhatsApp y correo en el idioma activo.
- [manual] El WhatsApp del pie abre WhatsApp con el número 924 285 500.
- [manual] En una pantalla de 390 px de ancho no aparece barra de desplazamiento horizontal.
- [manual] Con "reducir movimiento" activado, nada se desplaza ni se anima, salvo fundidos simples.

---

## Inicio — `/`

**Para quién y qué debe lograr:** para quien llega por primera vez. Que vea de inmediato la calidad de la obra del estudio y quiera ver más o escribir.

**Título:** 1903 Arquitectos
**Descripción:** Estudio de arquitectura e interiorismo en Cajamarca. Diseñamos y construimos cafés, restaurantes, locales comerciales y viviendas con identidad cajamarquina.

| Sección | Contenido | Prioridad |
|---|---|---|
| Proyecto destacado | Foto de Hito - complejo de estación de servicio Labanda (su segunda foto, el pasillo de ladrillo) a pantalla completa, con enlace a la página del proyecto, velo oscuro al 40 %, el lema "Celebramos la cultura mediante el diseño." en blanco y los botones "Ver proyectos" y "Escríbenos por WhatsApp" | Must |
| Obra terminada (grilla fija animada) | Obras terminadas marcadas para el inicio que cuentan con fotos reales (1.ª y 2.ª foto intercaladas), solo fotos, en 3 columnas. La sección es muy alta y su escenario queda fijo una pantalla: al bajar, las columnas suben y bajan a distinta velocidad, la grilla hace un leve zoom y las de los lados se abren, y al final aparece el botón "Ver todos los proyectos". El título "Obra terminada" queda al centro, sobre la grilla. Cada foto lleva a la página de su proyecto (su nombre solo lo leen los lectores de pantalla). En navegadores sin animaciones ligadas al scroll, con "reducir movimiento" y en pantallas de menos de 900 px es una grilla normal y quieta, con el título arriba y el botón abajo | Must |
| Proyectos en diseño | Carrusel de renders, con la etiqueta "Render" en cada uno; solo se muestran los que ya tienen vistas reales y cada uno enlaza a su propia página | Must |

*Leyenda: "Sección" es el bloque de la página, de arriba abajo. "Contenido" es lo que lleva. "Prioridad" es su grupo MoSCoW. "Render" es una imagen hecha por computadora de un proyecto que todavía no se construye.*

**Criterios de aceptación**

- [auto] La grilla muestra las obras marcadas para el inicio con fotos reales en los datos, y cada una enlaza a su página de proyecto.
- [auto] Los renders nunca aparecen mezclados dentro de la grilla de obras terminadas.
- [manual] La foto del proyecto destacado se ve completa en escritorio y en celular, y el texto se lee sobre ella.
- [manual] Las fotos de la grilla que están más abajo se cargan recién al acercarse a ellas.
- [manual] La animación avanza solo con el scroll y se ve fluida; el título queda por encima de la grilla y el botón aparece al final.
- [manual] Con el teclado, la tarjeta enfocada se ve; con "reducir movimiento" o en celular la grilla es normal y quieta.
- [manual] El carrusel se puede deslizar con el dedo, con el mouse y con el teclado.

---

## Proyectos — `/proyectos/`

**Para quién y qué debe lograr:** para quien busca un tipo de obra en particular (por ejemplo, un café). Que encuentre proyectos parecidos al suyo y vea sus datos.

**Título:** Proyectos | 1903 Arquitectos
**Descripción:** Obras terminadas del estudio: cafés, restaurantes, locales comerciales y viviendas en Cajamarca y el norte del Perú.

| Sección | Contenido | Prioridad |
|---|---|---|
| Obra terminada | Todas las obras terminadas que ya cuentan con fotos de obra terminada, con foto, nombre y ficha corta (lugar · m² · año) | Must |
| Filtros | "Todos" y las categorías que el estudio asigne en la hoja. Un proyecto puede tener más de una categoría. Las categorías de la hoja son "Arquitectura", "Interiorismo comercial" e "Interiorismo residencial" | Should |
| En desarrollo | Carrusel con los proyectos en diseño (renders) que ya tienen vistas reales, separados de la obra terminada, con la etiqueta "Render" y enlace a su página propia | Must |

*Leyenda: "Sección" es el bloque de la página, de arriba abajo. "Contenido" es lo que lleva. "Prioridad" es su grupo MoSCoW. "m²" son los metros cuadrados del proyecto.*

**Criterios de aceptación**

- [auto] Aparecen todas las obras terminadas y renders que tienen al menos una foto principal real de su sección (`fotos` con imagen), cada uno enlazado a su página; los que aún no tienen fotos de su sección quedan ocultos hasta recibirlas.
- [auto] Un proyecto con dos categorías aparece al elegir cualquiera de ellas.
- [manual] Al elegir un filtro se muestran solo los proyectos de esa categoría, y "Todos" los vuelve a mostrar todos.
- [manual] Los filtros se pueden usar con el teclado, y el filtro elegido se distingue de los demás sin depender solo del color.
- [manual] Un dato pendiente se muestra como [corchetes], nunca como un dato inventado.

---

## Proyecto (una página por obra o render con vistas) — `/proyectos/nombre-del-proyecto/`

**Para quién y qué debe lograr:** para quien quiere conocer un proyecto a fondo. Que entienda qué pidió el cliente, qué hizo el estudio y vea el resultado.

**Título:** {Nombre} | 1903 Arquitectos (por ejemplo, "Cafétos | 1903 Arquitectos")
**Descripción:** la primera oración del encargo de cada proyecto (recortada limpiamente a ~158 caracteres si supera ese largo), o un resumen con nombre, tipo y ciudad si aún falta el encargo.

| Sección | Contenido | Prioridad |
|---|---|---|
| Foto principal | A pantalla completa, fija "como ventana" en escritorio, con el título del proyecto (y la píldora `Render` en proyectos en diseño) a la izquierda y las migas de pan (`Inicio — Proyectos — {Nombre}`) a la derecha sobre un velo oscuro | Must (el efecto de ventana: Should) |
| Información del proyecto | Antes de las fotos, en dos columnas: resumen (`Sobre el proyecto`), tabla `Datos del proyecto` (tipo, ubicación, año, área, estado y crédito `Fotografía` o `Visualización`, con `1903 Arquitectos` cuando las tomas son del estudio), `El encargo` y `La solución` | Must |
| Collages de fotos | Al 80 %–100 % del contenedor en bloque cuadrado cerrado sin desfase (`Proyecto terminado` en obras o `Renders` en proyectos en diseño, más `Proceso` y `Renders` opcionales), cada sección con su subtítulo y variación determinística acotada respetando orientación; al pasar el cursor hacen zoom suave y al hacer clic se abren en grande | Must |
| Proyecto anterior y siguiente | Enlaces a las obras vecinas dentro de su propio grupo (obras terminadas entre sí; renders entre sí) | Must |

*Leyenda: "Sección" es el bloque de la página, de arriba abajo. "Contenido" es lo que lleva. "Prioridad" es su grupo MoSCoW. "Migas de pan" es la línea que muestra en qué parte de la web está el visitante y le permite volver atrás. "Texto alternativo" es la descripción de la foto para quien usa un lector de pantalla.*

**Criterios de aceptación**

- [auto] Cada obra terminada y cada proyecto en diseño con vistas reales tiene su página, generada con la misma plantilla.
- [auto] La construcción de la web falla si a un proyecto le falta un dato obligatorio (nombre, tipo, ciudad o al menos una foto con su texto alternativo).
- [auto] Ninguna foto se publica con datos EXIF (ver la ADR 0011).
- [manual] Si el proyecto tiene fotos de `Proceso` o `Renders`, cada sección aparece con su subtítulo; si no, se omiten.
- [manual] "Anterior" y "Siguiente" llevan a los proyectos correctos dentro de su grupo, y el primero y el último no dejan enlaces rotos.
- [manual] El crédito del fotógrafo usa su nombre completo o "1903 Arquitectos" cuando las fotos las tomó el estudio.

---

## Servicios — `/servicios/`

**Para quién y qué debe lograr:** para quien quiere saber si el estudio puede hacer lo que necesita. Que reconozca su caso y escriba.

**Título:** Servicios | 1903 Arquitectos
**Descripción:** Diseño arquitectónico, interiorismo, visualización 3D, coordinación de proyectos, supervisión y construcción de obra de inicio a fin.

| Sección | Contenido | Prioridad |
|---|---|---|
| Servicios | 01 Diseño arquitectónico · 02 Diseño de interiores · 03 Modelado 3D y visualización · 04 Desarrollo y coordinación de proyectos · 05 Supervisión y asesoría · 06 Construcción de obra, de inicio a fin · 07 Lotizaciones y trámites municipales (con la etiqueta "Próximamente"), cada uno con una línea de lo que incluye [alcance de la construcción y descripción de lotizaciones y trámites: por confirmar] | Must |
| Cómo trabajamos | 4 pasos: Conversamos → Diseñamos → Elegimos materiales → Construimos | Must |
| Preguntas frecuentes | 14 preguntas aprobadas de la hoja (`Preguntas frecuentes` y `Preguntas (del PDF)`) que se abren y se cierran | Must |
| Llamado a la acción | "¿Tienes un proyecto en mente?" con el botón a Contacto | Must |

*Leyenda: "Sección" es el bloque de la página, de arriba abajo. "Contenido" es lo que lleva. "Prioridad" es su grupo MoSCoW. "Llamado a la acción" es un bloque que invita al visitante a dar el siguiente paso.*

**Criterios de aceptación**

- [manual] No aparece "Elaboración de planos" como servicio aparte.
- [manual] Solo se publican las preguntas frecuentes aprobadas.
- [manual] Las preguntas se abren y se cierran con el teclado.

---

## Cursos — `/cursos/`

**Para quién y qué debe lograr:** para estudiantes y profesionales que quieren aprender un programa. Que elijan un curso y se inscriban.

**Título:** Cursos | 1903 Arquitectos
**Descripción:** Cursos para arquitectos dictados por el estudio: AutoCAD, lectura de planos, V-Ray y Revit, con certificado en asociación con el Colegio de Arquitectos del Perú.

| Sección | Contenido | Prioridad |
|---|---|---|
| Cursos | Banda amarilla con introducción confirmada ("Los cursos virtuales se inscriben en Hotmart; los presenciales, por WhatsApp.") y una ficha por curso: nombre, modalidad, [duración y fechas], y el botón "Inscribirme". Sin precio (ver la ADR 0006) | Must |
| Certificado | Certificado en asociación con el Colegio de Arquitectos del Perú, acompañado de su logotipo (`public/img/logo-cap.webp`) | Must |

*Leyenda: "Sección" es el bloque de la página, de arriba abajo. "Contenido" es lo que lleva. "Prioridad" es su grupo MoSCoW.*

**Criterios de aceptación**

- [auto] El botón "Inscribirme" de un curso virtual lleva a su página de Hotmart [enlaces pendientes del estudio].
- [auto] El botón "Inscribirme" de un curso presencial abre WhatsApp con el mensaje "Hola, quiero inscribirme en el curso de {nombre del curso}".
- [manual] La ficha de cada curso dice si es virtual o presencial.
- [manual] Ningún curso muestra precio.

---

## Estudio — `/estudio/`

**Para quién y qué debe lograr:** para quien quiere saber quién está detrás de la obra antes de confiar su proyecto. Que perciba un estudio joven con oficio probado.

**Título:** Estudio | 1903 Arquitectos
**Descripción:** Diecinueve cero tres: un estudio de Cajamarca con obra construida. Conoce nuestra historia, al equipo y el showroom de materiales.

| Sección | Contenido | Prioridad |
|---|---|---|
| Por qué "1903" | La historia del nombre: el 19 del Jr. Amazonas 919, en Cajamarca, y el 03 de la calle Amazonas 103, en Arequipa; se pronuncia "diecinueve cero tres" (texto aprobado en la hoja) | Must |
| Misión, visión y propósito | Cada una por separado, en versión corta aprobada | Must |
| Equipo | Arq. Jorge Muñoz, Arq. Carla Llerena y Arq. Loren Bazán, con sus retratos de estudio (`src/assets/equipo/`) y nombres sin cargos | Must |
| Showroom | Abre a inicios de diciembre, en el mismo espacio del estudio y con el mismo horario; render del showroom (`src/assets/showroom.jpg`) con etiqueta `Propuesta visual`. Cuando tenga su propia web, un enlace a ella | Must |

*Leyenda: "Sección" es el bloque de la página, de arriba abajo. "Contenido" es lo que lleva. "Prioridad" es su grupo MoSCoW.*

**Criterios de aceptación**

- [manual] El equipo aparece sin cargos.
- [manual] La imagen del showroom lleva la etiqueta "Render" mientras sea un render.
- [manual] Ningún texto se publica sin la aprobación del estudio; lo pendiente se muestra entre [corchetes].

---

## Contacto — `/contacto/`

**Para quién y qué debe lograr:** para quien ya decidió escribir o visitar el estudio. Que lo haga sin fricción.

**Título:** Contacto | 1903 Arquitectos
**Descripción:** Escríbenos por WhatsApp o correo, o visítanos en Jr. Amancaes 262, Cajamarca. Lunes a viernes de 8:30 a 13:00 y de 15:00 a 19:00; sábados de 8:30 a 13:00.

| Sección | Contenido | Prioridad |
|---|---|---|
| Formulario | Asistente paso a paso sin listas desplegables (ver la ADR 0005): ¿qué quieres hacer? (Diseñar, Construir, Remodelar) · tipo de proyecto (Arquitectura, Interiorismo comercial, Interiorismo residencial) · preferencia de contacto (WhatsApp, Correo o Llamada) · idea opcional · nombre, contacto y casilla de consentimiento; redirige a WhatsApp o Gmail redactar (con alternativa `mailto:`), más acceso directo sin pasos | Must |
| Mapa | Mapa ilustrado propio del estudio (`src/assets/mapa-estudio.png`, con Av. Hoyos Rubio, Jr. Amancaes, Arnaldo Márquez y pin a la derecha) como fondo completo de la sección principal en proporción natural (por encima del listón), con los textos de cabecera sobre fondo blanco sólido al 100 % a juego con el mapa, el formulario en la columna izquierda y el botón "Cómo llegar" hacia Google Maps abajo a la derecha; en celular (`<= 900 px`), el mapa se muestra debajo del formulario enfocado en el pin | Must |

*Leyenda: "Sección" es el bloque de la página, de arriba abajo. "Contenido" es lo que lleva. "Prioridad" es su grupo MoSCoW.*

**Criterios de aceptación**

- [auto] Con nombre, mensaje y la casilla marcada, el formulario arma un enlace de WhatsApp al 924 285 500 con todos los datos escritos.
- [auto] Sin la casilla de consentimiento marcada, el formulario no se envía y explica por qué.
- [manual] Sin JavaScript, el asistente paso a paso no aparece y en su lugar quedan los accesos directos a WhatsApp y Gmail.
- [manual] Los botones de opción avanzan automáticamente y el botón «← Anterior» permite corregir cualquier respuesta.
- [manual] El botón "Cómo llegar" abre Google Maps en otra pestaña, con la dirección del estudio.

---

## Aviso de privacidad — `/privacidad/`

**Para quién y qué debe lograr:** para cualquier visitante que quiera saber qué pasa con sus datos. Que lo entienda sin ser abogado.

**Título:** Aviso de privacidad | 1903 Arquitectos
**Descripción:** Qué datos trata esta web, quién los recibe y cómo pedir acceso, corrección o borrado.

| Sección | Contenido | Prioridad |
|---|---|---|
| Aviso | Responsable de los datos (`1903 ARQUITECTOS S.A.C.`, RUC `20613550225`, `Jr. Amancaes 262, Cajamarca`) · qué mide la web y que no usa cookies · quiénes reciben datos (Cloudflare y WhatsApp) · enlaces a otros sitios con sus propias políticas · cómo pedir acceso, corrección o borrado de los datos (`1903arq@gmail.com`). Detalle en la ADR 0007 (texto aprobado) | Must |

*Leyenda: "Sección" es el bloque de la página. "Contenido" es lo que lleva. "Prioridad" es su grupo MoSCoW. "Cookie" es un archivo pequeño que un sitio guarda en el navegador para reconocer al visitante.*

**Criterios de aceptación**

- [auto] La página está enlazada desde el pie y desde la casilla de consentimiento del formulario.
- [manual] El texto coincide con la versión aprobada por el estudio.

---

## Declaración de accesibilidad — `/accesibilidad/`

**Para quién y qué debe lograr:** para visitantes con discapacidad y para quien quiera comprobar el compromiso del estudio. Que sepa qué nivel cumple la web y a dónde escribir si algo no le funciona.

**Título:** Declaración de accesibilidad | 1903 Arquitectos
**Descripción:** Nivel de accesibilidad que busca esta web, limitaciones conocidas y dónde reportar un problema.

| Sección | Contenido | Prioridad |
|---|---|---|
| Declaración | Nivel que busca la web (WCAG 2.2 AA) · limitaciones conocidas · a dónde reportar un problema (`1903arq@gmail.com`). Detalle en la ADR 0013 | Must |

*Leyenda: "Sección" es el bloque de la página. "Contenido" es lo que lleva. "Prioridad" es su grupo MoSCoW. "WCAG 2.2 AA" es el nivel de accesibilidad del estándar internacional que adopta la web.*

**Criterios de aceptación**

- [auto] La página está enlazada desde el pie.
- [manual] La lista de limitaciones conocidas está al día en cada publicación.

---

## Página no encontrada (error 404)

**Para quién y qué debe lograr:** para quien entra a una dirección que no existe (por ejemplo, un enlace viejo o mal escrito). Que no se vaya: que encuentre el camino de vuelta.

**Título:** Página no encontrada | 1903 Arquitectos
**Descripción:** La página que buscas no existe.

| Sección | Contenido | Prioridad |
|---|---|---|
| Mensaje | Lámina arquitectónica con retícula y marcas de cota, `ERROR 404`, mensaje "Esta página no existe", patrón de baldosa, logo vertical y botón "Volver al inicio" | Must |

*Leyenda: "Sección" es el bloque de la página. "Contenido" es lo que lleva. "Prioridad" es su grupo MoSCoW. "Error 404" es el código que usa la web para avisar que una página no existe.*

**Criterios de aceptación**

- [auto] Una dirección que no existe muestra esta página y responde con el código 404.
- [auto] La página no aparece en los resultados de Google (lleva la indicación `noindex`).
- [manual] Tiene la barra de navegación y el pie, como el resto de la web.

---

## Versión en inglés — `/en/`

Cada página en español tiene su espejo en inglés bajo `/en/`, con los nombres de las secciones traducidos y conservando sin cambios los identificadores propios de cada proyecto (ver la [ADR 0018](adr/0018-version-en-ingles.md)).

| Página | Dirección en español | Dirección en inglés |
|---|---|---|
| Inicio | `/` | `/en/` |
| Proyectos | `/proyectos/` | `/en/projects/` |
| Proyecto (una por obra o render con vistas) | `/proyectos/{id}/` | `/en/projects/{id}/` |
| Servicios | `/servicios/` | `/en/services/` |
| Cursos | `/cursos/` | `/en/courses/` |
| Estudio | `/estudio/` | `/en/studio/` |
| Contacto | `/contacto/` | `/en/contact/` |
| Aviso de privacidad | `/privacidad/` | `/en/privacy/` |
| Declaración de accesibilidad | `/accesibilidad/` | `/en/accessibility/` |

*Leyenda: "Página" es cada sección de la web. "Dirección en español" y "Dirección en inglés" muestran el enlace exacto al alternar entre `ES` y `EN` desde la barra superior; `{id}` es el identificador único de cada proyecto (por ejemplo, `cafetos`).*

---

## Fuera de esta versión (Won't)

- **Envío del formulario por correo.** Cuando el dominio esté comprado y se pueda probar (ver la ADR 0005).
