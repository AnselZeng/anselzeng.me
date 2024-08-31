import React from 'react';
import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";
import Header from '../../../components/work/Header';
import Overview from '../../../components/work/Overview';
import BannerText from '../../../components/work/BannerText';
import Points from '../../../components/work/Points';
import TwoTabs from '../../../components/work/TwoTabs';
import BasicText from '../../../components/work/BasicText';
import Highlights from '../../../components/work/Highlights';

export default function Page() {
  const pictures = [
    '/telus/1.jpeg',
    '/telus/2.jpeg',
    '/telus/3.jpeg',
    '/telus/4.jpeg',
    '/telus/5.jpeg',
    '/telus/6.jpeg',
  ];

  const sec1colors = {
    lightGray: '#ADADAD',
    black: '#1D1D1F',
    primaryColour: '#4B286D',
    gray: '#727272',
  };

  const sec3colors = {
    lightGray: '#ADADAD',
    black: '#1D1D1F',
    primaryColour: '#4B286D',
  };

  const sec4colors = {
    secondaryColour: '#BA99DD',
    white: '#F5F5F3',
    black: '#1D1D1F',
    primaryColour: '#4B286D',
  };

  const sec5colors = {
    lightGray: '#ADADAD',
    black: '#1D1D1F',
  };

  return (
    <Container bg={'#FFF8EB'} maxW={'100%'} p={0}>
      <Flex py={6} maxWidth={'container.xl'} m={'auto'} />

      <Header
        tag="INTERNSHIP"
        title="Telus 🗼"
        subtitle="Streamlining operations with a dynamic ticket management system"
      />

      <Box display='flex' justifyContent='center'>
        <Image src={'/telus/telus_hero.png'} alt='telus hero' />
      </Box>

      <Overview
        heading="01 | OVERVIEW"
        overviewTitle="transforming telecommunications with telus"
        overviewText={[
          "Joining Telus Corporation as a Software Engineer Intern during the summer of 2023 marked a transformative journey into the realm of telecommunications. Immersed within the ORAN Orchestration and Automation team, I explored the cutting-edge potential of Open RAN technology and its capacity to redefine mobile networks. From engaging in collaborative research and development initiatives to navigating the intricacies of telecom infrastructure, my internship provided invaluable hands-on learning experiences, encapsulating my journey through immersive lab tours, discussions on challenges, and highlighting technological innovations on the forefront of telecom innovation."
        ]}
        roles={['Software Engineer', 'Intern']}
        team={['Open RAN', 'Orchestration & Automation', 'DevOps', 'Infrastructure']}
        tools={['JavaScript', 'Google Sheets API', 'Linux', 'Kubernetes']}
        timeline={['May – Aug 2023']}
        colors={sec1colors}
      />

      <BannerText
        heading="02 | THE CHALLENGE"
        mainText="How can we navigate the complexities of legacy infrastructure to pave the way for next-generation telecommunications solutions?"
        primaryColour="#4B286D"
        secondaryColour="#BA99DD"
        textColor="white"
      />
      
      <Points
        heading="03 | UNTANGLING COMPLEXITY"
        subtitle="hold on, what exactly is ORAN?"
        overviewText="Open RAN, or Open Radio Access Network, revolutionizes the telecom industry's approach to building and operating mobile networks. Unlike traditional systems, which rely on a single vendor for tightly integrated components, Open RAN fosters an open and flexible ecosystem. By separating various parts of the radio access network, it allows operators to utilize equipment from multiple vendors adhering to common standards, ensuring seamless interoperability."
        additionalText="This shift from vendor lock-in to an open architecture empowers mobile operators to make changes and upgrades more efficiently. With ORAN, the reliance on proprietary equipment is reduced, promoting competition and innovation in the industry. By embracing this new paradigm, telecom companies can enhance network flexibility and scalability while delivering improved services to users worldwide."
        titleOne="key components"
        pointsOne={[
          "Radio Units (RUs): These physical components, commonly known as antennas, transmit and receive signals to and from mobile devices. They facilitate communication by relaying signals between smartphones and cell towers.",
          "Distributed Units (DUs): Following signal reception from RUs, DUs undertake processing and management tasks. They handle encoding, decoding, and signal modulation, ensuring smooth data transfer across various mediums.",
        ]}
        pointsTwo={[
          "Centralized Units (CUs): Acting as central coordinators for multiple DUs, CUs manage radio resources, optimize signal distribution, and ensure seamless communication across the network. They play a crucial role in enhancing connectivity and user experiences.",
          "Core Network: As the heart of the telecommunications infrastructure, the Core Network routes data, connects to other networks (e.g., internet, other mobile networks), and manages various services like voice calls and data transfer.",
        ]}
        colors={sec3colors}
      />
      
      <TwoTabs
        heading="04 | EDUCATIONAL INSIGHTS"
        subtitle="Key moments of learning during my internship."
        tabs={{
          tabLabels: ['one', 'two'],
          tabPanels: [
            {
              imageSrc: '/telus/lab.jpeg',
              altText: 'telus lab tour',
              heading: 'Telus Lab Tour',
              texts: [
                "One of the most captivating and valuable components of my internship was the immersive lab tour at Telus' testing facility. Stepping into the lab was like entering a realm where theory meets practicality, offering an intimate glimpse into the intricacies of cutting-edge technology. The lab houses three main rooms: the core chamber, the RAN chamber, and the device chamber.",
                "The meticulous attention to detail in the lab's controlled environments, such as the icy temperatures of the switch room, highlights the significance of maintaining optimal conditions for the equipment's optimal performance. The sight of the colossal server room, along with the loud humming of cooling fans, exemplified the dedication to precision and reliability in the realm of telecommunications infrastructure."
              ],
            },
            {
              heading: '3rd Generation Partnership Project',
              texts: [
                "During my time working within the ORAN organization, I delved into the world of 3GPP, the driving force behind mobile communication standards from 2G to the latest 5G technology. 3GPP's specifications not only facilitate seamless interoperability among devices and network elements but also foster a competitive market by allowing equipment from various vendors to work together. This global standardization simplifies network deployment and scaling, crucial for telecommunications companies like Telus to provide consistent connectivity worldwide.",
                "In the context of Telus's work, the synergy between 3GPP and Open RAN technology is particularly noteworthy. Open RAN's open interfaces and standardized components align with 3GPP's philosophy, enabling Telus to integrate equipment from different vendors seamlessly. This integration not only optimizes network performance and innovation but also ensures a smooth transition to future technologies while maintaining compatibility with existing infrastructure, ultimately enhancing user experiences for Telus customers."
              ],
            },
          ],
        }}
        colors={sec4colors}
      />
      
      <BasicText
        heading="05 | MY WORK"
        subtitle="the devops ticket management system"
        texts={[
          "The latter part of my internship at Telus provided a unique opportunity to tackle a crucial challenge encountered by the team: the absence of a centralized ticket management system. Reliance on Excel had resulted in inefficiencies and hindered effective workload management. Teaming up with a fellow developer, I took the lead in developing an internal ticket management system tailored to Telus' specific needs.",
          "Embracing the 'dream small' philosophy advocated by my manager, we focused on crafting a Minimum Viable Product before expanding features. The journey of building the full-stack application in React was filled with exhilarating challenges, each feature introducing innovative ideas and requiring meticulous attention to detail. Through rigorous testing and debugging, I honed my problem-solving skills and learned the importance of prioritization, ensuring timely delivery of a functional solution to the team. This experience marked significant growth in my journey as a software engineer, pushing me beyond my comfort zone and enhancing my ability to transform challenges into opportunities.",
        ]}
        colors={sec5colors}
      />

      <Box px={12} maxW={'container.lg'} m={'auto'}>
        <Box px='10%' py={{ base: '10', lg: '20' }} bg={'#EBEBEB'}>
          <VStack maxW='100%' spacing='4' alignItems='flex-start'>
            <Text m='auto' pb='4' fontSize='2xl' fontWeight='black' color={'#1D1D1F'}>mockup</Text>
            <Image src={'/telus/tms.png'} alt='mockup' />
            <Text fontSize='lg' color={'#1D1D1F'}>
              This design showcases the login page, main ticket grid display, create ticket modal window, and ticket details modal window for <b>streamlined ticket management</b>.
            </Text>
          </VStack>
        </Box>
      </Box>
      
      <BasicText
        heading="06 | END OF BEGINNING"
        subtitle="closing the chapter"
        texts={[
          "Reflecting on my time at Telus, it's evident that it was a transformative experience in the realm of DevOps. This internship immersed me in the real-world challenges of business operations and software development, pushing me to expand my skills and knowledge. From tackling new concepts to leading the ticket management system project, I've seen substantial growth in my abilities.",
          "As I conclude this internship, I recognize it as just the beginning of my professional journey. The lessons learned and skills acquired here are invaluable assets as I navigate the ever-changing landscape of software engineering and telecommunications innovation. Here's to the unexpected hurdles, the intricate problem-solving, and the satisfaction of turning ideas into reality.",
        ]}
        colors={sec5colors}
      />
      
      <Highlights
        heading="07 | HIGHLIGHTS"
        subtitle="some of my favourite moments 💜"
        pictures={pictures}
        colors={sec5colors}
      />
    </Container>
  );
}
