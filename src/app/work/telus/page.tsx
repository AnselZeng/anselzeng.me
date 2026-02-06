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
  Grid,
  GridItem,
  Badge,
  Divider,
  useBreakpointValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  IconButton,
  AspectRatio,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { useState, useRef, useEffect } from 'react';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionHStack = motion(HStack);
const MotionGrid = motion(Grid);
const MotionImage = motion(Image);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const highlights = [
  '/telus/1.jpeg',
  '/telus/2.jpeg',
  '/telus/3.jpeg',
  '/telus/4.jpeg',
  '/telus/5.jpeg',
  '/telus/6.jpeg',
];

const oranComponents = [
  {
    title: 'Radio Units (RUs)',
    description: 'These physical components, commonly known as antennas, transmit and receive signals to and from mobile devices. They facilitate communication by relaying signals between smartphones and cell towers.',
    icon: '📡',
  },
  {
    title: 'Distributed Units (DUs)',
    description: 'Following signal reception from RUs, DUs undertake processing and management tasks. They handle encoding, decoding, and signal modulation, ensuring smooth data transfer across various mediums.',
    icon: '⚙️',
  },
  {
    title: 'Centralized Units (CUs)',
    description: 'Acting as central coordinators for multiple DUs, CUs manage radio resources, optimize signal distribution, and ensure seamless communication across the network. They play a crucial role in enhancing connectivity and user experiences.',
    icon: '🎯',
  },
  {
    title: 'Core Network',
    description: 'As the heart of the telecommunications infrastructure, the Core Network routes data, connects to other networks (e.g., internet, other mobile networks), and manages various services like voice calls and data transfer.',
    icon: '🖥️',
  },
];

const learningMoments = [
  {
    title: 'Telus Lab Tour',
    image: '/telus/lab.jpeg',
    content: [
      "One of the most captivating and valuable components of my internship was the immersive lab tour at Telus' testing facility. Stepping into the lab was like entering a realm where theory meets practicality, offering an intimate glimpse into the intricacies of cutting-edge technology. The lab houses three main rooms: the core chamber, the RAN chamber, and the device chamber.",
      "The meticulous attention to detail in the lab's controlled environments, such as the icy temperatures of the switch room, highlights the significance of maintaining optimal conditions for the equipment's optimal performance. The sight of the colossal server room, along with the loud humming of cooling fans, exemplified the dedication to precision and reliability in the realm of telecommunications infrastructure.",
    ],
  },
  {
    title: '3rd Generation Partnership Project',
    image: '',
    content: [
      "During my time working within the ORAN organization, I delved into the world of 3GPP, the driving force behind mobile communication standards from 2G to the latest 5G technology. 3GPP's specifications not only facilitate seamless interoperability among devices and network elements but also foster a competitive market by allowing equipment from various vendors to work together.",
      "In the context of Telus's work, the synergy between 3GPP and Open RAN technology is particularly noteworthy. Open RAN's open interfaces and standardized components align with 3GPP's philosophy, enabling Telus to integrate equipment from different vendors seamlessly. This integration not only optimizes network performance and innovation but also ensures a smooth transition to future technologies while maintaining compatibility with existing infrastructure.",
    ],
  },
];

