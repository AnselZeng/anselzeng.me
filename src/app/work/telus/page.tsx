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
  { src: '/telus/1.jpeg', alt: 'Telus highlight 1' },
  { src: '/telus/2.jpeg', alt: 'Telus highlight 2' },
  { src: '/telus/3.jpeg', alt: 'Telus highlight 3' },
  { src: '/telus/4.jpeg', alt: 'Telus highlight 4' },
  { src: '/telus/5.jpeg', alt: 'Telus highlight 5' },
  { src: '/telus/6.jpeg', alt: 'Telus highlight 6' },
];

const oranComponents = [
  {
    title: 'Radio Units (RUs)',
    description:
      'These physical components, commonly known as antennas, transmit and receive signals to and from mobile devices. They facilitate communication by relaying signals between smartphones and cell towers.',
  },
  {
    title: 'Distributed Units (DUs)',
    description:
      'Following signal reception from RUs, DUs undertake processing and management tasks. They handle encoding, decoding, and signal modulation, ensuring smooth data transfer across various mediums.',
  },
  {
    title: 'Centralized Units (CUs)',
    description:
      'Acting as central coordinators for multiple DUs, CUs manage radio resources, optimize signal distribution, and ensure seamless communication across the network. They play a crucial role in enhancing connectivity and user experiences.',
  },
  {
    title: 'Core Network',
    description:
      'As the heart of the telecommunications infrastructure, the Core Network routes data, connects to other networks (e.g., internet, other mobile networks), and manages various services like voice calls and data transfer.',
  },
];

