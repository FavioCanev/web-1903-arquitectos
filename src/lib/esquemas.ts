import { z } from "astro/zod";
import type { SchemaContext } from "astro:content";

// Un texto entre corchetes, como "[Descripción pendiente]", marca un dato que el estudio aún no entrega.
const esPendiente = (texto: string) => /^\[.*\]$/.test(texto.trim());

/**
 * Foto de un proyecto (ADR 0011). Mientras no tenga archivo, su texto alternativo puede quedar [pendiente] y la web
 * muestra el recuadro "Pendiente". Cuando ya tiene archivo, el texto alternativo tiene que ser real (WCAG 2.2 AA,
 * ADR 0013).
 * `src` es el archivo en src/assets/; Astro lo optimiza (el esquema recibe la función `image()` de Astro).
 */
export const esquemaFoto = (image: SchemaContext["image"]) =>
  z
    .object({
      src: image().optional(),
      alt: z.string().min(1),
      /** Qué parte de la foto se conserva al recortarla (como `object-position`, por ejemplo "50% 30%"). */
      enfoque: z.string().optional(),
    })
    .refine((foto) => !foto.src || !esPendiente(foto.alt), {
      message: "Una foto con archivo necesita su texto alternativo real, no [pendiente].",
    });
