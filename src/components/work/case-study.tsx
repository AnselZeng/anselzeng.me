'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlurFade } from '@/components/magicui/blur-fade';
import { TextAnimate } from '@/components/magicui/text-animate';
import { ParallaxImage } from '@/components/magicui/parallax-image';
import { ProtectedImage } from '@/components/ui/protected-image';
import { ImageLightboxModal } from '@/components/ui/ImageLightboxModal';
import { cn } from '@/lib/utils';

/* ————————————————————————————————————————————————
   Shared editorial building blocks for /work case studies.
   Every case study composes these so the pages read as one
   publication: bone background, serif display, mono labels,
   hairline rules, ember accents, ink callout bands.
   ———————————————————————————————————————————————— */

export function CaseHero({
  category,
  title,
  subtitle,
  meta,
  heroImage,
  heroAlt,
}: {
  category: string;
  title: string;
  subtitle: string;
  meta: { label: string; value: string }[];
  heroImage: string;
  heroAlt: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-28 lg:px-10 lg:pt-36">
      <BlurFade>
        <div className="micro-label flex flex-wrap items-center justify-between gap-2 border-b border-bone-line pb-4 text-ink-muted">
          <Link
            href="/"
            className="flex items-center gap-2 transition-colors hover:text-ember-600"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
            All work
          </Link>
          <span className="text-[color:var(--case-accent,#C74A08)]">{category}</span>
        </div>
      </BlurFade>

      <div className="pt-12 lg:pt-16">
        <TextAnimate
          as="h1"
          by="word"
          delay={0.1}
          className="max-w-4xl font-serif text-4xl font-medium leading-[1.06] tracking-tight sm:text-5xl lg:text-[4rem]"
        >
          {title}
        </TextAnimate>
        <BlurFade delay={0.35}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft lg:text-lg">
            {subtitle}
          </p>
        </BlurFade>
      </div>

      <BlurFade delay={0.45}>
        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-bone-line pt-7 lg:grid-cols-4">
          {meta.map((item) => (
            <div key={item.label}>
              <p className="micro-label text-ink-muted">{item.label}</p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-ink">{item.value}</p>
            </div>
          ))}
        </div>
      </BlurFade>

      <BlurFade delay={0.55}>
        <ProtectedImage
          src={heroImage}
          alt={heroAlt}
          className="mt-12 h-auto w-full rounded-sm border border-bone-line bg-[color:var(--case-tint,#F2EDE3)]"
        />
        <div className="micro-label mt-3 flex items-center justify-between text-ink-muted">
          <span>Fig. 01</span>
          <span>{heroAlt}</span>
        </div>
      </BlurFade>
    </section>
  );
}

export function CaseSection({
  index,
  eyebrow,
  title,
  children,
  className,
  wide = false,
}: {
  index: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  /** When true, children span the full width below the header instead of the right column. */
  wide?: boolean;
}) {
  return (
    <section className={cn('mx-auto max-w-6xl px-5 py-16 lg:px-10 lg:py-24', className)}>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
        <BlurFade inView className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="micro-label text-[color:var(--case-accent,#C74A08)]">
              {index} — {eyebrow}
            </p>
            <h2 className="mt-4 font-serif text-2xl font-medium leading-snug tracking-tight lg:text-4xl">
              {title}
            </h2>
          </div>
        </BlurFade>
        {!wide && (
          <BlurFade inView delay={0.1} className="lg:col-span-8">
            <div className="space-y-5 text-[0.9375rem] leading-relaxed text-ink-soft">
              {children}
            </div>
          </BlurFade>
        )}
      </div>
      {wide && (
        <BlurFade inView delay={0.1}>
          <div className="mt-10">{children}</div>
        </BlurFade>
      )}
    </section>
  );
}

export function CaseCallout({ label, children }: { label: string; children: string }) {
  return (
    <section className="border-y border-bone-line bg-ink text-bone">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-10 lg:py-28">
        <BlurFade inView>
          <p className="micro-label text-[color:var(--case-accent-bright,#E97A34)]">{label}</p>
          <p className="mt-6 max-w-3xl font-serif text-2xl font-medium leading-snug tracking-tight sm:text-3xl lg:text-[2.6rem]">
            {children}
          </p>
        </BlurFade>
      </div>
    </section>
  );
}

