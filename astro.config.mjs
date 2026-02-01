// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://sedz.dev',
  compressHTML: true,
  build: {
    format: 'file'
  }
});
