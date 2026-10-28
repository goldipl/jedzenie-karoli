/** Prefixes a site-relative path with the configured `base` (e.g. `/jedzenie-karoli`). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
