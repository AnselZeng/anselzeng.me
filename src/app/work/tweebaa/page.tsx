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
  Grid,
  AspectRatio,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  IconButton,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionHStack = motion(HStack);
const MotionGrid = motion(Grid);

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

const workSections = [
  {
    title: 'Challenge Section',
    description: 'A brand new gamification feature introduced into the social app. I handled the full design process from the home page design to creating challenges, including all the small edit and delete features, saving, favouriting, and details pages.',
    image: '/tweebaa/challenge.png',
  },
  {
    title: 'Help Centre Section',
    description: 'Designed a comprehensive help centre to provide users with easy access to support resources, FAQs, and troubleshooting guides. Created intuitive navigation and search functionality to help users quickly find answers to their questions.',
    image: '/tweebaa/help_center.png',
  },
  {
    title: 'Eco+ Section',
    description: 'A unique social section within the app designed to help users find and connect with others. Created engaging showcase interfaces that allow users to discover people and build meaningful connections within the platform.',
    image: '/tweebaa/eco.png',
  },
  {
    title: 'Groups Section',
    description: 'Created the design for group chat functionality, enabling users to connect and communicate in group settings within the app. Designed messaging interfaces, member management features, and notification systems for seamless group interactions.',
    image: '/tweebaa/chats.png',
  },
  {
    title: 'Rewards Dashboard',
    description: 'Designed an in-app rewards dashboard that displays user achievements, points, and available rewards in an intuitive and engaging way. Created visual representations of progress and reward redemption flows to motivate user engagement.',
    image: '/tweebaa/rewards.png',
  },
  {
    title: 'Task Centre',
    description: 'Built out the task centre interface, allowing users to view, manage, and complete various tasks within the app. Designed intuitive workflows for task creation, tracking, and completion.',
    image: '/tweebaa/task_center.png',
  },
];

const designLearnings = [
  {
    title: 'Design Rules & Tools',
    description: 'Mastered fundamental design principles, component libraries, and design system best practices in Figma.',
    icon: '📐',
  },
  {
    title: 'Framing & Composition',
    description: 'Learned how to frame content effectively, understanding visual hierarchy and layout principles.',
    icon: '🖼️',
  },
  {
    title: 'Pixel Precision',
    description: 'Developed skills in calculating pixel measurements and maintaining precise spacing and alignment across designs.',
    icon: '📏',
  },
  {
    title: 'Design Ratios',
    description: 'Gained expertise in understanding aspect ratios, especially critical for mobile app design to ensure consistent look and feel.',
    icon: '📱',
  },
  {
    title: 'UX/UI Research',
    description: 'Learned the importance of gathering user feedback, conducting research, and iterating based on insights.',
    icon: '🔍',
  },
  {
    title: 'Component Consistency',
    description: 'Mastered maintaining visual consistency across components, including border radiuses, font sizes, and colour schemes.',
    icon: '🎨',
  },
];

