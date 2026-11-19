import { describe, expect, it } from "vitest";
import { asuntoContacto, enlaceGmail, enlaceMailto, enlaceWhatsapp, mensajeContacto, mensajeCurso } from "../src/lib/whatsapp";

describe("enlaceWhatsapp", () => {
  it("sin mensaje apunta al número del estudio", () => {
    expect(enlaceWhatsapp()).toBe("https://wa.me/51924285500");
  });

  it("con mensaje lo codifica en la dirección", () => {
    expect(enlaceWhatsapp("Hola & adiós")).toBe("https://wa.me/51924285500?text=Hola%20%26%20adi%C3%B3s");
  });
});

describe("mensajeContacto", () => {
  const base = { nombre: " Ana ", tipo: "Arquitectura", accion: "Diseñar", canal: "WhatsApp", mensaje: " Quiero una casa ", telefono: "" };

  it("incluye todos los datos escritos", () => {
    const texto = mensajeContacto({ ...base, telefono: "999 111 222" });
    expect(texto).toBe(
      "Hola, 1903 Arquitectos. Soy Ana.\nQuiero: Diseñar\nTipo de proyecto: Arquitectura\nPrefiero que me contacten por: WhatsApp\nMi número: 999 111 222\n\nQuiero una casa",
    );
  });

  it("omite el teléfono y la idea si no se escribieron", () => {
    const texto = mensajeContacto({ ...base, mensaje: "" });
    expect(texto).not.toContain("Mi número");
    expect(texto.endsWith("WhatsApp")).toBe(true);
  });
});

describe("enlaces de correo", () => {
  it("genera asunto y enlace directo a Gmail redactar", () => {
    const asunto = asuntoContacto({ nombre: "Ana", accion: "Diseñar", tipo: "Arquitectura" });
    const url = enlaceGmail(asunto, "Hola");
    expect(url).toContain("https://mail.google.com/mail/?view=cm&fs=1&to=1903arq%40gmail.com");
    expect(url).toContain(encodeURIComponent(asunto));
    expect(enlaceMailto(asunto, "Hola")).toContain("mailto:1903arq@gmail.com?subject=");
  });
});

describe("mensajeCurso", () => {
  it("usa el texto acordado en la ADR 0006", () => {
    expect(mensajeCurso("V-Ray")).toBe("Hola, quiero inscribirme en el curso de V-Ray");
  });
});
