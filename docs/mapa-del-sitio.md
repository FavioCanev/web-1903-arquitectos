# Mapa del sitio

Este documento describe **cada página de la web**: para quién es, qué debe lograr, sus secciones y los criterios con los que se da por terminada. Es el mapa vigente; el de la [ADR 0002](adr/0002-varias-paginas.md) es la foto del día en que se decidió tener varias páginas.

Lo que está entre [corchetes] es un dato o un texto pendiente: no se inventa, se completa cuando el estudio lo entregue o lo apruebe.

## Cómo leer este documento

**Prioridad (MoSCoW).** Cada sección lleva una prioridad pensada para la publicación del 15/11/2026:

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

**Título y descripción para buscadores.** Son el texto que aparece en los resultados de Google. Todos están [por aprobar] por el estudio.

---

## Elementos comunes a todas las páginas

| Elemento | Contenido | Prioridad |
|---|---|---|
| Enlace "Saltar al contenido" | Primer elemento de la página; solo se ve al navegar con el teclado | Must |
| Barra superior | "Cajamarca, Perú" y la hora de Cajamarca en vivo | Must (la hora en vivo: Should) |
| Barra de navegación | Logo horizontal (lleva al Inicio) · Proyectos · Servicios · Cursos · Estudio · Contacto · botón "Escríbenos" (lleva a Contacto). En celular, los enlaces se agrupan en un menú | Must |
| Listón con el patrón | Baja por el margen izquierdo a medida que se avanza en la página; oculto en pantallas de menos de unos 600 px (ver la ADR 0009) | Should |
| Botón flotante de WhatsApp | Siempre visible; abre WhatsApp con el número del estudio | Must |
| Pie de página | Logo grande · enlaces de la barra de navegación · contacto: correo (1903arq@gmail.com), "Atención en todo el Perú · WhatsApp 924 285 500" [texto por aprobar], horario (lunes a viernes de 8:30 a 13:00 y de 15:00 a 19:00; sábados de 8:30 a 13:00) y dirección (Jr. Amancaes 262, Cajamarca) · Instagram y Facebook · Aviso de privacidad · Declaración de accesibilidad · "1903 Arquitectos © 2026". Patrón de baldosa de borde a borde | Must |

*Leyenda: "Elemento" es la parte que se repite en todas las páginas. "Contenido" es lo que lleva. "Prioridad" es su grupo MoSCoW (ver arriba). El RUC no va en el pie: está en el aviso de privacidad, donde la Ley 29733 pide identificar al responsable de los datos.*

**Criterios de aceptación comunes**

- [auto] Cada página tiene un título y una descripción propios, y el idioma declarado (`lang="es"`).
- [auto] Ninguna página tiene enlaces rotos.
- [auto] Ninguna página tiene errores de accesibilidad en la revisión automática (ver la ADR 0013).
- [manual] Al presionar Tab por primera vez aparece el enlace "Saltar al contenido", y al usarlo el foco salta al contenido principal.
- [manual] Todos los enlaces y botones se pueden usar con el teclado, con el foco visible.
- [manual] La hora de la barra superior es la de Cajamarca y se actualiza sola, también después de cambiar de página.
- [manual] El botón flotante y el WhatsApp del pie abren WhatsApp con el número 924 285 500.
- [manual] En una pantalla de 390 px de ancho no aparece barra de desplazamiento horizontal.
- [manual] Con "reducir movimiento" activado, nada se desplaza ni se anima, salvo fundidos simples.

---

## Inicio — `/`

**Para quién y qué debe lograr:** para quien llega por primera vez. Que vea de inmediato la calidad de la obra del estudio y quiera ver más o escribir.

**Título:** 1903 Arquitectos — Arquitectura e interiorismo comercial en Cajamarca [por aprobar]
**Descripción:** Estudio de arquitectura e interiorismo en Cajamarca. Diseñamos y construimos cafés, restaurantes, locales, viviendas y hoteles con identidad cajamarquina. [por aprobar]

