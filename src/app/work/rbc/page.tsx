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
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
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
  '/rbc/1.jpeg',
  '/rbc/2.jpeg',
  '/rbc/3.jpeg',
  '/rbc/4.jpeg',
  '/rbc/5.jpeg',
  '/rbc/6.jpeg',
];

const mortgageProcess = [
  {
    title: 'Application Submission',
    description: 'Customers submit mortgage applications through digital channels with enhanced data validation.',
    icon: '📝',
  },
  {
    title: 'Automated Evaluation',
    description: 'AI-powered engine analyzes financial data, credit history, and property information.',
    icon: '🤖',
  },
  {
    title: 'Risk Assessment',
    description: 'Advanced algorithms calculate risk scores and determine eligibility criteria.',
    icon: '⚖️',
  },
  {
    title: 'Advisor Dashboard',
    description: 'Real-time insights and recommendations for advisors to guide customers effectively.',
    icon: '📊',
  },
];

const technicalFeatures = [
  {
    title: 'Frontend Development',
    description: 'Built responsive user interfaces using Angular framework for seamless user experiences.',
    technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend Development',
    description: 'Developed robust backend services and APIs for mortgage application processing.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'Microservices'],
  },
  {
    title: 'Testing & Quality Assurance',
    description: 'Implemented comprehensive testing strategies including unit tests and API testing.',
    technologies: ['Mockito', 'Postman', 'Unit Testing', 'Test Coverage'],
  },
  {
    title: 'Database & Integration',
    description: 'Designed database schemas and integrated with existing RBC systems and workflows.',
    technologies: ['SQL', 'System Integration', 'Data Migration'],
  },
];

const inspiringMoments = [
  {
    title: 'Whiteboard Conversations',
    image: '/rbc/wall-one.jpeg',
    content: [
      'Stepping into the RBC office at Waterpark Place, I was captivated by the walls all covered in whiteboard material—like a canvas for unleashing creativity and brainstorming ideas. One afternoon, as my team wrapped up for the day, I joined a conversation between the senior developers and a business analyst. They delved into the intricate logic of a crucial factor in the mortgage application process. In a spontaneous move, one of the developers reached for a marker and began writing on the office wall. It was definitely unusual for me at first, as I grew up with the norm that drawing on walls was strictly prohibited.',
      'For half an hour, we engaged in a vibrant discussion, taking turns illustrating our thoughts on the vast canvas. As a visual learner, I found it liberating to be able to physically visualize my ideas and thought process. It was during this captivating conversation that I realized and understood the importance of communication between engineers and analysts. Ultimately, the whiteboard diagram remained a testament to our collaboration, lingering on the wall for weeks after our conversation. Its significance, etched in my memory, encapsulated the fusion of creativity, problem-solving, and effective communication that I embraced throughout my internship journey.'
    ]
  },
  {
    title: 'The Kanban Tapestry',
    image: '/rbc/wall-two.jpeg',
    content: [
      'As I exited the office on my last day of work, I passed by this wall of sticky post-it notes and couldn\'t help but stop and stare at it one last time. The notes basically outlined the entire application being developed by this RBC team, kind of like a mega Kanban board. Looking at this wall reminded me of my small role in the grand scheme, with even my team of ~20 developers and analysts occupying just one column among the QA team, product owners, and others. Nevertheless, it was fascinating to recognize that each person had a specific role to play in this massive operation.',
      'Each colourful note represented completed tasks, solved problems, and achieved milestones. This colourful wall filled me with a sense of accomplishment and gratitude for being part of the journey. With a mix of nostalgia and excitement, I took one last look, realizing that those sticky notes were more than reminders; they were a testament to the invaluable experience and knowledge gained during my internship. The wall of post-it notes will for a long time remind me of the importance of teamwork, the impact of individual contributions, and the endless possibilities that lie ahead in my career.'
    ]
  }
];

