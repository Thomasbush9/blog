// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkImages from 'remark-images';

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
    remarkPlugins: [remarkMath, remarkImages],
    rehypePlugins: [rehypeKatex],
  },
});
