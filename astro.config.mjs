import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://plombierenurgence.com',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('sitemap-'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    })
  ]
});