| Sección | Contenido | Prioridad |
|---|---|---|
| Proyecto destacado | Foto de Tacos Cajamarquinos a pantalla completa, con el lema "Celebramos la cultura mediante el diseño." y los botones "Ver proyectos" y "Escríbenos por WhatsApp" | Must |
| Collage de obras terminadas | Muchas o todas las obras terminadas, en un collage de fotos de distintos tamaños, cada una con su nombre; cada foto lleva a la página de su proyecto. Enlace "Ver todos los proyectos" | Must |
| Proyectos en diseño | Carrusel de renders, con la etiqueta "Render" en cada uno; las tarjetas no llevan a una página propia | Must |

*Leyenda: "Sección" es el bloque de la página, de arriba abajo. "Contenido" es lo que lleva. "Prioridad" es su grupo MoSCoW. "Render" es una imagen hecha por computadora de un proyecto que todavía no se construye.*

**Criterios de aceptación**

- [auto] El collage muestra todas las obras marcadas para el inicio en los datos, y cada una enlaza a su página de proyecto.
- [auto] Los renders nunca aparecen mezclados con las obras terminadas.
- [manual] La foto del proyecto destacado se ve completa en escritorio y en celular, y el texto se lee sobre ella.
- [manual] Las fotos del collage que están más abajo se cargan recién al acercarse a ellas.
- [manual] El carrusel se puede deslizar con el dedo, con el mouse y con el teclado.

---

## Proyectos — `/proyectos/`

**Para quién y qué debe lograr:** para quien busca un tipo de obra en particular (por ejemplo, un café). Que encuentre proyectos parecidos al suyo y vea sus datos.

**Título:** Proyectos — 1903 Arquitectos [por aprobar]
**Descripción:** Obras terminadas del estudio: cafés, restaurantes, locales comerciales, viviendas y hoteles en Cajamarca y el norte del Perú. [por aprobar]

| Sección | Contenido | Prioridad |
|---|---|---|
| Obra terminada | Todas las obras terminadas, con foto, nombre y ficha corta (lugar · m² · año) | Must |
| Filtros | "Todos" y las categorías que el estudio asigne en la hoja. Un proyecto puede tener más de una categoría [categorías por definir con el estudio] | Should |
| En desarrollo | Los renders, separados de la obra terminada, con la etiqueta "Render" | Must |

*Leyenda: "Sección" es el bloque de la página, de arriba abajo. "Contenido" es lo que lleva. "Prioridad" es su grupo MoSCoW. "m²" son los metros cuadrados del proyecto.*

**Criterios de aceptación**

- [auto] Aparecen todas las obras terminadas de los datos, cada una con su enlace a su página.
- [auto] Un proyecto con dos categorías aparece al elegir cualquiera de las dos.
- [manual] Al elegir un filtro se muestran solo los proyectos de esa categoría, y "Todos" los vuelve a mostrar todos.
- [manual] Los filtros se pueden usar con el teclado, y el filtro elegido se distingue de los demás sin depender solo del color.
- [manual] Un dato pendiente se muestra como [corchetes], nunca como un dato inventado.

---

## Proyecto (una página por obra) — `/proyectos/nombre-del-proyecto/`

**Para quién y qué debe lograr:** para quien quiere conocer una obra a fondo. Que entienda qué pidió el cliente, qué hizo el estudio y vea el resultado.

**Título:** {Nombre} — {tipo} en {ciudad} · 1903 Arquitectos (por ejemplo, "Cafétos — cafetería en Cajamarca · 1903 Arquitectos")
**Descripción:** la primera oración del encargo de cada proyecto [por aprobar, proyecto por proyecto]

