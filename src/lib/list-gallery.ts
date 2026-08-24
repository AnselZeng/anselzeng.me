import fs from 'fs';
import path from 'path';
import { captionFor } from '@/lib/gallery-data';

const IMAGE_EXT = /\.(jpe?g|png|webp)$/i;

export type GalleryImage = {
  src: string;
  thumbSrc: string;
  file: string;
  caption?: string;
  index: string;
};

function thumbSrcFor(folder: string, file: string) {
  const thumbName = `${file.replace(/\.[^.]+$/, '')}.webp`;
  const thumbAbs = folder
    ? path.join(process.cwd(), 'public', 'gallery', 'thumbs', folder, thumbName)
    : path.join(process.cwd(), 'public', 'gallery', 'thumbs', thumbName);
  const thumbSrc = folder
    ? `/gallery/thumbs/${folder}/${thumbName}`
    : `/gallery/thumbs/${thumbName}`;
  return { thumbAbs, thumbSrc };
}

export function listGalleryFolder(folder: string): GalleryImage[] {
  const dir = folder
    ? path.join(process.cwd(), 'public', 'gallery', folder)
    : path.join(process.cwd(), 'public', 'gallery');
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && IMAGE_EXT.test(entry.name) && !entry.name.startsWith('.'))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
    .map((file, i) => {
      const src = folder ? `/gallery/${folder}/${file}` : `/gallery/${file}`;
      const { thumbAbs, thumbSrc } = thumbSrcFor(folder, file);
      return {
        src,
        thumbSrc: fs.existsSync(thumbAbs) ? thumbSrc : src,
        file,
        caption: captionFor(folder || 'other', file),
        index: String(i + 1).padStart(2, '0'),
      };
    });
}
