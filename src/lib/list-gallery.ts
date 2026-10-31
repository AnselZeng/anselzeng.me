import { captionFor } from '@/lib/gallery-data';
import manifest from '@/lib/gallery-manifest.json';

export type GalleryImage = {
  src: string;
  thumbSrc: string;
  file: string;
  caption?: string;
  index: string;
};

const filesByFolder = manifest as Record<string, string[]>;

export function listGalleryFolder(folder: string): GalleryImage[] {
  const files = filesByFolder[folder] ?? [];

  return files.map((file, i) => {
    const src = folder ? `/gallery/${folder}/${file}` : `/gallery/${file}`;
    const thumbName = `${file.replace(/\.[^.]+$/, '')}.webp`;
    const thumbSrc = folder
      ? `/gallery/thumbs/${folder}/${thumbName}`
      : `/gallery/thumbs/${thumbName}`;
    return {
      src,
      thumbSrc,
      file,
      caption: captionFor(folder || 'other', file),
      index: String(i + 1).padStart(2, '0'),
    };
  });
}
