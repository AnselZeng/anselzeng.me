import React from 'react';
import { Box, Container, Flex, Image } from "@chakra-ui/react";
import Header from '../../../components/work/Header';
import Overview from '../../../components/work/Overview';
import BannerText from '../../../components/work/BannerText';
import Points from '../../../components/work/Points';
import TwoTabs from '../../../components/work/TwoTabs';
import BasicText from '../../../components/work/BasicText';
import Highlights from '../../../components/work/Highlights';

export default function Page() {
  const pictures = [
    '/rbc/1.jpeg',
    '/rbc/2.jpeg',
    '/rbc/3.jpeg',
    '/rbc/4.jpeg',
    '/rbc/5.jpeg',
    '/rbc/6.jpeg',
  ];

  const sec1colors = {
    lightGray: '#ADADAD',
    black: '#1D1D1F',
    primaryColour: '#35457C',
    gray: '#727272',
  };

  const sec3colors = {
    lightGray: '#ADADAD',
    black: '#1D1D1F',
    primaryColour: '#35457C',
  };

  const sec4colors = {
    secondaryColour: '#9CACE3',
    white: '#F5F5F3',
    black: '#1D1D1F',
    primaryColour: '#35457C',
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
        title="Royal Bank of Canada 🏦"
        subtitle="Transforming credit adjudication strategy and processes within home equity finance"
      />

      <Box display='flex' justifyContent='center'>
        <Image src={'/rbc/rbc_hero.png'} alt='rbc hero' />
      </Box>

      <Overview
        heading="01 | OVERVIEW"
        overviewTitle="engineering for canada’s largest bank"
        overviewText={[
          "During my 4-month internship at RBC, I had the opportunity to work on a cutting-edge project aimed at revolutionizing the mortgage application process. Throughout the internship, I collaborated with experienced professionals who mentored me in agile software development and coding skills. This project not only provided valuable industry experience but also equipped me with the skills that will benefit my future career. I am proud to have contributed to a project with the potential to make a significant impact on RBC's operations and enhance customer experience.",
        ]}
        roles={['Software Engineer', 'Intern']}
        team={['Digital Transformation', 'Retail Banking', 'Payment Technology']}
        tools={['Java (Spring Framework)', 'Docker', 'Camunda', 'Jira & Confluence']}
        timeline={['May – Aug 2022']}
        colors={sec1colors}
      />

      <BannerText
        heading="02 | THE CHALLENGE"
        mainText="How might we replace the outdated mortgage application software and improve the evaluation of creditworthiness for applicants?"
        primaryColour="#35457C"
        secondaryColour="#9CACE3"
        textColor="white"
      />

      <Points
        heading="03 | KEY INITIATIVES"
        subtitle="What I Did & What I Learned"
        overviewText="This experience not only opened my eyes to the banking industry and agile software development but also taught me the importance of project management—bridging the gap between business and technology. I got to witness the integral role of product owners in leading presentations and meetings, gaining firsthand insights into their ability to guide and drive project discussions effectively."
        additionalText="Additionally, I had the privilege of working closely with a senior developer who mentored me throughout the internship. Her experience and expertise, along with the opportunity to collaborate with other professionals, expanded my technical knowledge and problem-solving abilities."
        titleOne="successes"
        titleTwo="challenges"
        pointsOne={[
          "Streamlined auto-adjudication backend logic, saving hours of work daily and enhancing evaluation efficiency.",
          "Implemented 40+ comprehensive unit tests, increasing code coverage by 75%, improving quality and reducing bugs.",
          "Successfully showcased seamless frontend-backend integration, demonstrating the feature's value during a team demo.",
          "Integrated low latency GraphQL endpoints, supporting 100+ requests per second, improving performance and enabling future scalability.",
        ]}
        pointsTwo={[
          "Navigating complex mortgage workflows, understanding regulations, and identifying improvements.",
          "Adapting to agile development, collaborating in fast-paced environments with tight timelines.",
          "Overcoming technical hurdles during legacy code migration, collaborating with senior developers.",
          "Managing project priorities, multitasking, and communicating effectively in dynamic team environments.",
        ]}
        colors={sec3colors}
      />

      <TwoTabs
        heading="04 | INSPIRING MOMENTS"
        subtitle="Unforgettable experiences that shaped my journey in software engineering."
        tabs={{
          tabLabels: ['one', 'two'],
          tabPanels: [
            {
              imageSrc: '/rbc/wall-one.jpeg',
              altText: 'wall one',
              heading: 'Whiteboard Conversations',
              texts: [
                "Stepping into the RBC office at Waterpark Place, I was captivated by the walls all covered in whiteboard material—like a canvas for unleashing creativity and brainstorming ideas. One afternoon, as my team wrapped up for the day, I joined a conversation between the senior developers and a business analyst. They delved into the intricate logic of a crucial factor in the mortgage application process. In a spontaneous move, one of the developers reached for a marker and began writing on the office wall. It was definitely unusual for me at first, as I grew up with the norm that drawing on walls was strictly prohibited.",
                "For half an hour, we engaged in a vibrant discussion, taking turns illustrating our thoughts on the vast canvas. As a visual learner, I found it liberating to be able to physically visualize my ideas and thought process. It was during this captivating conversation that I realized and understood the importance of communication between engineers and analysts. Ultimately, the whiteboard diagram remained a testament to our collaboration, lingering on the wall for weeks after our conversation. Its significance, etched in my memory, encapsulated the fusion of creativity, problem-solving, and effective communication that I embraced throughout my internship journey.",
              ],
            },
            {
              imageSrc: '/rbc/wall-two.jpeg',
              altText: 'wall two',
              heading: 'The Kanban Tapestry',
              texts: [
                "As I exited the office on my last day of work, I passed by this wall of sticky post-it notes and couldn’t help but stop and stare at it one last time. The notes basically outlined the entire application being developed by this RBC team, kind of like a mega Kanban board. Looking at this wall reminded me of my small role in the grand scheme, with even my team of ~20 developers and analysts occupying just one column among the QA team, product owners, and others. Nevertheless, it was fascinating to recognize that each person had a specific role to play in this massive operation.",
                "Each colourful note represented completed tasks, solved problems, and achieved milestones. This colourful wall filled me with a sense of accomplishment and gratitude for being part of the journey. With a mix of nostalgia and excitement, I took one last look, realizing that those sticky notes were more than reminders; they were a testament to the invaluable experience and knowledge gained during my internship. The wall of post-it notes will for a long time remind me of the importance of teamwork, the impact of individual contributions, and the endless possibilities that lie ahead in my career.",
              ],
            },
          ],
        }}
        colors={sec4colors}
      />

      <BasicText
        heading="05 | CONCLUSION"
        subtitle="leaving my mark"
        texts={[
          "Reflecting on my time at RBC, I can genuinely say that it has left an indelible mark on my journey as a software engineer. Each task I tackled and completed was done with a sense of joy that reignited my passion for coding. The memories made during my internship, whether over Webex or in person, will forever hold a special place in my heart.",
          "Saying goodbye to everyone during our final social gathering, overlooking the harbourfront, was bittersweet. Ultimately, I feel more confident and ready to take on new challenges in my career. Thank you, RBC, for this extraordinary opportunity and experience. I am excited to carry the spirit of excellence and innovation with me as I continue on my journey.",
        ]}
        colors={sec5colors}
      />

      <Highlights
        heading="06 | HIGHLIGHTS"
        subtitle="some of my favourite moments 💙"
        pictures={pictures}
        colors={sec5colors}
      />
    </Container>
  );
}