| Sección | Contenido | Prioridad |
|---|---|---|
| Foto principal | A pantalla completa, fija "como ventana" mientras el contenido pasa por encima | Must (el efecto de ventana: Should) |
| Migas de pan | Inicio / Proyectos / {Nombre} | Must |
| Título y ficha | Nombre, tipo y ciudad · ficha: lugar, m², año y tipo | Must |
| Encargo y solución | Qué pidió el cliente y qué hizo el estudio, de 2 a 3 líneas cada uno | Must |
| Galería | Fotos con su pie de foto y su texto alternativo, en el orden que indique el estudio | Must |
| Fotos con desplazamiento | Las fotos de la galería suben o bajan suavemente con el scroll | Could |
| Crédito | "Fotografía: {nombre completo del fotógrafo}" | Must |
| Proyecto anterior y siguiente | Enlaces a las obras vecinas en el orden de la lista | Must |
| Pie | Con el fondo amarillo de la banda de Cursos | Must |

*Leyenda: "Sección" es el bloque de la página, de arriba abajo. "Contenido" es lo que lleva. "Prioridad" es su grupo MoSCoW. "Migas de pan" es la línea que muestra en qué parte de la web está el visitante y le permite volver atrás. "Texto alternativo" es la descripción de la foto para quien usa un lector de pantalla.*

**Criterios de aceptación**

- [auto] Cada obra terminada de los datos tiene su página, generada con la misma plantilla.
- [auto] La construcción de la web falla si a un proyecto le falta un dato obligatorio (nombre, tipo, ciudad o al menos una foto con su texto alternativo).
- [auto] Ninguna foto se publica con datos EXIF (ver la ADR 0011).
- [manual] "Anterior" y "Siguiente" llevan a las obras correctas, y la primera y la última no dejan enlaces rotos.
- [manual] Al abrir un proyecto desde una tarjeta, la foto crece desde la tarjeta hasta la portada (ver la ADR 0012).
- [manual] El crédito del fotógrafo usa su nombre completo, no su usuario de Instagram.

---

## Servicios — `/servicios/`

**Para quién y qué debe lograr:** para quien quiere saber si el estudio puede hacer lo que necesita. Que reconozca su caso y escriba.

**Título:** Servicios — 1903 Arquitectos [por aprobar]
**Descripción:** Diseño arquitectónico, interiorismo, visualización 3D, coordinación de proyectos, supervisión y construcción de obra de inicio a fin. [por aprobar]

| Sección | Contenido | Prioridad |
|---|---|---|
| Servicios | 01 Diseño arquitectónico · 02 Diseño de interiores · 03 Modelado 3D y visualización · 04 Desarrollo y coordinación de proyectos · 05 Supervisión, asesoría y construcción · 06 Lotizaciones y trámites municipales (con la etiqueta "Próximamente"), cada uno con una línea de lo que incluye [alcance de la construcción y descripción de lotizaciones y trámites: por confirmar] | Must |
| Cómo trabajamos | 4 pasos: Conversamos → Diseñamos → Elegimos materiales → Construimos | Must |
| Preguntas frecuentes | Preguntas que se abren y se cierran; solo las respuestas aprobadas por el estudio en la hoja | Must |
| Llamado a la acción | "¿Tienes un proyecto en mente?" con el botón a Contacto | Must |

*Leyenda: "Sección" es el bloque de la página, de arriba abajo. "Contenido" es lo que lleva. "Prioridad" es su grupo MoSCoW. "Llamado a la acción" es un bloque que invita al visitante a dar el siguiente paso.*

**Criterios de aceptación**

- [manual] No aparece "Elaboración de planos" como servicio aparte.
- [manual] Solo se publican las preguntas frecuentes marcadas como aprobadas en la hoja.
- [manual] Las preguntas se abren y se cierran con el teclado.

---

## Cursos — `/cursos/`

**Para quién y qué debe lograr:** para estudiantes y profesionales que quieren aprender un programa. Que elijan un curso y se inscriban.

**Título:** Cursos de AutoCAD, V-Ray y Revit — 1903 Arquitectos [por aprobar]
**Descripción:** Cursos para arquitectos dictados por el estudio: AutoCAD, lectura de planos, V-Ray y Revit, con certificado en asociación con el Colegio de Arquitectos del Perú. [por aprobar]

