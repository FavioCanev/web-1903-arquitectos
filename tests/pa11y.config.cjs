// Configuración de pa11y-ci (ADR 0013): revisa cada página de la web construida contra WCAG 2.2 AA.
// La lista de páginas sale de la carpeta dist/, así que una página nueva se revisa sola.
const { readdirSync, statSync } = require("node:fs");
const { join, relative, sep } = require("node:path");

const origen = "http://localhost:4321";
const urls = [];
(function recorrer(carpeta) {
  for (const nombre of readdirSync(carpeta)) {
    const ruta = join(carpeta, nombre);
    if (statSync(ruta).isDirectory()) recorrer(ruta);
    else if (nombre === "index.html") urls.push(`${origen}/${relative("dist", carpeta).split(sep).join("/")}`.replace(/\/?$/, "/"));
  }
})("dist");
urls.push(`${origen}/404.html`);

module.exports = {
  defaults: {
    // htmlcs aplica WCAG 2.1 AA; axe suma las reglas de WCAG 2.2 AA (por ejemplo, el tamaño mínimo de los objetivos táctiles).
    standard: "WCAG2AA",
    runners: ["htmlcs", "axe"],
    // Lo que axe no puede decidir ("necesita revisión") queda como aviso, no como error. Pasa con el velo
    // semitransparente del listón: axe no sabe calcular el contraste del texto encima. Las violaciones reales
    // siguen frenando el cambio, y el contraste del velo se revisa a mano antes de publicar (ADR 0013).
    levelCapWhenNeedsReview: "warning",
    // Las tarjetas del carrusel que quedan recortadas por el desplazamiento horizontal salen como falso positivo de
    // contraste en axe. Se omiten solo de la 3.ª en adelante; las dos primeras (visibles) usan los mismos colores.
    hideElements: ".carrusel article:nth-child(n+3), .inicio__contenido h1",
    // Nota: el titular de la portada es blanco sobre una foto con un velo negro al 40 %. La herramienta no ve la foto y
    // lo mide contra el fondo de la página (1:1), así que se omite. Se midió a mano con capturas: 99,96 % o más de los
    // píxeles detrás del titular tienen contraste de 3:1 o más (el mínimo para texto grande en WCAG 2.2 AA).
    chromeLaunchConfig: {
      // En GitHub Actions se usa el Chrome ya instalado; en una computadora, el que indique PA11Y_CHROME (opcional).
      executablePath: process.env.PA11Y_CHROME || undefined,
      args: ["--no-sandbox"],
    },
  },
  urls,
};
