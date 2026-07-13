'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { TextAnimate } from '@/components/magicui/text-animate';
import { ImageLightboxModal } from '@/components/ui/ImageLightboxModal';

type DesignProject = {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: { href: string; label: string };
};

const designProjects: DesignProject[] = [
  {
    id: 'timbuddies',
    title: 'Tim Buddies',
    description:
      'Mobile app concept for Tim Hortons: a rewards system we pitched as part of the Deloitte Innovation Forum, an annual Ivey HBA case event sponsored by Deloitte. Our team took second place.',
    image: '/design/timbuddies.png',
    link: {
      href: 'https://www.ivey.uwo.ca/news/news-ivey/2023/january/deloitte-innovation-forum-serves-up-real-world-experience-for-hba1s/',
      label: 'Ivey article',
    },
  },
  {
    id: 'pepsico',
    title: 'PepsiCo Campaign',
    description:
      'Course project: a web experience where people can plan ahead and choose healthier snacks and drink options from PepsiCo’s lineup, making better-for-you choices easier to discover and stick with.',
    image: '/design/pepsico.png',
  },
  {
    id: 'lilprotectors',
    title: 'Little Protectors',
    description:
      'Tower defense game for CS 4474 (Human-Computer Interaction), built with Python and Pygame, exploring HCI through a full playable prototype.',
    image: '/design/lilprotectors.png',
    link: {
      href: 'https://github.com/AnselZeng/little-protectors',
      label: 'GitHub repo',
    },
  },
  {
    id: 'agrilink',
    title: 'AgriLink',
    description:
      'Mobile app design for farmers to grow a community: share resources, swap knowledge, and stay connected. Think of it as a social layer built around agriculture and local collaboration.',
    image: '/design/agrilink.png',
  },
];

const designProcess = [
  {
    step: '01',
    title: 'Research',
    description: 'Understanding user needs, market trends, and business requirements.',
  },
  {
    step: '02',
    title: 'Ideate',
    description: 'Brainstorming solutions and exploring creative possibilities.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'Creating wireframes, prototypes, and visual designs.',
  },
  {
    step: '04',
    title: 'Test',
    description: 'Validating designs through user testing and feedback.',
  },
];

