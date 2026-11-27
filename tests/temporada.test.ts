import { describe, expect, it } from "vitest";
import { resolverTemporada, rutaLogoTemporada, temporadaPorFecha, temporadaPorMesDia } from "../src/lib/temporada";

describe("temporadas del logo", () => {
  it("activa carnavales del 8 de febrero al 7 de marzo", () => {
    expect(temporadaPorMesDia(2, 7)).toBe("normal");
    expect(temporadaPorMesDia(2, 8)).toBe("carnavales");
    expect(temporadaPorMesDia(2, 29)).toBe("carnavales");
    expect(temporadaPorMesDia(3, 1)).toBe("carnavales");
    expect(temporadaPorMesDia(3, 7)).toBe("carnavales");
    expect(temporadaPorMesDia(3, 8)).toBe("normal");
  });

  it("activa fiestas patrias del 15 al 31 de julio", () => {
    expect(temporadaPorMesDia(7, 14)).toBe("normal");
    expect(temporadaPorMesDia(7, 15)).toBe("fiestas-patrias");
    expect(temporadaPorMesDia(7, 28)).toBe("fiestas-patrias");
    expect(temporadaPorMesDia(7, 31)).toBe("fiestas-patrias");
    expect(temporadaPorMesDia(8, 1)).toBe("normal");
  });

  it("activa halloween durante todo octubre", () => {
    expect(temporadaPorMesDia(9, 30)).toBe("normal");
    expect(temporadaPorMesDia(10, 1)).toBe("halloween");
    expect(temporadaPorMesDia(10, 31)).toBe("halloween");
    expect(temporadaPorMesDia(11, 1)).toBe("normal");
  });

  it("activa navidad durante todo diciembre", () => {
    expect(temporadaPorMesDia(11, 30)).toBe("normal");
    expect(temporadaPorMesDia(12, 1)).toBe("navidad");
    expect(temporadaPorMesDia(12, 25)).toBe("navidad");
    expect(temporadaPorMesDia(12, 31)).toBe("navidad");
    expect(temporadaPorMesDia(1, 1)).toBe("normal");
  });

  it("evalúa la fecha usando la zona horaria de Perú (America/Lima)", () => {
    // 2026-10-01T04:59:59Z corresponde al 30 de septiembre 23:59:59 en Lima (-05:00)
    expect(temporadaPorFecha(new Date("2026-10-01T04:59:59Z"))).toBe("normal");
    // 2026-10-01T05:00:00Z ya es 1 de octubre 00:00:00 en Lima
    expect(temporadaPorFecha(new Date("2026-10-01T05:00:00Z"))).toBe("halloween");
  });

  it("permite previsualizar mediante ?temporada= y conserva BASE_URL en la ruta", () => {
    const fechaNormal = new Date("2026-05-10T15:00:00Z");
    expect(resolverTemporada("?temporada=navidad", fechaNormal)).toBe("navidad");
    expect(resolverTemporada("?temporada=desconocida", fechaNormal)).toBe("normal");
    expect(rutaLogoTemporada("/img/logo-h-vino.svg", "halloween")).toBe("/img/logo-h-halloween.svg");
    expect(rutaLogoTemporada("/web-1903-arquitectos/img/logo-h-vino.svg", "fiestas-patrias")).toBe(
      "/web-1903-arquitectos/img/logo-h-fiestas-patrias.svg",
    );
  });
});