| Sección | Contenido | Prioridad |
|---|---|---|
| Cursos | Banda amarilla con una ficha por curso: nombre, modalidad, duración y fechas, y el botón "Inscribirme". Sin precio (ver la ADR 0006) | Must |
| Certificado | Certificado en asociación con el Colegio de Arquitectos del Perú | Must |

*Leyenda: "Sección" es el bloque de la página, de arriba abajo. "Contenido" es lo que lleva. "Prioridad" es su grupo MoSCoW.*

**Criterios de aceptación**

- [auto] El botón "Inscribirme" de un curso virtual lleva a su página de Hotmart [enlaces pendientes del estudio].
- [auto] El botón "Inscribirme" de un curso presencial abre WhatsApp con el mensaje "Hola, quiero inscribirme en el curso de {nombre del curso}".
- [manual] La ficha de cada curso dice si es virtual o presencial.
- [manual] Ningún curso muestra precio.

---

## Estudio — `/estudio/`

**Para quién y qué debe lograr:** para quien quiere saber quién está detrás de la obra antes de confiar su proyecto. Que perciba un estudio joven con oficio probado.

**Título:** Estudio — 1903 Arquitectos [por aprobar]
**Descripción:** Diecinueve cero tres: un estudio de Cajamarca con obra construida. Conoce nuestra historia, al equipo y el showroom de materiales. [por aprobar]

| Sección | Contenido | Prioridad |
|---|---|---|
| Por qué "1903" | La historia del nombre: el 19 del Jr. Amazonas 919, en Cajamarca, y el 03 del Jr. Amazonas 103, en Arequipa; se pronuncia "diecinueve cero tres" [texto por aprobar] | Must |
| Misión y visión | Cada una por separado, en versión corta [por aprobar] | Must |
| Equipo | Arq. Jorge Muñoz, Arq. Carla Llerena y Arq. Loren Bazán, solo con sus nombres [retratos pendientes] | Must |
| Showroom | Abre a inicios de diciembre, en el mismo espacio del estudio y con el mismo horario; fotos de renders [fecha exacta y materiales por confirmar]. Cuando tenga su propia web, un enlace a ella | Must |

*Leyenda: "Sección" es el bloque de la página, de arriba abajo. "Contenido" es lo que lleva. "Prioridad" es su grupo MoSCoW.*

**Criterios de aceptación**

- [manual] El equipo aparece sin cargos.
- [manual] Las fotos del showroom llevan la etiqueta "Render" mientras sean renders.
- [manual] Ningún texto se publica sin la aprobación del estudio; lo pendiente se muestra entre [corchetes].

---

## Contacto — `/contacto/`

**Para quién y qué debe lograr:** para quien ya decidió escribir o visitar el estudio. Que lo haga sin fricción.

**Título:** Contacto — 1903 Arquitectos [por aprobar]
**Descripción:** Escríbenos por WhatsApp o visítanos en Jr. Amancaes 262, Cajamarca. Lunes a viernes de 8:30 a 13:00 y de 15:00 a 19:00; sábados de 8:30 a 13:00. [por aprobar]

| Sección | Contenido | Prioridad |
|---|---|---|
| Formulario | Nombre, teléfono (opcional), tipo de proyecto, qué quiere hacer (diseñar, construir o remodelar) y mensaje; casilla de consentimiento con enlace al aviso de privacidad; botón "Enviar por WhatsApp" (ver la ADR 0005) | Must |
| Mapa | Imagen exportada de OpenStreetMap con el crédito "© OpenStreetMap" y el botón "Cómo llegar", que abre Google Maps (ver la ADR 0007) | Must |
| Datos | Dirección, WhatsApp, correo y horario; "también te recibimos sin cita" | Must |

*Leyenda: "Sección" es el bloque de la página, de arriba abajo. "Contenido" es lo que lleva. "Prioridad" es su grupo MoSCoW.*

**Criterios de aceptación**

