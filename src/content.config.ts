import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Cada proyecto es un archivo en src/content/proyectos/. El nombre del archivo es la dirección de su página
// (minúsculas, sin tildes, con guiones). Si falta un dato obligatorio, la construcción falla (mapa del sitio).
// Un dato que el estudio aún no entrega se deja fuera (area, anio, encargo, solucion) o se escribe entre [corchetes].
const foto = z.object({
  /** Archivo de la foto. Sin él se muestra el recuadro "Pendiente". */
  src: z.string().optional(),
  alt: z.string().min(1),
  pie: z.string().min(1),
});

const proyectos = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/proyectos" }),
  schema: z.object({
    nombre: z.string().min(1),
    tipo: z.string().min(1),
    /** Un proyecto puede tener varias categorías; las define el estudio en la hoja. */
    categorias: z.array(z.string().min(1)).min(1),
    ciudad: z.string().min(1),
    /** "render" va en "En desarrollo", nunca mezclado con la obra terminada. */
    estado: z.enum(["terminado", "render"]),
    /** Marca los renders cuya condición el estudio aún no confirma en la hoja. */
    porConfirmar: z.boolean().default(false),
    /** Posición en la lista; define el "anterior" y el "siguiente". */
    orden: z.number().int(),
    /** Proyecto destacado de la portada. */
    destacado: z.boolean().default(false),
    /** Si aparece en el collage del inicio. */
    inicio: z.boolean().default(false),
    area: z.number().positive().optional(),
    anio: z.number().int().optional(),
    fotografo: z.string().optional(),
    encargo: z.string().optional(),
    solucion: z.string().optional(),
    fotos: z.array(foto).min(1),
  }),
});

export const collections = { proyectos };
