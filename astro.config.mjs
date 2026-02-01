import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://apavayan.com",

  image: {
    service: { entrypoint: "astro/assets/services/noop" },
  },

  vite: {
    // @ts-expect-error - Vite version mismatch between Astro and Tailwind
    plugins: [tailwindcss()],
  },

  build: {
    inlineStylesheets: "always", // Inline CSS for 14KB optimization
  },

  // Minify HTML output
  compressHTML: true,

  adapter: cloudflare(),
});
