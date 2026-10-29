// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { existsSync, readdirSync } from 'node:fs';

// /trabajos entra al mapa del sitio solo cuando ya hay fotos (mientras tanto lleva noindex).
const carpetaTrabajos = new URL('./src/content/trabajos', import.meta.url);
const hayTrabajos = existsSync(carpetaTrabajos) && readdirSync(carpetaTrabajos).some((f) => f.endsWith('.md'));

const PRIVADAS = ['/cotizador', '/gracias', '/resena', '/admin', '/mi-cotizacion', ...(hayTrabajos ? [] : ['/trabajos'])];

export default defineConfig({
  site: 'https://cerraya.com',
  trailingSlash: 'ignore',
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !PRIVADAS.some((ruta) => new URL(page).pathname.startsWith(ruta)),
    }),
  ],
});
