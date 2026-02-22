// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://thomasbush.github.io',
  base: '/blog',
  integrations: [mdx()],
  image: {
    domains: ['images.unsplash.com'],
  },
  markdown: {
    shikiConfig: {
      theme: 'catppuccin-mocha',
      wrap: true,
    },
  },
});
