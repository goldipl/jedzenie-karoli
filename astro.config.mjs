// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://goldipl.github.io',
  base: '/jedzenie-karoli',
  trailingSlash: 'ignore',
  fonts: [
    {
      name: 'DM Sans',
      cssVariable: '--font-dm-sans',
      provider: fontProviders.npm(),
      options: { package: '@fontsource/dm-sans' },
      weights: [400, 500, 700],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      name: 'Fraunces',
      cssVariable: '--font-fraunces',
      provider: fontProviders.npm(),
      options: { package: '@fontsource/fraunces' },
      weights: [600, 700],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Georgia', 'serif'],
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
