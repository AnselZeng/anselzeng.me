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
import Link from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { MotionBox } from '@/lib/motion';
import { hexToRgba } from '@/lib/utils';

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
      w={{ base: 'auto', lg: 'full' }}
      maxW={{ base: '100%', lg: 'none' }}
    >
      <Flex direction={{ base: 'row', lg: 'row' }} align={{ base: 'center', lg: 'center' }} gap={{ base: 3, lg: 5 }} py={{ base: 3, lg: 4 }} px={{ base: 3, lg: 8 }}>
        {/* Image area - on mobile: left side, smaller; on desktop: unchanged */}
        <MotionBox variants={imageVariants} flex={{ base: '0 0 auto', lg: '1 1 0%' }} w={{ base: '100px', lg: 'auto' }} px={{ base: 0, lg: 4 }} order={{ base: 1, lg: isReverse ? 1 : 2 }}>
          <Box
            position="relative"
            bgGradient={`linear(to top, ${hexToRgba(project.color, 0.15)}, ${hexToRgba(project.color, 0.05)}, transparent)`}
            borderRadius="lg"
            pt={{ base: 1, lg: 2 }}
            pb={{ base: 2, lg: 4 }}
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
                  px={{ base: 1, lg: 3 }}
                  py={{ base: 1, lg: 3 }}
                  cursor="not-allowed"
                  opacity={0.95}
                  onContextMenu={(e) => e.preventDefault()}
                  userSelect="none"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    maxH={{ base: '80px', md: '120px', lg: '140px' }}
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
                  px={{ base: 1, lg: 3 }}
                  py={{ base: 1, lg: 3 }}
                  _hover={{ img: { transform: 'scale(1.04)' } }}
                  onContextMenu={(e) => e.preventDefault()}
                  userSelect="none"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    maxH={{ base: '80px', md: '120px', lg: '140px' }}
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
        {/* Content - on mobile: right side (logo, title, description, tags, View Project); on desktop: unchanged */}
        <VStack align={{ base: 'flex-start', lg: 'flex-start' }} textAlign={{ base: 'left', lg: 'left' }} spacing={{ base: 1.5, lg: 2.5 }} flex={{ base: 1, lg: '1 1 0%' }} minW={0} w={{ base: 'auto', lg: 'auto' }} px={{ base: 0, lg: 4 }} order={{ base: 2, lg: isReverse ? 2 : 1 }}>
          <Box
            onContextMenu={(e) => e.preventDefault()}
            userSelect="none"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image 
              src={project.logo} 
              alt={`${project.title} logo`} 
              maxW={{ base: "32px", lg: "48px" }}
              maxH={{ base: "32px", lg: "48px" }}
              objectFit="contain"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </Box>
          <VStack spacing={0.5} align="flex-start" w="full">
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
          <Text fontSize={{ base: 'sm', lg: 'md' }} color="gray.600" lineHeight="1.55" maxW="400px" mt={0} noOfLines={{ base: 2, lg: 999 }}>{project.description}</Text>
          <HStack spacing={1.5} wrap="wrap" justify="flex-start" display={{ base: 'none', lg: 'flex' }}>
            {project.tags.map((tag, tagIndex) => (
              <Badge key={tagIndex} colorScheme="gray" variant="subtle" px={1.5} py={0.5} borderRadius="full" fontSize="xs">
                {tag}
              </Badge>
            ))}
          </HStack>
          <Box pt={{ base: 0.5, lg: 1.5 }} w="full">
            {project.comingSoon ? (
              <Button
                size="sm"
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
                size="sm"
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
      </Flex>
    </MotionBox>
  );
}
