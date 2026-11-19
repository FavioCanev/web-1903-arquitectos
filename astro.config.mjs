import { defineConfig } from "astro/config";

// Sitio estático (ADR 0001). La dirección pública (`site`) se agrega cuando el dominio esté comprado.
// ASTRO_BASE se usa solo en la vista previa temporal de GitHub Pages (retirar al publicar en Cloudflare).
export default defineConfig({
  ...(process.env.ASTRO_BASE ? { base: process.env.ASTRO_BASE } : {}),
});
