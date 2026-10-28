export const categories = ['sniadania', 'obiady', 'desery'] as const;

export type Category = (typeof categories)[number];

export const categoryLabels: Record<Category, string> = {
  sniadania: 'Śniadania',
  obiady: 'Obiady',
  desery: 'Desery',
};
