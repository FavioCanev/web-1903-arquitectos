import { estudio } from "../config";
import type { Idioma } from "../i18n/rutas";

/** Arma el enlace que abre WhatsApp con el número del estudio y, si se da, un mensaje ya escrito. */
export function enlaceWhatsapp(mensaje?: string): string {
  const base = `https://wa.me/${estudio.whatsapp.numero}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}

export interface DatosContacto {
  nombre: string;
  telefono?: string;
  correo?: string;
  tipo: string;
  accion: string;
  canal?: string;
  mensaje?: string;
}

/** Asunto sugerido al abrir Gmail o el programa de correo desde Contacto. */
export function asuntoContacto(datos: Pick<DatosContacto, "accion" | "tipo" | "nombre">, lang: Idioma = "es"): string {
  const prefijo = lang === "en" ? "Website inquiry" : "Consulta web";
  return `${prefijo}: ${datos.accion} — ${datos.tipo} (${datos.nombre.trim()})`;
}

/** Texto que el formulario de contacto deja escrito en WhatsApp o correo (ADR 0005). */
export function mensajeContacto(datos: DatosContacto, lang: Idioma = "es"): string {
  const telefono = datos.telefono?.trim();
  const correo = datos.correo?.trim();
  const idea = datos.mensaje?.trim();
  if (lang === "en") {
    return [
      `Hello, ${estudio.nombre}. My name is ${datos.nombre.trim()}.`,
      `I want to: ${datos.accion}`,
      `Project type: ${datos.tipo}`,
      datos.canal ? `Preferred contact method: ${datos.canal}` : null,
      telefono ? `Phone number: ${telefono}` : null,
      correo ? `Email address: ${correo}` : null,
      idea ? `\n${idea}` : null,
    ]
      .filter((linea): linea is string => Boolean(linea))
      .join("\n");
  }
  return [
    `Hola, ${estudio.nombre}. Soy ${datos.nombre.trim()}.`,
    `Quiero: ${datos.accion}`,
    `Tipo de proyecto: ${datos.tipo}`,
    datos.canal ? `Prefiero que me contacten por: ${datos.canal}` : null,
    telefono ? `Mi número: ${telefono}` : null,
    correo ? `Mi correo: ${correo}` : null,
    idea ? `\n${idea}` : null,
  ]
    .filter((linea): linea is string => Boolean(linea))
    .join("\n");
}

/** Arma el enlace de Gmail web con destinatario, asunto y cuerpo prellenados. */
export function enlaceGmail(asunto: string, cuerpo: string): string {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(estudio.correo)}&su=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
}

/** Alternativa estándar mailto: para clientes de correo locales (Apple Mail, Outlook). */
export function enlaceMailto(asunto: string, cuerpo: string): string {
  return `mailto:${estudio.correo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
}

/** Mensaje de inscripción a un curso presencial (ADR 0006). */
export function mensajeCurso(nombreCurso: string, lang: Idioma = "es"): string {
  if (lang === "en") {
    return `Hello, I would like to enroll in the ${nombreCurso} course`;
  }
  return `Hola, quiero inscribirme en el curso de ${nombreCurso}`;
}
