'use client';

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Badge,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
  useMediaQuery,
  Grid,
  GridItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import InterestsGrid from '@/components/about/InterestsGrid';
import { MotionBox, MotionVStack, MotionGrid } from '@/lib/motion';
import { containerVariants, itemVariants } from '@/lib/motion-variants';

const personalPhotos = [
  { src: '/about/ivey.jpeg', alt: 'At Ivey Business School', caption: 'Ivey Business School' },
  { src: '/about/everest.jpeg', alt: 'Mount Everest adventure', caption: 'Everest Base Camp' },
  { src: '/about/van.jpeg', alt: 'Vancouver exploration', caption: 'Vancouver' },
  { src: '/about/snowboard.jpeg', alt: 'Snowboarding adventure', caption: 'Blue Mountain' },
  { src: '/about/bloor.jpeg', alt: 'Bloor Street exploration', caption: 'Toronto' },
  { src: '/about/klein.jpeg', alt: 'Mathematical exploration', caption: 'Klein Curaçao' },
  { src: '/about/pillows.jpeg', alt: 'Cozy moments', caption: 'Canadian Clay and Glass Gallery' },
];

const experiences = [
  {
    title: 'Telus',
    content: 'As a Software Engineer Intern at Telus, developed an internal ticket management system to optimize vendor assignment tracking and enhance collaboration with up to 3,000 engineers, while assisting in Open RAN integration with Rakuten and Samsung and contributing to 5G connectivity improvements through Zero-Touch Provisioning.',
    date: 'May 2023 – Aug 2023',
    logoSrc: 'home/telus.svg',
    logoAlt: 'telus'
  },
  {
    title: 'Royal Bank of Canada',
    content: 'As a Software Engineer Intern at RBC, refined auto-adjudication logic for a mortgage application to automate low-quality flagging, integrated low-latency GraphQL endpoints for 100+ requests per second, and accelerated development with extensive unit tests using Mockito, increasing code coverage and ensuring seamless API migration.',
    date: 'May 2022 – Aug 2022',
    logoSrc: 'home/rbc.svg',
    logoAlt: 'royal bank of canada'
  },
  {
    title: 'Hack Western',
    content: 'As Web Team Lead for Hack Western, led a team of eight developers in the end-to-end development for one of Canada\'s largest hackathons, bringing the design team\'s UI vision to life—including the creation of a dynamic landing page, live site, and a robust application portal that served over 1,000 applicants, ensuring seamless collaboration across cross-functional teams.',
    date: 'Mar 2021 – Feb 2024',
    logoSrc: 'home/hw.svg',
    logoAlt: 'hack western'
  },
  {
    title: 'Ivey Product Society',
    content: 'As a Product Management Fellow at Ivey Product Society, I was selected as one of 25 for a 4-month bootcamp, where I gained mentorship from industry leaders and applied the lean product development process to conduct 10+ user interviews, create a Product Requirements Document, and pitch a homepage customization feature to enhance Spotify\'s social experience.',
    date: 'Jan 2023 – Apr 2023',
    logoSrc: 'home/ips.svg',
    logoAlt: 'ivey product society'
  },
  {
    title: 'Tweebaa',
    content: 'As a UX/UI Designer Intern at Tweebaa, created over 500 user-centred designs in Figma—including user flow diagrams, sitemaps, mock-ups, and interactive wireframes—and synthesized user insights into refined design prototypes, collaborating with an international team to define app architecture and support a successful startup launch.',
    date: 'May 2021 – Aug 2021',
    logoSrc: 'home/tweebaa.svg',
    logoAlt: 'tweebaa'
  },
  {
    title: 'Ivey Tech Club',
    content: 'As Vice President of Development at the Ivey Technology Club, led the organization of impactful events like "Acing the PM Interview," partnering with Western Product Society to provide HBA students with essential Product Management insights and interview preparation through interactive workshops and expert guest speakers.',
    date: 'Apr 2023 – Mar 2024',
    logoSrc: 'home/itc.svg',
    logoAlt: 'ivey tech club'
  },
  {
    title: 'Western Founders Network',
    content: 'As Vice President of Education at Western Founders Network, mentored a team of five directors to execute four educational workshops on business and technology, secured five guest speakers with a combined follower count of over 7.2 million, and achieved record high participation with an average of 100+ members per virtual workshop.',
    date: 'Sep 2020 – Apr 2022',
    logoSrc: 'home/wfn.svg',
    logoAlt: 'western founders network'
  },
  {
    title: 'Chinese Students Association',
    content: 'As Productions Executive at the Chinese Students Association, edited promotional and contestants\' music videos for Western Voice, a singing competition, garnering over 5,000 views.',
    date: 'Sep 2020 – Apr 2021',
    logoSrc: 'home/csa.svg',
    logoAlt: 'chinese students association'
  }
];

