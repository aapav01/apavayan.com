import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://apavayan.com',
  vite: {
    // @ts-expect-error - Vite version mismatch between Astro and Tailwind
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'always', // Inline CSS for 14KB optimization
  },
  compressHTML: true, // Minify HTML output
});