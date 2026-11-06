# ADR 0005 — Formulario de contacto que abre WhatsApp, sin guardar datos

| Campo | Valor |
|---|---|
| Estado | Aceptada |
| Fecha | 03/11/2026 (completada el 05/11/2026 con la casilla de consentimiento y el plan para el correo) |
| Quién decide | Favio Canevaro Asto, con potestad delegada por 1903 Arquitectos |

*Leyenda: "Estado" indica si la decisión está vigente (Aceptada), en discusión (Propuesta) o fue cambiada por otra (Reemplazada). "Fecha" es el día en que se tomó la decisión. "Quién decide" es la persona responsable de la decisión.*

## Contexto

La página de Contacto tiene un formulario con nombre, teléfono, tipo de proyecto, qué quiere hacer el visitante (diseñar, construir o remodelar) y su mensaje. Hay que decidir **adónde va lo que el visitante escribe** al tocar "Enviar".

Estas son las condiciones:

- **El estudio ya atiende por WhatsApp.** Lo primero que pregunta la persona que atiende es el tipo de proyecto y qué quiere hacer el cliente, justo lo que pide el formulario.
- **La web es estática** (ver la ADR 0001): no tiene un servidor propio que reciba y guarde datos.
- **La Ley 29733 de Protección de Datos Personales** pide informar a la persona qué se hace con sus datos y obtener su consentimiento. Cuantos más datos guarde la web o pasen por terceros, más obligaciones hay.
- **El dominio todavía no está comprado** y el estudio aún no elige su correo con dominio. Sin dominio, no se puede probar el envío por correo.
- **El plazo es el 15/11/2026.**

## Opciones consideradas

| Opción | Cómo funciona | A favor | En contra |
|---|---|---|---|
| **WhatsApp con el mensaje ya escrito** | El formulario arma un mensaje con los datos y abre WhatsApp en el celular o la computadora del visitante; él toca "Enviar" | Llega por el canal que el estudio ya atiende. La web no guarda ni transmite datos. Sin servidor ni configuración | El visitante necesita WhatsApp. El mensaje solo llega si el visitante lo envía |
| Enlace de correo (`mailto:`) | Abre el programa de correo del visitante con el mensaje escrito | Sin servidor | Falla si el visitante no tiene un programa de correo configurado, algo común en celulares y computadoras compartidas |
| Servicio externo de formularios (por ejemplo, Formspree o Web3Forms) | Otra empresa recibe los datos y los manda por correo al estudio | Fácil de poner; tiene plan gratuito | Los datos del visitante pasan por un tercero, lo que suma obligaciones legales. Otra cuenta que mantener |
| Función de Cloudflare que manda un correo | Un programa pequeño en Cloudflare recibe los datos y los manda al correo del estudio | Sin terceros fuera de Cloudflare; gratis. Deja un registro de cada consulta en el correo del estudio | Necesita el dominio comprado y el correo con dominio decidido; no se puede probar antes. Los datos quedan guardados en el correo del estudio |
| Sin formulario | Solo los botones de WhatsApp y el correo | Lo más simple | Se pierde la guía que da el formulario: el visitante no sabe qué contar y el estudio tiene que preguntarlo todo |

*Leyenda: "Opción" es la forma de recibir las consultas. "Cómo funciona" la describe en una línea. "A favor" y "En contra" son sus ventajas y desventajas para esta web. "Dominio" es la dirección de la web (`1903arq.com`). "Función de Cloudflare" es un programa pequeño que corre en los servidores de Cloudflare solo cuando alguien lo usa (ver la ADR 0004).*

## Decisión

El formulario **abre WhatsApp con el mensaje ya escrito**, y la web **no guarda ni transmite los datos**: los arma en el navegador del visitante y los pasa a WhatsApp.

- **Campos obligatorios:** nombre y mensaje. El teléfono es opcional, porque en WhatsApp el estudio ya ve el número. El tipo de proyecto y "qué quieres hacer" vienen con una opción elegida.
- **Casilla de consentimiento:** al final del formulario, **desmarcada** y obligatoria para enviar, con un texto como "Acepto el aviso de privacidad y que el estudio use mis datos para responder mi consulta", donde "aviso de privacidad" enlaza a `/privacidad/` (ver la ADR 0007). Va desmarcada porque el consentimiento tiene que ser una acción del visitante, no algo marcado por defecto.
- **Sin JavaScript, el formulario no se muestra.** En su lugar aparece el botón "Escríbenos por WhatsApp", que funciona sin JavaScript. A esto se le llama **mejora progresiva**: la versión básica funciona siempre y el formulario es una mejora para quien puede usarlo.
- **El número de WhatsApp vive en un solo archivo de configuración**, y todos los botones y el formulario lo toman de ahí. Si el estudio cambia de número, se cambia una vez.
- **El correo electrónico sigue visible** en la página de Contacto, para quien no usa WhatsApp.

**Envío por correo, más adelante:** no se agrega mientras el dominio no esté comprado y no se pueda probar. Cuando el estudio compre el dominio y elija su correo, se evalúa agregar una función de Cloudflare que mande la consulta al correo del estudio, como un segundo botón, "Enviar por correo", junto al de WhatsApp. Si el estudio usa Cloudflare Email Routing (el reenvío gratuito de Cloudflare), la función es compatible; si usa otro proveedor de correo, se usa un servicio de envío aparte.

## Consecuencias

**Positivas**

- Las consultas llegan por el canal que el estudio ya atiende, con los datos que necesita para responder.
- La web no guarda datos personales, lo que simplifica cumplir la Ley 29733.
- Nada que configurar, pagar ni proteger en un servidor.
- Funciona incluso sin JavaScript, gracias al botón de respaldo.

**Negativas**

- El visitante necesita WhatsApp. En computadora se abre WhatsApp Web o la aplicación.
- El mensaje solo llega si el visitante toca "Enviar" en su WhatsApp; algunos pueden quedarse a medio camino.
- El estudio no tiene un registro automático de las consultas fuera de su WhatsApp, hasta que se agregue el envío por correo.
