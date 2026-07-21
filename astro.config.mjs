import { defineConfig } from 'astro/config';

// Static output — deploys to Cloudflare Pages (or any static host) for free.
export default defineConfig({
  site: 'https://tarasarvas.com',
  build: {
    // Emit clean directory-style URLs: /about/ instead of /about.html
    format: 'directory',
  },
});
