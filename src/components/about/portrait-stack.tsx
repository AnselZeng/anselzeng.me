'use client';

import { useRef, useState, type PointerEvent } from 'react';
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
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const handledPointer = useRef(false);
  const count = portraitPhotos.length;
  const photo = portraitPhotos[front];
  const prev = (front - 1 + count) % count;
  const next = (front + 1) % count;

  const releasePointer = (event: PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const unlessPointerHandled = (action: () => void) => {
    if (handledPointer.current) return;
    action();
  };

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
          <div
            className="absolute inset-0 z-20 flex touch-pan-y"
            onPointerDown={(event) => {
              pointerStart.current = { x: event.clientX, y: event.clientY };
              handledPointer.current = false;
              event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerUp={(event) => {
              const start = pointerStart.current;
              pointerStart.current = null;
              releasePointer(event);
              if (!start) return;

              const dx = event.clientX - start.x;
              const dy = event.clientY - start.y;
              handledPointer.current = true;

              if (Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy)) {
                setFront(dx < 0 ? next : prev);
                return;
              }

              const rect = event.currentTarget.getBoundingClientRect();
              const edge = rect.width * 0.22;
              const x = start.x - rect.left;
              if (x < edge) setFront(prev);
              else if (x > rect.width - edge) setFront(next);
              else setOpen(true);
            }}
            onPointerCancel={(event) => {
              pointerStart.current = null;
              releasePointer(event);
            }}
          >
            <button
              type="button"
              aria-label={`Show ${portraitPhotos[prev].caption}`}
              onClick={() => unlessPointerHandled(() => setFront(prev))}
              className="w-[22%] cursor-pointer border-0 bg-transparent p-0"
            />
            <button
              type="button"
              aria-label={`Open ${photo.caption}`}
              onClick={() => unlessPointerHandled(() => setOpen(true))}
              className="flex-1 cursor-pointer border-0 bg-transparent p-0"
            />
            <button
              type="button"
              aria-label={`Show ${portraitPhotos[next].caption}`}
              onClick={() => unlessPointerHandled(() => setFront(next))}
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