export function CaseFigure({
  src,
  alt,
  caption,
  figure,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  figure?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <ParallaxImage
        src={src}
        alt={alt}
        strength={4}
        className="rounded-sm border border-bone-line bg-white"
        imgClassName="h-auto w-full"
      />
      {(caption || figure) && (
        <figcaption className="micro-label mt-3 flex items-center justify-between text-ink-muted">
          <span>{figure}</span>
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}

export function CaseCardGrid({
  items,
  columns = 2,
}: {
  items: { title: string; description: string }[];
  columns?: 2 | 3 | 4;
}) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-x-12 gap-y-10',
        columns === 2 && 'md:grid-cols-2',
        columns === 3 && 'md:grid-cols-3',
        columns === 4 && 'md:grid-cols-2 lg:grid-cols-4',
      )}
    >
      {items.map((item, i) => (
        <BlurFade key={item.title} inView delay={0.05 * i}>
          <div className="border-t border-bone-line pt-5">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-serif text-lg font-medium leading-snug lg:text-xl">
                {item.title}
              </h3>
              <span className="micro-label text-[color:var(--case-accent,#C74A08)]">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.description}</p>
          </div>
        </BlurFade>
      ))}
    </div>
  );
}

export function CaseTabs({
  tabs,
}: {
  tabs: { label: string; content: React.ReactNode }[];
}) {
  const [selected, setSelected] = useState(0);
  return (
    <div>
      <div className="flex flex-wrap gap-x-7 gap-y-2 border-b border-bone-line">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            type="button"
            onClick={() => setSelected(i)}
            className={cn(
              'micro-label relative -mb-px border-b-2 pb-3 pt-1 text-left transition-colors',
              selected === i
                ? 'border-[color:var(--case-accent,#E4580B)] text-ink'
                : 'border-transparent text-ink-muted hover:text-ember-600',
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <motion.div
        key={selected}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="pt-8"
      >
        {tabs[selected].content}
      </motion.div>
    </div>
  );
}

export function CaseGallery({
  images,
  label = 'Highlights',
  columns = 3,
}: {
  images: { src: string; alt: string }[];
  label?: string;
  columns?: 2 | 3;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <div
        className={cn(
          'grid grid-cols-2 gap-4',
          columns === 3 && 'md:grid-cols-3',
        )}
      >
        {images.map((image, i) => (
          <BlurFade key={image.src} inView delay={0.04 * i}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group block w-full overflow-hidden rounded-sm border border-bone-line"
              aria-label={`Open ${image.alt}`}
            >
              <ProtectedImage
                src={image.src}
                alt={image.alt}
                className="aspect-square w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
            </button>
          </BlurFade>
        ))}
      </div>
      <ImageLightboxModal
        isOpen={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        imageSrc={openIndex !== null ? images[openIndex].src : ''}
        alt={openIndex !== null ? images[openIndex].alt : label}
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

export function CaseClosing({
  title,
  paragraphs,
  next,
}: {
  title: string;
  paragraphs: string[];
  next: { href: string; label: string };
}) {
  return (
    <section className="border-t border-bone-line">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <BlurFade inView className="lg:col-span-4">
            <p className="micro-label text-[color:var(--case-accent,#C74A08)]">
              Closing the chapter
            </p>
            <h2 className="mt-4 font-serif text-2xl font-medium leading-snug tracking-tight lg:text-4xl">
              {title}
            </h2>
          </BlurFade>
          <BlurFade inView delay={0.1} className="lg:col-span-8">
            <div className="space-y-5 text-[0.9375rem] leading-relaxed text-ink-soft">
              {paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </BlurFade>
        </div>

        <BlurFade inView delay={0.15}>
          <Link
            href={next.href}
            className="group mt-14 flex items-center justify-between border-t border-bone-line pt-8"
          >
            <div>
              <p className="micro-label text-ink-muted">Next project</p>
              <p className="mt-2 font-serif text-2xl font-medium tracking-tight transition-colors group-hover:text-ember-700 lg:text-3xl">
                {next.label}
              </p>
            </div>
            <ArrowRight
              className="h-6 w-6 text-ink-muted transition-all group-hover:translate-x-1 group-hover:text-ember-600"
              aria-hidden
            />
          </Link>
        </BlurFade>
      </div>
    </section>
  );
}

export function CaseLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 font-medium text-ink underline decoration-ember-300 decoration-[1.5px] underline-offset-4 transition-colors hover:text-ember-600"
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
    </a>
  );
}