export default function TelusPage() {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isTabImageOpen, onOpen: onTabImageOpen, onClose: onTabImageClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedTabImage, setSelectedTabImage] = useState<string | null>(null);
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

  const handleImageClick = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc);
    setCurrentImageIndex(index);
    onOpen();
  };

  const handleTabImageClick = (imageSrc: string) => {
    setSelectedTabImage(imageSrc);
    onTabImageOpen();
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % highlights.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(highlights[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + highlights.length) % highlights.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(highlights[prevIndex]);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Container maxW="container.lg" px={{ base: 5, lg: 10 }} py={{ base: 10, lg: 20 }}>
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <VStack spacing={{ base: 6, lg: 8 }} align="center" textAlign="center">
            <MotionVStack variants={itemVariants} spacing={4}>
              <Badge
                colorScheme="purple"
                variant="subtle"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="md"
                fontWeight="600"
              >
                Software Engineering Internship
              </Badge>
              <Heading
                fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Telus{' '}
                <Text as="span" color="brand.500">
                  🗼
                </Text>
              </Heading>
              <Text
                fontSize={{ base: 'md', lg: 'xl' }}
                color="gray.600"
                maxW="640px"
                lineHeight="1.6"
              >
                Streamlining operations with a dynamic ticket management system
              </Text>
            </MotionVStack>

            <MotionBox variants={itemVariants}>
              <Box
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="2xl"
                _hover={{
                  transform: 'translateY(-8px)',
                  boxShadow: '3xl',
                }}
                transition="all 0.3s ease"
              >
                <Image
                  src="/telus/telus_hero.png"
                  alt="Telus Hero"
                  width="100%"
                  height="auto"
                  objectFit="cover"
                />
              </Box>
            </MotionBox>
          </VStack>
        </MotionBox>
      </Container>

      {/* Overview Section */}
      <Box bg="white" py={{ base: 10, lg: 16 }}>
        <Container maxW="container.lg" px={{ base: 5, lg: 10 }}>
          <MotionVStack
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            spacing={{ base: 12, lg: 16 }}
          >
            <MotionVStack variants={itemVariants} spacing={4} textAlign="center">
              <Badge
                colorScheme="purple"
                variant="subtle"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="md"
                fontWeight="600"
              >
                01 | Overview
              </Badge>
              <Heading
                fontSize={{ base: 'xl', lg: '3xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Transforming Telecommunications with Telus
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                mx="auto"
                lineHeight="1.6"
              >
                Joining Telus Corporation as a Software Engineer Intern during the summer of 2023 marked a transformative journey into the realm of telecommunications. Immersed within the ORAN Orchestration and Automation team, I explored the cutting-edge potential of Open RAN technology and its capacity to redefine mobile networks. From engaging in collaborative research and development initiatives to navigating the intricacies of telecom infrastructure, my internship provided invaluable hands-on learning experiences, encapsulating my journey through immersive lab tours, discussions on challenges, and highlighting technological innovations on the forefront of telecom innovation.
              </Text>
            </MotionVStack>

            <MotionGrid
              variants={containerVariants}
              templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
              gap={8}
              w="full"
            >
              <MotionBox variants={itemVariants}>
                <VStack spacing={4} align="center" textAlign="center">
                  <Box
                    w="60px"
                    h="60px"
                    borderRadius="full"
                    bg="purple.100"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ base: "lg", lg: "2xl" }}
                  >
                    👨‍💻
                  </Box>
                  <VStack spacing={2}>
                    <Text fontWeight="600" color="gray.800">Role</Text>
                    <Text fontSize="md" color="gray.600">Software Engineer Intern</Text>
                  </VStack>
                </VStack>
              </MotionBox>

              <MotionBox variants={itemVariants}>
                <VStack spacing={4} align="center" textAlign="center">
                  <Box
                    w="60px"
                    h="60px"
                    borderRadius="full"
                    bg="purple.100"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ base: "lg", lg: "2xl" }}
                  >
                    🏢
                  </Box>
                  <VStack spacing={2}>
                    <Text fontWeight="600" color="gray.800">Team</Text>
                    <Text fontSize="md" color="gray.600">Open RAN, Orchestration & Automation, DevOps, Infrastructure</Text>
                  </VStack>
                </VStack>
              </MotionBox>

              <MotionBox variants={itemVariants}>
                <VStack spacing={4} align="center" textAlign="center">
                  <Box
                    w="60px"
                    h="60px"
                    borderRadius="full"
                    bg="purple.100"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ base: "lg", lg: "2xl" }}
                  >
                    🛠️
                  </Box>
                  <VStack spacing={2}>
                    <Text fontWeight="600" color="gray.800">Tools</Text>
                    <Text fontSize="md" color="gray.600">JavaScript, Google Sheets API, Linux, Kubernetes</Text>
                  </VStack>
                </VStack>
              </MotionBox>

              <MotionBox variants={itemVariants}>
                <VStack spacing={4} align="center" textAlign="center">
                  <Box
                    w="60px"
                    h="60px"
                    borderRadius="full"
                    bg="purple.100"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ base: "lg", lg: "2xl" }}
                  >
                    📅
                  </Box>
                  <VStack spacing={2}>
                    <Text fontWeight="600" color="gray.800">Timeline</Text>
                    <Text fontSize="md" color="gray.600">May – Aug 2023</Text>
                  </VStack>
                </VStack>
              </MotionBox>
            </MotionGrid>
          </MotionVStack>
        </Container>
      </Box>

      {/* Challenge Section */}
      <Box bg="purple.500" py={{ base: 10, lg: 16 }}>
        <Container maxW="container.lg" px={{ base: 5, lg: 10 }}>
          <MotionVStack
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            spacing={{ base: 6, lg: 8 }}
            textAlign="center"
          >
            <MotionVStack variants={itemVariants} spacing={4}>
              <Badge
                colorScheme="white"
                variant="solid"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="md"
                fontWeight="600"
              >
                02 | The Challenge
              </Badge>
              <Heading
                fontSize={{ base: 'xl', lg: '3xl' }}
                fontWeight="700"
                color="white"
              >
                Navigating Legacy Infrastructure
              </Heading>
              <Text
                fontSize="md"
                color="white"
                maxW="640px"
                mx="auto"
                lineHeight="1.6"
              >
                How can we navigate the complexities of legacy infrastructure to pave the way for next-generation telecommunications solutions?
              </Text>
            </MotionVStack>
          </MotionVStack>
        </Container>
      </Box>

      {/* ORAN Components Section */}
      <Box bg="white" py={{ base: 10, lg: 16 }}>
        <Container maxW="container.lg" px={{ base: 5, lg: 10 }}>
          <MotionVStack
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            spacing={{ base: 12, lg: 16 }}
          >
            <MotionVStack variants={itemVariants} spacing={4} textAlign="center">
              <Badge
                colorScheme="purple"
                variant="subtle"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="md"
                fontWeight="600"
              >
                03 | Understanding ORAN
              </Badge>
              <Heading
                fontSize={{ base: 'xl', lg: '3xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Hold On, What Exactly Is ORAN?
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                mx="auto"
                lineHeight="1.6"
              >
                Open RAN, or Open Radio Access Network, revolutionizes the telecom industry's approach to building and operating mobile networks. Unlike traditional systems, which rely on a single vendor for tightly integrated components, Open RAN fosters an open and flexible ecosystem. By separating various parts of the radio access network, it allows operators to utilize equipment from multiple vendors adhering to common standards, ensuring seamless interoperability.
              </Text>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                mx="auto"
                lineHeight="1.6"
              >
                This shift from vendor lock-in to an open architecture empowers mobile operators to make changes and upgrades more efficiently. With ORAN, the reliance on proprietary equipment is reduced, promoting competition and innovation in the industry. By embracing this new paradigm, telecom companies can enhance network flexibility and scalability while delivering improved services to users worldwide.
              </Text>
            </MotionVStack>

            <MotionGrid
              variants={containerVariants}
              templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
              gap={8}
              w="full"
            >
              {oranComponents.map((component, index) => (
                <MotionBox
                  key={component.title}
                  variants={itemVariants}
                  bg="white"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="gray.200"
                  p={8}
                  _hover={{
                    borderColor: 'purple.500',
                    boxShadow: 'lg',
                    transform: 'translateY(-4px)',
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <VStack spacing={4} align="flex-start">
                    <HStack spacing={4}>
                      <Text fontSize={{ base: "2xl", lg: "3xl" }}>{component.icon}</Text>
                      <Heading fontSize={{ base: "md", lg: "xl" }} fontWeight="600" color="gray.800">
                        {component.title}
                      </Heading>
                    </HStack>
                    <Text color="gray.600" lineHeight="1.6">
                      {component.description}
                    </Text>
                  </VStack>
                </MotionBox>
              ))}
            </MotionGrid>
          </MotionVStack>
        </Container>
      </Box>

      {/* Learning Moments Section */}
      <Box bg="purple.50" py={{ base: 10, lg: 16 }}>
        <Container maxW="container.lg" px={{ base: 5, lg: 10 }}>
          <MotionVStack
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            spacing={{ base: 12, lg: 16 }}
          >
            <MotionVStack variants={itemVariants} spacing={4} textAlign="center">
              <Badge
                colorScheme="purple"
                variant="subtle"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="md"
                fontWeight="600"
              >
                04 | Educational Insights
              </Badge>
              <Heading
                fontSize={{ base: 'xl', lg: '3xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Key Moments of Learning During My Internship
              </Heading>
            </MotionVStack>

            <MotionBox variants={itemVariants} w="full">
              <Tabs 
                onChange={(index) => setSelectedTab(index)} 
                isFitted 
                position="relative" 
                variant="unstyled"
              >
                <Box position="relative">
                  <TabList ref={tabListRef} borderBottom="2px solid" borderColor="purple.200" mb={8} w="full">
                    {learningMoments.map((moment, index) => (
                      <Tab 
                        key={moment.title} 
                        fontWeight="600" 
                        fontSize="md"
                        flex="1"
                        py={4}
                        _selected={{ 
                          color: "purple.500"
                        }}
                        _hover={{
                          color: "purple.400"
                        }}
                        transition="color 0.2s ease"
                      >
                        {moment.title}
                      </Tab>
                    ))}
                  </TabList>

                  <MotionBox
                    position="absolute"
                    height="3px"
                    bg="purple.500"
                    bottom="0px"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    animate={{ width: tabUnderlineProps.width, left: tabUnderlineProps.left }}
                  />
                </Box>

                <TabPanels>
                  {learningMoments.map((moment, index) => (
                    <TabPanel key={moment.title} px={0}>
                      <MotionBox
                        key={selectedTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        {moment.image ? (
                          <Flex direction={{ base: 'column', lg: 'row' }} gap={8} align="stretch">
                            <Box flex="1">
                              <AspectRatio ratio={1} w="100%">
                                <Image
                                  src={moment.image}
                                  alt={moment.title}
                                  width="100%"
                                  height="100%"
                                  objectFit="cover"
                                  borderRadius="xl"
                                  boxShadow="lg"
                                  _hover={{
                                    transform: "scale(1.02)",
                                    boxShadow: "xl"
                                  }}
                                  transition="all 0.3s ease"
                                  cursor="pointer"
                                  onClick={() => handleTabImageClick(moment.image)}
                                />
                              </AspectRatio>
                            </Box>
                            <Box flex="1">
                              <VStack align="flex-start" spacing={6} h="full" justify="center">
                                {moment.content.map((paragraph, pIndex) => (
                                  <Text key={pIndex} color="gray.600" lineHeight="1.6" fontSize="md">
                                    {paragraph}
                                  </Text>
                                ))}
                              </VStack>
                            </Box>
                          </Flex>
                        ) : (
                          <VStack align="flex-start" spacing={6}>
                            {moment.content.map((paragraph, pIndex) => (
                              <Text key={pIndex} color="gray.600" lineHeight="1.6" fontSize="md">
                                {paragraph}
                              </Text>
                            ))}
                          </VStack>
                        )}
                      </MotionBox>
                    </TabPanel>
                  ))}
                </TabPanels>
              </Tabs>
            </MotionBox>
          </MotionVStack>
        </Container>
      </Box>

      {/* Ticket Management System Section */}
      <Box bg="white" py={{ base: 10, lg: 16 }}>
        <Container maxW="container.lg" px={{ base: 5, lg: 10 }}>
          <MotionVStack
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            spacing={{ base: 12, lg: 16 }}
          >
            <MotionVStack variants={itemVariants} spacing={4} textAlign="center">
              <Badge
                colorScheme="purple"
                variant="subtle"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="md"
                fontWeight="600"
              >
                05 | My Work
              </Badge>
              <Heading
                fontSize={{ base: 'xl', lg: '3xl' }}
                fontWeight="700"
                color="gray.800"
              >
                The DevOps Ticket Management System
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                mx="auto"
                lineHeight="1.6"
              >
                The latter part of my internship at Telus provided a unique opportunity to tackle a crucial challenge encountered by the team: the absence of a centralized ticket management system. Reliance on Excel had resulted in inefficiencies and hindered effective workload management. Teaming up with a fellow developer, I took the lead in developing an internal ticket management system tailored to Telus' specific needs.
              </Text>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                mx="auto"
                lineHeight="1.6"
              >
                Embracing the 'dream small' philosophy advocated by my manager, we focused on crafting a Minimum Viable Product before expanding features. The journey of building the full-stack application in React was filled with exhilarating challenges, each feature introducing innovative ideas and requiring meticulous attention to detail. Through rigorous testing and debugging, I honed my problem-solving skills and learned the importance of prioritization, ensuring timely delivery of a functional solution to the team. This experience marked significant growth in my journey as a software engineer, pushing me beyond my comfort zone and enhancing my ability to transform challenges into opportunities.
              </Text>
            </MotionVStack>

            <MotionBox variants={itemVariants}>
              <Box
                bg="gray.100"
                borderRadius="2xl"
                p={8}
                textAlign="center"
              >
                <VStack spacing={6}>
                  <Heading fontSize={{ base: "lg", lg: "2xl" }} fontWeight="700" color="gray.800">
                    System Mockup
                  </Heading>
                  <Box
                    overflow="hidden"
                  >
                    <Image
                      src="/telus/tms.png"
                      alt="Ticket Management System"
                      width="100%"
                      height="auto"
                      objectFit="cover"
                    />
                  </Box>
                    <Text fontSize="md" color="gray.600" maxW="560px">
                    This design showcases the login page, main ticket grid display, create ticket modal window, and ticket details modal window for{' '}
                      <Text as="span" fontWeight="600" color="purple.500">
                      streamlined ticket management
                    </Text>
                    .
                  </Text>
                </VStack>
              </Box>
            </MotionBox>
          </MotionVStack>
        </Container>
      </Box>

      {/* Highlights Section */}
      <Box bg="purple.50" py={{ base: 10, lg: 16 }}>
        <Container maxW="container.lg" px={{ base: 5, lg: 10 }}>
          <MotionVStack
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            spacing={{ base: 12, lg: 16 }}
          >
            <MotionVStack variants={itemVariants} spacing={4} textAlign="center">
              <Badge
                colorScheme="purple"
                variant="subtle"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="md"
                fontWeight="600"
              >
                06 | Highlights
              </Badge>
              <Heading
                fontSize={{ base: 'xl', lg: '3xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Favourite Moments 💜
              </Heading>
            </MotionVStack>

            <MotionGrid
              variants={containerVariants}
              templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
              gap={6}
              w="full"
            >
              {highlights.map((image, index) => (
                <MotionBox
                  key={index}
                  variants={itemVariants}
                  borderRadius="xl"
                  overflow="hidden"
                  boxShadow="md"
                  cursor="pointer"
                  _hover={{
                    transform: 'translateY(-4px)',
                    boxShadow: 'xl',
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  onClick={() => handleImageClick(image, index)}
                >
                  <AspectRatio ratio={1} w="100%">
                    <Image
                      src={image}
                      alt={`Telus highlight ${index + 1}`}
                      objectFit="cover"
                    />
                  </AspectRatio>
                </MotionBox>
              ))}
            </MotionGrid>
          </MotionVStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="white" py={{ base: 10, lg: 16 }}>
        <Container maxW="container.lg" px={{ base: 5, lg: 10 }}>
          <MotionVStack
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            spacing={{ base: 6, lg: 8 }}
            textAlign="center"
          >
            <MotionVStack variants={itemVariants} spacing={{ base: 3, lg: 4 }}>
              <Heading
                fontSize={{ base: 'xl', lg: '3xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Closing the Chapter
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="560px"
                mx="auto"
                lineHeight="1.6"
              >
                Reflecting on my time at Telus, it's evident that it was a transformative experience in the realm of DevOps. This internship immersed me in the real-world challenges of business operations and software development, pushing me to expand my skills and knowledge. From tackling new concepts to leading the ticket management system project, I've seen substantial growth in my abilities.
              </Text>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="560px"
                mx="auto"
                lineHeight="1.6"
              >
                As I conclude this internship, I recognize it as just the beginning of my professional journey. The lessons learned and skills acquired here are invaluable assets as I navigate the ever-changing landscape of software engineering and telecommunications innovation. Here's to the unexpected hurdles, the intricate problem-solving, and the satisfaction of turning ideas into reality.
              </Text>
            </MotionVStack>

            <Flex w={{ base: "full", lg: "auto" }} direction={{ base: "column", lg: "row" }} gap={3}>
              <Button
                as={Link}
                href="/work/ips"
                size="sm"
                variant="solid"
                rightIcon={<ChevronRightIcon />}
                w={{ base: "full", lg: "auto" }}
              >
                Next Project
              </Button>
              <Button
                as={Link}
                href="/about"
                size="sm"
                variant="outline"
                w={{ base: "full", lg: "auto" }}
              >
                Learn More About Me
              </Button>
            </Flex>
          </MotionVStack>
        </Container>
      </Box>

      {/* Image Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "xl", md: "2xl", lg: "3xl" }} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={0}>
            <Box position="relative">
              <Image
                src={selectedImage || ''}
                alt="Highlight"
                width="100%"
                height="auto"
                objectFit="cover"
              />
              <HStack
                position="absolute"
                top="50%"
                left={4}
                right={4}
                justify="space-between"
                transform="translateY(-50%)"
              >
                <IconButton
                  aria-label="Previous image"
                  icon={<ChevronLeftIcon />}
                  onClick={prevImage}
                  bg="white"
                  color="gray.800"
                  _hover={{ bg: 'gray.100' }}
                />
                <IconButton
                  aria-label="Next image"
                  icon={<ChevronRightIcon />}
                  onClick={nextImage}
                  bg="white"
                  color="gray.800"
                  _hover={{ bg: 'gray.100' }}
                />
              </HStack>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* Tab Image Modal */}
      <Modal isOpen={isTabImageOpen} onClose={onTabImageClose} size={{ base: "xl", md: "2xl", lg: "3xl" }} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={0}>
            <Image
              src={selectedTabImage || ''}
              alt="Tab Image"
              width="100%"
              height="auto"
              objectFit="cover"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
