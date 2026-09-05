// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Deployed as a GitHub Pages project site at https://llawn43.github.io/HEXXA
//
// To move to a custom domain (e.g. hexxaofficial.com):
//   1. set `site` to 'https://hexxaofficial.com'
//   2. delete the `base` line below
//   3. add `public/CNAME` containing the bare domain
// https://astro.build/config
export default defineConfig({
  site: 'https://llawn43.github.io',
  base: '/HEXXA',
  trailingSlash: 'ignore',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});
