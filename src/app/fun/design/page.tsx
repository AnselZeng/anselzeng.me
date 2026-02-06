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
  useBreakpointValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  IconButton,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { MotionBox, MotionVStack, MotionHStack, MotionGrid, MotionImage } from '@/lib/motion';
import { containerVariants, itemVariants } from '@/lib/motion-variants';

const designProjects = [
  {
    id: 'timbuddies',
    title: 'Tim Buddies',
    description: 'Mobile app design for connecting coffee enthusiasts with local cafes and coffee shops.',
    image: '/design/timbuddies.png',
    category: 'Mobile App',
    tags: ['UI/UX', 'Mobile Design', 'Figma'],
  },
  {
    id: 'pepsico',
    title: 'PepsiCo Campaign',
    description: 'Brand campaign design and digital marketing materials for PepsiCo product launch.',
    image: '/design/pepsico.png',
    category: 'Brand Design',
    tags: ['Branding', 'Marketing', 'Adobe Creative Suite'],
  },
  {
    id: 'lilprotectors',
    title: 'Little Protectors',
    description: 'Educational platform design focused on child safety and awareness programs.',
    image: '/design/lilprotectors.png',
    category: 'Web Platform',
    tags: ['Web Design', 'Education', 'User Research'],
  },
  {
    id: 'agrilink',
    title: 'AgriLink',
    description: 'Agricultural technology platform connecting farmers with suppliers and resources.',
    image: '/design/agrilink.png',
    category: 'Web Platform',
    tags: ['Web Design', 'Agriculture', 'Data Visualization'],
  },
];