export default function TweebaaPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const workImages = workSections.map(section => section.image);

  const handleImageClick = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc);
    setCurrentImageIndex(index);
    onOpen();
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % workImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(workImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + workImages.length) % workImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(workImages[prevIndex]);
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
          <VStack spacing={{ base: 6, lg: 8 }} align="center" textAlign="center">
            <MotionVStack variants={itemVariants} spacing={4}>
              <Badge
                colorScheme="red"
                variant="subtle"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="sm"
                fontWeight="600"
              >
                UX/UI Design Internship
              </Badge>
              <Heading
                fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Tweebaa{' '}
                <Text as="span" color="brand.500">
                  📱
                </Text>
              </Heading>
              <Text
                fontSize={{ base: 'md', lg: 'xl' }}
                color="gray.600"
                maxW="800px"
                lineHeight="1.6"
              >
                Transforming user insights into refined design prototypes for a startup launch
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
                  src="/tweebaa/tweebaa_hero.png"
                  alt="Tweebaa Hero"
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
                colorScheme="red"
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
                My First Design Journey
              </Heading>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color="gray.600"
                maxW="800px"
                mx="auto"
                lineHeight="1.6"
              >
                Joining Tweebaa as a UX/UI Design Intern during the summer of 2021 marked my first professional internship experience. I was tasked with helping out the lead designer with her work, but mainly was assigned a lot of brand new sections that had nothing before.
              </Text>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color="gray.600"
                maxW="800px"
                mx="auto"
                lineHeight="1.6"
              >
                This immersive startup environment pushed me to grow rapidly and learn through hands-on experience. I created over 500 user-centered designs that would shape the app's architecture and user experience, working alongside a global team to define the app architecture for a successful startup launch.
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
                    bg="red.100"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ base: "lg", lg: "2xl" }}
                  >
                    🎨
                  </Box>
                  <VStack spacing={2}>
                    <Text fontWeight="600" color="gray.800">Role</Text>
                    <Text fontSize="sm" color="gray.600">UX/UI Design Intern</Text>
                  </VStack>
                </VStack>
              </MotionBox>

              <MotionBox variants={itemVariants}>
                <VStack spacing={4} align="center" textAlign="center">
                  <Box
                    w="60px"
                    h="60px"
                    borderRadius="full"
                    bg="red.100"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ base: "lg", lg: "2xl" }}
                  >
                    🏢
                  </Box>
                  <VStack spacing={2}>
                    <Text fontWeight="600" color="gray.800">Team</Text>
                    <Text fontSize="sm" color="gray.600">Mobile App Design Team</Text>
                  </VStack>
                </VStack>
              </MotionBox>

              <MotionBox variants={itemVariants}>
                <VStack spacing={4} align="center" textAlign="center">
                  <Box
                    w="60px"
                    h="60px"
                    borderRadius="full"
                    bg="red.100"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ base: "lg", lg: "2xl" }}
                  >
                    🛠️
                  </Box>
                  <VStack spacing={2}>
                    <Text fontWeight="600" color="gray.800">Tools</Text>
                    <Text fontSize="sm" color="gray.600">Figma, Adobe Creative Suite</Text>
                  </VStack>
                </VStack>
              </MotionBox>

              <MotionBox variants={itemVariants}>
                <VStack spacing={4} align="center" textAlign="center">
                  <Box
                    w="60px"
                    h="60px"
                    borderRadius="full"
                    bg="red.100"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ base: "lg", lg: "2xl" }}
                  >
                    📅
                  </Box>
                  <VStack spacing={2}>
                    <Text fontWeight="600" color="gray.800">Timeline</Text>
                    <Text fontSize="sm" color="gray.600">May – Aug 2021</Text>
                  </VStack>
                </VStack>
              </MotionBox>
            </MotionGrid>
          </MotionVStack>
        </Container>
      </Box>

      {/* Challenge Section */}
      <Box bg="red.800" py={{ base: 16, lg: 24 }}>
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
                Building a Mobile App from the Ground Up
              </Heading>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color="white"
                maxW="800px"
                mx="auto"
                lineHeight="1.6"
              >
                How can we design an intuitive mobile app experience that seamlessly blends e-commerce functionality with social networking features?
              </Text>
            </MotionVStack>
          </MotionVStack>
        </Container>
      </Box>

      {/* My Experience Section */}
      <Box bg="red.50" py={{ base: 12, lg: 24 }}>
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
                colorScheme="red"
                variant="subtle"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="sm"
                fontWeight="600"
              >
                03 | My Experience
              </Badge>
              <Heading
                fontSize={{ base: '2xl', lg: '4xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Building from Blank Pages
              </Heading>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color="gray.600"
                maxW="800px"
                mx="auto"
                lineHeight="1.6"
              >
                Being assigned brand new sections that had nothing before meant I had to wireframe things from scratch, spending countless hours tweaking the smallest components. This made me realize how every little thing starts from a blank page—literally—and that you build it out from there.
              </Text>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color="gray.600"
                maxW="800px"
                mx="auto"
                lineHeight="1.6"
              >
                Working with software engineers gave me a whole full rounded picture of how these teams need to synergize together—design and engineering working hand-in-hand to help with building out the full app. The startup culture was real, having meetings whenever, being able to communicate with anyone on the team easily, talking to the CEO, leads, people on operations or logistics and marketing even.
              </Text>
            </MotionVStack>
          </MotionVStack>
        </Container>
      </Box>

      {/* Learning Section */}
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
                colorScheme="red"
                variant="subtle"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="sm"
                fontWeight="600"
              >
                04 | What I Learned
              </Badge>
              <Heading
                fontSize={{ base: '2xl', lg: '4xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Design Fundamentals & Best Practices
              </Heading>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color="gray.600"
                maxW="800px"
                mx="auto"
                lineHeight="1.6"
              >
                I learned a lot about design rules and tools, framing, tips on calculating how many pixels, a lot of ratio things in design—especially on a mobile app how it should look and feel. UX/UI research was also important, gathering feedback to inform design decisions.
              </Text>
            </MotionVStack>

            <MotionGrid
              variants={containerVariants}
              templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
              gap={8}
              w="full"
            >
              {designLearnings.map((learning) => (
                <MotionBox
                  key={learning.title}
                  variants={itemVariants}
                  bg="white"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="gray.200"
                  p={8}
                  _hover={{
                    borderColor: 'red.500',
                    boxShadow: 'lg',
                    transform: 'translateY(-4px)',
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <VStack spacing={4} align="flex-start">
                    <HStack spacing={4}>
                      <Text fontSize={{ base: "2xl", lg: "3xl" }}>{learning.icon}</Text>
                      <Heading fontSize={{ base: "md", lg: "xl" }} fontWeight="600" color="gray.800">
                        {learning.title}
                      </Heading>
                    </HStack>
                    <Text color="gray.600" lineHeight="1.6">
                      {learning.description}
                    </Text>
                  </VStack>
                </MotionBox>
              ))}
            </MotionGrid>
          </MotionVStack>
        </Container>
      </Box>

      {/* My Work Section */}
      <Box bg="red.50" py={{ base: 12, lg: 24 }}>
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
                colorScheme="red"
                variant="subtle"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="sm"
                fontWeight="600"
              >
                05 | My Work
              </Badge>
              <Heading
                fontSize={{ base: '2xl', lg: '4xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Designing Key App Sections
              </Heading>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color="gray.600"
                maxW="800px"
                mx="auto"
                lineHeight="1.6"
              >
                Throughout my internship, I designed multiple brand new sections for the app, each requiring careful consideration of user flows, interactions, and visual consistency. I had never thought about how many actions or interactions a feature included until I had to design each and every frame—from home pages to details pages, including countless interactions like saving, favouriting, editing, and deleting.
              </Text>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color="gray.600"
                maxW="800px"
                mx="auto"
                lineHeight="1.6"
              >
                I played around with sizing, themes, and components, but at the same time kept consistent with the border radiuses, font sizes, and colour scheme of the app theme. This process taught me the importance of maintaining visual consistency while exploring creative design solutions.
              </Text>
            </MotionVStack>

            <MotionGrid
              variants={containerVariants}
              templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
              gap={8}
              w="full"
            >
              {workSections.map((section, index) => (
                <MotionBox
                  key={section.title}
                  variants={itemVariants}
                  w="full"
                >
                  <Box
                    bg="white"
                    borderRadius="2xl"
                    p={{ base: 6, lg: 8 }}
                    boxShadow="md"
                    _hover={{
                      boxShadow: 'xl',
                    }}
                    transition="all 0.3s ease"
                    h="full"
                  >
                    <VStack spacing={6} align="flex-start" h="full">
                      <VStack spacing={4} align="flex-start" w="full">
                        <Heading fontSize={{ base: "xl", lg: "2xl" }} fontWeight="600" color="gray.800">
                          {section.title}
                        </Heading>
                        <Text color="gray.600" lineHeight="1.6" fontSize={{ base: "md", lg: "lg" }}>
                          {section.description}
                        </Text>
                      </VStack>
                      <Box
                        w="full"
                        borderRadius="xl"
                        overflow="hidden"
                        bg="gray.100"
                        flex="1"
                        cursor="pointer"
                        _hover={{
                          opacity: 0.9,
                        }}
                        transition="opacity 0.2s ease"
                        onClick={() => handleImageClick(section.image, index)}
                      >
                        <AspectRatio ratio={16 / 9} w="100%">
                          <Image
                            src={section.image}
                            alt={section.title}
                            width="100%"
                            height="100%"
                            objectFit="cover"
                          />
                        </AspectRatio>
                      </Box>
                    </VStack>
                  </Box>
                </MotionBox>
              ))}
            </MotionGrid>
          </MotionVStack>
        </Container>
      </Box>

      {/* Impact Section */}
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
                colorScheme="red"
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
                Making a Difference
              </Heading>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color="gray.600"
                maxW="800px"
                mx="auto"
                lineHeight="1.6"
              >
                My work at Tweebaa translated user insights into refined design prototypes, collaborating with a global team to define app architecture for a successful startup launch.
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
                bg="red.50"
                borderRadius="xl"
                border="1px solid"
                borderColor="red.200"
                p={8}
                _hover={{
                  borderColor: 'red.400',
                  boxShadow: 'lg',
                  transform: 'translateY(-4px)',
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <VStack spacing={4} align="flex-start">
                  <HStack spacing={4}>
                    <Text fontSize={{ base: "2xl", lg: "3xl" }}>📈</Text>
                    <Heading fontSize={{ base: "md", lg: "xl" }} fontWeight="600" color="gray.800">
                      User Feedback Impact
                    </Heading>
                  </HStack>
                  <Text color="gray.600" lineHeight="1.6">
                    <Text as="span" fontWeight="600" color="red.500">30% increase</Text> in positive client feedback through streamlined information flow and refined design prototypes.
                  </Text>
                </VStack>
              </MotionBox>

              <MotionBox
                variants={itemVariants}
                bg="red.50"
                borderRadius="xl"
                border="1px solid"
                borderColor="red.200"
                p={8}
                _hover={{
                  borderColor: 'red.400',
                  boxShadow: 'lg',
                  transform: 'translateY(-4px)',
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <VStack spacing={4} align="flex-start">
                  <HStack spacing={4}>
                    <Text fontSize={{ base: "2xl", lg: "3xl" }}>🎨</Text>
                    <Heading fontSize={{ base: "md", lg: "xl" }} fontWeight="600" color="gray.800">
                      Design Portfolio
                    </Heading>
                  </HStack>
                  <Text color="gray.600" lineHeight="1.6">
                    Created <Text as="span" fontWeight="600" color="red.500">500+ user-centric Figma designs</Text>, user flow diagrams, sitemaps, and mock-ups that defined the app's architecture.
                  </Text>
                </VStack>
              </MotionBox>
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
                Closing the Chapter
              </Heading>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color="gray.600"
                maxW="600px"
                mx="auto"
                lineHeight="1.6"
              >
                Reflecting on my time at Tweebaa, it's evident that this was a transformative experience that launched my journey into UX/UI design. As my first internship, it taught me the value of persistence, adaptability, and the importance of design thinking in creating meaningful user experiences.
              </Text>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color="gray.600"
                maxW="600px"
                mx="auto"
                lineHeight="1.6"
              >
                The startup environment pushed me to grow rapidly, and the international collaboration taught me how to work across time zones and cultures. The lessons learned and skills acquired here continue to shape my approach to design and product development as I navigate my professional journey.
              </Text>
            </MotionVStack>

            <Flex w={{ base: "full", lg: "auto" }} direction={{ base: "column", lg: "row" }} gap={3}>
              <Button
                as={Link}
                href="/about"
                size={{ base: "md", lg: "lg" }}
                variant="solid"
                w={{ base: "full", lg: "auto" }}
              >
                Learn More About Me
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
          <ModalBody p={4}>
            <Box position="relative">
              <Image
                src={selectedImage || ''}
                alt="Work Section"
                width="100%"
                height="auto"
                objectFit="cover"
                borderRadius="md"
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
    </Box>
  );
}