const expertiseAreas = [
  {
    id: '01',
    title: 'Software development',
    description:
      'Java is where I’m deepest for backends and services; Next.js is what I reach for when I want the web experience to feel tight. I ship Flutter when mobile’s in scope, and Postgres/Supabase-style stacks when data and auth need to move fast. I’m not boxed into one layer. I like end-to-end ownership, including the AI-shaped work shipping today (models, APIs) when it’s the right fit.',
    stack: ['Java', 'Next.js', 'TypeScript', 'Supabase', 'Flutter'],
  },
  {
    id: '02',
    title: 'Product & UX',
    description:
      'I care how people move through a product: flows, edge cases, and low-fi wireframes before the polished screens. Mocks and handoff-ready detail live in Figma, with design systems so engineering gets states, spacing, and behaviour without playing telephone. The aim is work that feels obvious to the people using it and still fits what the team can ship and iterate on.',
    stack: ['Figma', 'Design systems', 'Prototyping', 'Wireframing'],
  },
  {
    id: '03',
    title: 'Research & analysis',
    description:
      'Interviews and market or competitor reading when we need a grounded view of the problem space. Write-ups and specs turn noisy input into something the group can point at and align on. I lean on quantitative data when it exists and qualitative follow-through when we need to explain why the numbers moved.',
    stack: ['User interviews', 'Market analysis', 'SQL', 'Strategy'],
  },
  {
    id: '04',
    title: 'Systems & infrastructure',
    description:
      'Containerized services and Kubernetes when deploys and scaling need that level of control. CI/CD, configs that match production, and logging or monitoring so outages shrink to find it, fix it, learn, and move on. I like infrastructure you can explain clearly and change without treating every tweak like a high-risk migration.',
    stack: ['Docker', 'Kubernetes', 'DevOps', 'CI/CD', 'Monitoring'],
  },
];

type ExperienceItem = (typeof experiences)[number];

function ExperiencePanelBody({ item }: { item: ExperienceItem }) {
  return (
    <VStack align="start" spacing={{ base: 3, lg: 4 }}>
      <HStack spacing={{ base: 3, lg: 4 }} align="center">
        <Box onContextMenu={(e) => e.preventDefault()} userSelect="none">
          <Image
            src={item.logoSrc}
            alt={item.logoAlt}
            w={{ base: 10, lg: 12 }}
            h={{ base: 10, lg: 12 }}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
        </Box>
        <VStack align="flex-start" spacing={1} minW={0}>
          <Heading
            as="h3"
            fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
            fontWeight="700"
            color="gray.800"
            m={0}
            p={0}
            lineHeight="snug"
          >
            {item.title}
          </Heading>
          <Text fontSize={{ base: 'sm', lg: 'md' }} color="gray.500" m={0} p={0}>
            {item.date}
          </Text>
        </VStack>
      </HStack>
      <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600" lineHeight="1.65">
        {item.content}
      </Text>
    </VStack>
  );
}

