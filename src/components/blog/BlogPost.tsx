'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BlurFade } from '@/components/magicui/blur-fade';
import { TextAnimate } from '@/components/magicui/text-animate';
import { ParallaxImage } from '@/components/magicui/parallax-image';
import { ProtectedImage } from '@/components/ui/protected-image';
import { ImageLightboxModal } from '@/components/ui/ImageLightboxModal';

interface BlogPostProps {
  title: string;
  date: string;
  readTime: string;
  category: string;
  color: string;
  coverImage: string;
  sections: Array<{
    type: 'text' | 'imageGroup';
    content?: string | React.ReactNode;
    images?: Array<{
      src: string;
      alt: string;
    }>;
  }>;
}

export default function BlogPost({
  title,
  date,
  readTime,
  category,
  coverImage,
  sections,
}: BlogPostProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  const handleImageClick = (imageSrc: string, groupIndex: number, imageIndex: number) => {
    setSelectedImage(imageSrc);
    setCurrentImageIndex(imageIndex);
    setCurrentGroupIndex(groupIndex);
    setIsOpen(true);
  };

  const nextImage = () => {
    const currentGroup = sections[currentGroupIndex];
    if (currentGroup.type === 'imageGroup' && currentGroup.images) {
      const nextIndex = (currentImageIndex + 1) % currentGroup.images.length;
      setCurrentImageIndex(nextIndex);
      setSelectedImage(currentGroup.images[nextIndex].src);
    }
  };

  const prevImage = () => {
    const currentGroup = sections[currentGroupIndex];
    if (currentGroup.type === 'imageGroup' && currentGroup.images) {
      const prevIndex =
        (currentImageIndex - 1 + currentGroup.images.length) % currentGroup.images.length;
      setCurrentImageIndex(prevIndex);
      setSelectedImage(currentGroup.images[prevIndex].src);
    }
  };

  const currentGroup = sections[currentGroupIndex];
  const lightboxNavigation =
    currentGroup?.type === 'imageGroup' &&
    currentGroup.images &&
    currentGroup.images.length > 1
      ? { onPrev: prevImage, onNext: nextImage }
      : undefined;

  // Editorial figure numbering: cover is Fig. 01, image groups continue from there.
  let figureCounter = 1;
  const figureNumbers = sections.map((section) =>
    section.type === 'imageGroup' ? String(++figureCounter).padStart(2, '0') : null,
  );

  return (
    <div className="bg-bone text-ink">
      {/* ————— Header ————— */}
      <section className="mx-auto max-w-4xl px-5 pt-28 lg:px-10 lg:pt-36">
        <BlurFade>
          <div className="micro-label flex flex-wrap items-center justify-between gap-2 border-b border-bone-line pb-4 text-ink-muted">
            <Link
              href="/fun/blog"
              className="flex items-center gap-2 transition-colors hover:text-ember-600"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
              Back to journal
            </Link>
            <span className="text-ember-600">{category}</span>
          </div>
        </BlurFade>

        <div className="pt-12 lg:pt-16">
          <TextAnimate
            as="h1"
            by="word"
            delay={0.1}
            className="max-w-3xl font-serif text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.6rem]"
          >
            {title}
          </TextAnimate>
          <BlurFade delay={0.35}>
            <p className="micro-label mt-6 text-ink-muted">
              {date}
              <span className="mx-3 text-bone-line">·</span>
              {readTime}
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={0.45}>
          <ParallaxImage
            src={coverImage}
            alt={title}
            strength={5}
            className="mt-12 aspect-[16/9] rounded-sm border border-bone-line bg-bone-subtle"
          />
          <div className="micro-label mt-3 flex items-center justify-between text-ink-muted">
            <span>Fig. 01</span>
            <span>{title}</span>
          </div>
        </BlurFade>
      </section>

      {/* ————— Body ————— */}
      <article className="mx-auto max-w-4xl px-5 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-2xl space-y-10">
          {sections.map((section, index) => (
            <BlurFade key={index} inView>
              {section.type === 'text' ? (
                <p className="text-[0.9375rem] leading-relaxed text-ink-soft">
                  {section.content}
                </p>
              ) : section.type === 'imageGroup' && section.images ? (
                <figure>
                  <div
                    className={cn(
                      'grid grid-cols-2 gap-4',
                      section.images.length > 2 && 'md:grid-cols-3',
                    )}
                  >
                    {section.images.map((image, imageIndex) => (
                      <button
                        key={imageIndex}
                        type="button"
                        onClick={() => handleImageClick(image.src, index, imageIndex)}
                        className="group block w-full cursor-pointer overflow-hidden rounded-sm border border-bone-line bg-bone-subtle p-0"
                        aria-label={`Open ${image.alt}`}
                      >
                        <ProtectedImage
                          src={image.src}
                          alt={image.alt}
                          className="aspect-[4/5] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                        />
                      </button>
                    ))}
                  </div>
                  <figcaption className="micro-label mt-3 flex items-center justify-between text-ink-muted">
                    <span>Fig. {figureNumbers[index]}</span>
                    <span>{category}</span>
                  </figcaption>
                </figure>
              ) : null}
            </BlurFade>
          ))}
        </div>
      </article>

      {/* ————— Closing ————— */}
      <section className="border-t border-bone-line">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:px-10 lg:py-20">
          <BlurFade inView>
            <div className="mx-auto flex max-w-2xl flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="micro-label text-ember-600">End of entry</p>
                <p className="mt-4 font-serif text-2xl font-medium tracking-tight lg:text-3xl">
                  Thanks for reading.
                </p>
              </div>
              <Link
                href="/fun/blog"
                className="border border-ink px-5 py-2.5 text-sm font-medium transition-colors hover:bg-ink hover:text-bone"
              >
                Back to journal
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      <ImageLightboxModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        imageSrc={selectedImage || ''}
        alt="Blog Image"
        navigation={lightboxNavigation}
      />
    </div>
  );
}
