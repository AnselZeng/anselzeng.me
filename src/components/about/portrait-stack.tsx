'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TiltCard } from '@/components/magicui/tilt-card';
import { Parallax } from '@/components/magicui/parallax';
import { ProtectedImage } from '@/components/ui/protected-image';
import { ImageLightboxModal } from '@/components/ui/ImageLightboxModal';
import { portraitPhotos } from '@/lib/site-data';

function fanFor(offset: number, count: number) {
  if (offset === 0) return { rotate: 0, x: 0, y: 0 };
  if (offset === 1) return { rotate: 7.5, x: 26, y: 12 };
  if (offset === count - 1) return { rotate: -7.5, x: -26, y: 12 };
  return { rotate: 3, x: 8, y: 24 };
}

export function PortraitStack() {
  const [front, setFront] = useState(0);
  const [open, setOpen] = useState(false);
  const count = portraitPhotos.length;
  const photo = portraitPhotos[front];
  const prev = (front - 1 + count) % count;
  const next = (front + 1) % count;

  return (
    <Parallax offset={-26} className="group mx-auto max-w-[24rem] lg:mx-0">
      <TiltCard maxTilt={4}>
        <div className="relative px-10 pb-12 pt-4">
          <div className="pointer-events-none relative aspect-[3/4] w-full">
            {portraitPhotos.map((item, i) => {
              const offset = (i - front + count) % count;
              const fan = fanFor(offset, count);
              return (
                <motion.div
                  key={item.src}
                  className="absolute inset-0 overflow-hidden rounded-t-[10rem] border border-bone-line bg-bone-subtle shadow-[0_18px_40px_-28px_rgba(27,23,19,0.45)]"
                  style={{ zIndex: count - offset }}
                  animate={{ rotate: fan.rotate, x: fan.x, y: fan.y }}
                  transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                >
                  <ProtectedImage
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              );
            })}
          </div>
          <div className="absolute inset-0 z-20 flex">
            <button
              type="button"
              aria-label={`Show ${portraitPhotos[prev].caption}`}
              onClick={() => setFront(prev)}
              className="w-[22%] cursor-pointer border-0 bg-transparent p-0"
            />
            <button
              type="button"
              aria-label={`Open ${photo.caption}`}
              onClick={() => setOpen(true)}
              className="flex-1 cursor-pointer border-0 bg-transparent p-0"
            />
            <button
              type="button"
              aria-label={`Show ${portraitPhotos[next].caption}`}
              onClick={() => setFront(next)}
              className="w-[22%] cursor-pointer border-0 bg-transparent p-0"
            />
          </div>
        </div>
      </TiltCard>
      <div className="micro-label mt-5 flex items-center justify-between gap-3 text-ink-muted">
        <span>
          Fig. 02 · {String(front + 1).padStart(2, '0')}/{String(count).padStart(2, '0')}
        </span>
        <span className="truncate text-right transition-colors group-hover:text-ember-600">
          {photo.caption}
        </span>
      </div>
      <ImageLightboxModal
        isOpen={open}
        onClose={() => setOpen(false)}
        imageSrc={photo.fullSrc}
        alt={photo.caption}
        navigation={{
          onPrev: () => setFront((i) => (i - 1 + count) % count),
          onNext: () => setFront((i) => (i + 1) % count),
        }}
      />
    </Parallax>
  );
}
