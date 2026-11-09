import { describe, expect, it } from "vitest";
import { esquemaFoto } from "../src/lib/esquemas";

describe("esquemaFoto", () => {
  const pendiente = { alt: "[Descripción pendiente]", pie: "[Pie de foto pendiente]" };

  it("sin archivo acepta textos [pendientes]", () => {
    expect(esquemaFoto.safeParse(pendiente).success).toBe(true);
  });

  it("con archivo rechaza un texto alternativo [pendiente]", () => {
    expect(esquemaFoto.safeParse({ ...pendiente, src: "cafetos/01.jpg", pie: "Barra" }).success).toBe(false);
  });

  it("con archivo rechaza un pie [pendiente]", () => {
    expect(esquemaFoto.safeParse({ ...pendiente, src: "cafetos/01.jpg", alt: "Barra de madera" }).success).toBe(false);
  });

  it("con archivo y textos reales es válida", () => {
    const foto = { src: "cafetos/01.jpg", alt: "Barra de madera con lámparas colgantes", pie: "Barra principal" };
    expect(esquemaFoto.safeParse(foto).success).toBe(true);
  });
});
