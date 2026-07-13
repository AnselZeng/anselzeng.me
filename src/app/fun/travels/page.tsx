'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import World from '@react-map/world';
import { BlurFade } from '@/components/magicui/blur-fade';
import { TextAnimate } from '@/components/magicui/text-animate';
import { PlacesTable } from '@/components/fun/PlacesTable';

const travelStats = [
  { number: '18', label: 'Countries Visited' },
  { number: '6', label: 'Territories Explored' },
  { number: '8/13', label: 'Canadian Provinces' },
  { number: '10/50', label: 'US States' },
];

const travelValues = [
  {
    title: 'Cultural Understanding',
    description: 'Experiencing different ways of life and perspectives.',
  },
  {
    title: 'Personal Growth',
    description: 'Stepping out of comfort zones and embracing new challenges.',
  },
  {
    title: 'Global Perspective',
    description: 'Understanding interconnectedness and shared humanity.',
  },
];

const EMBER = '#E4580B';

const visitedCountryColors = {
  Netherlands: EMBER,
  China: EMBER,
  'Hong Kong': EMBER,
  Maldives: EMBER,
  France: EMBER,
  Monaco: EMBER,
  Thailand: EMBER,
  Vietnam: EMBER,
  Philippines: EMBER,
  Malaysia: EMBER,
  Greece: EMBER,
  Canada: EMBER,
  'United States': EMBER,
  Aruba: EMBER,
  Mexico: EMBER,
  Panama: EMBER,
  'Costa Rica': EMBER,
  'Puerto Rico': EMBER,
  Cuba: EMBER,
  'Curaçao': EMBER,
  Bonaire: EMBER,
  'Sint Maarten': EMBER,
  Anguilla: EMBER,
  Austria: EMBER,
  'Czech Republic': EMBER,
  Czechia: EMBER,
};

