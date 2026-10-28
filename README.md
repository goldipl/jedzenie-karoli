# #BezglutenowaKarola

Strona z przepisami bez glutenu – śniadania, obiady i desery.

## Live :star2:
https://goldipl.github.io/jedzenie-karoli/

## Technologie
* [Astro](https://astro.build) 7 – statyczna strona, zero JS poza sliderem i menu
* TypeScript (strict)
* SCSS (style scoped w komponentach)
* [Swiper](https://swiperjs.com) – slider polecanych przepisów
* `astro:assets` – automatyczna optymalizacja zdjęć (WebP, `srcset`)
* Astro Fonts API – samohostowane fonty Questrial i Rock Salt
* GitHub Actions → GitHub Pages

## Uruchomienie
Wymagany Node.js 22.23+ (zalecany 26, zob. `.nvmrc`).

```sh
npm install
npm run dev      # serwer deweloperski: http://localhost:4321/jedzenie-karoli
npm run build    # astro check + build do ./dist
npm run preview  # podgląd zbudowanej strony
```

## Struktura

```text
src/
├── assets/food/         # zdjęcia (optymalizowane przy buildzie)
├── components/          # Header, HeroSlider, Section, RecipeGrid, RecipeCard, Footer, Icon
├── content/
│   ├── recipes.json     # przepisy (kategoria, tytuł, zdjęcie, link)
│   └── slides.json      # slajdy w sliderze
├── content.config.ts    # schematy kolekcji (walidacja danych)
├── data/                # dane strony: nawigacja, teksty, kategorie
├── layouts/BaseLayout.astro
├── pages/index.astro
└── styles/              # style globalne, zmienne CSS, mixiny SCSS
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

Dostępne kategorie: `sniadania`, `obiady`, `desery`. Pierwsze dwa przepisy w każdej kategorii są wyświetlane jako duże kafelki.
