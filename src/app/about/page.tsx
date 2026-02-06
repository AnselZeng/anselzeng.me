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
  Stack,
  SimpleGrid,
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
import { useState, useRef, useEffect } from 'react';
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
    badgeColorScheme: 'orange',
    badgeText: 'internship',
    logoSrc: 'home/telus.svg',
    logoAlt: 'telus'
  },
  {
    title: 'Royal Bank of Canada',
    content: 'As a Software Engineer Intern at RBC, refined auto-adjudication logic for a mortgage application to automate low-quality flagging, integrated low-latency GraphQL endpoints for 100+ requests per second, and accelerated development with extensive unit tests using Mockito, increasing code coverage and ensuring seamless API migration.',
    date: 'May 2022 – Aug 2022',
    badgeColorScheme: 'orange',
    badgeText: 'internship',
    logoSrc: 'home/rbc.svg',
    logoAlt: 'royal bank of canada'
  },
  {
    title: 'Hack Western',
    content: 'As Web Team Lead for Hack Western, led a team of eight developers in the end-to-end development for one of Canada\'s largest hackathons, bringing the design team\'s UI vision to life—including the creation of a dynamic landing page, live site, and a robust application portal that served over 1,000 applicants, ensuring seamless collaboration across cross-functional teams.',
    date: 'Mar 2021 – Feb 2024',
    badgeColorScheme: 'orange',
    badgeText: 'school club',
    logoSrc: 'home/hw.svg',
    logoAlt: 'hack western'
  },
  {
    title: 'Ivey Product Society',
    content: 'As a Product Management Fellow at Ivey Product Society, I was selected as one of 25 for a 4-month bootcamp, where I gained mentorship from industry leaders and applied the lean product development process to conduct 10+ user interviews, create a Product Requirements Document, and pitch a homepage customization feature to enhance Spotify\'s social experience.',
    date: 'Jan 2023 – Apr 2023',
    badgeColorScheme: 'orange',
    badgeText: 'fellowship',
    logoSrc: 'home/ips.svg',
    logoAlt: 'ivey product society'
  },
  {
    title: 'Tweebaa',
    content: 'As a UX/UI Designer Intern at Tweebaa, created over 500 user-centred designs in Figma—including user flow diagrams, sitemaps, mock-ups, and interactive wireframes—and synthesized user insights into refined design prototypes, collaborating with an international team to define app architecture and support a successful startup launch.',
    date: 'May 2021 – Aug 2021',
    badgeColorScheme: 'orange',
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
    content: 'As Productions Executive at the Chinese Students Association, edited promotional and contestants\' music videos for Western Voice, a singing competition, garnering over 5,000 views.',
    date: 'Sep 2020 – Apr 2021',
    badgeColorScheme: 'orange',
    badgeText: 'school club',
    logoSrc: 'home/csa.svg',
    logoAlt: 'chinese students association'
  }
];


