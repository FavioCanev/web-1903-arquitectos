import { z } from "astro/zod";

// Un texto entre corchetes, como "[Descripción pendiente]", marca un dato que el estudio aún no entrega.
const esPendiente = (texto: string) => /^\[.*\]$/.test(texto.trim());

/**
 * Foto de un proyecto (ADR 0011). Mientras no tenga archivo, sus textos pueden quedar [pendientes] y la web
 * muestra el recuadro "Pendiente". Cuando ya tiene archivo, el texto alternativo y el pie tienen que ser reales:
 * así una foto nunca se publica con un texto de relleno (WCAG 2.2 AA, ADR 0013).
 */
export const esquemaFoto = z
  .object({
    /** Archivo de la foto. Sin él se muestra el recuadro "Pendiente". */
    src: z.string().optional(),
    alt: z.string().min(1),
    pie: z.string().min(1),
  })
  .refine((foto) => !foto.src || (!esPendiente(foto.alt) && !esPendiente(foto.pie)), {
    message: "Una foto con archivo necesita su texto alternativo y su pie reales, no [pendientes].",
  });
