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
} from '@chakra-ui/react';
import Link from 'next/link';
import ProjectCard from '@/components/home/ProjectCard';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { MotionBox, MotionVStack, MotionHStack } from '@/lib/motion';
import { containerVariants, itemVariants } from '@/lib/motion-variants';

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
    link: '/work/tweebaa',
    color: '#DC2626',
    reverse: false,
  },
];

export default function Home() {
  return (
    <Box>
      {/* Hero Section – tighter spacing, smaller type */}
      <Container maxW="container.lg" px={{ base: 5, lg: 10 }} py={{ base: 10, lg: 20 }}>
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
              gap={{ base: 6, lg: 14 }}
              w="full"
            >
            {/* Left Content */}
            <MotionVStack
              variants={itemVariants}
              align={{ base: 'center', lg: 'flex-start' }}
              textAlign={{ base: 'center', lg: 'left' }}
              spacing={{ base: 3, lg: 4 }}
              flex={1}
            >
              <HStack spacing={2} align="center">
                <Box bg="brand.500" h="1.5px" w="1.25rem" />
                <Text
                  fontSize="xs"
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
                fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
                fontWeight="700"
                lineHeight="1.15"
                color="gray.800"
              >
                I&apos;m{' '}
                <Text as="span" color="brand.500">
                  Ansel
                </Text>{' '}
                Zeng
              </Heading>

              <Text
                fontSize="md"
                color="gray.600"
                maxW="520px"
                lineHeight="1.55"
              >
                CS & business student passionate about software development and creating
                meaningful user experiences. I find inspiration in the ever-evolving world of
                technology, exploring how it can be leveraged to create positive change.
              </Text>

               <Flex pt={3} w={{ base: "full", lg: "auto" }} direction={{ base: "column", lg: "row" }} gap={2}>
                <Button
                  as={Link}
                  href="/Ansel_Zeng_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  variant="solid"
                  rightIcon={<ChevronRightIcon />}
                  w={{ base: "full", lg: "auto" }}
                >
                  Download Resume
                </Button>
                <Button
                  as={Link}
                  href="/about"
                  size="sm"
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
              maxW={{ base: "260px", lg: "340px" }}
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
                onContextMenu={(e) => e.preventDefault()}
                userSelect="none"
              >
                <Image
                  src="/home/me.png"
                  alt="Ansel Zeng"
                  width="100%"
                  height={{ base: "260px", lg: "auto" }}
                  objectFit="cover"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
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

      {/* Projects Section – consistent section spacing */}
      <Box bg="white" py={{ base: 10, lg: 16 }}>
        <Container maxW="container.lg" px={{ base: 5, lg: 10 }}>
          <MotionVStack
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            spacing={{ base: 8, lg: 10 }}
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
                Featured Work
              </Badge>
              <Heading
                fontSize={{ base: 'xl', lg: '3xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Recent Projects
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="480px"
                mx="auto"
                lineHeight="1.55"
              >
                A collection of my recent work experiences and projects that showcase my
                skills in software engineering, product management, and design.
              </Text>
            </MotionVStack>

            <VStack spacing={{ base: 10, lg: 12 }} w="full">
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
      <Box bg="brand.50" py={{ base: 10, lg: 16 }}>
        <Container maxW="container.lg" px={{ base: 5, lg: 10 }}>
          <MotionVStack
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            spacing={{ base: 4, lg: 5 }}
            textAlign="center"
          >
            <MotionVStack variants={itemVariants} spacing={2}>
              <Heading
                fontSize={{ base: 'xl', lg: '3xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Let&apos;s Work Together
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="440px"
                mx="auto"
                lineHeight="1.55"
              >
                I&apos;m always interested in new opportunities and exciting projects.
                Let&apos;s connect and create something amazing together.
              </Text>
            </MotionVStack>

             <Flex w={{ base: "full", lg: "auto" }} direction={{ base: "column", lg: "row" }} gap={2}>
              <Button
                as={Link}
                href="/about"
                size="sm"
                variant="solid"
                rightIcon={<ChevronRightIcon />}
                w={{ base: "full", lg: "auto" }}
              >
                Get In Touch
              </Button>
              <Button
                as={Link}
                href="/fun/blog"
                size="sm"
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
