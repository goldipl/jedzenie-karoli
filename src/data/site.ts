export const site = {
  name: 'Jedzenie Karoli',
  tagline: 'Przepisy Gluten Free',
  title: 'Jedzenie Karoli – przepisy bez glutenu',
  description:
    'Bezglutenowe przepisy Karoli: śniadania, obiady i desery gluten free. Sprawdzone pomysły na codzienne gotowanie bez glutenu.',
  author: 'Karola',
  instagram: 'https://www.instagram.com/bezglutenowakarola',
  instagramHandle: '@bezglutenowakarola',
  /** Direct link to an Instagram DM thread. */
  instagramDm: 'https://ig.me/m/bezglutenowakarola',
  /** Leave empty to hide the e-mail card in the contact section. */
  email: '',
  hashtag: '#JedzenieKaroli',
  copyright: 'Jedzenie Karoli',
} as const;

export const navigation = [
  { label: 'Przepisy', href: '#przepisy' },
  { label: 'O mnie', href: '#o-mnie' },
  { label: 'Kontakt', href: '#kontakt' },
] as const;

export const hero = {
  eyebrow: '100% bez glutenu',
  title: ['Gotuj bez glutenu.', 'Jedz ze smakiem.'],
  lead: 'Proste, sprawdzone przepisy gluten free na śniadania, obiady i desery. Bez skomplikowanych składników i bez kompromisów w smaku.',
};

export const about = {
  title: ['Cześć, jestem', 'Karola!'],
  lead: 'Gotuję bez glutenu na co dzień i udowadniam, że dieta bezglutenowa może być kolorowa, prosta i pyszna.',
  paragraphs: [
    'Ta strona to mój kuchenny notatnik – zbieram tu przepisy, które naprawdę wychodzą i do których sama chętnie wracam. Od szybkich śniadań przed pracą, przez rodzinne obiady, aż po desery, których nikt nie odróżni od „tych zwykłych”.',
    'Stawiam na łatwo dostępne składniki, jasne instrukcje i zdjęcia prosto z mojej kuchni. Jeśli dopiero zaczynasz przygodę z kuchnią bez glutenu – jesteś w dobrym miejscu.',
  ],
  quote: 'Bez glutenu nie znaczy bez smaku.',
  signature: 'Karola',
  values: [
    {
      icon: 'check',
      title: 'Sprawdzone przepisy',
      text: 'Każdy przepis testuję w swojej kuchni, zanim tu trafi.',
    },
    {
      icon: 'leaf',
      title: 'Proste składniki',
      text: 'Bez szukania egzotycznych produktów po całym mieście.',
    },
    {
      icon: 'heart',
      title: 'Smak przede wszystkim',
      text: 'Dania, które smakują całej rodzinie – nie tylko na diecie.',
    },
  ],
} as const;

export const contact = {
  title: 'Porozmawiajmy!',
  lead: 'Masz pytanie o przepis, pomysł na współpracę albo po prostu chcesz pochwalić się swoim wypiekiem? Najszybciej złapiesz mnie na Instagramie.',
  reasons: [
    {
      icon: 'message',
      title: 'Pytanie o przepis',
      text: 'Coś nie wyszło albo szukasz zamiennika? Napisz – chętnie pomogę.',
    },
    {
      icon: 'users',
      title: 'Współpraca',
      text: 'Marki i projekty związane z kuchnią bez glutenu – odezwij się w wiadomości.',
    },
    {
      icon: 'camera',
      title: 'Twoje wykonanie',
      text: 'Udało Ci się coś z moich przepisów? Oznacz zdjęcie hasztagiem #JedzenieKaroli.',
    },
  ],
} as const;
