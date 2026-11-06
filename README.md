# Web de 1903 Arquitectos

[![CodeQL](https://github.com/FavioCanev/web-1903-arquitectos/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/FavioCanev/web-1903-arquitectos/actions/workflows/github-code-scanning/codeql)
![Estado: en desarrollo](https://img.shields.io/badge/estado-en%20desarrollo-F5700B)
![Licencia: todos los derechos reservados](https://img.shields.io/badge/licencia-todos%20los%20derechos%20reservados-53090A)

> **In English:** portfolio website for 1903 Arquitectos, an architecture and interior design studio in Cajamarca, Peru. It is a static site (Astro, in progress), hosted on Cloudflare, with no cookies and accessibility to WCAG 2.2 AA. The code is published with the studio's permission as part of its author's portfolio; all rights reserved. Documentation is in Spanish.

Web de portafolio de **1903 Arquitectos**, estudio de arquitectura e interiorismo de Cajamarca, Perú. Su objetivo es mostrar la obra terminada del estudio, presentar sus servicios y sus cursos, y que el visitante termine escribiendo por WhatsApp o visitando el estudio.

## Estado actual

| Etapa | Estado |
|---|---|
| Wireframes v2 (inicio y página de proyecto, en HTML y CSS) | Hechos y revisados por el estudio |
| Documentación: decisiones de arquitectura, mapa del sitio y arquitectura | Hecha |
| Migración a Astro, en varias páginas | Pendiente |
| Mockups con las fotos en alta calidad | Pendiente de las fotos |
| Publicación en `1903arq.com` | Prevista antes del 15/11/2026 |

*Leyenda: "Etapa" es cada parte del trabajo, en orden. "Estado" indica si está hecha, pendiente o prevista. "Wireframe" es un esquema de la página que muestra su estructura sin el diseño final; "mockup" es la versión con el diseño y las fotos reales.*

## Tecnologías

| Tecnología | Para qué | Estado |
|---|---|---|
| HTML, CSS y JavaScript | Los wireframes actuales, en `web/` | En uso |
| [Astro](https://astro.build) 7 | Generar el sitio estático a partir de componentes y datos | Prevista |
| Motion | Las animaciones ligadas al scroll | Prevista |
| Jost, con Fontsource | La tipografía, alojada en la propia web | En uso (en TTF; pasa a WOFF2 con Astro) |
| Cloudflare | Alojamiento, dominio, estadísticas sin cookies y almacenamiento de fotos (R2) | Prevista |
| GitHub | Código, revisiones automáticas y análisis de seguridad (CodeQL) | En uso |

*Leyenda: "Tecnología" es la herramienta o el servicio. "Para qué" es su función en la web. "Estado" indica si ya se usa o si se usará con la migración a Astro. "Sitio estático" es una web hecha solo de archivos, sin servidor ni base de datos. "TTF" y "WOFF2" son formatos de archivo de fuentes; WOFF2 pesa menos.*

El porqué de cada elección está en las [decisiones de arquitectura](docs/adr/README.md).

## Cómo arrancar el proyecto

Por ahora el proyecto son los wireframes en HTML y CSS. Para verlos hace falta [Python](https://www.python.org) (cualquier versión 3).

1. Clona el repositorio y entra a su carpeta:

   ```bash
   git clone https://github.com/FavioCanev/web-1903-arquitectos.git
   cd web-1903-arquitectos
   ```

2. Levanta un servidor local:

   ```bash
   python -m http.server 8191 --directory web
   ```

3. Abre `http://localhost:8191` en el navegador. La página de proyecto de ejemplo está en `http://localhost:8191/proyecto.html`.

Abrir el archivo `index.html` con doble clic también funciona, pero algunas cosas, como las fuentes, pueden no cargar sin un servidor.

[Esta sección cambia con la migración a Astro: los pasos pasarán a ser instalar las dependencias con `npm install` y levantar el servidor de desarrollo con `npm run dev`.]

## Cómo se publica

[Pendiente: la publicación se configura cuando el estudio compre el dominio.] Está prevista así ([ADR 0004](docs/adr/0004-publicacion-en-cloudflare.md)):

- Cloudflare se conecta a este repositorio y **publica sola cada cambio que entra en `main`**.
- Cada *pull request* tiene una **vista previa** en una dirección de prueba, para revisarlo antes de publicarlo.
- Las fotos se preparan con un script (reducidas y sin datos de ubicación) y se suben a Cloudflare R2 antes de construir la web ([ADR 0011](docs/adr/0011-fotos-en-cloudflare-r2.md)).

## Forma de trabajo

- **Ramas:** `main` siempre está lista para publicar. El trabajo con peso (una página nueva, una migración, un documento importante) se hace en una rama propia (por ejemplo, `feat/pagina-servicios` o `docs/arquitectura`) y se integra con un *pull request*. Las correcciones chicas, como una errata o un dato nuevo de la hoja del estudio, pueden ir directo a `main`.
- **Commits:** siguen [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/). Cada mensaje empieza con su tipo:

  | Tipo | Cuándo se usa |
  |---|---|
  | `feat` | Algo nuevo en la web (una página, una sección, una función) |
  | `fix` | Una corrección |
  | `docs` | Solo documentación |
  | `style` | Cambios de formato del código que no cambian lo que hace |
  | `refactor` | Reorganizar el código sin cambiar lo que hace |
  | `test` | Pruebas |
  | `chore` | Tareas de mantenimiento (dependencias, configuración) |

  *Leyenda: "Tipo" es la palabra con la que empieza el mensaje del commit, seguida de dos puntos (por ejemplo, `fix: corrige el número de WhatsApp`). "Cuándo se usa" explica qué clase de cambio describe. Un "commit" es cada cambio guardado en el historial del repositorio.*

- **Versiones:** se numeran con [versionado semántico](https://semver.org/lang/es/): 0.x mientras se construye y **1.0.0 el día de la publicación**. Cada versión se registra en el `CHANGELOG.md`.
- **Revisiones automáticas:** CodeQL revisa la seguridad del código en cada cambio ([ADR 0014](docs/adr/0014-analisis-de-seguridad-codeql.md)). Con la migración a Astro se suman la construcción, los enlaces rotos y la accesibilidad ([ADR 0013](docs/adr/0013-accesibilidad-wcag-2-2-aa.md)).
- **Lista blanca:** el repositorio es público y solo sube los archivos nombrados en `.gitignore`. Cada carpeta o archivo nuevo hay que agregarlo a esa lista ([ADR 0010](docs/adr/0010-repositorio-publico-lista-blanca.md)).

## Documentación

| Documento | Qué explica |
|---|---|
| [Decisiones de arquitectura (ADR)](docs/adr/README.md) | Por qué la web está hecha así: cada decisión con su contexto, opciones y consecuencias |
| [Mapa del sitio](docs/mapa-del-sitio.md) | Cada página, sus secciones, su prioridad y los criterios para darla por terminada |
| [Arquitectura](docs/arquitectura.md) | Cómo está hecha la web, con diagramas, metas de calidad y riesgos |
| Manual de mantenimiento | [Pendiente] El paso a paso de los cambios frecuentes y el traspaso |

*Leyenda: "Documento" es el archivo, con su enlace. "Qué explica" resume su contenido.*

## Derechos

- **El código** es propiedad de **1903 ARQUITECTOS S.A.C.**, con todos los derechos reservados. Se publica con autorización del estudio como portafolio de su autor; no se permite reutilizarlo. Ver [LICENSE](LICENSE).
- **Las fotografías** son de sus autores y de 1903 Arquitectos. No se pueden reutilizar.
- **La fuente Jost** es de The Jost Project Authors (Indestructible Type) y se usa con la licencia SIL Open Font License 1.1 (ver `web/fuentes/OFL-Jost.txt`).

## Créditos

Diseño y desarrollo: **Favio Canevaro Asto**, para 1903 Arquitectos.

[Fotografía: el crédito de cada fotógrafo, con su nombre completo, se agrega cuando sus fotos estén en la web.]