export default function RBCPage() {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isTabImageOpen, onOpen: onTabImageOpen, onClose: onTabImageClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedTabImage, setSelectedTabImage] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState(0);
  const [tabUnderlineProps, setTabUnderlineProps] = useState({ width: 0, left: 0 });
  const tabListRef = useRef<HTMLDivElement>(null);

  const handleImageClick = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc);
    setCurrentImageIndex(index);
    onOpen();
  };

  const handleTabImageClick = (imageSrc: string) => {
    setSelectedTabImage(imageSrc);
    onTabImageOpen();
  };

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
        <Container maxW="container.xl" px={{ base: 6, lg: 12 }} py={{ base: 16, lg: 32 }}>
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <VStack spacing={8} align="center" textAlign="center">
            <MotionVStack variants={itemVariants} spacing={4}>
              <Badge
                colorScheme="blue"
                variant="subtle"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="sm"
                fontWeight="600"
              >
                Software Engineering Internship
              </Badge>
              <Heading
                fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Royal Bank of Canada{' '}
                <Text as="span" color="brand.500">
                  🏦
                </Text>
              </Heading>
              <Text
                fontSize={{ base: "md", lg: "xl" }}
                color="gray.600"
                maxW="800px"
                lineHeight="1.6"
              >
                Transforming credit adjudication strategy and processes within home equity finance
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
                  src="/rbc/rbc_hero.png"
                  alt="RBC Hero"
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
      <Box bg="white" py={{ base: 12, lg: 24 }}>
        <Container maxW="container.xl" px={{ base: 6, lg: 12 }}>
          <MotionVStack
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            spacing={{ base: 12, lg: 16 }}
          >
            <MotionVStack variants={itemVariants} spacing={4} textAlign="center">
              <Badge
                colorScheme="blue"
                variant="subtle"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="sm"
                fontWeight="600"
              >
                01 | Overview
              </Badge>
              <Heading
                fontSize={{ base: '2xl', lg: '4xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Engineering for Canada's Largest Bank
              </Heading>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color="gray.600"
                maxW="800px"
                mx="auto"
                lineHeight="1.6"
              >
                During my 4-month internship at RBC, I had the opportunity to work on a cutting-edge project aimed at revolutionizing the mortgage application process. Throughout the internship, I collaborated with experienced professionals who mentored me in agile software development and coding skills. This project not only provided valuable industry experience but also equipped me with the skills that will benefit my future career. I am proud to have contributed to a project with the potential to make a significant impact on RBC's operations and enhance customer experience.
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
                    bg="blue.100"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ base: "lg", lg: "2xl" }}
                  >
                    👨‍💻
                  </Box>
                  <VStack spacing={2}>
                    <Text fontWeight="600" color="gray.800">Role</Text>
                    <Text fontSize="sm" color="gray.600">Software Engineer Intern</Text>
                  </VStack>
                </VStack>
              </MotionBox>

              <MotionBox variants={itemVariants}>
                <VStack spacing={4} align="center" textAlign="center">
                  <Box
                    w="60px"
                    h="60px"
                    borderRadius="full"
                    bg="blue.100"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ base: "lg", lg: "2xl" }}
                  >
                    🏢
                  </Box>
                  <VStack spacing={2}>
                    <Text fontWeight="600" color="gray.800">Team</Text>
                    <Text fontSize="sm" color="gray.600">Digital Transformation, Retail Banking, Payment Technology</Text>
                  </VStack>
                </VStack>
              </MotionBox>

              <MotionBox variants={itemVariants}>
                <VStack spacing={4} align="center" textAlign="center">
                  <Box
                    w="60px"
                    h="60px"
                    borderRadius="full"
                    bg="blue.100"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ base: "lg", lg: "2xl" }}
                  >
                    🛠️
                  </Box>
                  <VStack spacing={2}>
                    <Text fontWeight="600" color="gray.800">Tools</Text>
                    <Text fontSize="sm" color="gray.600">Java (Spring Framework), Docker, Camunda, Jira & Confluence</Text>
                  </VStack>
                </VStack>
              </MotionBox>

              <MotionBox variants={itemVariants}>
                <VStack spacing={4} align="center" textAlign="center">
                  <Box
                    w="60px"
                    h="60px"
                    borderRadius="full"
                    bg="blue.100"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ base: "lg", lg: "2xl" }}
                  >
                    📅
                  </Box>
                  <VStack spacing={2}>
                    <Text fontWeight="600" color="gray.800">Timeline</Text>
                    <Text fontSize="sm" color="gray.600">May – Aug 2022</Text>
                  </VStack>
                </VStack>
              </MotionBox>
            </MotionGrid>
          </MotionVStack>
        </Container>
      </Box>

      {/* Challenge Section */}
      <Box bg="blue.500" py={{ base: 16, lg: 24 }}>
        <Container maxW="container.xl" px={{ base: 6, lg: 12 }}>
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
                fontSize="sm"
                fontWeight="600"
              >
                02 | The Challenge
              </Badge>
              <Heading
                fontSize={{ base: '2xl', lg: '4xl' }}
                fontWeight="700"
                color="white"
              >
                Modernizing Mortgage Applications
              </Heading>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color="white"
                maxW="800px"
                mx="auto"
                lineHeight="1.6"
              >
                How might we replace the outdated mortgage application software to streamline creditworthiness evaluation and improve the experience for both customers and advisors?
              </Text>
            </MotionVStack>
          </MotionVStack>
        </Container>
      </Box>

      {/* Key Initiatives Section */}
      <Box bg="white" py={{ base: 12, lg: 24 }}>
        <Container maxW="container.xl" px={{ base: 6, lg: 12 }}>
          <MotionVStack
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            spacing={{ base: 12, lg: 16 }}
          >
            <MotionVStack variants={itemVariants} spacing={4} textAlign="center">
              <Badge
                colorScheme="blue"
                variant="subtle"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="sm"
                fontWeight="600"
              >
                03 | Key Initiatives
              </Badge>
              <Heading
                fontSize={{ base: '2xl', lg: '4xl' }}
                fontWeight="700"
                color="gray.800"
              >
                What I Did & What I Learned
              </Heading>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color="gray.600"
                maxW="800px"
                mx="auto"
                lineHeight="1.6"
              >
                This experience not only opened my eyes to the banking industry and agile software development but also taught me the importance of project management—bridging the gap between business and technology. I got to witness the integral role of product owners in leading presentations and meetings, gaining firsthand insights into their ability to guide and drive project discussions effectively.
              </Text>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color="gray.600"
                maxW="800px"
                mx="auto"
                lineHeight="1.6"
              >
                Additionally, I had the privilege of working closely with a senior developer who mentored me throughout the internship. Her experience and expertise, along with the opportunity to collaborate with other professionals, expanded my technical knowledge and problem-solving abilities.
              </Text>
            </MotionVStack>

            <MotionGrid
              variants={containerVariants}
              templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
              gap={8}
              w="full"
            >
              <MotionBox
                variants={itemVariants}
                bg="white"
                borderRadius="xl"
                border="1px solid"
                borderColor="green.100"
                p={8}
                _hover={{
                  borderColor: 'green.300',
                  boxShadow: 'xl',
                  transform: 'translateY(-4px)',
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                position="relative"
                overflow="hidden"
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  height="4px"
                  bg="linear-gradient(90deg, #48BB78, #68D391)"
                />
                <VStack spacing={6} align="flex-start" mb={0}>
                  <HStack spacing={3} align="center">
                    <Box
                      w={8}
                      h={8}
                      bg="green.100"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text fontSize="xs" fontWeight="bold" color="green.600" lineHeight="1">🎯</Text>
                    </Box>
                    <Heading fontSize={{ base: "md", lg: "xl" }} fontWeight="600" color="gray.800">
                      Successes
                    </Heading>
                  </HStack>
                  <VStack spacing={3} align="flex-start" mb={0}>
                    <Text color="gray.600" lineHeight="1.6">
                      • Streamlined <Text as="span" fontWeight="600" color="blue.600">auto-adjudication backend logic</Text>, saving hours of work daily and enhancing evaluation efficiency.
                    </Text>
                    <Text color="gray.600" lineHeight="1.6">
                      • Implemented 40+ comprehensive unit tests, increasing code coverage by <Text as="span" fontWeight="600" color="blue.600">75%</Text>, improving quality and reducing bugs.
                    </Text>
                    <Text color="gray.600" lineHeight="1.6">
                      • Successfully showcased seamless frontend-backend integration, demonstrating the feature's value during a team demo.
                    </Text>
                    <Text color="gray.600" lineHeight="1.6">
                      • Integrated low latency GraphQL endpoints, supporting <Text as="span" fontWeight="600" color="blue.600">100+ requests per second</Text>, improving performance and enabling future scalability.
                    </Text>
                  </VStack>
                </VStack>
              </MotionBox>

              <MotionBox
                variants={itemVariants}
                bg="white"
                borderRadius="xl"
                border="1px solid"
                borderColor="orange.100"
                p={8}
                _hover={{
                  borderColor: 'orange.300',
                  boxShadow: 'xl',
                  transform: 'translateY(-4px)',
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                position="relative"
                overflow="hidden"
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  height="4px"
                  bg="linear-gradient(90deg, #ED8936, #F6AD55)"
                />
                <VStack spacing={6} align="flex-start" mb={0}>
                  <HStack spacing={3} align="center">
                    <Box
                      w={8}
                      h={8}
                      bg="orange.100"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text fontSize="xs" fontWeight="bold" color="orange.600" lineHeight="1">🔧</Text>
                    </Box>
                    <Heading fontSize={{ base: "md", lg: "xl" }} fontWeight="600" color="gray.800">
                      Challenges
                    </Heading>
                  </HStack>
                  <VStack spacing={3} align="flex-start" mb={0}>
                    <Text color="gray.600" lineHeight="1.6">
                      • Navigating <Text as="span" fontWeight="600" color="blue.600">complex mortgage workflows</Text>, understanding regulations, and identifying improvements.
                    </Text>
                    <Text color="gray.600" lineHeight="1.6">
                      • Adapting to <Text as="span" fontWeight="600" color="blue.600">agile development</Text>, collaborating in fast-paced environments with tight timelines.
                    </Text>
                    <Text color="gray.600" lineHeight="1.6">
                      • Overcoming technical hurdles during <Text as="span" fontWeight="600" color="blue.600">legacy code migration</Text>, collaborating with senior developers.
                    </Text>
                    <Text color="gray.600" lineHeight="1.6">
                      • Managing project priorities, multitasking, and communicating effectively in dynamic team environments.
                    </Text>
                  </VStack>
                </VStack>
              </MotionBox>
            </MotionGrid>
          </MotionVStack>
        </Container>
      </Box>

      {/* Process Section */}
      <Box bg="blue.50" py={{ base: 16, lg: 24 }}>
        <Container maxW="container.xl" px={{ base: 6, lg: 12 }}>
          <MotionVStack
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            spacing={{ base: 12, lg: 16 }}
          >
            <MotionVStack variants={itemVariants} spacing={4} textAlign="center">
              <Badge
                colorScheme="blue"
                variant="subtle"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="sm"
                fontWeight="600"
              >
                04 | Inspiring Moments
              </Badge>
              <Heading
                fontSize={{ base: '2xl', lg: '4xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Unforgettable Experiences
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
                  <TabList ref={tabListRef} borderBottom="2px solid" borderColor="blue.200" mb={8} w="full">
                    {inspiringMoments.map((moment, index) => (
                      <Tab
                        key={moment.title}
                        fontWeight="600"
                        fontSize={{ base: "md", lg: "lg" }}
                        flex="1"
                        py={4}
                        _selected={{
                          color: "blue.500"
                        }}
                        _hover={{
                          color: "blue.400"
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
                    bg="blue.500"
                    bottom="0px"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    animate={{ width: tabUnderlineProps.width, left: tabUnderlineProps.left }}
                  />
                </Box>
                <TabPanels>
                  {inspiringMoments.map((moment, index) => (
                    <TabPanel key={moment.title} px={0}>
                      <MotionBox
                        key={selectedTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Flex direction={{ base: 'column', lg: 'row' }} gap={8} align="stretch">
                          <Box flex="1">
                            <AspectRatio ratio={4/3} w="100%">
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
                                <Text key={pIndex} color="gray.600" lineHeight="1.6" fontSize={{ base: "md", lg: "lg" }}>
                                  {paragraph}
                                </Text>
                              ))}
                            </VStack>
                          </Box>
                        </Flex>
                      </MotionBox>
                    </TabPanel>
                  ))}
                </TabPanels>
              </Tabs>
            </MotionBox>
          </MotionVStack>
        </Container>
      </Box>

      {/* Technical Implementation Section */}
      <Box bg="white" py={{ base: 12, lg: 24 }}>
        <Container maxW="container.xl" px={{ base: 6, lg: 12 }}>
          <MotionVStack
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            spacing={{ base: 12, lg: 16 }}
          >
            <MotionVStack variants={itemVariants} spacing={4} textAlign="center">
              <Badge
                colorScheme="blue"
                variant="subtle"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="sm"
                fontWeight="600"
              >
                05 | Technical Implementation
              </Badge>
              <Heading
                fontSize={{ base: '2xl', lg: '4xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Technologies & Tools
              </Heading>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color="gray.600"
                maxW="800px"
                mx="auto"
                lineHeight="1.6"
              >
                Built robust, scalable applications using modern web technologies and best practices in software engineering.
              </Text>
            </MotionVStack>

            <MotionGrid
              variants={containerVariants}
              templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
              gap={8}
              w="full"
            >
              {technicalFeatures.map((feature, index) => (
                <MotionBox
                  key={feature.title}
                  variants={itemVariants}
                  bg="white"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="gray.200"
                  p={8}
                  _hover={{
                    borderColor: 'blue.500',
                    boxShadow: 'lg',
                    transform: 'translateY(-4px)',
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <VStack spacing={6} align="flex-start" mb={0}>
                    <Heading fontSize={{ base: "md", lg: "xl" }} fontWeight="600" color="gray.800">
                      {feature.title}
                    </Heading>
                    <Text color="gray.600" lineHeight="1.6">
                      {feature.description}
                    </Text>
                    <HStack spacing={2} wrap="wrap" mb={0}>
                      {feature.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          colorScheme="gray"
                          variant="outline"
                          px={3}
                          py={1}
                          borderRadius="full"
                          fontSize="sm"
                          borderColor="gray.300"
                          color="gray.700"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </HStack>
                  </VStack>
                </MotionBox>
              ))}
            </MotionGrid>
          </MotionVStack>
        </Container>
      </Box>

      {/* Impact Section */}
      <Box bg="blue.50" py={{ base: 16, lg: 24 }}>
        <Container maxW="container.xl" px={{ base: 6, lg: 12 }}>
          <MotionVStack
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            spacing={{ base: 12, lg: 16 }}
          >
            <MotionVStack variants={itemVariants} spacing={4} textAlign="center">
              <Badge
                colorScheme="blue"
                variant="subtle"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="sm"
                fontWeight="600"
              >
                06 | Impact & Results
              </Badge>
              <Heading
                fontSize={{ base: '2xl', lg: '4xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Leaving My Mark
              </Heading>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color="gray.600"
                maxW="800px"
                mx="auto"
                lineHeight="1.6"
              >
                Reflecting on my time at RBC, I can genuinely say that it has left an indelible mark on my journey as a software engineer. Each task I tackled and completed was done with a sense of joy that reignited my passion for coding. The memories made during my internship, whether over Webex or in person, will forever hold a special place in my heart.
              </Text>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color="gray.600"
                maxW="800px"
                mx="auto"
                lineHeight="1.6"
                mb={0}
              >
                Saying goodbye to everyone during our final social gathering, overlooking the harbourfront, was bittersweet. Ultimately, I feel more confident and ready to take on new challenges in my career. Thank you, RBC, for this extraordinary opportunity and experience. I am excited to carry the spirit of excellence and innovation with me as I continue on my journey.
              </Text>
            </MotionVStack>
          </MotionVStack>
        </Container>
      </Box>

      {/* Highlights Section */}
      <Box bg="white" py={{ base: 12, lg: 24 }}>
        <Container maxW="container.xl" px={{ base: 6, lg: 12 }}>
          <MotionVStack
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            spacing={{ base: 12, lg: 16 }}
          >
            <MotionVStack variants={itemVariants} spacing={4} textAlign="center">
              <Badge
                colorScheme="blue"
                variant="subtle"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="sm"
                fontWeight="600"
              >
                07 | Highlights
              </Badge>
              <Heading
                fontSize={{ base: '2xl', lg: '4xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Memorable Moments 💙
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
                      alt={`RBC highlight ${index + 1}`}
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
      <Box bg="brand.50" py={{ base: 12, lg: 24 }}>
        <Container maxW="container.lg" px={{ base: 6, lg: 12 }}>
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
                fontSize={{ base: '2xl', lg: '4xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Financial Technology Innovation
              </Heading>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color="gray.600"
                maxW="600px"
                mx="auto"
                lineHeight="1.6"
              >
                My experience at RBC provided invaluable insights into building enterprise-scale applications and understanding the complexities of financial services technology.
              </Text>
            </MotionVStack>

            <Flex w={{ base: "full", lg: "auto" }} direction={{ base: "column", lg: "row" }} gap={3}>
              <Button
                as={Link}
                href="/work/tweebaa"
                size={{ base: "md", lg: "lg" }}
                variant="solid"
                rightIcon={<ChevronRightIcon />}
                w={{ base: "full", lg: "auto" }}
              >
                Next Project
              </Button>
              <Button
                as={Link}
                href="/work/ips"
                size={{ base: "md", lg: "lg" }}
                variant="outline"
                leftIcon={<ChevronLeftIcon />}
                w={{ base: "full", lg: "auto" }}
              >
                Previous Project
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
