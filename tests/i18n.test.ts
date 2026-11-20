import { describe, expect, it } from "vitest";
import { alternarRuta, limpiarBase, ruta, rutaProyecto } from "../src/i18n/rutas";
import { traducirCategoria } from "../src/i18n/textos";

describe("rutas bilingües", () => {
  it("devuelve las rutas esperadas para es y en", () => {
    expect(ruta("inicio", "es")).toBe("/");
    expect(ruta("inicio", "en")).toBe("/en/");
    expect(ruta("proyectos", "es")).toBe("/proyectos/");
    expect(ruta("proyectos", "en")).toBe("/en/projects/");
    expect(ruta("servicios", "en")).toBe("/en/services/");
    expect(ruta("cursos", "en")).toBe("/en/courses/");
    expect(ruta("estudio", "en")).toBe("/en/studio/");
    expect(ruta("contacto", "en")).toBe("/en/contact/");
    expect(ruta("privacidad", "en")).toBe("/en/privacy/");
    expect(ruta("accesibilidad", "en")).toBe("/en/accessibility/");
    expect(rutaProyecto("cafetos", "es")).toBe("/proyectos/cafetos/");
    expect(rutaProyecto("cafetos", "en")).toBe("/en/projects/cafetos/");
  });

  it("quita BASE_URL de GitHub Pages sin tocar rutas parecidas", () => {
    expect(limpiarBase("/web-1903-arquitectos/en/projects/", "/web-1903-arquitectos")).toBe("/en/projects/");
    expect(limpiarBase("/web-1903-arquitectos", "/web-1903-arquitectos/")).toBe("/");
    expect(limpiarBase("/404.html", "/")).toBe("/404.html");
  });

  it("alterna entre español e inglés conservando la página o proyecto exacto", () => {
    expect(alternarRuta("/", "en")).toBe("/en/");
    expect(alternarRuta("/en/", "es")).toBe("/");
    expect(alternarRuta("/servicios/", "en")).toBe("/en/services/");
    expect(alternarRuta("/en/services/", "es")).toBe("/servicios/");
    expect(alternarRuta("/proyectos/cafetos/", "en")).toBe("/en/projects/cafetos/");
    expect(alternarRuta("/en/projects/cafetos/", "es")).toBe("/proyectos/cafetos/");
    expect(alternarRuta("/web-1903-arquitectos/proyectos/estancia-del-alba", "en", "/web-1903-arquitectos")).toBe(
      "/en/projects/estancia-del-alba/",
    );
    expect(alternarRuta("/404.html", "en")).toBe("/en/");
    expect(alternarRuta("/404.html", "es")).toBe("/");
  });
});

describe("traducirCategoria", () => {
  it("traduce las categorías conocidas al inglés y conserva las pendientes", () => {
    expect(traducirCategoria("Arquitectura", "es")).toBe("Arquitectura");
    expect(traducirCategoria("Arquitectura", "en")).toBe("Architecture");
    expect(traducirCategoria("Interiorismo comercial", "en")).toBe("Commercial interior design");
    expect(traducirCategoria("Interiorismo residencial", "en")).toBe("Residential interior design");
    expect(traducirCategoria("[Por definir]", "en")).toBe("[Por definir]");
  });
});
