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

[Sin publicar]: https://github.com/FavioCanev/web-1903-arquitectos/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/FavioCanev/web-1903-arquitectos/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/FavioCanev/web-1903-arquitectos/releases/tag/v0.1.0