export default function TelusPage() {
  return (
    <div className="bg-bone text-ink" style={caseAccentVars('telus')}>
      <CaseHero
        category="Software Engineering Internship"
        title="Streamlining operations at Telus."
        subtitle="Building a dynamic ticket management system for the ORAN Orchestration and Automation team — and a summer inside the machinery of next-generation telecom."
        meta={[
          { label: 'Role', value: 'Software Engineer Intern' },
          { label: 'Team', value: 'Open RAN · Orchestration & Automation · DevOps' },
          { label: 'Tools', value: 'JavaScript · Google Sheets API · Linux · Kubernetes' },
          { label: 'Timeline', value: 'May – Aug 2023' },
        ]}
        heroImage="/telus/telus_hero.png"
        heroAlt="Telus, Summer 2023"
      />

      <CaseSection index="01" eyebrow="Overview" title="Transforming telecommunications with Telus">
        <p>
          Joining Telus Corporation as a Software Engineer Intern during the summer of 2023 marked
          a transformative journey into the realm of telecommunications. Immersed within the ORAN
          Orchestration and Automation team, I explored the cutting-edge potential of Open RAN
          technology and its capacity to redefine mobile networks.
        </p>
        <p>
          From engaging in collaborative research and development initiatives to navigating the
          intricacies of telecom infrastructure, my internship provided invaluable hands-on
          learning experiences — immersive lab tours, discussions on hard problems, and
          technological innovations at the forefront of telecom.
        </p>
      </CaseSection>

      <CaseCallout label="02 — The challenge">
        How can we navigate the complexities of legacy infrastructure to pave the way for
        next-generation telecommunications solutions?
      </CaseCallout>

      <CaseSection index="03" eyebrow="Understanding ORAN" title="Hold on, what exactly is ORAN?">
        <p>
          Open RAN, or Open Radio Access Network, revolutionizes the telecom industry&apos;s
          approach to building and operating mobile networks. Unlike traditional systems, which
          rely on a single vendor for tightly integrated components, Open RAN fosters an open and
          flexible ecosystem. By separating various parts of the radio access network, it allows
          operators to utilize equipment from multiple vendors adhering to common standards,
          ensuring seamless interoperability.
        </p>
        <p>
          This shift from vendor lock-in to an open architecture empowers mobile operators to make
          changes and upgrades more efficiently. With ORAN, the reliance on proprietary equipment
          is reduced, promoting competition and innovation in the industry. By embracing this new
          paradigm, telecom companies can enhance network flexibility and scalability while
          delivering improved services to users worldwide.
        </p>
      </CaseSection>

      <section className="mx-auto max-w-6xl px-5 pb-16 lg:px-10 lg:pb-24">
        <CaseCardGrid items={oranComponents} columns={2} />
      </section>

      <CaseSection
        index="04"
        eyebrow="Educational insights"
        title="Key moments of learning"
        wide
        className="border-t border-bone-line"
      >
        <CaseTabs
          tabs={[
            {
              label: 'Telus Lab Tour',
              content: (
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <CaseFigure src="/telus/lab.jpeg" alt="Telus testing lab" figure="Fig. 02" caption="Testing facility" />
                  <div className="space-y-5 text-[0.9375rem] leading-relaxed text-ink-soft lg:self-center">
                    <p>
                      One of the most captivating and valuable components of my internship was the
                      immersive lab tour at Telus&apos; testing facility. Stepping into the lab was
                      like entering a realm where theory meets practicality, offering an intimate
                      glimpse into the intricacies of cutting-edge technology. The lab houses three
                      main rooms: the core chamber, the RAN chamber, and the device chamber.
                    </p>
                    <p>
                      The meticulous attention to detail in the lab&apos;s controlled environments,
                      such as the icy temperatures of the switch room, highlights the significance
                      of maintaining optimal conditions for the equipment&apos;s optimal
                      performance. The sight of the colossal server room, along with the loud
                      humming of cooling fans, exemplified the dedication to precision and
                      reliability in the realm of telecommunications infrastructure.
                    </p>
                  </div>
                </div>
              ),
            },
            {
              label: '3rd Generation Partnership Project',
              content: (
                <div className="max-w-3xl space-y-5 text-[0.9375rem] leading-relaxed text-ink-soft">
                  <p>
                    During my time working within the ORAN organization, I delved into the world of
                    3GPP, the driving force behind mobile communication standards from 2G to the
                    latest 5G technology. 3GPP&apos;s specifications not only facilitate seamless
                    interoperability among devices and network elements but also foster a
                    competitive market by allowing equipment from various vendors to work together.
                  </p>
                  <p>
                    In the context of Telus&apos;s work, the synergy between 3GPP and Open RAN
                    technology is particularly noteworthy. Open RAN&apos;s open interfaces and
                    standardized components align with 3GPP&apos;s philosophy, enabling Telus to
                    integrate equipment from different vendors seamlessly. This integration not
                    only optimizes network performance and innovation but also ensures a smooth
                    transition to future technologies while maintaining compatibility with existing
                    infrastructure.
                  </p>
                </div>
              ),
            },
          ]}
        />
      </CaseSection>

      <CaseSection
        index="05"
        eyebrow="My work"
        title="The DevOps ticket management system"
        className="border-t border-bone-line"
      >
        <p>
          The latter part of my internship at Telus provided a unique opportunity to tackle a
          crucial challenge encountered by the team: the absence of a centralized ticket management
          system. Reliance on Excel had resulted in inefficiencies and hindered effective workload
          management. Teaming up with a fellow developer, I took the lead in developing an internal
          ticket management system tailored to Telus&apos; specific needs.
        </p>
        <p>
          Embracing the &apos;dream small&apos; philosophy advocated by my manager, we focused on
          crafting a Minimum Viable Product before expanding features. The journey of building the
          full-stack application in React was filled with exhilarating challenges, each feature
          introducing innovative ideas and requiring meticulous attention to detail. Through
          rigorous testing and debugging, I honed my problem-solving skills and learned the
          importance of prioritization, ensuring timely delivery of a functional solution to the
          team.
        </p>
      </CaseSection>

      <section className="mx-auto max-w-6xl px-5 pb-16 lg:px-10 lg:pb-24">
        <CaseFigure
          src="/telus/tms.png"
          alt="Ticket management system mockup"
          figure="Fig. 03"
          caption="Login, ticket grid, and modal flows"
        />
      </section>

      <CaseSection
        index="06"
        eyebrow="Highlights"
        title="Favourite moments"
        wide
        className="border-t border-bone-line"
      >
        <CaseGallery images={highlights} columns={3} />
      </CaseSection>

      <CaseClosing
        title="A summer of substantial growth"
        paragraphs={[
          "Reflecting on my time at Telus, it's evident that it was a transformative experience in the realm of DevOps. This internship immersed me in the real-world challenges of business operations and software development, pushing me to expand my skills and knowledge. From tackling new concepts to leading the ticket management system project, I've seen substantial growth in my abilities.",
          "As I conclude this internship, I recognize it as just the beginning of my professional journey. The lessons learned and skills acquired here are invaluable assets as I navigate the ever-changing landscape of software engineering and telecommunications innovation. Here's to the unexpected hurdles, the intricate problem-solving, and the satisfaction of turning ideas into reality.",
        ]}
        next={{ href: '/work/ips', label: 'Ivey Product Society — Spotify Enhancement' }}
      />
    </div>
  );
}
