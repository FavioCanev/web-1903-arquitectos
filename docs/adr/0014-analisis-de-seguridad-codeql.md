# ADR 0014 — Análisis de seguridad del código con CodeQL

| Campo | Valor |
|---|---|
| Estado | Aceptada |
| Fecha | 06/11/2026 |
| Quién decide | Favio Canevaro Asto, con potestad delegada por 1903 Arquitectos |

*Leyenda: "Estado" indica si la decisión está vigente (Aceptada), en discusión (Propuesta) o fue cambiada por otra (Reemplazada). "Fecha" es el día en que se tomó la decisión. "Quién decide" es la persona responsable de la decisión.*

## Contexto

La web tiene poco código propio: las plantillas de Astro, un script para el listón y otro para el formulario de contacto. Aun así, un error en ese código puede abrir una falla de seguridad, por ejemplo, que el formulario permita inyectar código en la página.

Un **análisis estático** revisa el código sin ejecutarlo y busca patrones de errores y fallas de seguridad conocidas. Hacerlo en cada cambio responde a las recomendaciones de seguridad de OWASP, una organización que publica las prácticas de seguridad web más usadas.

Ya están activas otras protecciones del repositorio (ver la ADR 0010): la detección de secretos y Dependabot, que avisa de fallas en las dependencias. Lo que falta es revisar **el código propio**.

## Opciones consideradas

| Opción | Qué revisa | Costo y esfuerzo |
|---|---|---|
| SonarQube Cloud | Errores, código difícil de mantener y fallas de seguridad, con un tablero de métricas | Gratis para repositorios públicos. Hay que crear una cuenta aparte, conectarla a GitHub y configurarla |
| **CodeQL** (de GitHub) | Fallas de seguridad en JavaScript y TypeScript | Gratis para repositorios públicos. Viene dentro de GitHub y se activa con un ajuste del mismo repositorio, sin cuentas nuevas |
| Sin análisis del código propio | Nada | Ninguno, pero una falla en el formulario o en un script se descubriría tarde |

*Leyenda: "Opción" es la herramienta de análisis evaluada. "Qué revisa" resume lo que busca. "Costo y esfuerzo" es lo que cuesta usarla en este proyecto. "Repositorio" es el lugar donde se guarda el código con su historial.*

SonarQube revisa más cosas, pero con tan poco código propio aportaría poco más que CodeQL, y sumaría una cuenta y un tablero que mantener. Queda como opción si el proyecto crece.

## Decisión

Activamos **CodeQL** en el mismo repositorio de GitHub, con la **configuración por defecto**: GitHub detecta solo los lenguajes (JavaScript y TypeScript) y revisa el código con cada cambio en la rama principal (`main`), con cada *pull request* y una vez por semana. Los resultados aparecen en la pestaña "Security" del repositorio. Un *pull request* es una propuesta de cambio que se revisa antes de integrarla.

**Bloqueo de fallas graves:** si un *pull request* introduce una falla de gravedad **alta o crítica**, no se puede integrar hasta corregirla. Este bloqueo se configura junto con las demás revisiones automáticas (construcción de la web, enlaces rotos, accesibilidad y la prueba del mensaje de WhatsApp), al armar la integración continua en la migración a Astro.

**Si la alerta es un falso positivo** (CodeQL marca algo que en realidad no es un problema):

1. se **descarta la alerta** en la pestaña "Security", eligiendo el motivo que corresponda: "Falso positivo", "Se usa en pruebas" o "No se corregirá";
2. se escribe un comentario que explique por qué no es un problema;
3. con la alerta descartada, el bloqueo se levanta y el *pull request* se puede integrar.

Como último recurso, la persona administradora del repositorio puede saltarse la regla de bloqueo. Se prefiere descartar la alerta, porque deja registrado el motivo.

## Consecuencias

**Positivas**

- Las fallas de seguridad del código propio se detectan en cada cambio, antes de publicarlo.
- No hay cuentas ni herramientas nuevas: todo queda en GitHub, en la misma cuenta del repositorio.
- Cada falso positivo descartado queda registrado con su motivo.

**Negativas**

- CodeQL solo revisa seguridad; no mide la calidad general del código, como lo haría SonarQube.
- Algún falso positivo puede frenar un cambio hasta que alguien revise y descarte la alerta.
- Saltarse la regla como administrador es posible, y por eso hay que usarlo con criterio.
