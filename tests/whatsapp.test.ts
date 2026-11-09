import { describe, expect, it } from "vitest";
import { enlaceWhatsapp, mensajeContacto, mensajeCurso } from "../src/lib/whatsapp";

describe("enlaceWhatsapp", () => {
  it("sin mensaje apunta al número del estudio", () => {
    expect(enlaceWhatsapp()).toBe("https://wa.me/51924285500");
  });

  it("con mensaje lo codifica en la dirección", () => {
    expect(enlaceWhatsapp("Hola & adiós")).toBe("https://wa.me/51924285500?text=Hola%20%26%20adi%C3%B3s");
  });
});

describe("mensajeContacto", () => {
  const base = { nombre: " Ana ", tipo: "Vivienda", accion: "Diseñar", mensaje: " Quiero una casa ", telefono: "" };

  it("incluye todos los datos escritos", () => {
    const texto = mensajeContacto({ ...base, telefono: "999 111 222" });
    expect(texto).toBe(
      "Hola, 1903 Arquitectos. Soy Ana.\nTipo de proyecto: Vivienda\nQuiero: Diseñar\nMi número: 999 111 222\n\nQuiero una casa",
    );
  });

  it("omite el teléfono si no se escribió", () => {
    expect(mensajeContacto(base)).not.toContain("Mi número");
  });
});

describe("mensajeCurso", () => {
  it("usa el texto acordado en la ADR 0006", () => {
    expect(mensajeCurso("V-Ray")).toBe("Hola, quiero inscribirme en el curso de V-Ray");
  });
});
