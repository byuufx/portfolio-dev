import { defineConfig } from 'astro/config';

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  site: 'https://byuufx.github.io', //https://docs.astro.build/en/guides/deploy/github/
  base: 'portfolio-dev',
  integrations: [purgecss()]
});