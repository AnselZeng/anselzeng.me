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
  Avatar,
  Divider,
  useBreakpointValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  IconButton,
  Grid,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionHStack = motion(HStack);
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

interface BlogPostProps {
  title: string;
  date: string;
  readTime: string;
  category: string;
  color: string;
  coverImage: string;
  sections: Array<{
    type: 'text' | 'imageGroup';
    content?: string | React.ReactNode;
    images?: Array<{
      src: string;
      alt: string;
    }>;
  }>;
}

export default function BlogPost({
  title,
  date,
  readTime,
  category,
  color,
  coverImage,
  sections,
}: BlogPostProps) {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  const handleImageClick = (imageSrc: string, groupIndex: number, imageIndex: number) => {
    setSelectedImage(imageSrc);
    setCurrentImageIndex(imageIndex);
    setCurrentGroupIndex(groupIndex);
    onOpen();
  };

  const nextImage = () => {
    const currentGroup = sections[currentGroupIndex];
    if (currentGroup.type === 'imageGroup' && currentGroup.images) {
      const nextIndex = (currentImageIndex + 1) % currentGroup.images.length;
      setCurrentImageIndex(nextIndex);
      setSelectedImage(currentGroup.images[nextIndex].src);
    }
  };

  const prevImage = () => {
    const currentGroup = sections[currentGroupIndex];
    if (currentGroup.type === 'imageGroup' && currentGroup.images) {
      const prevIndex = (currentImageIndex - 1 + currentGroup.images.length) % currentGroup.images.length;
      setCurrentImageIndex(prevIndex);
      setSelectedImage(currentGroup.images[prevIndex].src);
    }
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
            <MotionBox variants={itemVariants}>
              <Button
                as={Link}
                href="/fun/blog"
                leftIcon={<ArrowBackIcon />}
                variant="outline"
                size="sm"
                mb={8}
              >
                Back to Blog
              </Button>
            </MotionBox>

            <MotionVStack variants={itemVariants} spacing={4}>
              <Badge
                colorScheme={color}
                variant="subtle"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="sm"
                fontWeight="600"
              >
                {category}
              </Badge>
              <Heading
                fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
                fontWeight="700"
                color="gray.800"
                lineHeight="1.2"
              >
                {title}
              </Heading>
              <HStack spacing={{ base: 4, lg: 6 }} color="gray.600">
                <Text fontSize={{ base: "xs", lg: "sm" }}>{date}</Text>
                <Text fontSize={{ base: "xs", lg: "sm" }}>{readTime}</Text>
              </HStack>
            </MotionVStack>

            <MotionBox variants={itemVariants}>
              <Box
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="2xl"
                maxW={{ base: "100%", lg: "800px" }}
                w="full"
                _hover={{
                  transform: 'translateY(-8px)',
                  boxShadow: '3xl',
                }}
                transition="all 0.3s ease"
              >
                <Image
                  src={coverImage}
                  alt={title}
                  width="100%"
                  height={{ base: "250px", lg: "400px" }}
                  objectFit="cover"
                />
              </Box>
            </MotionBox>
          </VStack>
        </MotionBox>
      </Container>

      {/* Content Section */}
      <Box bg="white" py={{ base: 12, lg: 24 }}>
        <Container maxW="container.lg" px={{ base: 6, lg: 12 }}>
          <MotionVStack
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            spacing={{ base: 8, lg: 12 }}
          >
            {sections.map((section, index) => (
              <MotionBox key={index} variants={itemVariants} w="full">
                {section.type === 'text' ? (
                  <Text
                    fontSize={{ base: "md", lg: "xl" }}
                    color="gray.700"
                    lineHeight={{ base: "1.6", lg: "1.8" }}
                    textAlign="justify"
                  >
                    {section.content}
                  </Text>
                ) : section.type === 'imageGroup' && section.images ? (
                  <Grid
                    templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
                    gap={{ base: 4, lg: 6 }}
                    w="full"
                  >
                    {section.images.map((image, imageIndex) => (
                      <Box
                        key={imageIndex}
                        borderRadius="xl"
                        overflow="hidden"
                        boxShadow="md"
                        cursor="pointer"
                        _hover={{
                          transform: 'translateY(-4px)',
                          boxShadow: 'xl',
                        }}
                        transition="all 0.3s ease"
                        onClick={() => handleImageClick(image.src, index, imageIndex)}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width="100%"
                          height={{ base: "200px", lg: "auto" }}
                          objectFit="cover"
                        />
                      </Box>
                    ))}
                  </Grid>
                ) : null}
              </MotionBox>
            ))}
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
                fontSize={{ base: 'xl', lg: '3xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Thanks for Reading
              </Heading>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color="gray.600"
                maxW="600px"
                mx="auto"
                lineHeight="1.6"
              >
                I hope you enjoyed this story. Check out more of my thoughts and experiences.
              </Text>
            </MotionVStack>

            <Flex w={{ base: "full", lg: "auto" }} direction={{ base: "column", lg: "row" }} gap={3}>
              <Button
                as={Link}
                href="/fun/blog"
                size={{ base: "md", lg: "lg" }}
                variant="solid"
                leftIcon={<ArrowBackIcon />}
                w={{ base: "full", lg: "auto" }}
              >
                Back to Blog
              </Button>
              <Button
                as={Link}
                href="/about"
                size={{ base: "md", lg: "lg" }}
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
      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "md", md: "2xl", lg: "3xl" }} isCentered>
        <ModalOverlay />
        <ModalContent mx={{ base: 4, lg: 0 }}>
          <ModalCloseButton size={{ base: "md", lg: "lg" }} />
          <ModalBody p={{ base: 2, lg: 0 }}>
            <Box position="relative">
              <Image
                src={selectedImage || ''}
                alt="Blog Image"
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
    </Box>
  );
}