export default function About() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [tabUnderlineProps, setTabUnderlineProps] = useState({ width: 0, left: 0 });
  const tabListRef = useRef<HTMLDivElement>(null);
  

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

  return (
    <Box>
      <Container maxW="container.lg" px={{ base: 5, lg: 10 }} py={{ base: 10, lg: 20 }}>
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <VStack spacing={{ base: 8, lg: 12 }} w="100%">
            <MotionBox variants={itemVariants} w="100%">
              <Grid templateColumns={{ base: '1fr', lg: '1fr 2fr' }} gap={{ base: 6, lg: 10 }} alignItems="center">
                <MotionBox variants={itemVariants} maxW={{ base: "260px", lg: "100%" }} mx={{ base: "auto", lg: 0 }} order={{ base: 2, lg: 1 }}>
                  <Box
                    position="relative"
                    borderRadius="2xl"
                    overflow="hidden"
                    boxShadow="2xl"
                    _hover={{
                      transform: 'translateY(-8px)',
                      boxShadow: '3xl',
                    }}
                    transition="all 0.3s ease"
                    onContextMenu={(e) => e.preventDefault()}
                    userSelect="none"
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
                      bottom="0"
                      left="0"
                      right="0"
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
                  <Badge
                    colorScheme="orange"
                    variant="subtle"
                    px={2.5}
                    py={0.5}
                    borderRadius="full"
                    fontSize="xs"
                    fontWeight="600"
                  >
                    Personal Story
                  </Badge>
                  
                  <Heading fontSize={{ base: '2xl', lg: '5xl' }} fontWeight="700" color="gray.800" lineHeight="1.15">
                    About{' '}
                    <Text as="span" color="brand.500">
                      Me
                    </Text>
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
          <MotionBox
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <VStack spacing={10}>
              <VStack spacing={3} textAlign="center">
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
                What I Do
              </Heading>
<Text fontSize="md" color="gray.600" maxW="520px" mx="auto" lineHeight="1.55">
                Combining technical skills with creative problem-solving to build impactful solutions.
                </Text>
              </VStack>
              
              <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={8} w="full">
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  w="full"
                >
                  <HStack spacing={{ base: 4, lg: 8 }} align="flex-start" w="full">
                    <Box
                      w={{ base: "50px", lg: "60px" }}
                      h={{ base: "50px", lg: "60px" }}
                      bg="blue.100"
                      borderRadius="xl"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                      _hover={{
                        transform: 'rotate(5deg) scale(1.05)',
                        transition: 'all 0.3s ease'
                      }}
                      transition="all 0.3s ease"
                    >
                      <Text fontSize={{ base: "xl", lg: "2xl" }} lineHeight="1">💻</Text>
                    </Box>
                    <VStack align="flex-start" spacing={{ base: 1, lg: 2 }} flex={1}>
                      <Heading fontSize={{ base: 'xl', lg: '2xl' }} fontWeight="700" color="gray.800">
                        Software Development
                      </Heading>
                      <Text fontSize="md" color="gray.600" lineHeight="1.7">
                        Full-stack development with React, Node.js, Python, and cloud technologies. I build scalable microservices and APIs, 
                        working with modern frameworks and deployment pipelines. From frontend interfaces to backend systems, I create 
                        robust applications that handle real-world challenges.
                      </Text>
                      <HStack spacing={{ base: 2, lg: 4 }} wrap="wrap">
                        <Badge colorScheme="blue" variant="subtle" px={{ base: 2, lg: 3 }} py={1} fontSize={{ base: "xs", lg: "sm" }}>React</Badge>
                        <Badge colorScheme="blue" variant="subtle" px={{ base: 2, lg: 3 }} py={1} fontSize={{ base: "xs", lg: "sm" }}>TypeScript</Badge>
                        <Badge colorScheme="blue" variant="subtle" px={{ base: 2, lg: 3 }} py={1} fontSize={{ base: "xs", lg: "sm" }}>Next.js</Badge>
                      </HStack>
                    </VStack>
                  </HStack>
                </MotionBox>

                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  w="full"
                >
                  <HStack spacing={{ base: 4, lg: 8 }} align="flex-start" w="full">
                    <Box
                      w={{ base: "50px", lg: "60px" }}
                      h={{ base: "50px", lg: "60px" }}
                      bg="pink.100"
                      borderRadius="xl"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                      _hover={{
                        transform: 'rotate(-5deg) scale(1.05)',
                        transition: 'all 0.3s ease'
                      }}
                      transition="all 0.3s ease"
                    >
                      <Text fontSize={{ base: "xl", lg: "2xl" }} lineHeight="1">🎨</Text>
                    </Box>
                    <VStack align="flex-start" spacing={{ base: 1, lg: 2 }} flex={1}>
                      <Heading fontSize={{ base: 'xl', lg: '2xl' }} fontWeight="700" color="gray.800">
                        Product Design
                      </Heading>
                      <Text fontSize="md" color="gray.600" lineHeight="1.7">
                        User research, wireframing, prototyping, and design systems. I create intuitive interfaces using Figma and 
                        design thinking methodologies. My approach combines user empathy with technical feasibility to deliver 
                        products that users love and developers can build efficiently.
                      </Text>
                      <HStack spacing={{ base: 2, lg: 4 }} wrap="wrap">
                        <Badge colorScheme="pink" variant="subtle" px={{ base: 2, lg: 3 }} py={1} fontSize={{ base: "xs", lg: "sm" }}>Figma</Badge>
                        <Badge colorScheme="pink" variant="subtle" px={{ base: 2, lg: 3 }} py={1} fontSize={{ base: "xs", lg: "sm" }}>User Research</Badge>
                        <Badge colorScheme="pink" variant="subtle" px={{ base: 2, lg: 3 }} py={1} fontSize={{ base: "xs", lg: "sm" }}>Prototyping</Badge>
                      </HStack>
                    </VStack>
                  </HStack>
                </MotionBox>

                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  w="full"
                >
                  <HStack spacing={{ base: 4, lg: 8 }} align="flex-start" w="full">
                    <Box
                      w={{ base: "50px", lg: "60px" }}
                      h={{ base: "50px", lg: "60px" }}
                      bg="green.100"
                      borderRadius="xl"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                      _hover={{
                        transform: 'rotate(3deg) scale(1.05)',
                        transition: 'all 0.3s ease'
                      }}
                      transition="all 0.3s ease"
                    >
                      <Text fontSize={{ base: "xl", lg: "2xl" }} lineHeight="1">🔬</Text>
                    </Box>
                    <VStack align="flex-start" spacing={{ base: 1, lg: 2 }} flex={1}>
                      <Heading fontSize={{ base: 'xl', lg: '2xl' }} fontWeight="700" color="gray.800">
                        Research & Analysis
                      </Heading>
                      <Text fontSize="md" color="gray.600" lineHeight="1.7">
                        Data-driven decision making through quantitative and qualitative research methods. I conduct market analysis, 
                        user interviews, and competitive research to inform product strategy. My analytical approach helps identify 
                        opportunities and validate solutions before implementation.
                      </Text>
                      <HStack spacing={{ base: 2, lg: 4 }} wrap="wrap">
                        <Badge colorScheme="green" variant="subtle" px={{ base: 2, lg: 3 }} py={1} fontSize={{ base: "xs", lg: "sm" }}>Market Research</Badge>
                        <Badge colorScheme="green" variant="subtle" px={{ base: 2, lg: 3 }} py={1} fontSize={{ base: "xs", lg: "sm" }}>Data Analysis</Badge>
                        <Badge colorScheme="green" variant="subtle" px={{ base: 2, lg: 3 }} py={1} fontSize={{ base: "xs", lg: "sm" }}>Strategy</Badge>
                      </HStack>
                    </VStack>
                  </HStack>
                </MotionBox>

                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  w="full"
                >
                  <HStack spacing={{ base: 4, lg: 8 }} align="flex-start" w="full">
                    <Box
                      w={{ base: "50px", lg: "60px" }}
                      h={{ base: "50px", lg: "60px" }}
                      bg="purple.100"
                      borderRadius="xl"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                      _hover={{
                        transform: 'rotate(-3deg) scale(1.05)',
                        transition: 'all 0.3s ease'
                      }}
                      transition="all 0.3s ease"
                    >
                      <Text fontSize={{ base: "xl", lg: "2xl" }} lineHeight="1">🏗️</Text>
                    </Box>
                    <VStack align="flex-start" spacing={{ base: 1, lg: 2 }} flex={1}>
                      <Heading fontSize={{ base: 'xl', lg: '2xl' }} fontWeight="700" color="gray.800">
                        System Architecture
                      </Heading>
                      <Text fontSize="md" color="gray.600" lineHeight="1.7">
                        Designing distributed systems, DevOps pipelines, and infrastructure. I work with Docker, Kubernetes, and cloud platforms 
                        to build scalable, maintainable architectures. My focus is on creating systems that are both performant and resilient, 
                        ensuring they can grow with business needs.
                      </Text>
                      <HStack spacing={{ base: 2, lg: 4 }} wrap="wrap">
                        <Badge colorScheme="purple" variant="subtle" px={{ base: 2, lg: 3 }} py={1} fontSize={{ base: "xs", lg: "sm" }}>Docker</Badge>
                        <Badge colorScheme="purple" variant="subtle" px={{ base: 2, lg: 3 }} py={1} fontSize={{ base: "xs", lg: "sm" }}>Kubernetes</Badge>
                        <Badge colorScheme="purple" variant="subtle" px={{ base: 2, lg: 3 }} py={1} fontSize={{ base: "xs", lg: "sm" }}>DevOps</Badge>
                      </HStack>
                    </VStack>
                  </HStack>
                </MotionBox>
              </Grid>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                w="full"
              >
                <Box bg="white" borderRadius="xl" border="1px solid" borderColor="orange.300">
                <Tabs onChange={(index) => setSelectedTab(index)} isFitted position="relative" variant="unstyled">
              <TabList ref={tabListRef} overflowX="auto" overflowY="hidden">
                {experiences.map((item, index) => (
                  <Tab key={index} px={{ base: 0, lg: 4 }} py={{ base: 2, lg: 4 }} _hover={{ bg: "orange.100" }} minW={{ base: "40px", lg: "fit-content" }}>
                    <Box
                      onContextMenu={(e) => e.preventDefault()}
                      userSelect="none"
                    >
                      <Image src={item.logoSrc} alt={item.logoAlt} w={{ base: 6, lg: 8 }} maxH={{ base: 4, lg: 6 }} draggable={false} onContextMenu={(e) => e.preventDefault()} />
                    </Box>
                  </Tab>
                ))}
              </TabList>

              <MotionBox
                position="absolute"
                height="2px"
                bg="brand.500"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                animate={{ width: tabUnderlineProps.width, left: tabUnderlineProps.left }}
              />

              <TabPanels>
                {experiences.map((item, index) => (
                  <TabPanel key={index} px={{ base: 4, lg: 8 }} py={{ base: 6, lg: 8 }}>
                    <MotionBox
                      key={selectedTab}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <VStack align={'start'} spacing={{ base: 3, lg: 4 }}>
                        <HStack spacing={{ base: 3, lg: 4 }} align="center">
                          <Box
                            onContextMenu={(e) => e.preventDefault()}
                            userSelect="none"
                          >
                            <Image src={item.logoSrc} alt={item.logoAlt} w={{ base: 10, lg: 12 }} h={{ base: 10, lg: 12 }} draggable={false} onContextMenu={(e) => e.preventDefault()} />
                          </Box>
                          <VStack align="flex-start" spacing={1}>
                            <Heading as="h3" fontSize={{ base: 'lg', lg: 'xl' }} fontWeight="700" color="gray.800" m={0} p={0}>
                              {item.title}
                            </Heading>
                            <Text fontSize={{ base: 'sm', lg: 'md' }} color={'gray.500'} m={0} p={0}>{item.date}</Text>
                          </VStack>
                        </HStack>
                        <Badge colorScheme={item.badgeColorScheme} variant="subtle" size={{ base: "sm", lg: "lg" }}>
                          {item.badgeText}
                        </Badge>
                        <Text fontSize="md" color="gray.600" lineHeight="1.6">
                          {item.content}
                        </Text>
                      </VStack>
                    </MotionBox>
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs>
                </Box>
              </MotionBox>
              </VStack>
          </MotionBox>
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
                Beyond Code
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="520px"
                mx="auto"
                lineHeight="1.55"
              >
                When I&apos;m not building software, I enjoy exploring creative pursuits
                and activities that keep me inspired and balanced.
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