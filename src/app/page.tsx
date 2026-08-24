import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { TextAnimate } from '@/components/magicui/text-animate';
import { ProtectedImage } from '@/components/ui/protected-image';
import { MagneticLink } from '@/components/ui/magnetic-link';
import { TiltCard } from '@/components/magicui/tilt-card';
import { Parallax } from '@/components/magicui/parallax';
import { HeroStats } from '@/components/home/hero-stats';
import { WorkCard } from '@/components/home/work-card';
import { selectedWork } from '@/lib/site-data';

export default function Home() {
  return (
    <div className="bg-bone text-ink">
      <section className="relative">
        <div className="relative mx-auto max-w-6xl px-5 pt-28 lg:px-10 lg:pt-36">
          <BlurFade>
            <div className="micro-label flex flex-wrap items-center justify-between gap-2 border-b border-bone-line pb-4 text-ink-muted">
              <span>Ansel Zeng</span>
              <span className="flex items-center gap-2">
                <span className="status-dot" aria-hidden />
                Los Angeles, CA
              </span>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 gap-10 pt-12 lg:grid-cols-12 lg:gap-14 lg:pt-16">
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <BlurFade delay={0.08}>
                  <p className="micro-label text-ember-600">Software Engineer</p>
                </BlurFade>
                <TextAnimate
                  as="h1"
                  by="word"
                  delay={0.12}
                  className="mt-5 font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-[4.25rem]"
                >
                  Building software that feels considered.
                </TextAnimate>
                <BlurFade delay={0.4}>
                  <p className="mt-7 max-w-md text-[0.9375rem] leading-relaxed text-ink-soft">
                    MS Computer Science student at USC, passionate about building
                    software end to end — from the systems underneath to the pixels on
                    top. Previously across engineering, product, and design teams.
                  </p>
                </BlurFade>
                <BlurFade delay={0.5}>
                  <div className="mt-8 flex flex-wrap items-center gap-6">
                    <MagneticLink
                      href="mailto:ansel.zeng@usc.edu"
                      className="group link-draw gap-2 pb-1 text-sm font-medium text-ink hover:text-ember-600"
                    >
                      ansel.zeng@usc.edu
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </MagneticLink>
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

              <BlurFade delay={0.58} inView>
                <HeroStats />
              </BlurFade>
            </div>

            <div className="lg:col-span-5">
              <BlurFade delay={0.24}>
                <Parallax offset={-26} className="relative z-10 mx-auto max-w-[22rem] lg:ml-auto lg:mr-0">
                  <div className="hero-wash" aria-hidden />
                  <TiltCard maxTilt={9}>
                    <div className="relative z-10 overflow-hidden rounded-t-[10rem] border border-bone-line bg-bone">
                      <ProtectedImage
                        src="/home/me.png"
                        alt="Ansel Zeng"
                        className="aspect-[3/4] w-full object-cover object-top"
                      />
                    </div>
                  </TiltCard>
                  <div className="micro-label mt-3 flex items-center justify-between text-ink-muted">
                    <span>Fig. 01</span>
                    <span>Hack Western portrait</span>
                  </div>
                </Parallax>
              </BlurFade>
            </div>
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
              <WorkCard work={work} />
            </BlurFade>
          ))}
        </div>
      </section>
    </div>
  );
}
