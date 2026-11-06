# ADR 0007 — Privacidad: web sin cookies, mapa como imagen y aviso de privacidad

| Campo | Valor |
|---|---|
| Estado | Aceptada |
| Fecha | 05/11/2026 (completada el 06/11/2026 con el plan B para el mapa) |
| Quién decide | Favio Canevaro Asto, con potestad delegada por 1903 Arquitectos |

*Leyenda: "Estado" indica si la decisión está vigente (Aceptada), en discusión (Propuesta) o fue cambiada por otra (Reemplazada). "Fecha" es el día en que se tomó la decisión. "Quién decide" es la persona responsable de la decisión.*

## Contexto

La web debe cumplir la **Ley 29733 de Protección de Datos Personales** del Perú y su reglamento. La ley da a toda persona el derecho a saber quién tiene sus datos, para qué los usa y a quién pedirle que se los muestre, corrija o borre. A estos se les llama **derechos ARCO**: Acceso, Rectificación, Cancelación y Oposición.

Varias piezas de la web pueden tratar datos de los visitantes:

- **Las estadísticas de visitas**, que muestran si la web le trae clientes al estudio.
- **El mapa** de la página de Contacto.
- **La fuente tipográfica** Jost (ver la ADR 0008).
- **El formulario de contacto**, que abre WhatsApp (ver la ADR 0005).

Una **cookie** es un archivo pequeño que un sitio guarda en el navegador del visitante para reconocerlo después. Las cookies que identifican a una persona obligan a pedirle permiso antes de usarlas, con un aviso para aceptarlas o rechazarlas, y a publicar una política de cookies. Si los datos además viajan a servidores fuera del Perú, la ley suma reglas especiales.

## Opciones consideradas

| Pieza | Opción con Google | Opción elegida | Por qué |
|---|---|---|---|
| Estadísticas | Google Analytics: usa cookies, identifica a cada visitante y manda sus datos fuera del Perú | **Cloudflare Web Analytics**: sin cookies y sin identificar a nadie | Muestra lo que el estudio necesita (páginas más vistas, país, tipo de dispositivo y de dónde llegó el visitante) sin pedir permiso ni poner un aviso de cookies |
| Mapa | Mapa de Google insertado: pone cookies y registra a cada visitante de Contacto, aunque no toque el mapa | **Imagen del mapa** con el botón "Cómo llegar", que abre Google Maps solo si el visitante lo toca | El visitante necesita llegar, no mover un mapa. La imagen es un archivo más de la web, no conecta al visitante con nadie y pesa menos |
| Fuente | Jost desde Google Fonts: Google recibe la dirección IP de cada visitante | **Jost alojada en la propia web** | Funciona igual, carga más rápido y Google no se entera de quién visita |
| Textos legales | Política de cookies, aviso de cookies y aviso de privacidad, con revisión de un abogado | **Solo un aviso de privacidad** corto, en lenguaje simple | Sin cookies no hace falta política ni aviso de cookies |

*Leyenda: "Pieza" es la parte de la web que trata datos. "Opción con Google" es la alternativa con servicios de Google y su efecto sobre los visitantes. "Opción elegida" es lo que se decidió. "Por qué" resume la razón. "Dirección IP" es el número con el que cada conexión se identifica en internet; la ley puede considerarla un dato personal.*

### La imagen del mapa: dos fuentes posibles

| Fuente | Qué permiten sus reglas | Condiciones |
|---|---|---|
| **OpenStreetMap** (plan A) | Su licencia abierta permite expresamente usar sus mapas en cualquier web, incluso comercial | Poner "© OpenStreetMap" cerca del mapa |
| Captura de Google Maps (plan B) | Sus reglas para webs autorizan sin permiso solo el mapa insertado, y para uso comercial remiten a su plataforma de pago. Una captura en una web comercial no está permitida ni prohibida de forma expresa, y Google no da excepciones | Dejar dentro de la imagen, sin recortar, el texto de atribución de Google (por ejemplo, "Datos del mapa ©2026 Google"); no cambiar los colores ni el aspecto; no usar la vista satelital ni Google Earth |

*Leyenda: "Fuente" es de dónde sale la imagen del mapa. "Qué permiten sus reglas" resume las condiciones de uso publicadas por cada proveedor. "Condiciones" es lo que hay que cumplir para usarla. "Atribución" es el crédito obligatorio al dueño del mapa.*

## Decisión

La web **no usa cookies**. En consecuencia, no lleva política ni aviso de cookies.

- **Estadísticas:** Cloudflare Web Analytics, que se activa desde la cuenta de Cloudflare del estudio (ver la ADR 0004).
- **Mapa:** una imagen exportada de **OpenStreetMap**, con el crédito "© OpenStreetMap", y el botón "Cómo llegar" que abre Google Maps. Si la imagen no convence, el plan B es una **captura de Google Maps** con su atribución completa dentro de la imagen; el estudio acepta poner ese crédito y asume que esa forma de uso no está autorizada de forma expresa por Google. La imagen la exporta quien mantiene la web, no se genera con código.
- **Fuente:** Jost alojada en la propia web (ver la ADR 0008).
- **Aviso de privacidad:** una página `/privacidad/`, enlazada desde el pie y desde la casilla de consentimiento del formulario (ver la ADR 0005). Dice, en lenguaje simple:
  - **quién es el responsable de los datos:** 1903 ARQUITECTOS S.A.C., RUC 20613550225, Jr. Amancaes 262, Cajamarca;
  - **a dónde escribir** para ejercer los derechos ARCO: 1903arq@gmail.com;
  - **qué mide la web:** qué páginas se visitan, desde qué país, en qué tipo de dispositivo y de dónde llegó el visitante, sin identificar a nadie y sin cookies;
  - **quiénes reciben datos por usar la web:** Cloudflare, que aloja la web y mide las visitas, y WhatsApp, que recibe el mensaje del formulario cuando el visitante lo envía;
  - **qué pasa con los enlaces:** "algunos enlaces te llevan a otros sitios (Hotmart, Google Maps, Instagram y Facebook), que tienen sus propias políticas de privacidad".
- **El texto del aviso lo revisa y aprueba el estudio** antes de publicarlo. Quien mantiene la web no es abogado; si el estudio tiene un asesor legal de confianza, conviene que también lo lea.

## Consecuencias

**Positivas**

- Sin aviso de cookies: el visitante entra directo al portafolio, sin una ventana que tape las fotos.
- Cumplir la Ley 29733 es más simple: la web casi no trata datos personales.
- La web es más rápida, porque no carga programas de terceros al abrirse.
- El estudio igual sabe cuántas visitas tiene y de dónde llegan.

**Negativas**

- Las estadísticas de Cloudflare dan menos detalle que Google Analytics (por ejemplo, no siguen el recorrido de cada visitante).
- El mapa no se puede mover ni ampliar dentro de la web; para eso está el botón "Cómo llegar".
- Si se usa el plan B del mapa, queda un riesgo menor: Google podría pedir que se retire la imagen. En ese caso, se vuelve a OpenStreetMap.
- Si en el futuro se agrega algo que use cookies (por ejemplo, un video insertado de YouTube o el mapa insertado), hay que revisar esta decisión y agregar el aviso y la política de cookies.
