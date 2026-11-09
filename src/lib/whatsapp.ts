import { estudio } from "../config";

/** Arma el enlace que abre WhatsApp con el número del estudio y, si se da, un mensaje ya escrito. */
export function enlaceWhatsapp(mensaje?: string): string {
  const base = `https://wa.me/${estudio.whatsapp.numero}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}

export interface DatosContacto {
  nombre: string;
  telefono?: string;
  tipo: string;
  accion: string;
  mensaje: string;
}

/** Texto que el formulario de contacto deja escrito en WhatsApp (ADR 0005). */
export function mensajeContacto(datos: DatosContacto): string {
  const telefono = datos.telefono?.trim();
  return [
    `Hola, ${estudio.nombre}. Soy ${datos.nombre.trim()}.`,
    `Tipo de proyecto: ${datos.tipo}`,
    `Quiero: ${datos.accion}`,
    telefono ? `Mi número: ${telefono}` : null,
    "",
    datos.mensaje.trim(),
  ]
    .filter((linea) => linea !== null)
    .join("\n");
}

/** Mensaje de inscripción a un curso presencial (ADR 0006). */
export function mensajeCurso(nombreCurso: string): string {
  return `Hola, quiero inscribirme en el curso de ${nombreCurso}`;
}
