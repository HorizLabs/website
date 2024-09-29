// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://l-mbda.github.io',  // your lowercase username goes here
  base: '/test/', // your repository name goes here, enclosed in '/'
  output: 'static',
});