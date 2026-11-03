// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://deepwork.sagyamthapa.com.np',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
