// Datos del estudio en un solo lugar (ADR 0005): si cambian, se cambian aquí una vez.
// Todo lo demás de la web los toma de este archivo.

export const estudio = {
  nombre: "1903 Arquitectos",
  razonSocial: "1903 ARQUITECTOS S.A.C.",
  ruc: "20613550225",
  lema: "Celebramos la cultura mediante el diseño.",
  ciudad: "Cajamarca, Perú",
  zonaHoraria: "America/Lima",
  direccion: "Jr. Amancaes 262, Cajamarca",
  correo: "1903arq@gmail.com",
  whatsapp: { numero: "51924285500", visible: "924 285 500" },
  horario: {
    semana: "Lunes a viernes de 8:30 a 13:00 y de 15:00 a 19:00",
    sabado: "Sábados de 8:30 a 13:00",
  },
  redes: {
    instagram: "https://www.instagram.com/1903_arq/",
    facebook: "https://www.facebook.com/people/1903-arquitectura/100064733990595/",
  },
} as const;

// Botón "Cómo llegar": abre Google Maps con la dirección (ADR 0007).
export const enlaceComoLlegar = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(estudio.direccion)}`;

export const navegacion = [
  { texto: "Proyectos", href: "/proyectos/" },
  { texto: "Servicios", href: "/servicios/" },
  { texto: "Cursos", href: "/cursos/" },
  { texto: "Estudio", href: "/estudio/" },
  { texto: "Contacto", href: "/contacto/" },
] as const;
