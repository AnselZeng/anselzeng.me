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
  Divider,
  Badge,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectCard from '@/components/home/ProjectCard';
import { ChevronRightIcon } from '@chakra-ui/icons';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionHStack = motion(HStack);

const projects = [
  {
    id: 'telus',
    title: 'Telus',
    subtitle: 'Ticket Management System',
    description: 'Streamlining operations with a dynamic ticket management system.',
    tags: ['Software Engineering', 'DevOps', 'Internship'],
    image: '/home/telus.png',
    logo: '/home/telus.svg',
    link: '/work/telus',
    color: '#66CC00',
    reverse: true,
  },
  {
    id: 'ips',
    title: 'Ivey Product Society',
    subtitle: 'Spotify Enhancement',
    description: "Enhancing Spotify's social experience through customization on the profile page.",
    tags: ['Product Management', 'UX Research', 'Fellowship'],
    image: '/home/ips.png',
    logo: '/home/ips.svg',
    link: '/work/ips',
    color: '#B4A3C5',
    reverse: false,
  },
  {
    id: 'rbc',
    title: 'Royal Bank of Canada',
    subtitle: 'Mortgage Application Engine',
    description: 'Redefining the mortgage application process by building an enhanced evaluation engine.',
    tags: ['Software Engineering', 'Full-stack', 'Internship'],
    image: '/home/rbc.png',
    logo: '/home/rbc.svg',
    link: '/work/rbc',
    color: '#0066D0',
    reverse: true,
  },
  {
    id: 'tweebaa',
    title: 'Tweebaa',
    subtitle: 'E-commerce Innovation',
    description: 'Pioneering the future of e-commerce through value-exchanging social networking.',
    tags: ['UX/UI Design', 'Wireframing', 'Internship'],
    image: '/home/tweebaa.png',
    logo: '/home/tweebaa.svg',
    link: '#',
    color: '#FF6B6B',
    reverse: false,
    comingSoon: true,
  },
];

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

export default function Home() {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Box>
      {/* Hero Section */}
      <Container maxW="container.xl" px={{ base: 6, lg: 12 }} py={{ base: 16, lg: 32 }}>
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          display="flex"
          alignItems="center"
        >
            <Flex
              direction={{ base: 'column', lg: 'row' }}
              align="center"
              gap={{ base: 6, lg: 16 }}
              w="full"
            >
            {/* Left Content */}
            <MotionVStack
              variants={itemVariants}
              align={{ base: 'center', lg: 'flex-start' }}
              textAlign={{ base: 'center', lg: 'left' }}
              spacing={{ base: 4, lg: 6 }}
              flex={1}
            >
              <HStack spacing={3} align="center">
                <Box bg="brand.500" h="2px" w="2rem" />
                <Text
                  fontSize="sm"
                  fontWeight="600"
                  color="brand.500"
                  letterSpacing="wider"
                  textTransform="uppercase"
                  lineHeight="1"
                >
                  Hello
                </Text>
              </HStack>

              <Heading
                fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }}
                fontWeight="700"
                lineHeight="1.1"
                color="gray.800"
              >
                I&apos;m{' '}
                <Text as="span" color="brand.500">
                  Ansel
                </Text>{' '}
                Zeng
              </Heading>

              <Text
                fontSize={{ base: 'md', lg: 'xl' }}
                color="gray.600"
                maxW="600px"
                lineHeight="1.6"
              >
                CS & business student passionate about software development and creating
                meaningful user experiences. I find inspiration in the ever-evolving world of
                technology, exploring how it can be leveraged to create positive change.
              </Text>

               <Flex pt={4} w={{ base: "full", lg: "auto" }} direction={{ base: "column", lg: "row" }} gap={3}>
                <Button
                  as={Link}
                  href="/Ansel_Zeng_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  size={{ base: "md", lg: "lg" }}
                  variant="solid"
                  rightIcon={<ChevronRightIcon />}
                  w={{ base: "full", lg: "auto" }}
                >
                  Download Resume
                </Button>
                <Button
                  as={Link}
                  href="/about"
                  size={{ base: "md", lg: "lg" }}
                  variant="outline"
                  w={{ base: "full", lg: "auto" }}
                >
                 Learn More
                </Button>
               </Flex>
            </MotionVStack>

            {/* Right Image */}
            <MotionBox
              variants={itemVariants}
              flex={1}
              maxW={{ base: "300px", lg: "400px" }}
              mx="auto"
            >
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
              >
                <Image
                  src="/home/me.png"
                  alt="Ansel Zeng"
                  width="100%"
                  height={{ base: "300px", lg: "auto" }}
                  objectFit="cover"
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bg="linear-gradient(135deg, rgba(255, 123, 0, 0.1) 0%, transparent 50%)"
                  opacity={0}
                  _hover={{ opacity: 1 }}
                  transition="opacity 0.3s ease"
                />
              </Box>
            </MotionBox>
          </Flex>
        </MotionBox>
      </Container>

      {/* Projects Section */}
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
                colorScheme="orange"
                variant="subtle"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="sm"
                fontWeight="600"
              >
                Featured Work
              </Badge>
              <Heading
                fontSize={{ base: '2xl', lg: '4xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Recent Projects
              </Heading>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color="gray.600"
                maxW="600px"
                mx="auto"
              >
                A collection of my recent work experiences and projects that showcase my
                skills in software engineering, product management, and design.
              </Text>
            </MotionVStack>

            <VStack spacing={{ base: 16, lg: 20 }} w="full">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </VStack>
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
            <MotionVStack variants={itemVariants} spacing={4}>
              <Heading
                fontSize={{ base: '2xl', lg: '4xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Let&apos;s Work Together
              </Heading>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color="gray.600"
                maxW="500px"
                mx="auto"
              >
                I&apos;m always interested in new opportunities and exciting projects.
                Let&apos;s connect and create something amazing together.
              </Text>
            </MotionVStack>

             <Flex w={{ base: "full", lg: "auto" }} direction={{ base: "column", lg: "row" }} gap={3}>
              <Button
                as={Link}
                href="/about"
                size={{ base: "md", lg: "lg" }}
                variant="solid"
                rightIcon={<ChevronRightIcon />}
                w={{ base: "full", lg: "auto" }}
              >
                Get In Touch
              </Button>
              <Button
                as={Link}
                href="/fun/blog"
                size={{ base: "md", lg: "lg" }}
                variant="outline"
                w={{ base: "full", lg: "auto" }}
              >
                 Read My Blog
                </Button>
             </Flex>
          </MotionVStack>
        </Container>
      </Box>
    </Box>
  );
}
