# Estructura del proyecto

Este documento explica **qué hay en cada carpeta** del proyecto y cuál es el código de la web. Sirve para quien llega sin contexto y se pregunta "¿cuál es el proyecto en sí?".

**El código de la web está en la raíz del repositorio**, en las carpetas `src/`, `public/`, `tests/` y `.github/`, y en los archivos `package.json`, `package-lock.json`, `astro.config.mjs` y `tsconfig.json`. Todo lo demás es documentación, gráficos o material interno. Cómo está organizado el código por dentro está en [`arquitectura.md`](arquitectura.md), en el nivel 3.

```
Arquitectos1903/
├── src/  public/  tests/  .github/             El código de la web
├── package.json  package-lock.json
├── astro.config.mjs  tsconfig.json
├── docs/  README.md  CHANGELOG.md  LICENSE     La documentación
├── logo/  wireframes/                          Los gráficos
├── material/                                   El material interno (no se sube)
└── BRIEF.md  CLAUDE.md  AGENTS.md              Las instrucciones de trabajo (no se suben)
```

| Carpeta o archivo | Qué es | ¿Se sube a GitHub? |
|---|---|---|
| `src/` | Las páginas, los componentes, los estilos, los datos de los proyectos y el resto del código de la web | Sí |
| `public/` | Archivos que la web entrega tal cual: logos y patrón de baldosa en SVG | Sí |
| `tests/` | La prueba del mensaje de WhatsApp, el revisor de enlaces y la configuración de la revisión de accesibilidad | Sí |
| `.github/` | Las revisiones automáticas que corren en cada *pull request* | Sí |
| `package.json`, `package-lock.json` | La lista de herramientas (dependencias) y sus versiones exactas, y los comandos del proyecto | Sí |
| `astro.config.mjs`, `tsconfig.json` | La configuración de Astro y de TypeScript | Sí |
| `docs/` | Las decisiones de arquitectura (ADR), el mapa del sitio, la arquitectura y este documento | Sí |
| `README.md`, `CHANGELOG.md`, `LICENSE` | Cómo arrancar el proyecto, el registro de cambios y los derechos | Sí |
| `logo/` | Los logos originales y, en `logo/vectorizado/`, los vectorizados | Solo `logo/vectorizado/` |
| `wireframes/` | Los wireframes iniciales y el PDF de los wireframes v2 | Solo el PDF de los wireframes v2 |
| `material/` | Todo el material interno: `presentacion/` (presentaciones y respuestas de las reuniones), `prototipo/` (el primer prototipo), `referencias/` y `capturas/` (webs de terceros), `datos/` (la hoja de datos del estudio) y `documentos-estudio/` | No |
| `BRIEF.md`, `CLAUDE.md`, `AGENTS.md` | El contexto del negocio y las reglas de trabajo | No |
| `node_modules/`, `dist/`, `.astro/` | Lo que se genera en tu computadora: las dependencias instaladas, la web construida y los tipos de Astro. Se vuelven a crear con `npm install` y `npm run build` | No |

*Leyenda: "Carpeta o archivo" es el lugar del proyecto. "Qué es" explica su contenido. "¿Se sube a GitHub?" indica si entra al repositorio público; el `.gitignore` funciona como lista blanca y solo sube lo nombrado ([ADR 0010](adr/0010-repositorio-publico-lista-blanca.md)). "Dependencia" es un paquete de código hecho por terceros que el proyecto usa. "Pull request" es una propuesta de cambio que se revisa antes de integrarla.*

**Regla para lo nuevo:** el código va en `src/`, `public/` o `tests/`; la documentación, en `docs/`; y todo material interno del estudio, en `material/`. Una carpeta o un archivo nuevo que deba subirse hay que agregarlo a la lista blanca del `.gitignore`.
