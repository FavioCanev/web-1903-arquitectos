// JavaScript mínimo de la web (BRIEF, sección 8).
const WHATSAPP = "51907629950";

// Respaldo del listón para navegadores sin animaciones ligadas al scroll.
const liston = document.querySelector(".liston");
if (liston && !CSS.supports("animation-timeline: scroll()")) {
  const avanzar = () => {
    const total = document.documentElement.scrollHeight - innerHeight;
    liston.style.setProperty("--avance", (total > 0 ? (scrollY / total) * 100 : 100) + "%");
  };
  addEventListener("scroll", avanzar, { passive: true });
  addEventListener("resize", avanzar);
  avanzar();
}

// El formulario no guarda nada: arma el mensaje y abre WhatsApp para que el visitante lo envíe.
const formulario = document.querySelector(".formulario");
if (formulario) {
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const datos = new FormData(formulario);
    const lineas = [
      `Hola, 1903 Arquitectos. Soy ${datos.get("nombre").trim()}.`,
      `Tipo de proyecto: ${datos.get("tipo")}`,
      `Quiero: ${datos.get("accion")}`,
      datos.get("telefono").trim() ? `Mi número: ${datos.get("telefono").trim()}` : null,
      "",
      datos.get("mensaje").trim(),
    ].filter((linea) => linea !== null);
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lineas.join("\n"))}`;
    window.open(url, "_blank", "noopener");
  });
}