export default function TravelsPage() {
  const [mapSize, setMapSize] = useState(600);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 62em)');
    const update = () => setMapSize(mq.matches ? 600 : 500);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <div className="bg-bone text-ink">
      <section className="mx-auto max-w-6xl px-5 pt-28 lg:px-10 lg:pt-36">
        <BlurFade>
          <div className="micro-label flex flex-wrap items-center justify-between gap-2 border-b border-bone-line pb-4 text-ink-muted">
            <span>Fun — Travels</span>
            <span>Travel Adventures</span>
          </div>
        </BlurFade>

        <div className="pb-16 pt-12 lg:pb-24 lg:pt-16">
          <BlurFade delay={0.1}>
            <p className="micro-label text-ember-600">Travel Adventures</p>
          </BlurFade>
          <TextAnimate
            as="h1"
            by="word"
            delay={0.15}
            className="mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1.08] tracking-tight lg:text-6xl"
          >
            Adventures Around the Globe
          </TextAnimate>
          <BlurFade delay={0.4}>
            <p className="mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-ink-soft">
              Exploring cultures, cities, and natural wonders
            </p>
          </BlurFade>
        </div>
      </section>
      <section className="border-t border-bone-line">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 py-16 lg:grid-cols-12 lg:gap-14 lg:px-10 lg:py-24">
          <BlurFade inView className="lg:col-span-4">
            <p className="micro-label text-ember-600">My Travel Story</p>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight lg:text-4xl">
              A Brief Introduction
            </h2>
          </BlurFade>
          <BlurFade inView delay={0.1} className="lg:col-span-8">
            <div className="max-w-2xl space-y-5 text-[0.9375rem] leading-relaxed text-ink-soft">
              <p>
                Raised across three continents in three countries—the Netherlands, China, and
                Canada—I&apos;ve had the unique privilege of experiencing the richness and diversity
                of different cultures early on. These experiences shaped my curiosity, fueling my
                desire to always ask &quot;why&quot; and &quot;how,&quot; and sparked a lifelong
                passion for understanding the world around me.
              </p>
              <p>
                A special place in my heart is reserved for cities and their stories, particularly
                when it comes to urban development. From Barcelona&apos;s superblocks that redefine
                modern city life to the radial design of Mexico City, these cities reflect not only
                the ingenuity of their people but also the evolving needs of the communities they
                serve.
              </p>
              <p>
                Some of my favorite travel memories include zip-lining through the cloud forests of
                Monteverde, relaxing in a rooftop hot tub while overlooking the Aegean Sea in
                Santorini, and spending an unforgettable night at Everest Base Camp. Each adventure
                deepened my appreciation for the world&apos;s natural wonders and the diverse
                experiences it offers.
              </p>
              <p>
                Earlier this year, my mom embarked on a remarkable expedition to Antarctica,
                fulfilling her lifelong dream of visiting all seven continents. Her achievement
                inspires me to continue exploring the world, not just to see new places but to gain
                new perspectives. Each journey and destination helps me see the bigger picture,
                deepens my understanding of the world, and ultimately inspires me to make a
                meaningful impact.
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
                <p className="micro-label text-ember-600">Travel Statistics</p>
                <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight lg:text-5xl">
                  Places I&apos;ve Explored
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
                  A comprehensive overview of my global adventures and explorations.
                </p>
              </div>
              <p className="micro-label hidden text-ink-muted sm:block">Fig. 01 — World map</p>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.1}>
            <div className="mt-12 rounded-sm border border-bone-line bg-bone p-4 lg:p-8">
              <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start">
                <div className="flex min-h-[250px] w-full items-center justify-center lg:min-h-[400px] lg:flex-[2]">
                  <World
                    type="select-multiple"
                    size={mapSize}
                    mapColor="#F2EDE3"
                    strokeColor="#E4DCCE"
                    strokeWidth={1}
                    hoverColor="#C74A08"
                    selectColor="#E4580B"
                    hints={false}
                    disableClick={true}
                    cityColors={visitedCountryColors}
                    onSelect={(countries) => {
                      console.log('Selected countries:', countries);
                    }}
                  />
                </div>

                <div className="w-full self-stretch lg:w-auto lg:min-w-[220px] lg:flex-1">
                  <div className="flex h-full flex-col justify-center gap-6 border-t border-bone-line pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    {travelStats.map((stat) => (
                      <div key={stat.label}>
                        <p className="font-serif text-2xl font-medium text-ember-600 lg:text-3xl">
                          {stat.number}
                        </p>
                        <p className="micro-label mt-1.5 text-ink-muted">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
      <section className="border-t border-bone-line">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-10 lg:py-24">
          <PlacesTable />
        </div>
      </section>
      <section className="border-t border-bone-line bg-bone-subtle/60">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-10 lg:py-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
            <BlurFade inView className="lg:col-span-4">
              <p className="micro-label text-ember-600">Travel Philosophy</p>
              <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight lg:text-4xl">
                Why I Travel
              </h2>
            </BlurFade>
            <BlurFade inView delay={0.1} className="lg:col-span-8">
              <div className="max-w-2xl space-y-5 text-[0.9375rem] leading-relaxed text-ink-soft">
                <p>
                  Earlier this year, my mom embarked on a remarkable expedition to Antarctica,
                  fulfilling her lifelong dream of visiting all seven continents. Her achievement
                  inspires me to continue exploring the world, not just to see new places but to
                  gain new perspectives.
                </p>
                <p>
                  Each journey and destination helps me see the bigger picture, deepens my
                  understanding of the world, and ultimately inspires me to make a meaningful
                  impact.
                </p>
              </div>
            </BlurFade>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-3">
            {travelValues.map((value, i) => (
              <BlurFade key={value.title} inView delay={0.05 * i}>
                <div className="border-t border-ink/20 pt-5">
                  <p className="micro-label text-ember-600">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-3 font-serif text-xl font-medium">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{value.description}</p>
                </div>
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
              Ready for the Next Adventure
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
              Travel continues to be one of my greatest sources of inspiration and learning.
              I&apos;m always excited to discover new places and create meaningful connections
              around the world.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/fun/blog"
                className="inline-flex items-center gap-2 border border-ink px-5 py-2.5 text-sm font-medium transition-colors hover:bg-ink hover:text-bone"
              >
                Read My Blog
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/fun/design"
                className="inline-flex items-center gap-2 border border-ink px-5 py-2.5 text-sm font-medium transition-colors hover:bg-ink hover:text-bone"
              >
                View My Designs
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
}
