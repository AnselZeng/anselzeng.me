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
  Link,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { MotionBox, MotionVStack, MotionGrid } from '@/lib/motion';
import { containerVariants, itemVariants } from '@/lib/motion-variants';
import { ImageLightboxModal } from '@/components/ui/ImageLightboxModal';

type DesignProject = {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: { href: string; label: string };
};

const designProjects: DesignProject[] = [
  {
    id: 'timbuddies',
    title: 'Tim Buddies',
    description:
      'Mobile app concept for Tim Hortons: a rewards system we pitched as part of the Deloitte Innovation Forum, an annual Ivey HBA case event sponsored by Deloitte. Our team took second place.',
    image: '/design/timbuddies.png',
    link: {
      href: 'https://www.ivey.uwo.ca/news/news-ivey/2023/january/deloitte-innovation-forum-serves-up-real-world-experience-for-hba1s/',
      label: 'Ivey article',
    },
  },
  {
    id: 'pepsico',
    title: 'PepsiCo Campaign',
    description:
      'Course project: a web experience where people can plan ahead and choose healthier snacks and drink options from PepsiCo’s lineup, making better-for-you choices easier to discover and stick with.',
    image: '/design/pepsico.png',
  },
  {
    id: 'lilprotectors',
    title: 'Little Protectors',
    description:
      'Tower defense game for CS 4474 (Human-Computer Interaction), built with Python and Pygame, exploring HCI through a full playable prototype.',
    image: '/design/lilprotectors.png',
    link: {
      href: 'https://github.com/AnselZeng/little-protectors',
      label: 'GitHub repo',
    },
  },
  {
    id: 'agrilink',
    title: 'AgriLink',
    description:
      'Mobile app design for farmers to grow a community: share resources, swap knowledge, and stay connected. Think of it as a social layer built around agriculture and local collaboration.',
    image: '/design/agrilink.png',
  },
];

export default function DesignPage() {
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
                  <VStack spacing={3} p={6} align="flex-start">
                    <HStack
                      justify="space-between"
                      w="full"
                      align="flex-start"
                      gap={3}
                      flexWrap="wrap"
                    >
                      <Heading
                        as="h3"
                        fontSize={{ base: 'xl', md: '2xl' }}
                        fontWeight="700"
                        color="gray.800"
                        lineHeight="1.2"
                        flex="1"
                        minW={{ base: '100%', md: '0' }}
                      >
                        {project.title}
                      </Heading>
                      {project.link ? (
                        <Link
                          href={project.link.href}
                          isExternal
                          rel="noopener noreferrer"
                          display="inline-flex"
                          alignItems="center"
                          gap={1.5}
                          fontSize="sm"
                          fontWeight="600"
                          color="brand.500"
                          flexShrink={0}
                          alignSelf={{ base: 'flex-start', md: 'center' }}
                          aria-label={`${project.link.label} (opens in new tab)`}
                          _hover={{
                            color: 'brand.600',
                            textDecoration: 'underline',
                          }}
                        >
                          {project.link.label}
                          <ExternalLinkIcon boxSize={3.5} aria-hidden />
                        </Link>
                      ) : null}
                    </HStack>
                    <Text color="gray.600" lineHeight="1.6" fontSize="md">
                      {project.description}
                    </Text>
                  </VStack>
                </MotionBox>
              ))}
            </MotionGrid>
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

            <Flex w="auto" gap={3} flexWrap="wrap" justify="center">
              <Button
                as="a"
                href="/fun/travels"
                size="sm"
                variant="solid"
                rightIcon={<ChevronRightIcon />}
                w="auto"
              >
                View My Travels
              </Button>
              <Button
                as="a"
                href="/about"
                size="sm"
                variant="outline"
                w="auto"
              >
                Learn More About Me
              </Button>
            </Flex>
          </MotionVStack>
        </Container>
      </Box>

      <ImageLightboxModal
        isOpen={isOpen}
        onClose={onClose}
        imageSrc={selectedImage || ''}
        alt="Design Project"
      />
    </Box>
  );
}
