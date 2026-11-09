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
    // Las tarjetas del carrusel que quedan recortadas por el desplazamiento horizontal salen como falso positivo de
    // contraste en axe. Se omiten solo de la 3.ª en adelante; las dos primeras (visibles) usan los mismos colores.
    hideElements: ".carrusel article:nth-child(n+3)",
    chromeLaunchConfig: {
      // En GitHub Actions se usa el Chrome ya instalado; en una computadora, el que indique PA11Y_CHROME (opcional).
      executablePath: process.env.PA11Y_CHROME || undefined,
      args: ["--no-sandbox"],
    },
  },
  urls,
};