- [auto] Con nombre, mensaje y la casilla marcada, el formulario arma un enlace de WhatsApp al 924 285 500 con todos los datos escritos.
- [auto] Sin la casilla de consentimiento marcada, el formulario no se envía y explica por qué.
- [manual] Sin JavaScript, el formulario no aparece y en su lugar se ve el botón "Escríbenos por WhatsApp".
- [manual] La lista desplegable se lee bien al abrirla.
- [manual] El botón "Cómo llegar" abre Google Maps en otra pestaña, con la dirección del estudio.

---

## Aviso de privacidad — `/privacidad/`

**Para quién y qué debe lograr:** para cualquier visitante que quiera saber qué pasa con sus datos. Que lo entienda sin ser abogado.

**Título:** Aviso de privacidad — 1903 Arquitectos

| Sección | Contenido | Prioridad |
|---|---|---|
| Aviso | Responsable de los datos (1903 ARQUITECTOS S.A.C., RUC 20613550225, Jr. Amancaes 262, Cajamarca) · qué mide la web y que no usa cookies · quiénes reciben datos (Cloudflare y WhatsApp) · enlaces a otros sitios con sus propias políticas · cómo pedir acceso, corrección o borrado de los datos (1903arq@gmail.com). Detalle en la ADR 0007 [texto por aprobar por el estudio] | Must |

*Leyenda: "Sección" es el bloque de la página. "Contenido" es lo que lleva. "Prioridad" es su grupo MoSCoW. "Cookie" es un archivo pequeño que un sitio guarda en el navegador para reconocer al visitante.*

**Criterios de aceptación**

- [auto] La página está enlazada desde el pie y desde la casilla de consentimiento del formulario.
- [manual] El texto fue aprobado por el estudio antes de publicarlo.

---

## Declaración de accesibilidad — `/accesibilidad/`

**Para quién y qué debe lograr:** para visitantes con discapacidad y para quien quiera comprobar el compromiso del estudio. Que sepa qué nivel cumple la web y a dónde escribir si algo no le funciona.

**Título:** Declaración de accesibilidad — 1903 Arquitectos

| Sección | Contenido | Prioridad |
|---|---|---|
| Declaración | Nivel que busca la web (WCAG 2.2 AA) · limitaciones conocidas · a dónde reportar un problema (1903arq@gmail.com). Detalle en la ADR 0013 | Must |

*Leyenda: "Sección" es el bloque de la página. "Contenido" es lo que lleva. "Prioridad" es su grupo MoSCoW. "WCAG 2.2 AA" es el nivel de accesibilidad del estándar internacional que adopta la web.*

**Criterios de aceptación**

- [auto] La página está enlazada desde el pie.
- [manual] La lista de limitaciones conocidas está al día en cada publicación.

---

## Página no encontrada (error 404)

**Para quién y qué debe lograr:** para quien entra a una dirección que no existe (por ejemplo, un enlace viejo o mal escrito). Que no se vaya: que encuentre el camino de vuelta.

**Título:** Página no encontrada — 1903 Arquitectos

| Sección | Contenido | Prioridad |
|---|---|---|
| Mensaje | Logo vertical del estudio, en vino, centrado · un mensaje breve que diga que la página no existe [texto por aprobar] · botones a Inicio y a Proyectos | Must |

*Leyenda: "Sección" es el bloque de la página. "Contenido" es lo que lleva. "Prioridad" es su grupo MoSCoW. "Error 404" es el código que usa la web para avisar que una página no existe.*

**Criterios de aceptación**

- [auto] Una dirección que no existe muestra esta página y responde con el código 404.
- [auto] La página no aparece en los resultados de Google (lleva la indicación `noindex`).
- [manual] Tiene la barra de navegación y el pie, como el resto de la web.

---

## Fuera de esta versión (Won't)

- **Inglés.** Va bajo `/en/` cuando se agregue (ver la ADR 0002).
- **Envío del formulario por correo.** Cuando el dominio esté comprado y se pueda probar (ver la ADR 0005).
- **Página propia para cada render.** Cuando el estudio entregue más vistas y una descripción de cada uno.
