'use client';

import {
  CaseHero,
  CaseSection,
  CaseCallout,
  CaseFigure,
  CaseCardGrid,
  CaseClosing,
} from '@/components/work/case-study';
import { caseAccentVars } from '@/lib/site-data';

const userInsights = [
  { number: '01', text: 'Lack of user interactions' },
  { number: '02', text: 'Values listening activity' },
  { number: '03', text: 'Lack of customization' },
  { number: '04', text: 'Potential social media app' },
  { number: '05', text: 'Praises smart algorithm' },
  { number: '06', text: 'Discoverability struggles' },
];

const showcases = [
  {
    src: '/ips/artist.png',
    alt: 'spotify artist',
    title: 'Artist Showcase',
    description: 'User flow for adding a showcase featuring their',
    boldText: 'favourite artist',
    figure: 'Fig. 02',
  },
  {
    src: '/ips/song.png',
    alt: 'spotify song',
    title: 'Song Showcase',
    description: 'User flow for adding a showcase featuring their',
    boldText: 'favourite song',
    figure: 'Fig. 03',
  },
  {
    src: '/ips/all.png',
    alt: 'spotify all',
    title: 'Additional Options',
    description: 'Other potential showcase options, including',
    boldText: 'Spotify Wrapped',
    figure: 'Fig. 04',
  },
];

const takeaways = [
  {
    title: 'Product Strategy',
    description:
      'Learned to identify user pain points and translate them into actionable product features that drive user engagement and satisfaction.',
  },
  {
    title: 'User Research',
    description:
      'Developed skills in conducting user interviews, analyzing feedback, and using insights to inform product decisions and feature prioritization.',
  },
  {
    title: 'Design Thinking',
    description:
      'Applied design thinking principles to create user-centered solutions that balance business objectives with user needs and technical constraints.',
  },
  {
    title: 'Market Analysis',
    description:
      'Gained experience in competitive analysis, market research, and understanding industry trends to inform strategic product decisions.',
  },
];

