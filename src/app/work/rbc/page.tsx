'use client';

import {
  CaseHero,
  CaseSection,
  CaseCallout,
  CaseFigure,
  CaseCardGrid,
  CaseTabs,
  CaseGallery,
  CaseClosing,
} from '@/components/work/case-study';
import { caseAccentVars } from '@/lib/site-data';

const highlights = [
  { src: '/rbc/1.jpeg', alt: 'RBC highlight 1' },
  { src: '/rbc/2.jpeg', alt: 'RBC highlight 2' },
  { src: '/rbc/3.jpeg', alt: 'RBC highlight 3' },
  { src: '/rbc/4.jpeg', alt: 'RBC highlight 4' },
  { src: '/rbc/5.jpeg', alt: 'RBC highlight 5' },
  { src: '/rbc/6.jpeg', alt: 'RBC highlight 6' },
];

const mortgageProcess = [
  {
    title: 'Application Submission',
    description:
      'Customers submit mortgage applications through digital channels with enhanced data validation.',
  },
  {
    title: 'Automated Evaluation',
    description:
      'AI-powered engine analyzes financial data, credit history, and property information.',
  },
  {
    title: 'Risk Assessment',
    description:
      'Advanced algorithms calculate risk scores and determine eligibility criteria.',
  },
  {
    title: 'Advisor Dashboard',
    description:
      'Real-time insights and recommendations for advisors to guide customers effectively.',
  },
];

const technicalFeatures = [
  {
    title: 'Frontend Development',
    description:
      'Built responsive user interfaces using Angular framework for seamless user experiences.',
    technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend Development',
    description:
      'Developed robust backend services and APIs for mortgage application processing.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'Microservices'],
  },
  {
    title: 'Testing & Quality Assurance',
    description:
      'Implemented comprehensive testing strategies including unit tests and API testing.',
    technologies: ['Mockito', 'Postman', 'Unit Testing', 'Test Coverage'],
  },
  {
    title: 'Database & Integration',
    description:
      'Designed database schemas and integrated with existing RBC systems and workflows.',
    technologies: ['SQL', 'System Integration', 'Data Migration'],
  },
];

const successes = [
  <>
    Streamlined <span className="font-medium text-ember-700">auto-adjudication backend logic</span>,
    saving hours of work daily and enhancing evaluation efficiency.
  </>,
  <>
    Implemented 40+ comprehensive unit tests, increasing code coverage by{' '}
    <span className="font-medium text-ember-700">75%</span>, improving quality and reducing bugs.
  </>,
  <>
    Successfully showcased seamless frontend-backend integration, demonstrating the feature&apos;s
    value during a team demo.
  </>,
  <>
    Integrated low latency GraphQL endpoints, supporting{' '}
    <span className="font-medium text-ember-700">100+ requests per second</span>, improving
    performance and enabling future scalability.
  </>,
];

const challenges = [
  <>
    Navigating <span className="font-medium text-ember-700">complex mortgage workflows</span>,
    understanding regulations, and identifying improvements.
  </>,
  <>
    Adapting to <span className="font-medium text-ember-700">agile development</span>,
    collaborating in fast-paced environments with tight timelines.
  </>,
  <>
    Overcoming technical hurdles during{' '}
    <span className="font-medium text-ember-700">legacy code migration</span>, collaborating with
    senior developers.
  </>,
  <>Managing project priorities, multitasking, and communicating effectively in dynamic team environments.</>,
];

