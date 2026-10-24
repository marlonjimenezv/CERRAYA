// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const PRIVADAS = ['/cotizador', '/gracias', '/resena', '/admin', '/mi-cotizacion'];

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
