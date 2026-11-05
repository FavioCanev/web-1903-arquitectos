# ADR 0003 — Sin panel de administración

| Campo | Valor |
|---|---|
| Estado | Aceptada |
| Fecha | 21/10/2026 |
| Quién decide | 1903 Arquitectos, en la reunión de presentación del primer prototipo |

*Leyenda: "Estado" indica si la decisión está vigente (Aceptada), en discusión (Propuesta) o fue cambiada por otra (Reemplazada). "Fecha" es el día en que se tomó la decisión. "Quién decide" es la persona o el equipo responsable de la decisión.*

## Contexto

Muchas webs tienen un **panel de administración**: una sección privada donde el dueño de la web entra con usuario y contraseña para cambiar textos, fotos o agregar contenido sin saber programar. A los programas que ofrecen ese panel se les llama **CMS** (sistema de gestión de contenidos).

El estudio prefirió no tener un panel, para proteger el diseño y no ocupar tiempo de su equipo en editar la web. Los cambios los hace quien mantiene la web, a pedido del estudio.

El contenido de la web cambia poco: un proyecto nuevo cada cierto tiempo, las fechas de un curso o un dato de contacto.

## Opciones consideradas

| Opción | Qué es | A favor | En contra |
|---|---|---|---|
| WordPress | El CMS más usado; la web y su panel corren en un servidor | Muy conocido; mucha gente sabe usarlo | Necesita un servidor con PHP y una base de datos, que se paga y hay que proteger de ataques y actualizar seguido. Es incompatible con un sitio estático (ver la ADR 0001) |
| Panel propio | Un panel programado a medida para esta web | Hace exactamente lo que se necesita | Mucho trabajo; necesita servidor y manejo de usuarios; queda código que solo conoce quien lo hizo |
| CMS basado en Git (por ejemplo, Decap CMS) | Un formulario web, gratuito y de código abierto, que guarda cada cambio en el repositorio del código | Funciona con un sitio estático, sin servidor propio. Solo deja editar campos definidos (textos, datos de un proyecto, fotos), nunca la maquetación, así que no puede romper el diseño | Hay que configurarlo, darle acceso a cada persona del estudio y enseñarles a usarlo; es trabajo extra antes del plazo del 15/11/2026 |
| **Sin panel** | Quien mantiene la web hace los cambios a pedido del estudio | Nada que configurar ni proteger; el diseño solo lo toca quien lo conoce | Cada cambio depende de una persona y de su disponibilidad |

*Leyenda: "Opción" es la forma de manejar los cambios de contenido. "Qué es" la describe en una línea. "A favor" y "En contra" son sus ventajas y desventajas para esta web. "Repositorio" es el lugar donde se guarda el código de la web con el historial de todos sus cambios (aquí, en GitHub). "Maquetación" es la forma en que se ordenan los elementos en la página.*

## Decisión

La web **no tiene panel de administración**. Desde que la web esté terminada, los cambios que pida el estudio los hace quien la mantiene: recibe el pedido, hace el cambio en una rama del repositorio, lo revisa y lo publica. El paso a paso está en el manual de mantenimiento.

**Cuándo se revisa esta decisión:** si el estudio pide más de un cambio por semana durante un mes, evaluamos agregar un CMS basado en Git, como Decap CMS. Es la opción que mejor encaja con un sitio estático y que no pone en riesgo el diseño.

## Consecuencias

**Positivas**

- No hay usuarios ni contraseñas que proteger, ni un panel que pueda ser atacado.
- El diseño solo lo modifica quien lo conoce, así que no se rompe por accidente.
- Nada extra que configurar antes de publicar.

**Negativas**

- **El estudio depende de una persona para cada cambio.** Si esa persona no está disponible, el cambio espera. Para reducir este riesgo, el manual de mantenimiento explica cómo hacer cada cambio frecuente y cómo traspasar la web a otra persona.
- Los cambios no son inmediatos: pasan por pedir, hacer, revisar y publicar.
