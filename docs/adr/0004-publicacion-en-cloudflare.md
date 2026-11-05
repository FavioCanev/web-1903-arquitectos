# ADR 0004 — Publicación en Cloudflare

| Campo | Valor |
|---|---|
| Estado | Aceptada |
| Fecha | 05/11/2026 |
| Quién decide | Favio Canevaro Asto, con potestad delegada por 1903 Arquitectos |

*Leyenda: "Estado" indica si la decisión está vigente (Aceptada), en discusión (Propuesta) o fue cambiada por otra (Reemplazada). "Fecha" es el día en que se tomó la decisión. "Quién decide" es la persona responsable de la decisión.*

## Contexto

La web es un sitio estático (ver la ADR 0001): una vez construida, son solo archivos. Hace falta un lugar en internet que los entregue a los visitantes. A ese servicio se le llama **alojamiento** o **hosting**.

Estas son las condiciones:

- **El dominio** (`1903arq.com`) **se compra en Cloudflare**, en una cuenta a nombre del estudio, que el estudio crea y paga.
- **El código está en GitHub**, en un repositorio público de quien mantiene la web.
- **No debe haber costo mensual** si no hace falta.
- **El estudio no debe depender de una sola persona** para que su web siga en línea.

## Opciones consideradas

| Opción | Costo para esta web | A favor | En contra |
|---|---|---|---|
| **Cloudflare** | Gratis | El dominio y la web quedan en la misma cuenta, sin conectar servicios entre sí. Publica solo cada vez que cambia el repositorio. Sirve los archivos desde servidores cercanos al visitante | Hay que aprender su panel |
| GitHub Pages | Gratis | Vive junto al código | El dominio se conecta a mano desde Cloudflare. Pensado para proyectos personales o de código abierto, no para la web de una empresa |
| Netlify | Gratis | Fácil de usar; publica solo con cada cambio | Un servicio más, con su propia cuenta, aparte del dominio |
| Vercel | Gratis | Rápido; publica solo con cada cambio | Un servicio más; su plan gratuito es para uso personal, no comercial |
| Hosting tradicional de pago (por ejemplo, Hostinger) | Pago mensual o anual | Suele incluir correo con el dominio | Se paga por algo que la web no necesita (servidor con PHP y base de datos); los archivos se suben a mano |

*Leyenda: "Opción" es el servicio de alojamiento evaluado. "Costo para esta web" es lo que costaría con el tamaño y las visitas esperadas. "A favor" y "En contra" son sus ventajas y desventajas para esta web. "Dominio" es la dirección de la web (`1903arq.com`). "Servidores cercanos al visitante" se refiere a una red de distribución de contenidos (CDN): copias de la web en muchas ciudades del mundo, para que cargue rápido desde cualquier lugar.*

## Decisión

La web se publica en **Cloudflare**, con su servicio para sitios estáticos: **Pages, o Workers con archivos estáticos si es el producto vigente al configurarlo**. Cloudflare está unificando ambos productos; el día de la configuración se revisa en su documentación cuál recomienda para proyectos nuevos, y se anota en el manual de mantenimiento.

- **La web va en la cuenta de Cloudflare del estudio**, la misma del dominio. Quien mantiene la web tiene acceso como miembro, no como dueño.
- **Cloudflare se conecta al repositorio de GitHub.** Cada cambio que entra en la rama principal (`main`) se construye y se publica solo.
- **Cada *pull request* tiene su propia vista previa:** una dirección de prueba aparte donde el estudio puede ver un cambio antes de que llegue a la web real. Un *pull request* es una propuesta de cambio que se revisa antes de aplicarla.
- **Al terminar el periodo de prácticas de quien mantiene la web**, el estudio hace una copia del repositorio en su propia cuenta de GitHub (un *fork*) y conecta Cloudflare a esa copia. Así, el repositorio original puede quedarse como portafolio de su autor sin que la web del estudio dependa de él.

El plan gratuito de Cloudflare alcanza de sobra para una web de este tamaño. Sus límites (cantidad de publicaciones al mes, cantidad y tamaño de archivos) se revisan al configurarla, porque Cloudflare los cambia con el tiempo.

## Consecuencias

**Positivas**

- Sin costo mensual de alojamiento.
- El dominio y la web están en un solo lugar, a nombre del estudio.
- Publicar es automático: no hay archivos que subir a mano ni pasos que olvidar.
- El estudio puede revisar cada cambio en una vista previa antes de publicarlo.
- La web carga rápido desde cualquier lugar.

**Negativas**

- Mientras no se haga el *fork*, la publicación depende del repositorio personal de quien mantiene la web: si ese repositorio se borra o se cambia de nombre, la web deja de actualizarse (aunque sigue en línea con la última versión publicada).
- Cloudflare puede cambiar sus productos o los límites de su plan gratuito. Si pasa, el plan B es GitHub Pages o Netlify: como la web es estática, se puede mudar sin cambiar el código.
- El correo con el dominio no viene incluido; se decide aparte, después de publicar la web.
