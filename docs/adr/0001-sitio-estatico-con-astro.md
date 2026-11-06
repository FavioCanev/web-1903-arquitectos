# ADR 0001 — Sitio estático generado con Astro

| Campo | Valor |
|---|---|
| Estado | Aceptada |
| Fecha | 05/11/2026 |
| Quién decide | Favio Canevaro Asto, con potestad delegada por 1903 Arquitectos |

*Leyenda: "Estado" indica si la decisión está vigente (Aceptada), en discusión (Propuesta) o fue cambiada por otra (Reemplazada). "Fecha" es el día en que se tomó la decisión. "Quién decide" es la persona responsable de la decisión.*

## Contexto

1903 Arquitectos necesita una web de portafolio: mostrar sus obras terminadas, sus servicios, sus cursos y cómo contactarlo. Estas son las condiciones que pesan en la elección de la tecnología:

- **El contenido casi no cambia.** No hay usuarios que inicien sesión, ni compras, ni datos que guardar. Los cambios los hace una sola persona a pedido del estudio, sin panel de administración (ver la ADR 0003).
- **Son muchas páginas que se parecen.** Hay unas 6 páginas generales y una página por proyecto (hoy, unos 15). Todas comparten la barra de navegación y el pie, y las páginas de proyecto usan la misma plantilla con distintos datos y fotos.
- **Las fotos son las protagonistas** y llegan en alta resolución, así que hay que servirlas livianas para que la web cargue rápido en un celular.
- **Habrá dos idiomas.** La web se publica en español y después se agrega el inglés.
- **Debe ser barata de mantener:** solo herramientas gratuitas y, en lo posible, sin un servidor que haya que vigilar y actualizar.
- **Quien la mantenga puede cambiar.** Hoy la mantiene un practicante; después puede hacerlo otra persona, que debe poder entenderla sin haber estado en las reuniones.
- **Hay un plazo corto:** la web debe publicarse antes del 15/11/2026.

Un **sitio estático** es una web hecha solo de archivos (HTML, CSS, imágenes) que el navegador recibe tal cual, sin un programa en el servidor que arme cada página en el momento. Un **generador de sitios estáticos** es la herramienta que produce esos archivos a partir de plantillas y datos; a ese paso se le llama "construir" la web.

## Opciones consideradas

| Opción | Qué es | A favor | En contra |
|---|---|---|---|
| HTML escrito a mano | Un archivo HTML por página, como los wireframes actuales | Nada que instalar ni aprender | La barra y el pie se repiten en más de 20 archivos; cambiar el menú obliga a editarlos todos. Sin optimización de fotos ni apoyo para dos idiomas |
| Script propio en Python | Un programa corto que arma las páginas a partir de plantillas | Python ya está instalado; sin dependencias externas | Habría que programar a mano los dos idiomas y la optimización de fotos; es código propio que nadie más conoce |
| Laravel | Framework de PHP que arma cada página en un servidor, en el momento | Muy completo; tiene componentes (Blade) | Necesita un servidor con PHP, que se paga y hay que mantener actualizado por seguridad, para una web que no guarda nada |
| React con Next.js | Librería de interfaces (React) con su herramienta para generar páginas (Next.js) | Muy usado; puede exportar un sitio estático | Envía al navegador el código de React aunque la página solo muestre fotos y texto: más peso y más lenta en celulares. Pensado para aplicaciones interactivas |
| Angular | Framework completo para aplicaciones en el navegador | Muy estructurado | Mismo problema que React, con más peso y una curva de aprendizaje mayor |
| Vue con Nuxt | Librería de interfaces (Vue) con su herramienta para generar páginas (Nuxt) | Más simple que React; puede generar un sitio estático | Mismo problema: envía el código de Vue al navegador sin necesitarlo |
| Eleventy | Generador de sitios estáticos, gratuito y de código abierto | Liviano, no envía JavaScript; tiene complementos para fotos y para dos idiomas | Las plantillas usan lenguajes propios (Nunjucks, Liquid); la revisión de datos y los dos idiomas se arman con complementos aparte |
| **Astro** | Generador de sitios estáticos con componentes, gratuito y de código abierto | No envía JavaScript salvo el que se agregue a propósito. Componentes muy parecidos al HTML. Revisa los datos de cada proyecto con TypeScript. Optimización de fotos y dos idiomas incluidos | Hay que instalar Node y algunas dependencias; quien la mantenga debe aprender Astro, aunque sea poco |

*Leyenda: "Opción" es la tecnología evaluada. "Qué es" la describe en una línea. "A favor" y "En contra" son sus ventajas y desventajas para esta web en particular, no en general. "Framework" es un conjunto de herramientas y reglas para construir aplicaciones. "Componente" es una pieza reutilizable de la página, por ejemplo la tarjeta de un proyecto. "TypeScript" es JavaScript con tipos: permite definir qué datos debe tener cada proyecto y avisar si falta alguno. "Node" es el programa que ejecuta estas herramientas en la computadora de quien construye la web; los visitantes no lo necesitan.*

## Decisión

Construimos la web como un **sitio estático generado con Astro 7**.

- **Las páginas se arman con componentes y plantillas** (por ejemplo `Nav`, `Pie`, `TarjetaProyecto`). La barra y el pie se escriben una sola vez.
- **Cada proyecto es un archivo de datos y textos**, y una única plantilla genera todas las páginas de proyecto. Los datos se revisan con TypeScript al construir la web: si falta un dato obligatorio, la construcción falla en lugar de publicar una página incompleta.
- **El resultado es HTML y CSS.** El JavaScript se limita a lo indispensable (el listón animado y el formulario de contacto).
- **El CSS y el HTML de los wireframes se reutilizan**: se pasan a componentes, no se rehacen.

La versión exacta de Astro y de sus dependencias queda fijada en el archivo `package.json` del proyecto.

Descartamos Eleventy, que también hubiera servido, por tres razones concretas: los componentes de Astro se parecen más al HTML que ya escribimos, la revisión de datos con TypeScript viene incluida, y la optimización de fotos y los dos idiomas no requieren complementos aparte.

## Consecuencias

**Positivas**

- La web es rápida y liviana: el visitante recibe archivos listos, sin JavaScript innecesario.
- Agregar un proyecto es agregar un archivo de datos y sus fotos, sin tocar la plantilla.
- Un cambio en la barra o en el pie se hace en un solo lugar.
- Las fotos se sirven en el tamaño y el formato justos para cada pantalla.
- No hay servidor ni base de datos que mantener ni proteger; la web se puede publicar gratis (ver la ADR 0004).
- El segundo idioma se agrega sin rehacer la estructura.

**Negativas**

- Se agregan Node y unas cuantas dependencias, que hay que mantener actualizadas.
- Quien mantenga la web debe aprender lo básico de Astro.
- La web hay que construirla antes de publicarla; no basta con subir archivos a mano.
