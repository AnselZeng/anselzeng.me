'use client';

import { Marquee } from '@/components/magicui/marquee';
import { ProgressiveBlur } from '@/components/motion/progressive-blur';
import { ProtectedImage } from '@/components/ui/protected-image';
import { personalPhotos } from '@/lib/site-data';

export function PhotoStrip() {
  return (
    <div className="relative">
      <Marquee pauseOnHover className="[--duration:60s] [--gap:1.5rem]">
        {personalPhotos.map((photo) => (
          <figure key={photo.src} className="w-56 shrink-0 sm:w-64">
            <div className="overflow-hidden rounded-sm border border-bone-line">
              <ProtectedImage
                src={photo.src}
                alt={photo.alt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
              />
            </div>
            <figcaption className="micro-label mt-2 text-ink-muted">{photo.caption}</figcaption>
          </figure>
        ))}
      </Marquee>
      <ProgressiveBlur
        direction="left"
        className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bone via-bone/70 to-transparent sm:w-24"
        blurIntensity={0.4}
      />
      <ProgressiveBlur
        direction="right"
        className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bone via-bone/70 to-transparent sm:w-24"
        blurIntensity={0.4}
      />
    </div>
  );
}
