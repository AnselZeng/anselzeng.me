'use client';

import { useState } from 'react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ProtectedImage } from '@/components/ui/protected-image';
import { ImageLightboxModal } from '@/components/ui/ImageLightboxModal';

export type MediaPick = {
  src: string;
  title: string;
  meta: string;
  byline: string;
  blurb: string;
};

function posterThumb(src: string) {
  return `/about/thumbs/${src.replace(/^\/about\//, '').replace(/\.[^.]+$/, '.webp')}`;
}

function PickCard({
  src,
  title,
  meta,
  byline,
  blurb,
  onOpen,
}: MediaPick & { onOpen: () => void }) {
  return (
    <div>
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View poster for ${title}`}
        className="group block w-full cursor-pointer border-0 bg-transparent p-0 text-left"
      >
        <div className="overflow-hidden rounded-sm border border-bone-line bg-bone-subtle">
          <ProtectedImage
            src={posterThumb(src)}
            alt=""
            className="aspect-[2/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </button>
      <h4 className="mt-4 font-serif text-lg font-medium leading-snug text-ink">{title}</h4>
      <p className="micro-label mt-1.5 text-ink-muted">
        {meta} · {byline}
      </p>
      <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{blurb}</p>
    </div>
  );
}

export function MediaPicks({
  label,
  title,
  items,
}: {
  label: string;
  title: string;
  items: MediaPick[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const open = openIndex !== null ? items[openIndex] : null;

  return (
    <div className="border-t border-bone-line pt-6">
      <BlurFade inView>
        <div>
          <p className="micro-label text-ember-600">{label}</p>
          <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight text-ink lg:text-3xl">
            {title}
          </h3>
        </div>
      </BlurFade>
      <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
        {items.map((item, i) => (
          <BlurFade key={item.title} inView delay={0.05 * i}>
            <PickCard {...item} onOpen={() => setOpenIndex(i)} />
          </BlurFade>
        ))}
      </div>
      <ImageLightboxModal
        isOpen={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        imageSrc={open?.src ?? ''}
        alt={open ? `${open.title} (${open.meta})` : ''}
        navigation={
          items.length > 1
            ? {
                onPrev: () =>
                  setOpenIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length)),
                onNext: () => setOpenIndex((i) => (i === null ? null : (i + 1) % items.length)),
              }
            : undefined
        }
      />
    </div>
  );
}
