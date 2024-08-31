'use client';
import {
  Box,
  Container,
  VStack,
  Text,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Badge,
  Image,
  Stack,
  Spinner,
  Skeleton
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import CarouselComponent from "@/components/about/Carousel";

const MotionBox = motion(Box);

const tabItems = [
  {
    title: 'Telus',
    content: 'As a Software Engineer Intern at Telus, developed an internal ticket management system to optimize vendor assignment tracking and enhance collaboration with up to 3,000 engineers, while assisting in Open RAN integration with Rakuten and Samsung and contributing to 5G connectivity improvements through Zero-Touch Provisioning.',
    date: 'May 2023 – Aug 2023',
    badgeColorScheme: 'blue',
    badgeText: 'internship',
    logoSrc: 'home/telus.svg',
    logoAlt: 'telus'
  },
  {
    title: 'Royal Bank of Canada',
    content: 'As a Software Engineer Intern at RBC, refined auto-adjudication logic for a mortgage application to automate low-quality flagging, integrated low-latency GraphQL endpoints for 100+ requests per second, and accelerated development with extensive unit tests using Mockito, increasing code coverage and ensuring seamless API migration.',
    date: 'May 2022 – Aug 2022',
    badgeColorScheme: 'blue',
    badgeText: 'internship',
    logoSrc: 'home/rbc.svg',
    logoAlt: 'royal bank of canada'
  },
  {
    title: 'Hack Western',
    content: 'As Web Team Lead for Hack Western, led a team of eight developers in the end-to-end development for one of Canada’s largest hackathons, bringing the design team’s UI vision to life—including the creation of a dynamic landing page, live site, and a robust application portal that served over 1,000 applicants, ensuring seamless collaboration across cross-functional teams.',
    date: 'Mar 2021 – Feb 2024',
    badgeColorScheme: 'orange',
    badgeText: 'school club',
    logoSrc: 'home/hw.svg',
    logoAlt: 'hack western'
  },
  {
    title: 'Ivey Product Society',
    content: 'As a Product Management Fellow at Ivey Product Society, I was selected as one of 25 for a 4-month bootcamp, where I gained mentorship from industry leaders and applied the lean product development process to conduct 10+ user interviews, create a Product Requirements Document, and pitch a homepage customization feature to enhance Spotify’s social experience.',
    date: 'Jan 2023 – Apr 2023',
    badgeColorScheme: 'purple',
    badgeText: 'fellowship',
    logoSrc: 'home/ips.svg',
    logoAlt: 'ivey product society'
  },
  {
    title: 'Tweebaa',
    content: 'As a UX/UI Designer Intern at Tweebaa, created over 500 user-centered designs in Figma—including user flow diagrams, sitemaps, mock-ups, and interactive wireframes—and synthesized user insights into refined design prototypes, collaborating with an international team to define app architecture and support a successful startup launch.',
    date: 'May 2021 – Aug 2021',
    badgeColorScheme: 'blue',
    badgeText: 'internship',
    logoSrc: 'home/tweebaa.svg',
    logoAlt: 'tweebaa'
  },
  {
    title: 'Ivey Tech Club',
    content: 'As Vice President of Development at the Ivey Technology Club, led the organization of impactful events like "Acing the PM Interview," partnering with Western Product Society to provide HBA students with essential Product Management insights and interview preparation through interactive workshops and expert guest speakers.',
    date: 'Apr 2023 – Mar 2024',
    badgeColorScheme: 'orange',
    badgeText: 'school club',
    logoSrc: 'home/itc.svg',
    logoAlt: 'ivey tech club'
  },
  {
    title: 'Western Founders Network',
    content: 'As Vice President of Education at Western Founders Network, mentored a team of five directors to execute four educational workshops on business and technology, secured five guest speakers with a combined follower count of over 7.2 million, and achieved record high participation with an average of 100+ members per virtual workshop.',
    date: 'Sep 2020 – Apr 2022',
    badgeColorScheme: 'orange',
    badgeText: 'school club',
    logoSrc: 'home/wfn.svg',
    logoAlt: 'western founders network'
  },
  {
    title: 'Chinese Students Association',
    content: 'As Productions Executive at the Chinese Students Association, edited promotional and contestants’ music videos for Western Voice, a singing competition, garnering over 5,000 views.',
    date: 'Sep 2020 – Apr 2021',
    badgeColorScheme: 'orange',
    badgeText: 'school club',
    logoSrc: 'home/csa.svg',
    logoAlt: 'chinese students association'
  }
];

export default function Page() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [tabUnderlineProps, setTabUnderlineProps] = useState({ width: 0, left: 0 });
  const tabListRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const calculateUnderlinePosition = () => {
      if (tabListRef.current) {
        const tab = tabListRef.current.children[selectedTab] as HTMLElement;
        if (tab) {
          setTabUnderlineProps({
            width: tab.offsetWidth,
            left: tab.offsetLeft
          });
        }
      }
    };

    calculateUnderlinePosition();
    window.addEventListener("resize", calculateUnderlinePosition);
    return () => window.removeEventListener("resize", calculateUnderlinePosition);
  }, [selectedTab]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1690);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container bg="#FFF8EB" maxW="100%" p={0}>
      <Container maxW="container.xl" p={0} minH="100vh" display="flex" alignItems="center" justifyContent="center">
        <Stack p={12} spacing={12} maxW="container.lg" w="100%" direction={{ base: 'column', lg: 'row' }}>
          <Box w={{ base: '100%', lg: '60%' }} pt={{ base: '12', lg: '0' }}>
            {isLoading ? (
              <Skeleton height="100%" width="100%" startColor='orange.100' endColor='orange.400'>
                <Spinner size="xl" />
              </Skeleton>
            ) : (
              <CarouselComponent />
            )}
          </Box>
          <VStack w={{ base: '100%', lg: '40%' }} align="start" spacing={4} fontSize={{ base: 'small', lg: 'medium' }}>
            <Heading>Who am I?</Heading>
            <Text>
              I&rsquo;m Ansel Zeng, currently pursuing a dual degree in Computer Science and Business Administration at{' '}
              <Text as="span" color="#4F2683" fontWeight="bold">Western University</Text> and{' '}
              <Text as="span" color="#034638" fontWeight="bold">Ivey Business School</Text>. This winter, I&rsquo;ll be on exchange at Tsinghua University in China.
            </Text>
            <Text>
              At the core, I&rsquo;m passionate about building impactful solutions. I believe in technology&rsquo;s power to drive meaningful change and focus on blending business strategy with design thinking to create products that are not only functional but truly transformative.
            </Text>
            <Text>
              Feel free to reach out and get connected—I&rsquo;d love to meet new people!
            </Text>
          </VStack>
        </Stack>
      </Container>

      <Container bg={'white'} p={0} maxW={'100%'}>
        <Container px={12} py={{ base: '12', lg: '24' }} maxW={'container.lg'}>
          <Tabs onChange={(index) => setSelectedTab(index)} isFitted position="relative" variant="unstyled">
            <TabList ref={tabListRef}>
              {tabItems.map((item, index) => (
                <Tab key={index} p={{ base: 2, lg: 4 }} _hover={{ bg: "#FFF8EB" }}>
                  <Image src={item.logoSrc} alt={item.logoAlt} w={8} maxH={6} />
                </Tab>
              ))}
            </TabList>

            <MotionBox
              position="absolute"
              height="2px"
              bg="orange"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              animate={{ width: tabUnderlineProps.width, left: tabUnderlineProps.left }}
            />

            <TabPanels>
              {tabItems.map((item, index) => (
                <TabPanel key={index} px={{ base: 0, lg: 4 }}>
                  <MotionBox
                    key={selectedTab}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    px={{ base: 0, lg: 4 }}
                    py={4}
                  >
                    <VStack align={'start'}>
                      <Text fontSize={{ base: 'x-small', lg: 'small' }} color={'#727272'}>{item.date}</Text>
                      <Badge colorScheme={item.badgeColorScheme}>{item.badgeText}</Badge>
                      <Text fontSize={{ base: 'small', lg: 'medium' }}>{item.content}</Text>
                    </VStack>
                  </MotionBox>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Container>
      </Container>

      <Container px={12} py={{ base: '12', lg: '24' }} maxW={'container.lg'}>
        <Heading pb={4} size={'md'}>Hobbies and Interests</Heading>
        <VStack align={'start'} spacing={4} fontSize={{ base: 'small', lg: 'medium'}}>
          <Text>
            I&rsquo;ve always had a strong passion for staying active and engaged in various pursuits. 
            One of the most defining aspects of my life was playing hockey for 11 years, which taught 
            me discipline, resilience, and the value of teamwork. Although I had to step away from 
            the sport due to the COVID-19 pandemic, my love for the game remains strong. I also follow 
            several professional teams across different sports, including the New Orleans Saints, Chelsea F.C., 
            Scuderia Ferrari, and the San Antonio Spurs. Cheering for these teams allows me to stay connected 
            to my love for sports, no matter the season.
          </Text>
          <Text>
            Beyond sports, my time in scouting has been a major influence on my growth and character. 
            From my early days as a Cub, I advanced through Scouts and Venturer, eventually becoming a 
            Leader in Training. Along the way, I earned the Chief Scout&rsquo;s Award, the highest honour 
            in Scouts Canada, which has been one of my proudest achievements. Scouting nurtured my sense of 
            adventure, leadership, and community, and these values continue to guide me in many aspects of my life.
          </Text>
          <Text>
            Outside of these activities, I love exploring new creative outlets. Whether it&rsquo;s diving 
            into new technology, photography, or experimenting with different culinary techniques, I find 
            joy in learning and continuously improving. I also enjoy spending time outdoors, whether hiking, 
            keeping my Strava streak going, or simply appreciating nature. These experiences help me unwind 
            and clear my head, giving me fresh ideas and energy for whatever comes next.
          </Text>
        </VStack>
      </Container>
    </Container>
  );
}
