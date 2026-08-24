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
  // 'dc/12': 'National Mall',
  // 'sd/3': 'Balboa Park',
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
