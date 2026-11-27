import { estudio } from "../config";

export type Temporada = "normal" | "carnavales" | "fiestas-patrias" | "halloween" | "navidad";

export interface RangoTemporada {
  readonly temporada: Exclude<Temporada, "normal">;
  readonly inicioMes: number;
  readonly inicioDia: number;
  readonly finMes: number;
  readonly finDia: number;
}

export const RANGOS_TEMPORADA: readonly RangoTemporada[] = [
  // Desde la segunda semana de febrero (8 feb) hasta antes de la segunda semana de marzo (7 mar)
  { temporada: "carnavales", inicioMes: 2, inicioDia: 8, finMes: 3, finDia: 7 },
  // Quincena patria
  { temporada: "fiestas-patrias", inicioMes: 7, inicioDia: 15, finMes: 7, finDia: 31 },
  // Todo octubre
  { temporada: "halloween", inicioMes: 10, inicioDia: 1, finMes: 10, finDia: 31 },
  // Todo diciembre
  { temporada: "navidad", inicioMes: 12, inicioDia: 1, finMes: 12, finDia: 31 },
];

export const ARCHIVOS_LOGO: Record<Temporada, string> = {
  normal: "logo-h-vino.svg",
  carnavales: "logo-h-carnavales.svg",
  "fiestas-patrias": "logo-h-fiestas-patrias.svg",
  halloween: "logo-h-halloween.svg",
  navidad: "logo-h-navidad.svg",
};

const TEMPORADAS_VALIDAS = new Set<string>(Object.keys(ARCHIVOS_LOGO));

/** Devuelve la temporada activa para un par mes (1-12) y día (1-31). */
export function temporadaPorMesDia(mes: number, dia: number): Temporada {
  const codigo = mes * 100 + dia;
  for (const r of RANGOS_TEMPORADA) {
    if (codigo >= r.inicioMes * 100 + r.inicioDia && codigo <= r.finMes * 100 + r.finDia) {
      return r.temporada;
    }
  }
  return "normal";
}

/** Devuelve la temporada vigente en la zona horaria del estudio (por defecto America/Lima). */
export function temporadaPorFecha(fecha: Date = new Date(), zonaHoraria: string = estudio.zonaHoraria): Temporada {
  const partes = new Intl.DateTimeFormat("en-US", {
    timeZone: zonaHoraria,
    month: "numeric",
    day: "numeric",
  }).formatToParts(fecha);
  const mes = Number(partes.find((p) => p.type === "month")?.value);
  const dia = Number(partes.find((p) => p.type === "day")?.value);
  if (!Number.isFinite(mes) || !Number.isFinite(dia)) return "normal";
  return temporadaPorMesDia(mes, dia);
}

/** Resuelve la temporada permitiendo anulación por query (?temporada=...) para pruebas. */
export function resolverTemporada(search: string, fecha: Date = new Date(), zonaHoraria: string = estudio.zonaHoraria): Temporada {
  const param = new URLSearchParams(search).get("temporada")?.trim().toLowerCase();
  if (param && TEMPORADAS_VALIDAS.has(param)) return param as Temporada;
  return temporadaPorFecha(fecha, zonaHoraria);
}

/** Reemplaza el archivo SVG del logo horizontal conservando cualquier prefijo de BASE_URL. */
export function rutaLogoTemporada(srcActual: string, temporada: Temporada): string {
  const archivo = ARCHIVOS_LOGO[temporada];
  return /logo-h-[^/]+\.svg$/i.test(srcActual)
    ? srcActual.replace(/logo-h-[^/]+\.svg$/i, archivo)
    : `/img/${archivo}`;
}
