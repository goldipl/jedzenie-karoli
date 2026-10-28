export const site = {
  name: '#BezglutenowaKarola',
  tagline: 'Przepisy Gluten Free',
  title: '#BezglutenowaKarola – przepisy bez glutenu',
  description:
    'Bezglutenowe przepisy Karoli: śniadania, obiady i desery gluten free. Sprawdzone pomysły na codzienne gotowanie bez glutenu.',
  author: 'Karola',
  instagram: 'https://www.instagram.com/bezglutenowakarola',
  copyright: 'Jedzenie Karoli',
} as const;

export const navigation = [
  { label: 'Strona główna', href: '#start' },
  { label: 'O mnie', href: '#o-mnie' },
  { label: 'Przepisy', href: '#przepisy' },
  { label: 'Kontakt', href: '#kontakt' },
] as const;

const lorem = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, officiis doloribus. Sint pariatur possimus blanditiis numquam vitae qui cumque rem quibusdam, molestiae animi ratione amet esse delectus iure excepturi sunt!',
  'Quod sed, cupiditate, consectetur ducimus quibusdam soluta reiciendis laborum tenetur libero nihil nesciunt placeat ratione, ea ullam repellendus quaerat. Amet sequi quaerat omnis doloremque minus, asperiores doloribus eligendi sed quisquam?',
  'Tempore sapiente voluptatum cupiditate corporis minima itaque ullam velit temporibus reprehenderit distinctio saepe maxime explicabo assumenda, ex adipisci qui ea nisi corrupti quos labore totam eligendi laboriosam neque dolore! Esse.',
  'Impedit numquam doloremque deserunt dignissimos labore minus voluptatibus dolore ullam voluptates distinctio esse debitis id, natus magnam sunt dolores aliquam sequi, consequatur qui. Consequuntur sed atque earum ad vero. Laboriosam!',
].join(' ');

export const about = [lorem, lorem];
export const contact = [lorem];