export default function About() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [tabUnderlineProps, setTabUnderlineProps] = useState({ width: 0, left: 0 });
  const tabListRef = useRef<HTMLDivElement>(null);
  const experienceNavRef = useRef<HTMLDivElement>(null);
  const [experienceNavH, setExperienceNavH] = useState<number | null>(null);
  const [isDesktop] = useMediaQuery('(min-width: 48em)');

  useLayoutEffect(() => {
    if (isDesktop) {
      setExperienceNavH(null);
      return;
    }
    const el = experienceNavRef.current;
    if (!el) return;
    const measure = () => setExperienceNavH(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop || !tabListRef.current) return;
    const tab = tabListRef.current.children[selectedTab] as HTMLElement | undefined;
    if (tab) {
      setTabUnderlineProps({
        width: tab.offsetWidth,
        left: tab.offsetLeft,
      });
    }
  }, [selectedTab, isDesktop]);

  return (
    <Box>
      <Container maxW="container.lg" px={{ base: 5, lg: 10 }} py={{ base: 12, lg: 24 }}>
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="full"
          px={{ base: 4, lg: 12 }}
        >
          <VStack spacing={{ base: 8, lg: 12 }} w="100%">
            <MotionBox variants={itemVariants} w="100%">
              <Grid templateColumns={{ base: '1fr', lg: '1fr 2fr' }} gap={{ base: 6, lg: 10 }} alignItems="center">
                <MotionBox variants={itemVariants} maxW={{ base: "260px", lg: "100%" }} mx={{ base: "auto", lg: 0 }} order={{ base: 2, lg: 1 }}>
                  <Box
                    role="group"
                    position="relative"
                    borderRadius="2xl"
                    overflow="hidden"
                    borderWidth="1px"
                    borderColor="gray.200"
                    boxShadow="md"
                    transform="scale(1)"
                    transformOrigin="center"
                    transitionProperty="transform, border-color, box-shadow"
                    transitionDuration="0.4s"
                    transitionTimingFunction="cubic-bezier(0.33, 1, 0.68, 1)"
                    onContextMenu={(e) => e.preventDefault()}
                    userSelect="none"
                    _hover={{
                      transform: 'scale(1.008)',
                      borderColor: 'brand.300',
                      boxShadow: 'lg',
                    }}
                  >
                    <Image
                      src={personalPhotos[0].src}
                      alt={personalPhotos[0].alt}
                      width="100%"
                      height={{ base: "260px", lg: "auto" }}
                      maxW={{ base: "260px", lg: "none" }}
                      objectFit="cover"
                      display="block"
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    <Box
                      position="absolute"
                      inset={0}
                      bg="linear-gradient(135deg, rgba(255, 123, 0, 0.07) 0%, transparent 50%)"
                      opacity={0}
                      pointerEvents="none"
                      transition="opacity 0.4s cubic-bezier(0.33, 1, 0.68, 1)"
                      _groupHover={{ opacity: 1 }}
                    />
                    <Box
                      position="absolute"
                      bottom="0"
                      left="0"
                      right="0"
                      zIndex={1}
                      bg="linear-gradient(transparent, rgba(0,0,0,0.7))"
                      p={6}
                      color="white"
                    >
                      <Text fontSize="md" fontWeight="600" color="white" m={0} p={0}>
                        Featured Moment
                      </Text>
                    </Box>
                  </Box>
                </MotionBox>

                <MotionVStack variants={itemVariants} spacing={{ base: 3, lg: 4 }} align={{ base: "center", lg: "start" }} textAlign={{ base: "center", lg: "left" }} order={{ base: 1, lg: 2 }}>
                  <Heading fontSize={{ base: '2xl', lg: '5xl' }} fontWeight="700" color="gray.800" lineHeight="1.15">
                    About Me
                  </Heading>

                  <VStack spacing={4} align={{ base: "center", lg: "start" }}>
                    <Text color="gray.600" lineHeight="1.6" fontSize="md">
                  I&apos;m a Master of Computer Science student at{' '}
                  <Text as="span" color="#990000" fontWeight="bold">
                    <Link href="https://viterbischool.usc.edu/" target="_blank" rel="noopener noreferrer">
                      USC Viterbi School of Engineering
                    </Link>
                  </Text>, having just returned from my last semester abroad at{' '}
                  <Text as="span" color="#660874" fontWeight="bold">
                    <Link href="https://www.tsinghua.edu.cn/en/" target="_blank" rel="noopener noreferrer">
                      Tsinghua University
                    </Link>
                  </Text>, where I gained valuable international perspectives on technology and innovation.
                    </Text>
                    
                    <Text color="gray.600" lineHeight="1.6" fontSize="md">
                      I recently completed my undergraduate dual degree in Computer Science and Business Administration at{' '}
                      <Text as="span" color="#4F2683" fontWeight="bold">
                        <Link href="https://www.uwo.ca/index.html" target="_blank" rel="noopener noreferrer">
                          Western University
                        </Link>
                      </Text> and{' '}
                      <Text as="span" color="#034638" fontWeight="bold">
                        <Link href="https://www.ivey.uwo.ca/" target="_blank" rel="noopener noreferrer">
                          Ivey Business School
                        </Link>
                      </Text>, where I developed a strong foundation in both technical and business domains.
                    </Text>
                    
                    <Text color="gray.600" lineHeight="1.6" fontSize="md">
                      At the core, I&apos;m passionate about building impactful solutions. I believe in technology&apos;s power to drive meaningful change and focus on blending business strategy with design thinking to create products that are not only functional but truly transformative.
                    </Text>
                  </VStack>

                  <Flex w={{ base: "full", lg: "auto" }} gap={3} flexWrap="wrap" justify="center">
                    <Button
                      as={Link}
                      href="/Ansel_Zeng_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      variant="solid"
                      rightIcon={<ChevronRightIcon />}
                      w="auto"
                    >
                      Download Resume
                    </Button>
                    <Button
                      as={Link}
                      href="/fun/blog"
                      size="sm"
                      variant="outline"
                      w="auto"
                    >
                      Read My Blog
                    </Button>
                  </Flex>
                </MotionVStack>
              </Grid>
            </MotionBox>


          </VStack>
        </MotionBox>
      </Container>

      <Box bg="white" py={{ base: 10, lg: 16 }}>
        <Container maxW="container.lg" px={{ base: 5, lg: 10 }}>
          <MotionBox
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            w="full"
            px={{ base: 4, lg: 12 }}
          >
            <VStack spacing={10} textAlign="center">
              <VStack spacing={3}>
                <Badge
                  colorScheme="orange"
                  variant="subtle"
                  px={2.5}
                  py={0.5}
                  borderRadius="full"
                  fontSize="xs"
                  fontWeight="600"
                >
                  Moments
                </Badge>
                <Heading fontSize={{ base: 'xl', lg: '3xl' }} fontWeight="700" color="gray.800">
                  Life Through My Lens
                </Heading>
                <Text fontSize="md" color="gray.600" maxW="520px" mx="auto" lineHeight="1.55">
                  Capturing memories from adventures, achievements, and everyday moments that shape who I am.
                </Text>
              </VStack>

              <Grid
                templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
                templateRows={{ base: 'repeat(3, 200px)', md: 'repeat(3, 200px)' }}
                gap={4}
                w="full"
              >
                <GridItem
                  gridColumn={{ base: 'span 1', md: 'span 2' }}
                  gridRow={{ base: 'span 1', md: 'span 2' }}
                  h="100%"
                  order={{ base: 1, md: 1 }}
                >
                  <MotionBox 
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    h="100%"
                  >
                  <Box
                    position="relative"
                    borderRadius="2xl"
                    overflow="hidden"
                    boxShadow="2xl"
                    h="100%"
                    _hover={{
                      transform: 'translateY(-8px)',
                      boxShadow: '3xl',
                    }}
                    transition="all 0.3s ease"
                    onContextMenu={(e) => e.preventDefault()}
                    userSelect="none"
                  >
                    <Image
                      src={personalPhotos[1].src}
                      alt={personalPhotos[1].alt}
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    <Box
                      position="absolute"
                      bottom="0"
                      left="0"
                      right="0"
                      bg="linear-gradient(transparent, rgba(0,0,0,0.6))"
                      p={2}
                      color="white"
                    >
                      <Text fontSize={{ base: "xs", lg: "sm" }} fontWeight="600" color="white" m={0} p={0}>
                        {personalPhotos[1].caption}
                      </Text>
                    </Box>
                  </Box>
                  </MotionBox>
                </GridItem>

                <GridItem
                  gridColumn={{ base: 'span 1', md: 'span 1' }}
                  gridRow={{ base: 'span 1', md: 'span 1' }}
                  h="100%"
                  order={{ base: 2, md: 2 }}
                >
                  <MotionBox 
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    h="100%"
                  >
                  <Box
                    position="relative"
                    borderRadius="2xl"
                    overflow="hidden"
                    boxShadow="2xl"
                    h="100%"
                    _hover={{
                      transform: 'translateY(-8px)',
                      boxShadow: '3xl',
                    }}
                    transition="all 0.3s ease"
                    onContextMenu={(e) => e.preventDefault()}
                    userSelect="none"
                  >
                    <Image
                      src={personalPhotos[2].src}
                      alt={personalPhotos[2].alt}
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    <Box
                      position="absolute"
                      bottom="0"
                      left="0"
                      right="0"
                      bg="linear-gradient(transparent, rgba(0,0,0,0.6))"
                      p={2}
                      color="white"
                    >
                      <Text fontSize={{ base: "xs", lg: "sm" }} fontWeight="600" color="white" m={0} p={0}>
                        {personalPhotos[2].caption}
                      </Text>
                    </Box>
                  </Box>
                  </MotionBox>
                </GridItem>

                <GridItem
                  gridColumn={{ base: 'span 1', md: 'span 1' }}
                  gridRow={{ base: 'span 1', md: 'span 2' }}
                  h="100%"
                  order={{ base: 3, md: 3 }}
                >
                  <MotionBox 
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    h="100%"
                  >
                  <Box
                    position="relative"
                    borderRadius="2xl"
                    overflow="hidden"
                    boxShadow="2xl"
                    h="100%"
                    _hover={{
                      transform: 'translateY(-8px)',
                      boxShadow: '3xl',
                    }}
                    transition="all 0.3s ease"
                    onContextMenu={(e) => e.preventDefault()}
                    userSelect="none"
                  >
                    <Image
                      src={personalPhotos[3].src}
                      alt={personalPhotos[3].alt}
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    <Box
                      position="absolute"
                      bottom="0"
                      left="0"
                      right="0"
                      bg="linear-gradient(transparent, rgba(0,0,0,0.6))"
                      p={2}
                      color="white"
                    >
                      <Text fontSize={{ base: "xs", lg: "sm" }} fontWeight="600" color="white" m={0} p={0}>
                        {personalPhotos[3].caption}
                      </Text>
                    </Box>
                  </Box>
                  </MotionBox>
                </GridItem>

                <GridItem
                  gridColumn={{ base: 'span 1', md: 'span 1' }}
                  gridRow={{ base: 'span 1', md: 'span 2' }}
                  h="100%"
                  order={{ base: 4, md: 4 }}
                >
                  <MotionBox 
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    h="100%"
                  >
                  <Box
                    position="relative"
                    borderRadius="2xl"
                    overflow="hidden"
                    boxShadow="2xl"
                    h="100%"
                    _hover={{
                      transform: 'translateY(-8px)',
                      boxShadow: '3xl',
                    }}
                    transition="all 0.3s ease"
                    onContextMenu={(e) => e.preventDefault()}
                    userSelect="none"
                  >
                    <Image
                      src={personalPhotos[4].src}
                      alt={personalPhotos[4].alt}
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    <Box
                      position="absolute"
                      bottom="0"
                      left="0"
                      right="0"
                      bg="linear-gradient(transparent, rgba(0,0,0,0.6))"
                      p={2}
                      color="white"
                    >
                      <Text fontSize={{ base: "xs", lg: "sm" }} fontWeight="600" color="white" m={0} p={0}>
                        {personalPhotos[4].caption}
                      </Text>
                    </Box>
                  </Box>
                  </MotionBox>
                </GridItem>

                <GridItem
                  gridColumn={{ base: 'span 1', md: 'span 2' }}
                  gridRow={{ base: 'span 1', md: 'span 1' }}
                  h="100%"
                  order={{ base: 5, md: 5 }}
                >
                  <MotionBox 
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    h="100%"
                  >
                  <Box
                    position="relative"
                    borderRadius="2xl"
                    overflow="hidden"
                    boxShadow="2xl"
                    h="100%"
                    _hover={{
                      transform: 'translateY(-8px)',
                      boxShadow: '3xl',
                    }}
                    transition="all 0.3s ease"
                    onContextMenu={(e) => e.preventDefault()}
                    userSelect="none"
                  >
                    <Image
                      src={personalPhotos[6].src}
                      alt={personalPhotos[6].alt}
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    <Box
                      position="absolute"
                      bottom="0"
                      left="0"
                      right="0"
                      bg="linear-gradient(transparent, rgba(0,0,0,0.6))"
                      p={2}
                      color="white"
                    >
                      <Text fontSize={{ base: "xs", lg: "sm" }} fontWeight="600" color="white" m={0} p={0}>
                        {personalPhotos[6].caption}
                      </Text>
                    </Box>
                  </Box>
                  </MotionBox>
                </GridItem>

                <GridItem
                  gridColumn={{ base: 'span 1', md: 'span 1' }}
                  gridRow={{ base: 'span 1', md: 'span 1' }}
                  h="100%"
                  order={{ base: 6, md: 6 }}
                >
                  <MotionBox 
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    h="100%"
                  >
                  <Box
                    position="relative"
                    borderRadius="2xl"
                    overflow="hidden"
                    boxShadow="2xl"
                    h="100%"
                    _hover={{
                      transform: 'translateY(-8px)',
                      boxShadow: '3xl',
                    }}
                    transition="all 0.3s ease"
                    onContextMenu={(e) => e.preventDefault()}
                    userSelect="none"
                  >
                    <Image
                      src={personalPhotos[5].src}
                      alt={personalPhotos[5].alt}
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    <Box
                      position="absolute"
                      bottom="0"
                      left="0"
                      right="0"
                      bg="linear-gradient(transparent, rgba(0,0,0,0.6))"
                      p={2}
                      color="white"
                    >
                      <Text fontSize={{ base: "xs", lg: "sm" }} fontWeight="600" color="white" m={0} p={0}>
                        {personalPhotos[5].caption}
                      </Text>
                    </Box>
                  </Box>
                  </MotionBox>
                </GridItem>
              </Grid>
            </VStack>
          </MotionBox>
        </Container>
      </Box>

      <Box bg="orange.50" py={{ base: 10, lg: 16 }}>
        <Container maxW="container.lg" px={{ base: 5, lg: 10 }}>
          <Box w="full" px={{ base: 4, lg: 12 }}>
            <VStack spacing={{ base: 10, lg: 12 }} align="stretch">
              <MotionBox
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                w="full"
              >
                <VStack spacing={4} textAlign="center" maxW="640px" mx="auto">
                  <Badge
                    colorScheme="orange"
                    variant="subtle"
                    px={2.5}
                    py={0.5}
                    borderRadius="full"
                    fontSize="xs"
                    fontWeight="600"
                  >
                    Expertise
                  </Badge>
                  <Heading fontSize={{ base: 'xl', lg: '3xl' }} fontWeight="700" color="gray.800">
                    What I build
                  </Heading>
                  <Text fontSize="md" color="gray.600" lineHeight="1.65">
                    Engineering, product craft, and research: how I think in stack traces, pixels, and tradeoffs.
                  </Text>
                </VStack>
              </MotionBox>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} w="full">
                {expertiseAreas.map((area, index) => (
                  <MotionBox
                    key={area.id}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    h="full"
                  >
                    <Box
                      bg="white"
                      borderRadius="xl"
                      borderWidth="1px"
                      borderColor="gray.200"
                      borderLeftWidth="4px"
                      borderLeftColor="brand.400"
                      p={{ base: 5, md: 6 }}
                      h="full"
                      boxShadow="sm"
                      transition="box-shadow 0.2s ease, border-color 0.2s ease"
                      _hover={{ boxShadow: 'md', borderColor: 'gray.300' }}
                    >
                      <Text
                        fontSize="xs"
                        fontFamily="mono"
                        color="gray.400"
                        fontWeight="600"
                        letterSpacing="0.12em"
                        mb={3}
                      >
                        {area.id}
                      </Text>
                      <Heading
                        as="h3"
                        fontSize={{ base: 'lg', md: 'xl' }}
                        fontWeight="700"
                        color="gray.800"
                        mb={3}
                        lineHeight="1.25"
                      >
                        {area.title}
                      </Heading>
                      <Text fontSize="sm" color="gray.600" lineHeight="1.7">
                        {area.description}
                      </Text>
                      <Flex
                        gap={2}
                        flexWrap="wrap"
                        mt={5}
                        pt={5}
                        borderTopWidth="1px"
                        borderTopColor="gray.100"
                      >
                        {area.stack.map((tag) => (
                          <Text
                            key={tag}
                            as="span"
                            fontSize="xs"
                            fontFamily="mono"
                            px={2.5}
                            py={1}
                            borderRadius="md"
                            bg="gray.100"
                            color="gray.700"
                          >
                            {tag}
                          </Text>
                        ))}
                      </Flex>
                    </Box>
                  </MotionBox>
                ))}
              </SimpleGrid>

              <MotionBox
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.2 }}
                w="full"
              >
                <Box
                  bg="white"
                  borderRadius="xl"
                  borderWidth="1px"
                  borderColor="gray.200"
                  overflow="hidden"
                  boxShadow="sm"
                >
                  <Box px={{ base: 5, md: 6 }} pt={5} pb={3} borderBottomWidth="1px" borderColor="gray.100">
                    <Heading as="h3" fontSize="md" fontWeight="700" color="gray.800">
                      Experience
                    </Heading>
                    <Box mt={1}>
                      <Text
                        fontSize="sm"
                        color="gray.500"
                        lineHeight="1.5"
                        display={{ base: 'none', md: 'block' }}
                      >
                        Internships, builds, and campus roles, in brief, by organization.
                      </Text>
                      <Text
                        fontSize="sm"
                        color="gray.500"
                        lineHeight="1.5"
                        display={{ base: 'block', md: 'none' }}
                      >
                        Tap a logo on the left to load that role on the right.
                      </Text>
                    </Box>
                  </Box>

                  <Box display={{ base: 'none', md: 'block' }}>
                    <Tabs
                      index={selectedTab}
                      onChange={setSelectedTab}
                      isFitted
                      variant="unstyled"
                    >
                      <Box position="relative" w="full">
                        <TabList
                          ref={tabListRef}
                          alignItems="stretch"
                          overflowX="auto"
                          overflowY="hidden"
                          bg="gray.50"
                          borderBottomWidth="1px"
                          borderColor="gray.200"
                          px={0}
                          py={0}
                          gap={0}
                        >
                          {experiences.map((item, index) => (
                            <Tab
                              key={index}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              flex="1"
                              minW="44px"
                              px={{ base: 2, lg: 3 }}
                              py={3}
                              m={0}
                              borderTopRadius="md"
                              borderBottomRadius="0"
                              _hover={{ bg: 'gray.100' }}
                              _selected={{
                                color: 'gray.800',
                                bg: 'white',
                                boxShadow: 'sm',
                                zIndex: 1,
                              }}
                            >
                              <Box onContextMenu={(e) => e.preventDefault()} userSelect="none">
                                <Image
                                  src={item.logoSrc}
                                  alt={item.logoAlt}
                                  w={{ base: 6, lg: 8 }}
                                  maxH={{ base: 4, lg: 6 }}
                                  draggable={false}
                                  onContextMenu={(e) => e.preventDefault()}
                                />
                              </Box>
                            </Tab>
                          ))}
                        </TabList>

                        <MotionBox
                          position="absolute"
                          bottom="0"
                          left={0}
                          height="2px"
                          bg="brand.500"
                          zIndex={1}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                          animate={{ width: tabUnderlineProps.width, left: tabUnderlineProps.left }}
                        />
                      </Box>

                      <TabPanels>
                        {experiences.map((item, index) => (
                          <TabPanel key={index} px={{ base: 5, md: 8 }} py={{ base: 6, md: 8 }}>
                            <MotionBox
                              key={selectedTab}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.35 }}
                            >
                              <ExperiencePanelBody item={item} />
                            </MotionBox>
                          </TabPanel>
                        ))}
                      </TabPanels>
                    </Tabs>
                  </Box>

                  <Flex
                    display={{ base: 'flex', md: 'none' }}
                    align="flex-start"
                  >
                    <VStack
                      ref={experienceNavRef}
                      as="nav"
                      aria-label="Experience by organization"
                      spacing={0}
                      w="3.25rem"
                      flexShrink={0}
                      borderRightWidth="1px"
                      borderColor="gray.200"
                      bg="gray.50"
                      py={0}
                    >
                      {experiences.map((item, index) => (
                        <Box
                          key={index}
                          as="button"
                          type="button"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          w="full"
                          py={2}
                          px={1}
                          onClick={() => setSelectedTab(index)}
                          aria-pressed={selectedTab === index}
                          bg={selectedTab === index ? 'white' : 'transparent'}
                          borderLeftWidth="3px"
                          borderLeftColor={selectedTab === index ? 'brand.500' : 'transparent'}
                          transition="background 0.15s ease, border-color 0.15s ease"
                          _hover={{ bg: selectedTab === index ? 'white' : 'orange.50' }}
                        >
                          <Box onContextMenu={(e) => e.preventDefault()} userSelect="none">
                            <Image
                              src={item.logoSrc}
                              alt={item.logoAlt}
                              w={7}
                              h={7}
                              objectFit="contain"
                              draggable={false}
                              onContextMenu={(e) => e.preventDefault()}
                            />
                          </Box>
                        </Box>
                      ))}
                    </VStack>
                    <Box
                      flex="1"
                      minW={0}
                      px={3.5}
                      py={5}
                      overflowY="auto"
                      bg="white"
                      h={experienceNavH != null ? `${experienceNavH}px` : undefined}
                    >
                      <MotionBox
                        key={selectedTab}
                        initial={{ opacity: 0, x: 14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                      >
                        <ExperiencePanelBody item={experiences[selectedTab]} />
                      </MotionBox>
                    </Box>
                  </Flex>
                </Box>
              </MotionBox>
            </VStack>
          </Box>
        </Container>
      </Box>

      <Box bg="white" py={{ base: 10, lg: 16 }}>
        <Container maxW="container.lg" px={{ base: 5, lg: 10 }}>
          <MotionVStack
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            spacing={10}
            w="full"
            px={{ base: 4, lg: 12 }}
          >
            <MotionVStack variants={itemVariants} spacing={3} textAlign="center">
              <Badge
                colorScheme="orange"
                variant="subtle"
                px={2.5}
                py={0.5}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
              >
                Interests
              </Badge>
              <Heading
                fontSize={{ base: 'xl', lg: '3xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Beyond the screen
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="560px"
                mx="auto"
                lineHeight="1.55"
              >
                Film, music, teams I cheer for, and travel videos when I remember to hit record.
              </Text>
            </MotionVStack>

            <InterestsGrid />
          </MotionVStack>
        </Container>
      </Box>

      <Box bg="orange.50" py={{ base: 10, lg: 16 }}>
        <Container maxW="container.lg" px={{ base: 5, lg: 10 }}>
          <MotionVStack
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            spacing={8}
            textAlign="center"
            w="full"
            px={{ base: 4, lg: 12 }}
          >
            <MotionVStack variants={itemVariants} spacing={3}>
              <Heading
                fontSize={{ base: 'xl', lg: '3xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Let's Connect
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="520px"
                mx="auto"
                lineHeight="1.55"
              >
                Ready to collaborate on something amazing? I'd love to hear about your project and how we can work together to create something meaningful.
              </Text>
            </MotionVStack>

            <MotionBox variants={itemVariants} w="100%">
              <Flex w={{ base: "full", lg: "auto" }} gap={3} justify="center" flexWrap="wrap">
                <Button
                  as={Link}
                  href="/Ansel_Zeng_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  variant="solid"
                  rightIcon={<ChevronRightIcon />}
                  w="auto"
                >
                  Download Resume
                </Button>
                <Button
                  as={Link}
                  href="/fun/blog"
                  size="sm"
                  variant="outline"
                  w="auto"
                >
                  Read My Blog
                </Button>
              </Flex>
            </MotionBox>
          </MotionVStack>
        </Container>
      </Box>

      





    </Box>
  );
}