export default function DesignPage() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % designProjects.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + designProjects.length) % designProjects.length);
  };

  return (
    <div className="bg-bone text-ink">
      <section className="mx-auto max-w-6xl px-5 pt-28 lg:px-10 lg:pt-36">
        <BlurFade>
          <div className="micro-label flex flex-wrap items-center justify-between gap-2 border-b border-bone-line pb-4 text-ink-muted">
            <span>Fun — Design</span>
            <span>Design Portfolio</span>
          </div>
        </BlurFade>

        <div className="pb-16 pt-12 lg:pb-24 lg:pt-16">
          <BlurFade delay={0.1}>
            <p className="micro-label text-ember-600">Design Portfolio</p>
          </BlurFade>
          <TextAnimate
            as="h1"
            by="word"
            delay={0.15}
            className="mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1.08] tracking-tight lg:text-6xl"
          >
            Design
          </TextAnimate>
          <BlurFade delay={0.4}>
            <p className="mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-ink-soft">
              A collection of creative projects that blend functionality with aesthetics
            </p>
          </BlurFade>
        </div>
      </section>
      <section className="border-t border-bone-line">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 py-16 lg:grid-cols-12 lg:gap-14 lg:px-10 lg:py-24">
          <BlurFade inView className="lg:col-span-4">
            <p className="micro-label text-ember-600">About My Design Journey</p>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight lg:text-4xl">
              A Brief Introduction
            </h2>
          </BlurFade>
          <BlurFade inView delay={0.1} className="lg:col-span-8">
            <div className="max-w-2xl space-y-5 text-[0.9375rem] leading-relaxed text-ink-soft">
              <p>
                Since my first internship as a UX/UI designer, I fell in love with Figma and
                discovered a passion for creating intuitive, user-focused designs. I&apos;ve always
                felt a strong creative drive, which led me to volunteer for design roles in school
                projects, assignments, and even case competitions.
              </p>
              <p>
                I thrive on the challenge of transforming abstract ideas into thoughtful user
                experiences that blend functionality and aesthetics. My journey in design is fueled
                by a constant curiosity and a desire to make digital interactions seamless,
                engaging, and meaningful for users everywhere.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
      <section className="border-t border-bone-line bg-bone-subtle/60">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-10 lg:py-24">
          <BlurFade inView>
            <div className="flex items-end justify-between">
              <div>
                <p className="micro-label text-ember-600">Design Process</p>
                <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight lg:text-5xl">
                  My Creative Approach
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
                  A systematic approach to design that ensures every project meets user needs and
                  business objectives.
                </p>
              </div>
              <p className="micro-label hidden text-ink-muted sm:block">
                ({String(designProcess.length).padStart(2, '0')})
              </p>
            </div>
          </BlurFade>

          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {designProcess.map((process, i) => (
              <BlurFade key={process.step} inView delay={0.05 * i}>
                <div className="border-t border-ink/20 pt-5">
                  <p className="micro-label text-ember-600">{process.step}</p>
                  <h3 className="mt-3 font-serif text-xl font-medium">{process.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {process.description}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-bone-line">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-10 lg:py-24">
          <BlurFade inView>
            <div className="flex items-end justify-between">
              <div>
                <p className="micro-label text-ember-600">Featured Projects</p>
                <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight lg:text-5xl">
                  Design Portfolio
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
                  A collection of design projects showcasing my creative process and attention to
                  detail.
                </p>
              </div>
              <p className="micro-label hidden text-ink-muted sm:block">
                ({String(designProjects.length).padStart(2, '0')})
              </p>
            </div>
          </BlurFade>

          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
            {designProjects.map((project, i) => (
              <BlurFade key={project.id} inView delay={0.06 * (i % 2)}>
                <figure>
                  <button
                    type="button"
                    onClick={() => openLightbox(i)}
                    aria-label={`View ${project.title} full size`}
                    className="group block w-full cursor-zoom-in border-0 bg-transparent p-0 text-left"
                  >
                    <div className="overflow-hidden rounded-sm border border-bone-line bg-bone-subtle">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="micro-label mt-3 flex items-center justify-between text-ink-muted">
                      <span>Fig. {String(i + 1).padStart(2, '0')}</span>
                      <span className="transition-colors group-hover:text-ember-600">
                        View larger
                      </span>
                    </div>
                  </button>
                  <figcaption className="mt-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-xl font-medium leading-snug lg:text-2xl">
                        {project.title}
                      </h3>
                      {project.link && (
                        <a
                          href={project.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.link.label} (opens in new tab)`}
                          className="group/link micro-label inline-flex shrink-0 items-center gap-1 pt-2 text-ink-muted transition-colors hover:text-ember-600"
                        >
                          {project.link.label}
                          <ArrowUpRight
                            className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                            aria-hidden
                          />
                        </a>
                      )}
                    </div>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
                      {project.description}
                    </p>
                  </figcaption>
                </figure>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-bone-line">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-10 lg:py-24">
          <BlurFade inView>
            <p className="micro-label text-ember-600">Next</p>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight lg:text-5xl">
              Let&apos;s Create Together
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
              I&apos;m always excited to collaborate on new design projects and bring creative
              visions to life.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/fun/travels"
                className="inline-flex items-center gap-2 border border-ink px-5 py-2.5 text-sm font-medium transition-colors hover:bg-ink hover:text-bone"
              >
                View My Travels
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-ink px-5 py-2.5 text-sm font-medium transition-colors hover:bg-ink hover:text-bone"
              >
                Learn More About Me
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      <ImageLightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        imageSrc={designProjects[currentImageIndex].image}
        alt={designProjects[currentImageIndex].title}
        navigation={{ onPrev: prevImage, onNext: nextImage }}
      />
    </div>
  );
}
