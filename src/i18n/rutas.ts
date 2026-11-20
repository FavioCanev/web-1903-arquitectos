export type Idioma = "es" | "en";

export type ClavePagina =
  | "inicio"
  | "proyectos"
  | "servicios"
  | "cursos"
  | "estudio"
  | "contacto"
  | "privacidad"
  | "accesibilidad";

const RUTAS: Record<ClavePagina, Record<Idioma, string>> = {
  inicio: { es: "/", en: "/en/" },
  proyectos: { es: "/proyectos/", en: "/en/projects/" },
  servicios: { es: "/servicios/", en: "/en/services/" },
  cursos: { es: "/cursos/", en: "/en/courses/" },
  estudio: { es: "/estudio/", en: "/en/studio/" },
  contacto: { es: "/contacto/", en: "/en/contact/" },
  privacidad: { es: "/privacidad/", en: "/en/privacy/" },
  accesibilidad: { es: "/accesibilidad/", en: "/en/accessibility/" },
};

const PARES_RUTAS = Object.values(RUTAS);

/** Devuelve la URL fija de una página en el idioma pedido. */
export function ruta(pagina: ClavePagina, lang: Idioma = "es"): string {
  return RUTAS[pagina][lang];
}

/** Devuelve la URL de un proyecto (obra terminada o render con vistas) conservando su slug. */
export function rutaProyecto(id: string, lang: Idioma = "es"): string {
  return lang === "en" ? `/en/projects/${id}/` : `/proyectos/${id}/`;
}

/** Quita el prefijo BASE_URL (p. ej. /web-1903-arquitectos en GitHub Pages) y normaliza barras. */
export function limpiarBase(pathname: string, baseUrl = "/"): string {
  const base = baseUrl.replace(/\/$/, "");
  let limpia = pathname || "/";
  if (base && (limpia === base || limpia.startsWith(`${base}/`))) {
    limpia = limpia.slice(base.length) || "/";
  }
  if (!limpia.startsWith("/")) limpia = `/${limpia}`;
  const ultimoSegmento = limpia.split("/").pop() ?? "";
  if (!limpia.endsWith("/") && !ultimoSegmento.includes(".")) {
    limpia = `${limpia}/`;
  }
  return limpia;
}

/**
 * Traduce la ruta actual a su equivalente exacta en el idioma destino.
 * Si la ruta no tiene par directo (por ejemplo 404.html), devuelve la portada del idioma destino.
 */
export function alternarRuta(pathname: string, destino: Idioma, baseUrl = "/"): string {
  const limpia = limpiarBase(pathname, baseUrl);
  for (const par of PARES_RUTAS) {
    if (limpia === par.es || limpia === par.en) return par[destino];
  }
  const proyectoEs = limpia.match(/^\/proyectos\/([^/]+)\/$/);
  if (proyectoEs) return rutaProyecto(proyectoEs[1], destino);
  const proyectoEn = limpia.match(/^\/en\/projects\/([^/]+)\/$/);
  if (proyectoEn) return rutaProyecto(proyectoEn[1], destino);
  return RUTAS.inicio[destino];
}
