'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Marquee } from '@/components/magicui/marquee';
import { ProgressiveBlur } from '@/components/motion/progressive-blur';
import { GalleryThumb } from '@/components/fun/gallery-thumb';
import { ImageLightboxModal } from '@/components/ui/ImageLightboxModal';
import type { GalleryImage } from '@/lib/list-gallery';

function splitRows(images: GalleryImage[]) {
  const rows: GalleryImage[][] = [[], [], []];
  images.forEach((image, i) => {
    rows[i % 3].push(image);
  });
  return rows.filter((row) => row.length > 0);
}

export function GalleryParallax({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const open = openIndex !== null ? images[openIndex] : null;
  const rows = splitRows(images);
  const stripRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stripRef,
    offset: ['start end', 'end start'],
  });
  const yTop = useTransform(scrollYProgress, [0, 1], [-36, 36]);
  const yBottom = useTransform(scrollYProgress, [0, 1], [36, -36]);

  return (
    <div className="relative overflow-x-clip">
      <div ref={stripRef} className="space-y-4 py-8">
        {rows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            style={{ y: rowIndex === 0 ? yTop : rowIndex === 2 ? yBottom : 0 }}
            className="will-change-transform"
          >
            <Marquee
              pauseOnHover
              reverse={rowIndex === 1}
              repeat={4}
              className={
                rowIndex === 0
                  ? 'p-0 [--duration:80s] [--gap:1rem]'
                  : rowIndex === 1
                    ? 'p-0 [--duration:105s] [--gap:1rem]'
                    : 'p-0 [--duration:92s] [--gap:1rem]'
              }
            >
              {row.map((image) => {
                const index = images.findIndex((item) => item.src === image.src);
                return (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setOpenIndex(index)}
                    aria-label={image.caption ?? `Open frame ${image.index}`}
                    className="w-44 shrink-0 cursor-zoom-in border-0 bg-transparent p-0 text-left sm:w-52"
                  >
                    <div className="overflow-hidden rounded-sm border border-bone-line bg-bone-subtle">
                      <GalleryThumb
                        src={image.thumbSrc}
                        alt={image.caption ?? `Frame ${image.index}`}
                        priority={rowIndex === 0}
                        className="transition-transform duration-700 ease-out hover:scale-[1.03]"
                      />
                    </div>
                    <p className="micro-label mt-2 text-ink-muted">Fig. {image.index}</p>
                  </button>
                );
              })}
            </Marquee>
          </motion.div>
        ))}
      </div>
      <ProgressiveBlur
        direction="left"
        className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-bone via-bone/70 to-transparent sm:w-24"
        blurIntensity={0.4}
      />
      <ProgressiveBlur
        direction="right"
        className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-bone via-bone/70 to-transparent sm:w-24"
        blurIntensity={0.4}
      />
      <ImageLightboxModal
        isOpen={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        imageSrc={open?.src ?? ''}
        alt={open ? (open.caption ?? `Fig. ${open.index}`) : ''}
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
    </div>
  );
}
