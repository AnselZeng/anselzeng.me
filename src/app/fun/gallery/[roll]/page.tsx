import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { TextAnimate } from '@/components/magicui/text-animate';
import { GalleryGrid } from '@/components/fun/GalleryGrid';
import { galleryTripBySlug } from '@/lib/gallery-data';
import { listGalleryFolder } from '@/lib/list-gallery';

export const dynamic = 'force-dynamic';

export function generateMetadata({ params }: { params: { roll: string } }): Metadata {
  const trip = galleryTripBySlug(params.roll);
  return { title: trip ? `gallery · ${trip.id}` : 'gallery' };
}

export default function GalleryRollPage({ params }: { params: { roll: string } }) {
  const trip = galleryTripBySlug(params.roll);
  if (!trip) notFound();

  const images = listGalleryFolder(trip.folder);

  return (
    <div className="bg-bone text-ink">
      <section className="mx-auto max-w-6xl px-5 pt-28 lg:px-10 lg:pt-36">
        <BlurFade>
          <div className="micro-label flex flex-wrap items-center justify-between gap-2 border-b border-bone-line pb-4 text-ink-muted">
            <Link
              href="/fun/gallery"
              className="flex items-center gap-2 transition-colors hover:text-ember-600"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
              All rolls
            </Link>
            <span>{trip.eyebrow}</span>
          </div>
        </BlurFade>

        <div className="pb-10 pt-12 lg:pb-14 lg:pt-16">
          <BlurFade delay={0.1}>
            <p className="micro-label text-ember-600">{trip.eyebrow}</p>
          </BlurFade>
          <TextAnimate
            as="h1"
            by="word"
            delay={0.15}
            className="mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1.08] tracking-tight lg:text-6xl"
          >
            {trip.title}
          </TextAnimate>
          {trip.summary && (
            <BlurFade delay={0.4}>
              <p className="mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-ink-soft">
                {trip.summary}
              </p>
            </BlurFade>
          )}
          <BlurFade delay={0.5}>
            <p className="micro-label mt-8 text-ink-muted">
              {String(images.length).padStart(2, '0')} frames
            </p>
          </BlurFade>
        </div>
      </section>

      <section className="border-t border-bone-line">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-10 lg:py-24">
          <GalleryGrid images={images} />
        </div>
      </section>
    </div>
  );
}
