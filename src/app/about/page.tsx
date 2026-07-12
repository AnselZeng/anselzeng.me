import Link from 'next/link';
import { ArrowUpRight, Download } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { TextAnimate } from '@/components/magicui/text-animate';
import { Marquee } from '@/components/magicui/marquee';
import { TiltCard } from '@/components/magicui/tilt-card';
import { Parallax } from '@/components/magicui/parallax';
import { ProtectedImage } from '@/components/ui/protected-image';
import InterestsGrid from '@/components/about/InterestsGrid';
import {
  education,
  expertiseAreas,
  leadershipTimeline,
  personalPhotos,
  workTimeline,
  type TimelineEntry,
} from '@/lib/site-data';

function schoolLink(href: string, label: string) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-ink underline decoration-ember-300 decoration-[1.5px] underline-offset-4 transition-colors hover:text-ember-600"
    >
      {label}
    </a>
  );
}

function TimelineRow({ entry, index }: { entry: TimelineEntry; index: number }) {
  return (
    <BlurFade inView delay={0.04 * index}>
      <div className="grid grid-cols-1 gap-2 border-b border-bone-line py-7 sm:grid-cols-[10rem_1fr] sm:gap-8">
        <div className="micro-label pt-1 text-ink-muted">
          {entry.date}
          {entry.current && (
            <span className="ml-2 inline-block rounded-full bg-ember-500 px-2 py-0.5 text-[0.625rem] text-white sm:ml-0 sm:mt-2 sm:block sm:w-fit">
              Now
            </span>
          )}
        </div>
        <div className="min-w-0">
          <div className="flex items-baseline gap-3">
            <h3 className="font-serif text-xl font-medium leading-snug">
              {entry.href ? (
                <Link
                  href={entry.href}
                  className="group inline-flex items-baseline gap-1.5 transition-colors hover:text-ember-600"
                >
                  {entry.org}
                  <ArrowUpRight
                    className="h-4 w-4 self-center text-ink-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember-600"
                    aria-hidden
                  />
                </Link>
              ) : (
                entry.org
              )}
            </h3>
            {entry.logo && (
              <ProtectedImage
                src={entry.logo}
                alt=""
                aria-hidden
                className="h-5 w-5 self-center object-contain opacity-80"
              />
            )}
          </div>
          <p className="micro-label mt-1.5 text-ember-600">{entry.role}</p>
          {entry.summary && (
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">{entry.summary}</p>
          )}
        </div>
      </div>
    </BlurFade>
  );
}

