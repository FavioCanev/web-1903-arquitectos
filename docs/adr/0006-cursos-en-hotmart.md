# ADR 0006 — Cursos en Hotmart

| Campo | Valor |
|---|---|
| Estado | Aceptada |
| Fecha | 02/11/2026 |
| Quién decide | 1903 Arquitectos, en la reunión del 02/11/2026 |

*Leyenda: "Estado" indica si la decisión está vigente (Aceptada), en discusión (Propuesta) o fue cambiada por otra (Reemplazada). "Fecha" es el día en que se tomó la decisión. "Quién decide" es la persona o el equipo responsable de la decisión.*

## Contexto

El estudio dicta cursos: AutoCAD para arquitectos y Lectura de planos (virtuales), V-Ray: visualización arquitectónica (presencial) y Revit [modalidad por confirmar]. Los cursos llevan un certificado en asociación formal con el Colegio de Arquitectos del Perú (CAP).

Lo que el estudio definió en la reunión del 02/11/2026:

- **Venden a cualquier persona interesada**, no solo a grupos que ellos arman.
- **Esperan unos 5 o 6 alumnos por curso**, con intención de crecer.
- **Por ahora solo dictan clases en vivo**; más adelante quieren grabar cursos completos.
- **Aceptan cualquier medio de pago**, pero es importante que el alumno pueda pagar con **Yape**, la billetera digital más usada en el Perú.
- **Los cursos los administra uno de los arquitectos del estudio.**
- **El primer curso en línea** saldría una semana o diez días después de publicar la web.

Antes, la propuesta era hacerlo en dos fases: primero fichas en la web con inscripción por WhatsApp, y después una plataforma con acceso para los alumnos. El estudio decidió saltarse las fases e ir directo a una plataforma.

## Opciones consideradas

Son las mismas que se le presentaron al estudio.

| Opción | Qué es | A favor | En contra |
|---|---|---|---|
| **Hotmart** | Plataforma para vender cursos en línea; cobra, da acceso a los alumnos y aloja los videos | Acepta Yape. Vende a cualquier persona. Sin servidor ni mantenimiento técnico | Cobra una comisión por cada venta (ver las tarifas vigentes en su web) |
| Teachable | Plataforma para vender cursos en línea | Muy usada por estudios de diseño (por ejemplo, Jalo) | Pensada para pagos con tarjeta internacional; no acepta Yape |
| Thinkific | Plataforma para vender cursos en línea | Buena para cursos grabados | Mismo problema de pagos que Teachable |
| Podia | Plataforma para vender cursos y productos digitales | Simple de usar | Mismo problema de pagos; menos conocida en el Perú |
| Google Classroom con Google Meet (Gmail gratuito) | Aula virtual y videollamadas de Google | Gratis; conocida | No cobra: el pago se maneja aparte, a mano. Pensada para colegios, no para vender |
| Google Classroom con Google Workspace | Lo mismo, con la versión de pago de Google para empresas | Más control y almacenamiento | Tiene costo mensual y sigue sin cobrar a los alumnos |
| MoodleCloud | Aula virtual Moodle alojada por sus creadores | Muy completa; estándar en universidades | Compleja de configurar y administrar; el cobro se configura aparte |
| Moodle o Chamilo en servidor propio | Aula virtual instalada en un servidor del estudio | Control total | Necesita un servidor que se paga, se actualiza y se protege |
| Sistema propio | Una plataforma programada a medida | Hace exactamente lo que se pide | Mucho trabajo, cobros y usuarios que proteger; se descartó desde la reunión del 21/10/2026 |

*Leyenda: "Opción" es la plataforma evaluada. "Qué es" la describe en una línea. "A favor" y "En contra" son sus ventajas y desventajas para el estudio. "Yape" es una billetera digital peruana para pagar desde el celular. "Servidor" es una computadora conectada a internet que hay que pagar y mantener.*

## Decisión

Los **cursos virtuales se venden en Hotmart**, y **los cursos presenciales, por ahora, se inscriben por WhatsApp**. La web no cobra ni maneja alumnos.

- **La página Cursos muestra una ficha por curso:** nombre, modalidad, duración y fechas.
- **El botón "Inscribirme"** lleva a la página del curso en Hotmart si es virtual, o abre WhatsApp con un mensaje ya escrito (por ejemplo, "Hola, quiero inscribirme en el curso de V-Ray") si es presencial. El número es el mismo de la ADR 0005.
- **El precio no se muestra en la web.** Vive solo en Hotmart, para que no haya dos precios distintos si el estudio lo cambia. Para los cursos presenciales, el precio se informa por WhatsApp.
- **La ficha menciona el certificado** en asociación con el Colegio de Arquitectos del Perú.

Los cursos presenciales se inscriben por WhatsApp **hasta que el estudio defina si los cursos serán una parte principal de su trabajo**. Si eso pasa, se revisa si también se venden en Hotmart o en otra plataforma.

## Consecuencias

**Positivas**

- El cobro, el acceso de los alumnos y los videos los maneja Hotmart: la web sigue siendo estática y sin datos de alumnos.
- Los alumnos pueden pagar con Yape.
- El precio vive en un solo lugar.
- El estudio puede empezar a vender poco después de publicar la web.

**Negativas**

- Hotmart cobra una comisión por cada venta.
- Hay dos formas de inscribirse (Hotmart para los virtuales y WhatsApp para los presenciales); la web debe dejar claro cuál corresponde a cada curso.
- La web depende de los enlaces de Hotmart: si el estudio cambia o borra un curso allí, hay que actualizar el enlace en la web. [Enlaces de cada curso: pendientes del estudio.]
