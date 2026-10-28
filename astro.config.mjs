// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://goldipl.github.io',
  base: '/jedzenie-karoli',
  trailingSlash: 'ignore',
  fonts: [
    {
      name: 'Questrial',
      cssVariable: '--font-questrial',
      provider: fontProviders.npm(),
      options: { package: '@fontsource/questrial' },
      weights: [400],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      name: 'Rock Salt',
      cssVariable: '--font-rock-salt',
      provider: fontProviders.npm(),
      options: { package: '@fontsource/rock-salt' },
      weights: [400],
      subsets: ['latin'],
      fallbacks: ['cursive'],
    },
  ],
});