export default function DesignPage() {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc);
    setCurrentImageIndex(index);
    onOpen();
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % designProjects.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(designProjects[nextIndex].image);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + designProjects.length) % designProjects.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(designProjects[prevIndex].image);
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
          <VStack spacing={8} align="center" textAlign="center">
            <MotionVStack variants={itemVariants} spacing={4}>
              <Badge
                colorScheme="pink"
                variant="subtle"
                px={2.5}
                py={0.5}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
              >
                Design Portfolio
              </Badge>
              <Heading
                fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Design 🎨
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                lineHeight="1.6"
              >
                A collection of creative projects that blend functionality with aesthetics
              </Text>
            </MotionVStack>
          </VStack>
        </MotionBox>
      </Container>

      {/* Introduction Section */}
      <Box bg="white" py={{ base: 10, lg: 16 }}>
        <Container maxW="container.lg" px={{ base: 5, lg: 10 }}>
          <MotionVStack
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            spacing={{ base: 8, lg: 10 }}
          >
            <MotionVStack variants={itemVariants} spacing={4} textAlign="center">
              <Badge
                colorScheme="pink"
                variant="subtle"
                px={2.5}
                py={0.5}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
              >
                About My Design Journey
              </Badge>
              <Heading
                fontSize={{ base: 'xl', lg: '3xl' }}
                fontWeight="700"
                color="gray.800"
              >
                A Brief Introduction
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                mx="auto"
                lineHeight="1.6"
              >
                Since my first internship as a UX/UI designer, I fell in love with Figma and discovered a passion for creating intuitive, user-focused designs. I've always felt a strong creative drive, which led me to volunteer for design roles in school projects, assignments, and even case competitions.
              </Text>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                mx="auto"
                lineHeight="1.6"
              >
                I thrive on the challenge of transforming abstract ideas into thoughtful user experiences that blend functionality and aesthetics. My journey in design is fueled by a constant curiosity and a desire to make digital interactions seamless, engaging, and meaningful for users everywhere.
              </Text>
            </MotionVStack>
          </MotionVStack>
        </Container>
      </Box>

      {/* Process Section */}
      <Box bg="pink.50" py={{ base: 10, lg: 16 }}>
        <Container maxW="container.lg" px={{ base: 5, lg: 10 }}>
          <MotionVStack
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            spacing={{ base: 8, lg: 10 }}
          >
            <MotionVStack variants={itemVariants} spacing={4} textAlign="center">
              <Badge
                colorScheme="pink"
                variant="subtle"
                px={2.5}
                py={0.5}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
              >
                Design Process
              </Badge>
              <Heading
                fontSize={{ base: 'xl', lg: '3xl' }}
                fontWeight="700"
                color="gray.800"
              >
                My Creative Approach
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="520px"
                mx="auto"
                lineHeight="1.6"
              >
                A systematic approach to design that ensures every project meets user needs and business objectives.
              </Text>
            </MotionVStack>

            <MotionGrid
              variants={containerVariants}
              templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
              gap={8}
              w="full"
            >
              {[
                {
                  step: '01',
                  title: 'Research',
                  description: 'Understanding user needs, market trends, and business requirements.',
                  icon: '🔍',
                },
                {
                  step: '02',
                  title: 'Ideate',
                  description: 'Brainstorming solutions and exploring creative possibilities.',
                  icon: '💡',
                },
                {
                  step: '03',
                  title: 'Design',
                  description: 'Creating wireframes, prototypes, and visual designs.',
                  icon: '🎨',
                },
                {
                  step: '04',
                  title: 'Test',
                  description: 'Validating designs through user testing and feedback.',
                  icon: '🧪',
                },
              ].map((process, index) => (
                <MotionBox
                  key={process.step}
                  variants={itemVariants}
                  bg="white"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="gray.200"
                  p={6}
                  textAlign="center"
                  _hover={{
                    borderColor: 'pink.500',
                    boxShadow: 'lg',
                    transform: 'translateY(-4px)',
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <VStack spacing={4}>
                    <Text fontSize={{ base: "2xl", lg: "3xl" }}>{process.icon}</Text>
                    <Box
                      w="40px"
                      h="40px"
                      borderRadius="full"
                      bg="pink.100"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontSize="md"
                      fontWeight="600"
                      color="pink.600"
                    >
                      {process.step}
                    </Box>
                    <Heading fontSize="md" fontWeight="600" color="gray.800">
                      {process.title}
                    </Heading>
                    <Text fontSize="md" color="gray.600" lineHeight="1.5">
                      {process.description}
                    </Text>
                  </VStack>
                </MotionBox>
              ))}
            </MotionGrid>
          </MotionVStack>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box bg="white" py={{ base: 10, lg: 16 }}>
        <Container maxW="container.lg" px={{ base: 5, lg: 10 }}>
          <MotionVStack
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            spacing={{ base: 8, lg: 10 }}
          >
            <MotionVStack variants={itemVariants} spacing={4} textAlign="center">
              <Badge
                colorScheme="pink"
                variant="subtle"
                px={2.5}
                py={0.5}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
              >
                Featured Projects
              </Badge>
              <Heading
                fontSize={{ base: 'xl', lg: '3xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Design Portfolio
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="520px"
                mx="auto"
                lineHeight="1.6"
              >
                A collection of design projects showcasing my creative process and attention to detail.
              </Text>
            </MotionVStack>

            <MotionGrid
              variants={containerVariants}
              templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
              gap={8}
              w="full"
            >
              {designProjects.map((project, index) => (
                <MotionBox
                  key={project.id}
                  variants={itemVariants}
                  bg="white"
                  borderRadius="2xl"
                  overflow="hidden"
                  boxShadow="lg"
                  _hover={{
                    boxShadow: '2xl',
                    transform: 'translateY(-8px)',
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Box
                    position="relative"
                    cursor="pointer"
                    onClick={() => handleImageClick(project.image, index)}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width="100%"
                      height="300px"
                      objectFit="cover"
                      loading="lazy"
                      decoding="async"
                      borderRadius="xl"
                    />
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      bg="rgba(0, 0, 0, 0.4)"
                      opacity={0}
                      _hover={{ opacity: 1 }}
                      transition="opacity 0.3s ease"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text color="white" fontWeight="600" fontSize="md">
                        View Details
                      </Text>
                    </Box>
                  </Box>
                  <VStack spacing={4} p={6} align="flex-start">
                    <HStack justify="space-between" w="full">
                      <Heading fontSize="md" fontWeight="600" color="gray.800">
                        {project.title}
                      </Heading>
                      <Badge
                        colorScheme="pink"
                        variant="subtle"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="md"
                      >
                        {project.category}
                      </Badge>
                    </HStack>
                    <Text color="gray.600" lineHeight="1.6">
                      {project.description}
                    </Text>
                    <HStack spacing={2} wrap="wrap">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          colorScheme="gray"
                          variant="subtle"
                          px={2}
                          py={1}
                          borderRadius="full"
                          fontSize="xs"
                        >
                          {tag}
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


      {/* CTA Section */}
      <Box bg="orange.50" py={{ base: 10, lg: 16 }}>
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
                Let&apos;s Create Together
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="520px"
                mx="auto"
                lineHeight="1.6"
              >
                I&apos;m always excited to collaborate on new design projects and bring creative visions to life.
              </Text>
            </MotionVStack>

            <Flex w={{ base: "full", lg: "auto" }} direction={{ base: "column", lg: "row" }} gap={3}>
              <Button
                as="a"
                href="/fun/travels"
                size="sm"
                variant="solid"
                rightIcon={<ChevronRightIcon />}
                w={{ base: "full", lg: "auto" }}
              >
                View My Travels
              </Button>
              <Button
                as="a"
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
          <ModalCloseButton zIndex={10} />
          <ModalBody p={0}>
            <Box position="relative">
              <Image
                src={selectedImage || ''}
                alt="Design Project"
                width="100%"
                height="auto"
                objectFit="cover"
                loading="eager"
                decoding="async"
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
