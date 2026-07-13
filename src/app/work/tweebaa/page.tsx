'use client';

import { useState } from 'react';
import {
  CaseHero,
  CaseSection,
  CaseCallout,
  CaseCardGrid,
  CaseClosing,
} from '@/components/work/case-study';
import { caseAccentVars } from '@/lib/site-data';
import { ProtectedImage } from '@/components/ui/protected-image';
import { ImageLightboxModal } from '@/components/ui/ImageLightboxModal';

const workSections = [
  {
    title: 'Challenge Section',
    description:
      'A brand new gamification feature introduced into the social app. I handled the full design process from the home page design to creating challenges, including all the small edit and delete features, saving, favouriting, and details pages.',
    image: '/tweebaa/challenge.png',
  },
  {
    title: 'Help Centre Section',
    description:
      'Designed a comprehensive help centre to provide users with easy access to support resources, FAQs, and troubleshooting guides. Created intuitive navigation and search functionality to help users quickly find answers to their questions.',
    image: '/tweebaa/help_center.png',
  },
  {
    title: 'Eco+ Section',
    description:
      'A unique social section within the app designed to help users find and connect with others. Created engaging showcase interfaces that allow users to discover people and build meaningful connections within the platform.',
    image: '/tweebaa/eco.png',
  },
  {
    title: 'Groups Section',
    description:
      'Created the design for group chat functionality, enabling users to connect and communicate in group settings within the app. Designed messaging interfaces, member management features, and notification systems for seamless group interactions.',
    image: '/tweebaa/chats.png',
  },
  {
    title: 'Rewards Dashboard',
    description:
      'Designed an in-app rewards dashboard that displays user achievements, points, and available rewards in an intuitive and engaging way. Created visual representations of progress and reward redemption flows to motivate user engagement.',
    image: '/tweebaa/rewards.png',
  },
  {
    title: 'Task Centre',
    description:
      'Built out the task centre interface, allowing users to view, manage, and complete various tasks within the app. Designed intuitive workflows for task creation, tracking, and completion.',
    image: '/tweebaa/task_center.png',
  },
];

const designLearnings = [
  {
    title: 'Design Rules & Tools',
    description:
      'Mastered fundamental design principles, component libraries, and design system best practices in Figma.',
  },
  {
    title: 'Framing & Composition',
    description:
      'Learned how to frame content effectively, understanding visual hierarchy and layout principles.',
  },
  {
    title: 'Pixel Precision',
    description:
      'Developed skills in calculating pixel measurements and maintaining precise spacing and alignment across designs.',
  },
  {
    title: 'Design Ratios',
    description:
      'Gained expertise in understanding aspect ratios, especially critical for mobile app design to ensure consistent look and feel.',
  },
  {
    title: 'UX/UI Research',
    description:
      'Learned the importance of gathering user feedback, conducting research, and iterating based on insights.',
  },
  {
    title: 'Component Consistency',
    description:
      'Mastered maintaining visual consistency across components, including border radiuses, font sizes, and colour schemes.',
  },
];

