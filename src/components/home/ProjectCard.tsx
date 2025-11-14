'use client';

import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Badge,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionHStack = motion(HStack);

// Helper function to convert hex to rgba
const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  logo: string;
  link: string;
  color: string;
  reverse: boolean;
  comingSoon?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const isReverse = project.reverse && !isMobile;
  return (
    <MotionBox
      variants={cardVariants}
      w="full"
    >
      <Flex direction={{ base: 'column', lg: 'row' }} align="center" gap={{ base: 3, lg: 4 }} py={{ base: 4, lg: 6 }} px={{ base: 4, lg: 12 }}>
        {/* Content */}
        <VStack align={{ base: 'center', lg: 'flex-start' }} textAlign={{ base: 'center', lg: 'left' }} spacing={{ base: 3, lg: 4 }} flex={{ base: 'initial', lg: '1 1 0%' }} w={{ base: '100%', lg: 'auto' }} px={{ base: 2, lg: 6 }} order={{ base: 2, lg: isReverse ? 2 : 1 }}>
          {/* Logo */}
          <Box
            onContextMenu={(e) => e.preventDefault()}
            userSelect="none"
          >
            <Image 
              src={project.logo} 
              alt={`${project.title} logo`} 
              maxH={{ base: "50px", lg: "60px" }} 
              objectFit="contain"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </Box>
          {/* Title & Subtitle */}
          <VStack spacing={1} align={{ base: 'center', lg: 'flex-start' }}>
            <Heading
              fontSize={{ base: 'lg', lg: '2xl' }}
              fontWeight="700"
              sx={{
                background: `linear-gradient(to right, ${project.color}, black 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {project.title}
            </Heading>
          </VStack>
          {/* Description */}
          <Text fontSize={{ base: "sm", lg: "md" }} color="gray.600" lineHeight="1.6" maxW="440px" mt={0}>{project.description}</Text>
          {/* Tags */}
          <HStack spacing={2} wrap="wrap" justify={{ base: 'center', lg: 'flex-start' }}>
            {project.tags.map((tag, tagIndex) => (
              <Badge key={tagIndex} colorScheme="gray" variant="subtle" px={{ base: 1.5, lg: 2 }} py={0.5} borderRadius="full" fontSize={{ base: "2xs", lg: "xs" }}>
                {tag}
              </Badge>
            ))}
          </HStack>
          {/* CTA Button */}
          <Box pt={2}>
            {project.comingSoon ? (
              <Button
                size={{ base: "sm", lg: "md" }}
                variant="outline"
                borderColor={project.color}
                color={project.color}
                cursor="not-allowed"
                isDisabled
                _disabled={{ opacity: 0.9, borderColor: project.color, color: project.color }}
              >
                Coming Soon
              </Button>
            ) : (
              <Button
                as={Link}
                href={project.link}
                size={{ base: "sm", lg: "md" }}
                variant="outline"
                borderColor={project.color}
                color={project.color}
                rightIcon={<ChevronRightIcon />}
                _hover={{ bg: project.color, color: 'white', transform: 'translateY(-2px)', boxShadow: 'lg' }}
                transition="all 0.2s ease"
              >
                View Project
              </Button>
            )}
          </Box>
        </VStack>
        {/* Image area - intrinsic size, capped height, centered; no stretch */}
        <MotionBox variants={imageVariants} flex={{ base: '0 0 auto', lg: '1 1 0%' }} w={{ base: '100%', lg: 'auto' }} px={{ base: 2, lg: 6 }} order={{ base: 1, lg: isReverse ? 1 : 2 }}>
          <Box
            position="relative"
            bgGradient={`linear(to top, ${hexToRgba(project.color, 0.15)}, ${hexToRgba(project.color, 0.05)}, transparent)`}
            borderRadius="lg"
            pt={{ base: 2, lg: 3 }}
            pb={{ base: 4, lg: 5 }}
            borderBottom={`2px solid ${project.color}`}
            sx={{
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-2px',
                left: 0,
                right: 0,
                height: '2px',
                background: `linear-gradient(to right, transparent, ${project.color}, transparent)`,
                borderRadius: 'lg',
              }
            }}
          >
            {project.comingSoon ? (
                <Box
                  w="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  overflow="hidden"
                  px={{ base: 2, lg: 3 }}
                  py={{ base: 2, lg: 3 }}
                  cursor="not-allowed"
                  opacity={0.95}
                  onContextMenu={(e) => e.preventDefault()}
                  userSelect="none"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    maxH={{ base: '120px', md: '140px', lg: '170px' }}
                    maxW="100%"
                    height="auto"
                    width="auto"
                    transform="none"
                    transition="none"
                    display="block"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </Box>
            ) : (
              <Link href={project.link}>
                <Box
                  w="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  overflow="hidden"
                  px={{ base: 2, lg: 3 }}
                  py={{ base: 2, lg: 3 }}
                  _hover={{ img: { transform: 'scale(1.04)' } }}
                  onContextMenu={(e) => e.preventDefault()}
                  userSelect="none"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    maxH={{ base: '120px', md: '140px', lg: '170px' }}
                    maxW="100%"
                    height="auto"
                    width="auto"
                    transform="scale(1.01)"
                    transition="transform 0.25s ease"
                    display="block"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </Box>
              </Link>
            )}
          </Box>
        </MotionBox>
      </Flex>
    </MotionBox>
  );
}
