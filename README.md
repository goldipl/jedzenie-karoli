# Jedzenie Karoli

Strona z przepisami bez glutenu – śniadania, obiady i desery.

## Live :star2:
https://goldipl.github.io/jedzenie-karoli/

## Technologie
* [Astro](https://astro.build) 7 – statyczna strona, minimalna ilość JS (menu, slider, filtry przepisów)
* TypeScript (strict)
* SCSS (style scoped w komponentach)
* [Swiper](https://swiperjs.com) – slider polecanych przepisów
* `astro:assets` – automatyczna optymalizacja zdjęć (WebP, `srcset`)
* Astro Fonts API – samohostowane fonty Fraunces (nagłówki), DM Sans (tekst) i Rock Salt (logo)
* GitHub Actions → GitHub Pages

## Uruchomienie
Wymagany Node.js 22.23+ (zalecany 26, zob. `.nvmrc`).

```sh
npm install
npm run dev      # serwer deweloperski: http://localhost:4321/jedzenie-karoli
npm run build    # astro check + build do ./dist
npm run preview  # podgląd zbudowanej strony
npm run icons    # wygeneruj favicony i ikony iOS/Android do ./public
```

## Struktura

```text
src/
├── assets/food/         # zdjęcia (optymalizowane przy buildzie)
├── components/          # Header, Hero, FeaturedSlider, Recipes, RecipeCard, About, Contact, Footer, Icon
├── content/
│   ├── recipes.json     # przepisy (kategoria, tytuł, zdjęcie, link)
│   └── slides.json      # slajdy w sliderze
├── content.config.ts    # schematy kolekcji (walidacja danych)
├── data/site.ts         # teksty: hero, O mnie, Kontakt, linki, nawigacja
├── data/categories.ts   # kategorie przepisów
├── layouts/BaseLayout.astro
├── pages/index.astro
└── styles/              # paleta (zmienne CSS), przyciski, typografia, mixiny SCSS
```

## Dodawanie przepisu
Dodaj wpis do `src/content/recipes.json`, np.:

```json
{
  "id": "deser-07",
  "title": "Bezglutenowy sernik",
  "category": "desery",
  "image": "../assets/food/sernik.jpg",
  "imageAlt": "Kawałek sernika na talerzu",
  "url": "https://www.instagram.com/p/…",
  "order": 7
}
```

Dostępne kategorie: `sniadania`, `obiady`, `desery`. Przepisy można filtrować po kategorii; domyślnie widać 8, resztę odsłania „Pokaż więcej”.

## Edycja treści
Teksty sekcji (hero, O mnie, Kontakt) są w `src/data/site.ts`. Aby w sekcji Kontakt pojawiła się karta e-mail, uzupełnij pole `email`.

## Kolorystyka
Paleta jest zdefiniowana jako zmienne CSS w `src/styles/global.scss` (`--orange-50` … `--orange-800`, `--brown-*`). Kolor główny to `--color-primary`.
