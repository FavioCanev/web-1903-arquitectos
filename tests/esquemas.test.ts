import { describe, expect, it } from "vitest";
import { z } from "astro/zod";
import { esquemaFoto } from "../src/lib/esquemas";

// En la web, `image()` de Astro valida que el archivo exista; en la prueba basta un texto.
const esquema = esquemaFoto((() => z.string()) as unknown as Parameters<typeof esquemaFoto>[0]);

describe("esquemaFoto", () => {
  const pendiente = { alt: "[Descripción pendiente]", pie: "[Pie de foto pendiente]" };

  it("sin archivo acepta textos [pendientes]", () => {
    expect(esquema.safeParse(pendiente).success).toBe(true);
  });

  it("con archivo rechaza un texto alternativo [pendiente]", () => {
    expect(esquema.safeParse({ ...pendiente, src: "cafetos/01.jpg", pie: "Barra" }).success).toBe(false);
  });

  it("con archivo acepta un pie [pendiente] si el texto alternativo es real", () => {
    expect(esquema.safeParse({ ...pendiente, src: "cafetos/01.jpg", alt: "Barra de madera" }).success).toBe(true);
  });

  it("con archivo y textos reales es válida", () => {
    const foto = { src: "cafetos/01.jpg", alt: "Barra de madera con lámparas colgantes", pie: "Barra principal" };
    expect(esquema.safeParse(foto).success).toBe(true);
  });
});
