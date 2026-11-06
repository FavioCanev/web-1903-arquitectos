# ADR 0009 — Listón animado con el patrón de baldosa

| Campo | Valor |
|---|---|
| Estado | Aceptada |
| Fecha | 03/11/2026 (completada el 06/11/2026 con el comportamiento en celulares) |
| Quién decide | 1903 Arquitectos (pidió el listón) y Favio Canevaro Asto (definió cómo hacerlo) |

*Leyenda: "Estado" indica si la decisión está vigente (Aceptada), en discusión (Propuesta) o fue cambiada por otra (Reemplazada). "Fecha" es el día en que se tomó la decisión. "Quién decide" es la persona o el equipo responsable de la decisión.*

## Contexto

El patrón de baldosa es la firma gráfica del estudio. Al revisar los wireframes, el estudio pidió **un listón vertical con el patrón que vaya bajando a medida que el visitante baja por la página**, como una barra de avance. Debe pasar **por detrás del texto y de los bloques de color, pero por delante del fondo blanco**.

Esto plantea tres preguntas técnicas: cómo animarlo sin que la web se vuelva lenta, dónde ubicarlo para que no tape el contenido y qué hacer en pantallas pequeñas.

## Opciones consideradas

| Opción | Cómo funciona | A favor | En contra |
|---|---|---|---|
| **Animación de CSS ligada al scroll, con JavaScript de respaldo** | El navegador estira el listón según cuánto se bajó en la página, sin programas extra. Donde el navegador no lo soporta, unas pocas líneas de JavaScript hacen lo mismo | Sin librerías ni peso extra. Fluida, porque el navegador la mueve por su cuenta | Dos caminos que mantener (el CSS y el respaldo) |
| Solo JavaScript | Un programa escucha cada movimiento del scroll y estira el listón | Funciona igual en todos los navegadores | Trabaja en cada movimiento del scroll; puede trabarse en celulares lentos |
| GSAP (librería de animación, gratuita) | Su complemento de scroll maneja la animación | Muy potente y probada | Suma bastante código que el visitante descarga, para una sola animación |
| Listón fijo, sin animación | El patrón está siempre completo | Lo más simple | No es lo que pidió el estudio |

*Leyenda: "Opción" es la técnica evaluada. "Cómo funciona" la describe en una línea. "A favor" y "En contra" son sus ventajas y desventajas para esta web. "Scroll" es el desplazamiento vertical de la página. "Librería" es un paquete de código hecho por terceros que se agrega a la web.*

## Decisión

El listón se hace con una **animación de CSS ligada al scroll** (la propiedad `animation-timeline: scroll()`), con **JavaScript de respaldo** para los navegadores que no la soportan. Hoy la soportan Chrome, Edge y Safari en sus versiones recientes; Firefox todavía no la tiene activada por defecto, y ahí actúa el respaldo.

- **Ubicación:** pegado al borde izquierdo, en el margen donde no hay texto, de hasta 40 px de ancho. Se probó con 56 px y quedaba pegado a los títulos.
- **Capas:** pasa por detrás de las secciones con fondo de color, así que solo se ve sobre el fondo casi blanco.
- **Pantallas angostas:** se oculta en pantallas de menos de unos 600 px. En un celular, el margen solo deja 8 px de ancho y a ese tamaño el patrón se ve como una franja de puntos, no como baldosas. En celular, el patrón sigue apareciendo completo en el pie de página.
- **Accesibilidad:** si el dispositivo tiene activada la opción "reducir movimiento", el listón aparece completo y quieto. Es decorativo, así que los lectores de pantalla lo ignoran.
- **Excepción a una regla de diseño:** la regla de maquetación del proyecto es no usar posiciones fijas ni absolutas. El listón es una de las dos excepciones, junto con el botón flotante de WhatsApp, porque necesita quedarse fijo en la pantalla mientras el contenido se desplaza.

## Consecuencias

**Positivas**

- El patrón del estudio acompaña todo el recorrido de la página, sin tapar el contenido ni las fotos.
- No agrega librerías: el visitante no descarga código extra por el listón.
- Funciona en todos los navegadores, con la versión nativa o con el respaldo.
- Respeta a quienes prefieren menos movimiento.

**Negativas**

- Hay dos caminos que mantener: si se cambia el comportamiento del listón, hay que cambiar el CSS y el respaldo.
- En celulares no se ve el listón.
- Cuando Firefox active la animación nativa, el respaldo seguirá ahí sin hacer falta; se puede quitar en una revisión futura.
