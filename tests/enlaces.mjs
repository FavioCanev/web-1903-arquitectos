// Revisa que ningún enlace interno de la web construida (carpeta dist/) esté roto.
// Los enlaces externos no se revisan: dependen de sitios ajenos y harían fallar la revisión sin motivo.
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const dist = "dist";
const paginas = [];
(function recorrer(carpeta) {
  for (const nombre of readdirSync(carpeta)) {
    const ruta = join(carpeta, nombre);
    if (statSync(ruta).isDirectory()) recorrer(ruta);
    else if (nombre.endsWith(".html")) paginas.push(ruta);
  }
})(dist);

const rotos = [];
for (const pagina of paginas) {
  const html = readFileSync(pagina, "utf8");
  for (const [, destino] of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    const archivo = join(dist, destino.endsWith("/") ? `${destino}index.html` : destino);
    if (!existsSync(archivo)) rotos.push(`${pagina}: ${destino}`);
  }
}

if (rotos.length > 0) {
  console.error(`Enlaces internos rotos (${rotos.length}):\n${rotos.join("\n")}`);
  process.exit(1);
}
console.log(`Enlaces internos revisados en ${paginas.length} páginas: ninguno roto.`);
