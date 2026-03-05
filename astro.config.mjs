import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // Use existing custom CSS alongside Tailwind
      applyBaseStyles: false,
    }),
  ],
  // Output as static site
  output: 'static',
});
