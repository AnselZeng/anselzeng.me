import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { TextAnimate } from '@/components/magicui/text-animate';
import { GalleryGrid } from '@/components/fun/GalleryGrid';
import { galleryGroups } from '@/lib/gallery-data';
import { listGalleryFolder } from '@/lib/list-gallery';

export const dynamic = 'force-dynamic';

export default function GalleryPage() {
  const trips = galleryGroups
    .filter((group) => group.slug)
    .map((group) => ({ ...group, images: listGalleryFolder(group.folder) }));
  const loose = galleryGroups.find((group) => !group.slug);
  const looseImages = loose ? listGalleryFolder(loose.folder) : [];

  return (
    <div className="bg-bone text-ink">
      <section className="mx-auto max-w-6xl px-5 pt-28 lg:px-10 lg:pt-36">
        <BlurFade>
          <div className="micro-label flex flex-wrap items-center justify-between gap-2 border-b border-bone-line pb-4 text-ink-muted">
            <span>Fun — Gallery</span>
            <span>Digital camera</span>
          </div>
        </BlurFade>

        <div className="pb-12 pt-12 lg:pb-16 lg:pt-16">
          <BlurFade delay={0.1}>
            <p className="micro-label text-ember-600">Digital camera</p>
          </BlurFade>
          <TextAnimate
            as="h1"
            by="word"
            delay={0.15}
            className="mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1.08] tracking-tight lg:text-6xl"
          >
            Digi pics.
          </TextAnimate>
          <BlurFade delay={0.4}>
            <p className="mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-ink-soft">
              June 26, 2026 is when my digi finally arrived. Thank you eBay. A Sony
              Cyber-shot T700, from 2008.
            </p>
          </BlurFade>
        </div>
      </section>

      <section className="border-t border-bone-line">
        <div className="mx-auto max-w-6xl px-5 py-10 lg:px-10 lg:py-12">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {trips.map((trip, i) => {
              const cover =
                trip.images.find(
                  (image) => image.file.toLowerCase() === trip.cover?.toLowerCase(),
                ) ?? trip.images[0];
              return (
                <BlurFade key={trip.id} inView delay={0.05 * i}>
                  <Link
                    href={`/fun/gallery/${trip.slug}`}
                    className="group flex items-center gap-4 rounded-sm border border-bone-line bg-bone p-3 transition-colors hover:bg-bone-subtle"
                  >
                    <div className="w-24 shrink-0 overflow-hidden rounded-sm border border-bone-line bg-bone-subtle sm:w-28">
                      {cover ? (
                        <img
                          src={cover.src}
                          alt=""
                          width={2592}
                          height={1944}
                          loading="lazy"
                          decoding="async"
                          draggable={false}
                          className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                      ) : (
                        <div className="aspect-[4/3] w-full bg-bone-subtle" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="micro-label text-ember-600">{trip.eyebrow}</p>
                      <h2 className="mt-1 font-serif text-xl font-medium leading-snug transition-colors group-hover:text-ember-700 lg:text-2xl">
                        {trip.title}
                      </h2>
                      <p className="micro-label mt-1.5 text-ink-muted">
                        {String(trip.images.length).padStart(2, '0')} frames
                      </p>
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-ink-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember-600"
                      aria-hidden
                    />
                  </Link>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {loose && (
        <section className="border-t border-bone-line">
          <div className="mx-auto max-w-6xl px-5 py-14 lg:px-10 lg:py-16">
            <BlurFade inView>
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="micro-label text-ember-600">{loose.eyebrow}</p>
                  <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight lg:text-5xl">
                    {loose.title}
                  </h2>
                  {loose.summary && (
                    <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
                      {loose.summary}
                    </p>
                  )}
                </div>
                <p className="micro-label hidden text-ink-muted sm:block">
                  ({String(looseImages.length).padStart(2, '0')})
                </p>
              </div>
            </BlurFade>
            <GalleryGrid images={looseImages} />
          </div>
        </section>
      )}
    </div>
  );
}
