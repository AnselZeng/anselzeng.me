export type GalleryGroup = {
  id: string;
  folder: string;
  title: string;
  eyebrow: string;
  summary?: string;
  /** If set, this roll lives at /fun/gallery/[slug] */
  slug?: string;
  cover?: string;
};

export const galleryGroups: GalleryGroup[] = [
  {
    id: 'dc',
    folder: 'dc',
    slug: 'dc',
    title: 'Washington, D.C.',
    eyebrow: 'Trip 01',
    summary: 'A roll from the capital.',
    cover: 'DSC00114.JPG',
  },
  {
    id: 'sd',
    folder: 'sd',
    slug: 'sd',
    title: 'San Diego',
    eyebrow: 'Trip 02',
    summary: 'A roll from the coast.',
    cover: 'DSC00307.JPG',
  },
  {
    id: 'other',
    folder: '',
    title: 'Los Angeles',
    eyebrow: 'Everyday',
    summary: '(LA)rping around the city.',
  },
];

export function galleryTripBySlug(slug: string): GalleryGroup | undefined {
  return galleryGroups.find((group) => group.slug === slug);
}

/**
 * Optional captions. Match any of:
 *   'dc/DSC00012.JPG'
 *   'DSC00012.JPG'
 *   '12'          (the number in the filename)
 *   'dc/12'
 */
export const galleryCaptions: Record<string, string> = {
  'dc/77': 'Pennsylvania Ave',
  'dc/88': 'National Archives Museum',
  'dc/109': 'World War II Memorial',
  'dc/111': 'Lincoln Memorial',
  'dc/114': 'US Capitol',
  'dc/115': 'US Capitol',
  'dc/120': 'Library of Congress',
  'dc/126': 'Supreme Court',
  'dc/131': 'National Gallery of Art',
  'dc/132': 'National Gallery of Art',
  'dc/145': "Clyde's of Georgetown",
  'dc/181': 'Constitution Gardens',
  'dc/185': 'Founding Farmers',
  'dc/189': 'Natural History Museum',
  'dc/190': 'Natural History Museum',
  'dc/203': 'The Smith',
  'dc/207': 'Hotel',
  'dc/216': 'Willard Peacock Alley',
  'dc/231': 'Ansel Adams',
  'dc/234': 'Declaration of Independence',
  'dc/241': 'International Spy Museum',
  'dc/245': 'International Spy Museum',
  'dc/246': 'Thomas Jefferson Memorial',
  'dc/263': 'Washington Monument',
  'sd/280': 'La Jolla',
  'sd/285': 'La Jolla',
  'sd/290': 'La Jolla',
  'sd/293': 'Seaport Village',
  'sd/296': 'Trolley',
  'sd/297': 'Pantoja Park',
  'sd/307': 'Sunset Cliffs',
  'sd/309': 'Sunset Cliffs',
  'sd/310': 'Sunset Cliffs',
  'sd/313': 'Doggo',
  'sd/314': 'Lofty Coffee',
  'sd/315': 'Star of India',
  'sd/317': 'Figeater Beetle',
  'sd/321': 'USS Midway',
  'sd/323': 'USS Midway',
  'sd/329': 'Embracing Peace',
  'sd/332': 'The Fish Market',
  'sd/333': 'Casa del Prado',
  'sd/334': 'Botanical Building',
  'sd/339': 'Lily Pond',
  'sd/341': 'SDMA',
  'sd/344': 'SDMA',
  'sd/352': 'Casa del Prado',
};

export function captionFor(folder: string, filename: string): string | undefined {
  const stem = filename.replace(/\.[^.]+$/, '');
  const keys = [`${folder}/${filename}`, filename, stem, `${folder}/${stem}`];

  const digits = filename.match(/\d+/g);
  if (digits) {
    const raw = digits[digits.length - 1];
    const n = String(parseInt(raw, 10));
    keys.push(raw, n, raw.padStart(3, '0'), `${folder}/${raw}`, `${folder}/${n}`);
  }

  for (const key of keys) {
    if (galleryCaptions[key]) return galleryCaptions[key];
  }
  return undefined;
}