const inspiringMoments = [
  {
    title: 'Whiteboard Conversations',
    image: '/rbc/wall-one.jpeg',
    figure: 'Fig. 02',
    caption: 'Whiteboard walls at Waterpark Place',
    content: [
      'Stepping into the RBC office at Waterpark Place, I was captivated by the walls all covered in whiteboard material—like a canvas for unleashing creativity and brainstorming ideas. One afternoon, as my team wrapped up for the day, I joined a conversation between the senior developers and a business analyst. They delved into the intricate logic of a crucial factor in the mortgage application process. In a spontaneous move, one of the developers reached for a marker and began writing on the office wall. It was definitely unusual for me at first, as I grew up with the norm that drawing on walls was strictly prohibited.',
      'For half an hour, we engaged in a vibrant discussion, taking turns illustrating our thoughts on the vast canvas. As a visual learner, I found it liberating to be able to physically visualize my ideas and thought process. It was during this captivating conversation that I realized and understood the importance of communication between engineers and analysts. Ultimately, the whiteboard diagram remained a testament to our collaboration, lingering on the wall for weeks after our conversation. Its significance, etched in my memory, encapsulated the fusion of creativity, problem-solving, and effective communication that I embraced throughout my internship journey.',
    ],
  },
  {
    title: 'The Kanban Tapestry',
    image: '/rbc/wall-two.jpeg',
    figure: 'Fig. 03',
    caption: 'The wall of post-it notes',
    content: [
      "As I exited the office on my last day of work, I passed by this wall of sticky post-it notes and couldn't help but stop and stare at it one last time. The notes basically outlined the entire application being developed by this RBC team, kind of like a mega Kanban board. Looking at this wall reminded me of my small role in the grand scheme, with even my team of ~20 developers and analysts occupying just one column among the QA team, product owners, and others. Nevertheless, it was fascinating to recognize that each person had a specific role to play in this massive operation.",
      'Each colourful note represented completed tasks, solved problems, and achieved milestones. This colourful wall filled me with a sense of accomplishment and gratitude for being part of the journey. With a mix of nostalgia and excitement, I took one last look, realizing that those sticky notes were more than reminders; they were a testament to the invaluable experience and knowledge gained during my internship. The wall of post-it notes will for a long time remind me of the importance of teamwork, the impact of individual contributions, and the endless possibilities that lie ahead in my career.',
    ],
  },
];