export default function IPSPage() {
  return (
    <div className="bg-bone text-ink" style={caseAccentVars('ips')}>
      <CaseHero
        category="Product Management Fellowship"
        title="Making Spotify feel more social."
        subtitle="Enhancing Spotify's social experience through customization on the profile page — a capstone project with the Ivey Product Society."
        meta={[
          { label: 'Role', value: 'Product Management Fellow' },
          {
            label: 'Team',
            value: 'Ansel (Me) · Brennan (Program Lead) · David (Alumni Coach) · Rohan (Student Mentor)',
          },
          { label: 'Tools', value: 'Notion · Figma' },
          { label: 'Timeline', value: 'Jan – Apr 2023' },
        ]}
        heroImage="/ips/ips_hero.png"
        heroAlt="Ivey Product Society capstone"
      />

      <CaseSection index="01" eyebrow="Overview" title="The path to product">
        <p>
          The Ivey Product Fellowship is an alumni-facilitated bootcamp where students engage in
          product-management-focused curriculum and showcase a capstone product to industry
          professionals. As someone who had little to no prior experience in the product realm, I
          was thrilled to be surrounded by a community of accomplished alumni.
        </p>
        <p>
          Having listened to 164,498 minutes of music in just the past year, it was natural for me
          to select Spotify as the app for my capstone project. As an avid music streamer from
          morning till night, I&apos;ve become intimately familiar with the app&apos;s latest
          features and intricate UX/UI design details. However, this immersion also led me to
          harbor complaints and a persistent feeling that something was missing.
        </p>
        <p>
          IPS (Ivey Product Society) presented an ideal opportunity for me to address these
          challenges head-on while gaining valuable insights into the world of product management.
        </p>
      </CaseSection>

      <CaseCallout label="02 — The challenge">
        How can Spotify bridge its social features gap to boost user engagement and encourage
        higher platform usage frequency through meaningful music connections?
      </CaseCallout>

      <CaseSection index="03" eyebrow="Problem alignment" title="Is there really something wrong?">
        <p>
          Spotify&apos;s limited social capabilities hinder meaningful interaction between users,
          resulting in difficulties with music discovery, playlist sharing, and engagement with
          friends&apos; listening habits. This issue can potentially impede user retention and
          underutilization of the platform.
        </p>
        <p>
          To overcome this challenge, Spotify should prioritize enhancing its social features. By
          introducing customizable profile pages and fostering music-centered social groups, users
          can connect, share playlists, and discover music more seamlessly.
        </p>
      </CaseSection>

      <CaseSection
        index="04"
        eyebrow="Research"
        title="Gaining some user insights"
        className="border-t border-bone-line"
      >
        <p>
          To understand Spotify usage among different demographics, I interviewed a diverse group
          of individuals from around the school. The interviews revealed that while some users
          enjoy the platform&apos;s customization options and algorithm-generated playlists, others
          found the lack of new content and limited social features to be a drawback.
        </p>
      </CaseSection>

      <section className="mx-auto max-w-6xl px-5 pb-16 lg:px-10 lg:pb-24">
        <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {userInsights.map((insight) => (
            <div key={insight.number} className="border-t border-bone-line pt-5">
              <span className="micro-label text-ember-600">{insight.number}</span>
              <p className="mt-2 font-serif text-lg font-medium leading-snug">{insight.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CaseCallout label="05 — Value proposition">
        By enhancing its social features through customizable profile pages, Spotify can offer a
        richer and more rewarding user experience, leading to increased engagement, retention, and
        satisfaction.
      </CaseCallout>

      <CaseSection index="06" eyebrow="Solution" title="Unveiling your melodic persona">
        <p>
          The proposed solution to enhance the user experience on Spotify is the introduction of
          Customizable Profile Pages. This feature empowers users to personalize their profiles,
          showcasing their unique personalities and music preferences. Users can fully customize
          their profile page by adding a featured showcase to display a variety of awards or
          statistics. This visual customization allows users to express their musical tastes and
          create visually appealing profiles that capture attention.
        </p>
      </CaseSection>

      <section className="mx-auto max-w-6xl space-y-16 px-5 pb-16 lg:px-10 lg:pb-24">
        {showcases.map((showcase) => (
          <div key={showcase.title} className="border-t border-bone-line pt-8">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-serif text-xl font-medium leading-snug lg:text-2xl">
                {showcase.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                {showcase.description}{' '}
                <span className="font-medium text-ember-700">{showcase.boldText}</span>
              </p>
            </div>
            <CaseFigure
              src={showcase.src}
              alt={showcase.alt}
              figure={showcase.figure}
              caption={showcase.title}
              className="mt-6"
            />
          </div>
        ))}
      </section>

      <CaseSection
        index="07"
        eyebrow="Impact & learnings"
        title="Key takeaways"
        className="border-t border-bone-line"
      >
        <p>
          As the curtains draw on my journey with Ivey Product Society, I&apos;m filled with
          gratitude for the immense growth and learning I have experienced. From creating a Product
          Requirements Document to conducting user research, the hands-on nature of the program not
          only sharpened my product skills but also taught me the art of translating ideas into
          tangible solutions.
        </p>
        <p>
          Undoubtedly, one of the standout moments was presenting my capstone project to a panel of
          PMs from Meta and Wealthsimple. The intensity of the technical questions definitely put
          me on the spot, but the thorough feedback I received left a lasting mark on my product
          mindset and thought process. It was a transformative experience that propelled me to new
          heights.
        </p>
        <p>
          I extend my heartfelt appreciation to the dedicated Ivey alumni who selflessly dedicate
          their valuable time to the fellowship. Their mentorship and guidance have opened doors I
          never imagined possible. This incredible opportunity has ignited an unquenchable thirst
          for product innovation within me, and I eagerly look forward to the exciting journey
          ahead!
        </p>
      </CaseSection>

      <section className="mx-auto max-w-6xl px-5 pb-16 lg:px-10 lg:pb-24">
        <CaseCardGrid items={takeaways} columns={2} />
      </section>

      <CaseClosing
        title="Product management journey"
        paragraphs={[
          'The Ivey Product Society fellowship was a transformative experience that deepened my understanding of product management and user-centered design.',
        ]}
        next={{ href: '/work/rbc', label: 'Royal Bank of Canada — Mortgage Application Engine' }}
      />
    </div>
  );
}
