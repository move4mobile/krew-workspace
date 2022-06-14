import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  outDir: '../../dist/apps/krew-website',
  integrations: [tailwind()],
  publicDir: './public', // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  vite: {
    plugins: [],
    builds: {
      outDir: '../../dist/apps/krew-website',
      manifest: true,
    },
  },
});
