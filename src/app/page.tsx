import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { TextAnimate } from '@/components/magicui/text-animate';
import { TiltCard } from '@/components/magicui/tilt-card';
import { Parallax } from '@/components/magicui/parallax';
import { ProtectedImage } from '@/components/ui/protected-image';
import { heroStats, selectedWork } from '@/lib/site-data';

export default function Home() {
  return (
    <div className="bg-bone text-ink">
      <section className="mx-auto max-w-6xl px-5 pt-28 lg:px-10 lg:pt-36">
        <BlurFade>
          <div className="micro-label flex flex-wrap items-center justify-between gap-2 border-b border-bone-line pb-4 text-ink-muted">
            <span>Ansel Zeng</span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember-500" aria-hidden />
              Los Angeles, CA
            </span>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 gap-10 pt-12 lg:grid-cols-12 lg:gap-14 lg:pt-16">
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <BlurFade delay={0.1}>
                <p className="micro-label text-ember-600">Software Engineer</p>
              </BlurFade>
              <TextAnimate
                as="h1"
                by="word"
                delay={0.15}
                className="mt-5 font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-[4.25rem]"
              >
                Building software that feels considered.
              </TextAnimate>
              <BlurFade delay={0.45}>
                <p className="mt-7 max-w-md text-[0.9375rem] leading-relaxed text-ink-soft">
                  MS Computer Science student at USC, passionate about building
                  software end to end — from the systems underneath to the pixels on
                  top. Previously across engineering, product, and design teams.
                </p>
              </BlurFade>
              <BlurFade delay={0.55}>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <a
                    href="mailto:ansel.zeng@usc.edu"
                    className="group inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-medium text-ink transition-colors hover:border-ember-500 hover:text-ember-600"
                  >
                    ansel.zeng@usc.edu
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="/Ansel_Zeng_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="micro-label text-ink-muted transition-colors hover:text-ember-600"
                  >
                    Resume ↗
                  </a>
                  <Link
                    href="/about"
                    className="micro-label text-ink-muted transition-colors hover:text-ember-600"
                  >
                    More about me →
                  </Link>
                </div>
              </BlurFade>
            </div>

            <BlurFade delay={0.65} inView>
              <div className="mt-14 grid grid-cols-3 gap-6 border-t border-bone-line pt-8 lg:mt-0">
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-3xl font-medium lg:text-4xl">{stat.value}</p>
                    <p className="micro-label mt-2 text-ink-muted">{stat.label}</p>
                    <p className="mt-2 hidden text-xs leading-relaxed text-ink-muted md:block">
                      {stat.detail}
                    </p>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>

          <div className="lg:col-span-5">
            <BlurFade delay={0.3}>
              <Parallax offset={-26} className="mx-auto max-w-[22rem] lg:ml-auto lg:mr-0">
                <TiltCard maxTilt={4}>
                  <div className="overflow-hidden rounded-t-[10rem] border border-bone-line">
                    <ProtectedImage
                      src="/home/me.png"
                      alt="Ansel Zeng"
                      className="aspect-[3/4] w-full object-cover object-top"
                    />
                  </div>
                </TiltCard>
                <div className="micro-label mt-3 flex items-center justify-between text-ink-muted">
                  <span>Fig. 01</span>
                  <span>Ansel Zeng, 2026</span>
                </div>
              </Parallax>
            </BlurFade>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-20 max-w-6xl border-t border-bone-line px-5 py-20 lg:mt-28 lg:px-10 lg:py-28">
        <BlurFade inView>
          <div className="flex items-end justify-between">
            <div>
              <p className="micro-label text-ember-600">Selected Work</p>
              <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight lg:text-5xl">
                Recent projects
              </h2>
            </div>
            <p className="micro-label hidden text-ink-muted sm:block">(04)</p>
          </div>
        </BlurFade>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
          {selectedWork.map((work, i) => (
            <BlurFade key={work.id} inView delay={0.06 * (i % 2)}>
              <Link href={work.href} className="group block">
                <div className="relative">
                  <div
                    className="aspect-[4/3] overflow-hidden rounded-sm border border-bone-line"
                    style={{ backgroundColor: work.palette.tint }}
                  >
                    <ProtectedImage
                      src={work.image}
                      alt={`${work.org} — ${work.project}`}
                      className="h-full w-full object-contain p-8 transition-transform duration-700 ease-out group-hover:scale-[1.04] lg:p-10"
                    />
                  </div>
                  <span className="micro-label absolute left-4 top-4 rounded-full bg-bone/90 px-3 py-1.5 text-ink backdrop-blur-sm">
                    {work.index}
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="font-serif text-xl font-medium leading-snug transition-colors group-hover:text-ember-700 lg:text-2xl">
                      {work.org}
                      <span className="text-ink-muted"> — {work.project}</span>
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-muted">
                      {work.description}
                    </p>
                    <p className="micro-label mt-3 text-ink-muted">{work.tags.join('  ·  ')}</p>
                  </div>
                  <ArrowUpRight
                    className="mt-1.5 h-5 w-5 shrink-0 text-ink-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember-600"
                    aria-hidden
                  />
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </section>

    </div>
  );
}