export default function RBCPage() {
  return (
    <div className="bg-bone text-ink" style={caseAccentVars('rbc')}>
      <CaseHero
        category="Software Engineering Internship"
        title="Rebuilding the mortgage engine at RBC."
        subtitle="Transforming credit adjudication strategy and processes within home equity finance — a four-month internship at Canada's largest bank."
        meta={[
          { label: 'Role', value: 'Software Engineer Intern' },
          { label: 'Team', value: 'Digital Transformation · Retail Banking · Payment Technology' },
          { label: 'Tools', value: 'Java (Spring Framework) · Docker · Camunda · Jira & Confluence' },
          { label: 'Timeline', value: 'May – Aug 2022' },
        ]}
        heroImage="/rbc/rbc_hero.png"
        heroAlt="RBC, Summer 2022"
      />

      <CaseSection index="01" eyebrow="Overview" title="Engineering for Canada's largest bank">
        <p>
          During my 4-month internship at RBC, I had the opportunity to work on a cutting-edge
          project aimed at revolutionizing the mortgage application process. Throughout the
          internship, I collaborated with experienced professionals who mentored me in agile
          software development and coding skills. This project not only provided valuable industry
          experience but also equipped me with the skills that will benefit my future career. I am
          proud to have contributed to a project with the potential to make a significant impact on
          RBC&apos;s operations and enhance customer experience.
        </p>
      </CaseSection>

      <CaseCallout label="02 — The challenge">
        How might we replace the outdated mortgage application software to streamline
        creditworthiness evaluation and improve the experience for both customers and advisors?
      </CaseCallout>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-10 lg:py-24">
        <CaseCardGrid items={mortgageProcess} columns={4} />
      </section>

      <CaseSection
        index="03"
        eyebrow="Key initiatives"
        title="What I did and what I learned"
        className="border-t border-bone-line"
      >
        <p>
          This experience not only opened my eyes to the banking industry and agile software
          development but also taught me the importance of project management—bridging the gap
          between business and technology. I got to witness the integral role of product owners in
          leading presentations and meetings, gaining firsthand insights into their ability to
          guide and drive project discussions effectively.
        </p>
        <p>
          Additionally, I had the privilege of working closely with a senior developer who mentored
          me throughout the internship. Her experience and expertise, along with the opportunity to
          collaborate with other professionals, expanded my technical knowledge and problem-solving
          abilities.
        </p>
      </CaseSection>

      <section className="mx-auto max-w-6xl px-5 pb-16 lg:px-10 lg:pb-24">
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          <div className="border-t border-bone-line pt-5">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-serif text-lg font-medium leading-snug lg:text-xl">Successes</h3>
              <span className="micro-label text-ember-600">01</span>
            </div>
            <ul className="mt-4 space-y-3">
              {successes.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                  <span className="text-ember-600" aria-hidden>
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-bone-line pt-5">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-serif text-lg font-medium leading-snug lg:text-xl">Challenges</h3>
              <span className="micro-label text-ember-600">02</span>
            </div>
            <ul className="mt-4 space-y-3">
              {challenges.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                  <span className="text-ember-600" aria-hidden>
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CaseSection
        index="04"
        eyebrow="Inspiring moments"
        title="Unforgettable experiences"
        wide
        className="border-t border-bone-line"
      >
        <CaseTabs
          tabs={inspiringMoments.map((moment) => ({
            label: moment.title,
            content: (
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <CaseFigure
                  src={moment.image}
                  alt={moment.title}
                  figure={moment.figure}
                  caption={moment.caption}
                />
                <div className="space-y-5 text-[0.9375rem] leading-relaxed text-ink-soft lg:self-center">
                  {moment.content.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ),
          }))}
        />
      </CaseSection>

      <CaseSection
        index="05"
        eyebrow="Technical implementation"
        title="Technologies and tools"
        className="border-t border-bone-line"
      >
        <p>
          Built robust, scalable applications using modern web technologies and best practices in
          software engineering.
        </p>
      </CaseSection>

      <section className="mx-auto max-w-6xl px-5 pb-16 lg:px-10 lg:pb-24">
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {technicalFeatures.map((feature, i) => (
            <div key={feature.title} className="border-t border-bone-line pt-5">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-lg font-medium leading-snug lg:text-xl">
                  {feature.title}
                </h3>
                <span className="micro-label text-ember-600">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{feature.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {feature.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="micro-label border border-bone-line px-2.5 py-1 text-ink-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CaseSection
        index="06"
        eyebrow="Impact & results"
        title="Leaving my mark"
        className="border-t border-bone-line"
      >
        <p>
          Reflecting on my time at RBC, I can genuinely say that it has left an indelible mark on
          my journey as a software engineer. Each task I tackled and completed was done with a
          sense of joy that reignited my passion for coding. The memories made during my
          internship, whether over Webex or in person, will forever hold a special place in my
          heart.
        </p>
        <p>
          Saying goodbye to everyone during our final social gathering, overlooking the
          harbourfront, was bittersweet. Ultimately, I feel more confident and ready to take on new
          challenges in my career. Thank you, RBC, for this extraordinary opportunity and
          experience. I am excited to carry the spirit of excellence and innovation with me as I
          continue on my journey.
        </p>
      </CaseSection>

      <CaseSection
        index="07"
        eyebrow="Highlights"
        title="Memorable moments"
        wide
        className="border-t border-bone-line"
      >
        <CaseGallery images={highlights} columns={3} />
      </CaseSection>

      <CaseClosing
        title="Financial technology innovation"
        paragraphs={[
          'My experience at RBC provided invaluable insights into building enterprise-scale applications and understanding the complexities of financial services technology.',
        ]}
        next={{ href: '/work/tweebaa', label: 'Tweebaa — E-commerce Innovation' }}
      />
    </div>
  );
}
