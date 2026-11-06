# ADR 0010 — Repositorio público con lista blanca de archivos

| Campo | Valor |
|---|---|
| Estado | Aceptada |
| Fecha | 05/11/2026 |
| Quién decide | Favio Canevaro Asto, con potestad delegada por 1903 Arquitectos |

*Leyenda: "Estado" indica si la decisión está vigente (Aceptada), en discusión (Propuesta) o fue cambiada por otra (Reemplazada). "Fecha" es el día en que se tomó la decisión. "Quién decide" es la persona responsable de la decisión.*

## Contexto

El código de la web se guarda en **Git**, un sistema que registra cada cambio con su autor y su fecha, y se publica en **GitHub**, un sitio donde se alojan proyectos de Git. A un proyecto en GitHub se le llama **repositorio**.

**El estudio autorizó publicar el código como portafolio de su autor.** Por eso el repositorio es **público**: cualquiera puede verlo. El código sigue siendo **propiedad de 1903 ARQUITECTOS S.A.C., con todos los derechos reservados**; el repositorio no tiene una licencia abierta.

Pero en la carpeta del proyecto también hay material que no debe ser público:

- documentos internos del estudio;
- datos de contacto y de proyectos sin publicar;
- documentos de reuniones;
- instrucciones para herramientas de inteligencia artificial;
- el primer prototipo, que usaba fotos tomadas de Instagram;
- capturas de webs de terceros, usadas como referencia.

Git decide qué subir según un archivo llamado `.gitignore`, que lista lo que debe ignorar.

## Opciones consideradas

| Opción | Cómo funciona | A favor | En contra |
|---|---|---|---|
| Repositorio privado | Solo lo ven las personas invitadas | Lo más seguro | No sirve como portafolio |
| Público con lista negra | Se sube todo, menos lo que se nombra en `.gitignore` | Agregar archivos nuevos no requiere nada | Una carpeta nueva con información interna se sube sin que nadie lo note |
| **Público con lista blanca** | Se ignora todo, y solo se sube lo que se nombra en `.gitignore` | Nada se sube por accidente; lo que no está en la lista nunca sale de la computadora | Cada carpeta o archivo nuevo del proyecto hay que agregarlo a la lista a mano |
| Dos repositorios | Uno privado con todo y otro público, limpio, para el portafolio | Separación total | Hay que mantener los dos sincronizados; es fácil que se desordenen |

*Leyenda: "Opción" es la forma de manejar qué se publica. "Cómo funciona" la describe en una línea. "A favor" y "En contra" son sus ventajas y desventajas para este proyecto. "Lista blanca" y "lista negra" son dos formas de filtrar: la blanca deja pasar solo lo nombrado; la negra deja pasar todo menos lo nombrado.*

## Decisión

El repositorio es **público**, con un `.gitignore` que funciona como **lista blanca**: ignora todo y solo deja subir lo que está nombrado. Además de proteger la información del estudio, deja el repositorio limpio para mostrarlo como portafolio.

**Protecciones gratuitas de GitHub activadas:**

- **Detección de secretos con bloqueo al subir:** si alguien intenta subir una contraseña o una clave de acceso, GitHub la detecta y frena el envío. Un **secreto** es cualquier dato que da acceso a algo, como una contraseña o una clave de un servicio.
- **Dependabot:** avisa cuando una dependencia del proyecto tiene una falla de seguridad conocida.

Los secretos que necesite la web en el futuro (por ejemplo, una clave para publicar) se guardan en los ajustes privados de GitHub o de Cloudflare, nunca en el código. Esto sigue las prácticas de seguridad de OWASP, una organización que publica las recomendaciones de seguridad web más usadas.

**Si algo sensible se sube por error:** borrar el archivo **no lo borra del historial**: cualquiera puede verlo en los cambios anteriores. Hay que:

1. reescribir el historial del repositorio para quitar el archivo de todos los cambios;
2. si era una contraseña o una clave, **cambiarla de inmediato**, porque hay que darla por expuesta;
3. avisar al estudio si el dato era suyo.

El paso a paso para agregar o quitar cosas de la lista blanca está en el manual de mantenimiento.

## Consecuencias

**Positivas**

- La información interna del estudio no se puede subir por accidente.
- El repositorio sirve como portafolio de su autor, con permiso del estudio.
- GitHub frena el envío de contraseñas y avisa de fallas de seguridad en las dependencias, sin costo.

**Negativas**

- **Cada carpeta o archivo nuevo del proyecto hay que agregarlo a la lista blanca a mano.** Si no, Git lo ignora en silencio y no se sube. Pasará, por ejemplo, al migrar a Astro, con archivos como `package.json`, `astro.config.mjs` o la carpeta `src/`.
- Al ser público, cualquiera puede leer el código y el historial de cambios. Por eso nada sensible puede entrar, ni siquiera por un momento.