export default function TweebaaPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-bone text-ink" style={caseAccentVars('tweebaa')}>
      <CaseHero
        category="UX/UI Design Internship"
        title="Designing commerce from a blank canvas."
        subtitle="Transforming user insights into refined design prototypes for a startup launch — my first professional internship."
        meta={[
          { label: 'Role', value: 'UX/UI Design Intern' },
          { label: 'Team', value: 'Mobile App Design Team' },
          { label: 'Tools', value: 'Figma · Adobe Creative Suite' },
          { label: 'Timeline', value: 'May – Aug 2021' },
        ]}
        heroImage="/tweebaa/tweebaa_hero.png"
        heroAlt="Tweebaa, Summer 2021"
      />

      <CaseSection index="01" eyebrow="Overview" title="My first design journey">
        <p>
          Joining Tweebaa as a UX/UI Design Intern during the summer of 2021 marked my first
          professional internship experience. I was tasked with helping out the lead designer with
          her work, but mainly was assigned a lot of brand new sections that had nothing before.
        </p>
        <p>
          This immersive startup environment pushed me to grow rapidly and learn through hands-on
          experience. I created over 500 user-centered designs that would shape the app&apos;s
          architecture and user experience, working alongside a global team to define the app
          architecture for a successful startup launch.
        </p>
      </CaseSection>

      <CaseCallout label="02 — The challenge">
        How can we design an intuitive mobile app experience that seamlessly blends e-commerce
        functionality with social networking features?
      </CaseCallout>

      <CaseSection index="03" eyebrow="My experience" title="Building from blank pages">
        <p>
          Being assigned brand new sections that had nothing before meant I had to wireframe things
          from scratch, spending countless hours tweaking the smallest components. This made me
          realize how every little thing starts from a blank page—literally—and that you build it
          out from there.
        </p>
        <p>
          Working with software engineers gave me a whole full rounded picture of how these teams
          need to synergize together—design and engineering working hand-in-hand to help with
          building out the full app. The startup culture was real, having meetings whenever, being
          able to communicate with anyone on the team easily, talking to the CEO, leads, people on
          operations or logistics and marketing even.
        </p>
      </CaseSection>

      <CaseSection
        index="04"
        eyebrow="What I learned"
        title="Design fundamentals and best practices"
        className="border-t border-bone-line"
      >
        <p>
          I learned a lot about design rules and tools, framing, tips on calculating how many
          pixels, a lot of ratio things in design—especially on a mobile app how it should look and
          feel. UX/UI research was also important, gathering feedback to inform design decisions.
        </p>
      </CaseSection>

      <section className="mx-auto max-w-6xl px-5 pb-16 lg:px-10 lg:pb-24">
        <CaseCardGrid items={designLearnings} columns={3} />
      </section>

      <CaseSection
        index="05"
        eyebrow="My work"
        title="Designing key app sections"
        className="border-t border-bone-line"
      >
        <p>
          Throughout my internship, I designed multiple brand new sections for the app, each
          requiring careful consideration of user flows, interactions, and visual consistency. I
          had never thought about how many actions or interactions a feature included until I had
          to design each and every frame—from home pages to details pages, including countless
          interactions like saving, favouriting, editing, and deleting.
        </p>
        <p>
          I played around with sizing, themes, and components, but at the same time kept consistent
          with the border radiuses, font sizes, and colour scheme of the app theme. This process
          taught me the importance of maintaining visual consistency while exploring creative
          design solutions.
        </p>
      </CaseSection>

      <section className="mx-auto max-w-6xl px-5 pb-16 lg:px-10 lg:pb-24">
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
          {workSections.map((section, i) => (
            <figure key={section.title} className="border-t border-bone-line pt-5">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-lg font-medium leading-snug lg:text-xl">
                  {section.title}
                </h3>
                <span className="micro-label text-ember-600">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{section.description}</p>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group mt-5 block w-full overflow-hidden rounded-sm border border-bone-line"
                aria-label={`Open ${section.title}`}
              >
                <ProtectedImage
                  src={section.image}
                  alt={section.title}
                  className="aspect-video w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </button>
              <figcaption className="micro-label mt-3 flex items-center justify-between text-ink-muted">
                <span>{`Fig. ${String(i + 2).padStart(2, '0')}`}</span>
                <span>{section.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CaseSection
        index="06"
        eyebrow="Impact & results"
        title="Making a difference"
        className="border-t border-bone-line"
      >
        <p>
          My work at Tweebaa translated user insights into refined design prototypes, collaborating
          with a global team to define app architecture for a successful startup launch.
        </p>
      </CaseSection>

      <section className="mx-auto max-w-6xl px-5 pb-16 lg:px-10 lg:pb-24">
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          <div className="border-t border-bone-line pt-5">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-serif text-lg font-medium leading-snug lg:text-xl">
                User Feedback Impact
              </h3>
              <span className="micro-label text-ember-600">01</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              <span className="font-medium text-ember-700">30% increase</span> in positive client
              feedback through streamlined information flow and refined design prototypes.
            </p>
          </div>
          <div className="border-t border-bone-line pt-5">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-serif text-lg font-medium leading-snug lg:text-xl">
                Design Portfolio
              </h3>
              <span className="micro-label text-ember-600">02</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Created <span className="font-medium text-ember-700">500+ user-centric Figma designs</span>,
              user flow diagrams, sitemaps, and mock-ups that defined the app&apos;s architecture.
            </p>
          </div>
        </div>
      </section>

      <CaseClosing
        title="Closing the chapter"
        paragraphs={[
          "Reflecting on my time at Tweebaa, it's evident that this was a transformative experience that launched my journey into UX/UI design. As my first internship, it taught me the value of persistence, adaptability, and the importance of design thinking in creating meaningful user experiences.",
          'The startup environment pushed me to grow rapidly, and the international collaboration taught me how to work across time zones and cultures. The lessons learned and skills acquired here continue to shape my approach to design and product development as I navigate my professional journey.',
        ]}
        next={{ href: '/work/telus', label: 'Telus — Ticket Management System' }}
      />

      <ImageLightboxModal
        isOpen={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        imageSrc={openIndex !== null ? workSections[openIndex].image : ''}
        alt={openIndex !== null ? workSections[openIndex].title : 'Work Section'}
      />
    </div>
  );
}
