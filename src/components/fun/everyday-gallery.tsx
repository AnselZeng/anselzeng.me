'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { BlurFade } from '@/components/magicui/blur-fade';
import { GalleryGrid } from '@/components/fun/GalleryGrid';
import { GalleryParallax } from '@/components/fun/gallery-parallax';
import { cn } from '@/lib/utils';
import type { GalleryGroup } from '@/lib/gallery-data';
import type { GalleryImage } from '@/lib/list-gallery';

type View = 'strip' | 'grid';

const STORAGE_KEY = 'gallery-la-view';

export function EverydayGallery({
  group,
  images,
}: {
  group: GalleryGroup;
  images: GalleryImage[];
}) {
  const [view, setView] = useState<View>('strip');
  const reduceMotion = useReducedMotion();
  const skipEnter = useRef(true);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'strip' || stored === 'grid') setView(stored);
  }, []);

  function choose(next: View) {
    skipEnter.current = false;
    setView(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <section className="overflow-x-clip border-t border-bone-line">
      <div className="mx-auto max-w-6xl px-5 pt-14 lg:px-10 lg:pt-16">
        <BlurFade inView>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="micro-label text-ember-600">{group.eyebrow}</p>
              <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight lg:text-5xl">
                {group.title}
              </h2>
              {group.summary && (
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
                  {group.summary}
                </p>
              )}
            </div>
            <div className="shrink-0 text-right">
              <div
                role="group"
                aria-label="Los Angeles view"
                className="micro-label flex justify-end gap-3"
              >
                <button
                  type="button"
                  aria-pressed={view === 'strip'}
                  onClick={() => choose('strip')}
                  className={cn(
                    'border-0 bg-transparent p-0 transition-colors',
                    view === 'strip' ? 'text-ember-600' : 'text-ink-muted hover:text-ink',
                  )}
                >
                  Strip
                </button>
                <button
                  type="button"
                  aria-pressed={view === 'grid'}
                  onClick={() => choose('grid')}
                  className={cn(
                    'border-0 bg-transparent p-0 transition-colors',
                    view === 'grid' ? 'text-ember-600' : 'text-ink-muted hover:text-ink',
                  )}
                >
                  Grid
                </button>
              </div>
              <p className="micro-label mt-2 text-ink-muted">
                ({String(images.length).padStart(2, '0')})
              </p>
            </div>
          </div>
        </BlurFade>
      </div>
      <motion.div
        key={view}
        initial={skipEnter.current || reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={
          view === 'strip'
            ? 'mt-10 pb-14 lg:pb-16'
            : 'mx-auto max-w-6xl px-5 pb-14 lg:px-10 lg:pb-16'
        }
      >
        {view === 'strip' ? (
          <GalleryParallax images={images} />
        ) : (
          <GalleryGrid images={images} className="mt-10" />
        )}
      </motion.div>
    </section>
  );
}
