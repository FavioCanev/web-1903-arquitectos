import { getCollection, type CollectionEntry } from "astro:content";
import { rutaProyecto, type Idioma } from "../i18n/rutas";
import { textos, traducirCategoria } from "../i18n/textos";

export type Proyecto = CollectionEntry<"proyectos">;

const porOrden = (a: Proyecto, b: Proyecto) => a.data.orden - b.data.orden;

export async function obrasTerminadas(): Promise<Proyecto[]> {
  return (await getCollection("proyectos", (p) => p.data.estado === "terminado")).sort(porOrden);
}

export async function rendersEnDesarrollo(): Promise<Proyecto[]> {
  return (await getCollection("proyectos", (p) => p.data.estado === "render")).sort(porOrden);
}

/** Los renders con al menos una imagen real ya tienen su propia página de proyecto. */
export const tienePagina = (p: Proyecto) =>
  p.data.estado === "terminado" || p.data.fotos.some((f) => Boolean(f.src));

export const urlProyecto = (p: Proyecto, lang: Idioma = "es") => rutaProyecto(p.id, lang);

/** Un dato que el estudio aún no entregó se muestra entre corchetes, nunca inventado. */
export const datoOPendiente = (valor: string | number | undefined, etiqueta: string) =>
  valor === undefined ? `[${etiqueta}]` : String(valor);

const esPendiente = (texto: string) => texto.startsWith("[");

/** "Cafétos — interiorismo comercial en Cajamarca · 1903 Arquitectos" (mapa del sitio). */
export function tituloProyecto({ nombre, tipo, ciudad }: Proyecto["data"], lang: Idioma = "es"): string {
  const tipoLocalizado = traducirCategoria(tipo, lang).toLowerCase();
  const lugar = esPendiente(ciudad) ? "" : `${textos(lang).proyecto.enPrefijo}${ciudad}`;
  return `${nombre} — ${tipoLocalizado}${lugar} · 1903 Arquitectos`;
}

/** Devuelve el texto alternativo de la foto en el idioma pedido (con respaldo al español si falta altEn). */
export const altFoto = (foto: { alt: string; altEn?: string }, lang: Idioma = "es"): string =>
  lang === "en" && foto.altEn ? foto.altEn : foto.alt;

/** Categorías distintas de una lista de proyectos, para los filtros. Las [pendientes] no son un filtro. */
export const categoriasDe = (proyectos: Proyecto[]) =>
  [...new Set(proyectos.flatMap((p) => p.data.categorias))].filter((c) => !esPendiente(c));

/** Rutas estáticas compartidas entre la versión en español y la versión en inglés de cada proyecto. */
export async function obtenerRutasProyectos() {
  const obras = await obrasTerminadas();
  const renders = (await rendersEnDesarrollo()).filter(tienePagina);
  const generar = (lista: Proyecto[]) =>
    lista.map((proyecto, i) => ({
      params: { id: proyecto.id },
      props: {
        proyecto,
        // La lista da la vuelta dentro de su propio grupo: la última enlaza a la primera sin mezclar terminadas y renders.
        anterior: lista[(i - 1 + lista.length) % lista.length],
        siguiente: lista[(i + 1) % lista.length],
      },
    }));
  return [...generar(obras), ...generar(renders)];
}