export default function About() {
  return (
    <div className="bg-bone text-ink">
      {/* ————— Hero ————— */}
      <section className="mx-auto max-w-6xl px-5 pt-28 lg:px-10 lg:pt-36">
        <BlurFade>
          <div className="micro-label flex flex-wrap items-center justify-between gap-2 border-b border-bone-line pb-4 text-ink-muted">
            <span>About</span>
            <span>Est. Toronto → Los Angeles</span>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 gap-12 pt-12 lg:grid-cols-12 lg:gap-14 lg:pt-16">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <BlurFade delay={0.25}>
              <Parallax offset={-26} className="mx-auto max-w-[24rem] lg:mx-0">
                <TiltCard maxTilt={4}>
                  <div className="overflow-hidden rounded-t-[10rem] border border-bone-line">
                    <ProtectedImage
                      src={personalPhotos[0].src}
                      alt={personalPhotos[0].alt}
                      className="aspect-[3/4] w-full object-cover"
                    />
                  </div>
                </TiltCard>
                <div className="micro-label mt-3 flex items-center justify-between text-ink-muted">
                  <span>Fig. 02</span>
                  <span>{personalPhotos[0].caption}</span>
                </div>
              </Parallax>
            </BlurFade>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <BlurFade delay={0.1}>
              <p className="micro-label text-ember-600">A little context</p>
            </BlurFade>
            <TextAnimate
              as="h1"
              by="word"
              delay={0.15}
              className="mt-5 font-serif text-4xl font-medium leading-[1.08] tracking-tight lg:text-6xl"
            >
              The person behind the work.
            </TextAnimate>

            <BlurFade delay={0.4}>
              <div className="mt-8 max-w-xl space-y-5 text-[0.9375rem] leading-relaxed text-ink-soft">
                <p>
                  I&apos;m a Master of Computer Science student at{' '}
                  {schoolLink('https://viterbischool.usc.edu/', 'USC Viterbi School of Engineering')},
                  having just returned from a semester abroad at{' '}
                  {schoolLink('https://www.tsinghua.edu.cn/en/', 'Tsinghua University')}, where I
                  gained international perspective on technology and innovation.
                </p>
                <p>
                  Before that, a dual degree in Computer Science and Business Administration at{' '}
                  {schoolLink('https://www.uwo.ca/index.html', 'Western University')} and{' '}
                  {schoolLink('https://www.ivey.uwo.ca/', 'Ivey Business School')} — a foundation
                  that spans both the technical and the strategic.
                </p>
                <p>
                  At the core, I&apos;m passionate about building impactful things. I blend
                  business strategy with design thinking to make products that are functional,
                  considered, and genuinely useful.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.55}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="/Ansel_Zeng_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-ink px-5 py-2.5 text-sm font-medium transition-colors hover:bg-ink hover:text-bone"
                >
                  <Download className="h-4 w-4" aria-hidden />
                  Resume
                </a>
                <Link
                  href="/fun/blog"
                  className="group inline-flex items-center gap-2 px-2 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:text-ember-600"
                >
                  Read my blog
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ————— Photo strip ————— */}
      <section className="mt-20 border-y border-bone-line py-4 lg:mt-28">
        <BlurFade inView>
          <Marquee pauseOnHover className="[--duration:60s] [--gap:1.5rem]">
            {personalPhotos.map((photo) => (
              <figure key={photo.src} className="w-56 shrink-0 sm:w-64">
                <div className="overflow-hidden rounded-sm border border-bone-line">
                  <ProtectedImage
                    src={photo.src}
                    alt={photo.alt}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                  />
                </div>
                <figcaption className="micro-label mt-2 text-ink-muted">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </Marquee>
        </BlurFade>
      </section>

      {/* ————— Experience ————— */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-10 lg:py-28">
        <BlurFade inView>
          <div className="flex items-end justify-between">
            <div>
              <p className="micro-label text-ember-600">Experience</p>
              <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight lg:text-5xl">
                Where I&apos;ve worked
              </h2>
            </div>
            <p className="micro-label hidden text-ink-muted sm:block">
              ({String(workTimeline.length).padStart(2, '0')})
            </p>
          </div>
        </BlurFade>

        <div className="mt-12 border-t border-bone-line">
          {workTimeline.map((entry, i) => (
            <TimelineRow key={`${entry.org}-${entry.date}`} entry={entry} index={i} />
          ))}
        </div>

        <BlurFade inView>
          <div className="mt-20 flex items-end justify-between">
            <div>
              <p className="micro-label text-ember-600">Leadership &amp; community</p>
              <h2 className="mt-4 font-serif text-2xl font-medium tracking-tight lg:text-4xl">
                Beyond the job titles
              </h2>
            </div>
            <p className="micro-label hidden text-ink-muted sm:block">
              ({String(leadershipTimeline.length).padStart(2, '0')})
            </p>
          </div>
        </BlurFade>

        <div className="mt-10 border-t border-bone-line">
          {leadershipTimeline.map((entry, i) => (
            <TimelineRow key={`${entry.org}-${entry.date}`} entry={entry} index={i} />
          ))}
        </div>
      </section>

      {/* ————— Education ————— */}
      <section className="border-t border-bone-line bg-bone-subtle/60">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-10 lg:py-20">
          <BlurFade inView>
            <p className="micro-label text-ember-600">Education</p>
          </BlurFade>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {education.map((item, i) => (
              <BlurFade key={item.school} inView delay={0.05 * i}>
                <div className="border-t border-ink/20 pt-4">
                  <p className="font-serif text-lg font-medium leading-snug">{item.school}</p>
                  <p className="micro-label mt-2 text-ink-muted">{item.detail}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ————— Expertise ————— */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-10 lg:py-28">
        <BlurFade inView>
          <div>
            <p className="micro-label text-ember-600">Expertise</p>
            <h2 className="mt-4 max-w-xl font-serif text-3xl font-medium tracking-tight lg:text-5xl">
              What I build, and how I think about it
            </h2>
          </div>
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 gap-x-14 gap-y-12 md:grid-cols-2">
          {expertiseAreas.map((area, i) => (
            <BlurFade key={area.id} inView delay={0.06 * i}>
              <div className="border-t border-bone-line pt-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-xl font-medium lg:text-2xl">{area.title}</h3>
                  <span className="micro-label text-ember-600">{area.id}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{area.description}</p>
                <p className="micro-label mt-5 leading-loose text-ink-muted">
                  {area.stack.join('  ·  ')}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ————— Interests ————— */}
      <section className="border-t border-bone-line">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-10 lg:py-28">
          <BlurFade inView>
            <div>
              <p className="micro-label text-ember-600">Beyond the screen</p>
              <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight lg:text-5xl">
                Off the clock
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
                Film, music, teams I cheer for, and travel videos when I remember to hit record.
              </p>
            </div>
          </BlurFade>
          <div className="mt-12">
            <InterestsGrid />
          </div>
        </div>
      </section>
    </div>
  );
}
