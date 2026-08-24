'use client';

import { useState } from 'react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ImageLightboxModal } from '@/components/ui/ImageLightboxModal';
import { GalleryThumb } from '@/components/fun/gallery-thumb';
import type { GalleryImage } from '@/lib/list-gallery';

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return (
      <p className="mt-8 text-sm leading-relaxed text-ink-muted">
        Nothing in this roll yet. Drop JPEGs in the folder and refresh.
      </p>
    );
  }

  return (
    <>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {images.map((image, i) => (
          <BlurFade key={image.src} inView delay={Math.min(0.04 * (i % 6), 0.2)}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={image.caption ?? `Open frame ${image.index}`}
              className="group block w-full cursor-zoom-in border-0 bg-transparent p-0 text-left"
            >
              <div className="overflow-hidden rounded-sm border border-bone-line bg-bone-subtle">
                <GalleryThumb
                  src={image.thumbSrc}
                  alt={image.caption ?? `Frame ${image.index}`}
                  priority={i < 6}
                  className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="micro-label mt-2 flex items-center justify-between gap-3 text-ink-muted">
                <span>Fig. {image.index}</span>
                {image.caption ? (
                  <span className="truncate text-right transition-colors group-hover:text-ember-600">
                    {image.caption}
                  </span>
                ) : (
                  <span className="transition-colors group-hover:text-ember-600">View</span>
                )}
              </div>
            </button>
          </BlurFade>
        ))}
      </div>

      <ImageLightboxModal
        isOpen={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        imageSrc={openIndex !== null ? images[openIndex].src : ''}
        alt={
          openIndex !== null
            ? (images[openIndex].caption ?? `Fig. ${images[openIndex].index}`)
            : ''
        }
        navigation={
          images.length > 1
            ? {
                onPrev: () =>
                  setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
                onNext: () => setOpenIndex((i) => (i === null ? null : (i + 1) % images.length)),
              }
            : undefined
        }
      />
    </>
  );
}
