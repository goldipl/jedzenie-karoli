import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';
import { categories } from './data/categories';

const recipes = defineCollection({
  loader: file('src/content/recipes.json'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(categories),
      image: image(),
      imageAlt: z.string(),
      url: z.url(),
      order: z.number().int().default(0),
    }),
});

const slides = defineCollection({
  loader: file('src/content/slides.json'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      imageAlt: z.string(),
      url: z.url(),
      order: z.number().int().default(0),
    }),
});

export const collections = { recipes, slides };
