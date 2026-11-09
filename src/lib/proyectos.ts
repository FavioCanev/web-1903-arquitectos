import { getCollection, type CollectionEntry } from "astro:content";

export type Proyecto = CollectionEntry<"proyectos">;

const porOrden = (a: Proyecto, b: Proyecto) => a.data.orden - b.data.orden;

export async function obrasTerminadas(): Promise<Proyecto[]> {
  return (await getCollection("proyectos", (p) => p.data.estado === "terminado")).sort(porOrden);
}

export async function rendersEnDesarrollo(): Promise<Proyecto[]> {
  return (await getCollection("proyectos", (p) => p.data.estado === "render")).sort(porOrden);
}

export const urlProyecto = (p: Proyecto) => `/proyectos/${p.id}/`;

/** Un dato que el estudio aún no entregó se muestra entre corchetes, nunca inventado. */
export const datoOPendiente = (valor: string | number | undefined, etiqueta: string) =>
  valor === undefined ? `[${etiqueta}]` : String(valor);

const esPendiente = (texto: string) => texto.startsWith("[");

/** "Cafétos — interiorismo comercial en Cajamarca · 1903 Arquitectos" (mapa del sitio). */
export function tituloProyecto({ nombre, tipo, ciudad }: Proyecto["data"]): string {
  const lugar = esPendiente(ciudad) ? "" : ` en ${ciudad}`;
  return `${nombre} — ${tipo.toLowerCase()}${lugar} · 1903 Arquitectos`;
}

/** Categorías distintas de una lista de proyectos, para los filtros. */
export const categoriasDe = (proyectos: Proyecto[]) => [...new Set(proyectos.flatMap((p) => p.data.categorias))];
