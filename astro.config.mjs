import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://byuufx.github.io', //https://docs.astro.build/en/guides/deploy/github/
  base: import.meta.env.MODE == 'production' ? '/portfolio-dev/' : '', //FIX for GitHub Pages https://docs.astro.build/en/guides/environment-variables/
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
});
