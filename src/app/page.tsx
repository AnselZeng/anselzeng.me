'use client';

import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
  VStack,
  Image,
  Badge,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import ProjectCard from '@/components/home/ProjectCard';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { MotionBox, MotionVStack } from '@/lib/motion';
import { containerVariants, itemVariants } from '@/lib/motion-variants';

const sectionLabelProps = {
  fontSize: 'xs',
  fontWeight: '600',
  letterSpacing: '0.2em',
  textTransform: 'uppercase' as const,
  color: 'gray.500',
  lineHeight: '1.2',
};

const heroSectionLabelProps = {
  ...sectionLabelProps,
  color: 'brand.500',
};

const heroBodyTextProps = {
  fontSize: 'sm' as const,
  color: 'gray.600',
  lineHeight: '1.65',
};

function HeroStat({ label, value, detail }: { label: string; value: string; detail?: string }) {
  return (
    <Box w="full">
      <Text {...heroSectionLabelProps} mb={3}>
        {label}
      </Text>
      <Text {...heroBodyTextProps}>
        <Text as="span" fontWeight="600" color="gray.800">
          {value}
        </Text>
        {detail ? (
          <>
            <Text as="span" color="gray.400" mx={1.5} aria-hidden>
              —
            </Text>
            <Text as="span" color="gray.600" fontWeight="400">
              {detail}
            </Text>
          </>
        ) : null}
      </Text>
    </Box>
  );
}

const educationLines = [
  'University of Southern California · MS',
  'Tsinghua University · Exchange',
  'Ivey Business School · BA',
  'Western University · BS',
] as const;

const serviceLines = ['Product engineering', 'Systems & APIs', 'Human-centered UX'] as const;

const HERO_PHOTO_LG = { w: '300px', h: '400px' } as const;

function HeroFlexGap() {
  return (
    <Box
      aria-hidden
      flex={{ base: '0 0 0px', lg: '1 1 auto' }}
      minH={{ base: 0, lg: '2' }}
      w="full"
    />
  );
}

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
      <Container maxW="container.lg" px={{ base: 5, lg: 10 }} py={{ base: 12, lg: 24 }}>
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          w="full"
          px={{ base: 4, lg: 12 }}
        >
          <Grid
            templateColumns={{ base: '1fr', lg: 'minmax(0, 1fr) auto minmax(0, 1fr)' }}
            templateAreas={{
              base: `
                "head"
                "photo"
                "left"
                "right"
              `,
              lg: `
                "head head head"
                "left photo right"
              `,
            }}
            columnGap={{ base: 0, lg: 10 }}
            rowGap={{ base: 8, lg: 10 }}
            alignItems={{ base: 'start', lg: 'stretch' }}
          >
            <GridItem area="head">
              <MotionBox variants={itemVariants}>
                <VStack spacing={{ base: 2, md: 2.5 }} textAlign="center">
                  <Heading
                    as="h1"
                    fontFamily="heading"
                    fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }}
                    fontWeight="700"
                    lineHeight="1.1"
                    color="gray.800"
                  >
                    Ansel Zeng
                  </Heading>
                  <Text
                    fontFamily="body"
                    fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                    color="gray.600"
                    lineHeight="1.35"
                  >
                    Software Engineer
                  </Text>
                </VStack>
              </MotionBox>
            </GridItem>

            <GridItem area="left">
              <MotionBox
                variants={itemVariants}
                w="full"
                h={{ base: 'auto', lg: '100%' }}
                minH={{ base: undefined, lg: HERO_PHOTO_LG.h }}
                display="flex"
                flexDirection="column"
              >
                <VStack
                  align="flex-start"
                  spacing={{ base: 4, lg: 0 }}
                  flex={{ base: undefined, lg: 1 }}
                  minH={{ base: undefined, lg: 0 }}
                  maxW={{ base: 'full', lg: '280px' }}
                  mx={{ base: 'auto', lg: 0 }}
                  w="full"
                >
                  <Box w="full">
                    <Text {...heroSectionLabelProps} mb={3}>
                      Biography
                    </Text>
                    <Text {...heroBodyTextProps}>
                      MS Computer Science student, passionate about software development and
                      meaningful user experiences. Inspired by how technology evolves and how it can
                      drive positive change.
                    </Text>
                  </Box>
                  <HeroFlexGap />
                  <Box w="full">
                    <Text {...heroSectionLabelProps} mb={3}>
                      Education
                    </Text>
                    <Text {...heroBodyTextProps} whiteSpace="pre-line">
                      {educationLines.join('\n')}
                    </Text>
                  </Box>
                  <HeroFlexGap />
                  <Box w="full">
                    <Text {...heroSectionLabelProps} mb={3}>
                      Contact
                    </Text>
                    <Text {...heroBodyTextProps} as="div">
                      <Link
                        href="mailto:ansel.zeng@usc.edu"
                        fontSize="sm"
                        lineHeight="1.65"
                        color="gray.700"
                        fontWeight="600"
                        _hover={{ color: 'brand.500' }}
                        wordBreak="break-all"
                      >
                        ansel.zeng@usc.edu
                      </Link>
                      <br />
                      <Text as="span">
                        <Text as="span" aria-hidden mr={1.5}>
                          📍
                        </Text>
                        Los Angeles, CA
                      </Text>
                    </Text>
                  </Box>
                </VStack>
              </MotionBox>
            </GridItem>

            <GridItem area="photo" justifySelf="center" alignSelf={{ base: 'center', lg: 'start' }}>
              <MotionBox variants={itemVariants}>
                <Box
                  role="group"
                  position="relative"
                  w={{ base: 'min(72vw, 280px)', lg: HERO_PHOTO_LG.w }}
                  h={{ base: 'min(96vw, 380px)', lg: HERO_PHOTO_LG.h }}
                  maxW={HERO_PHOTO_LG.w}
                  maxH={{ base: '380px', lg: HERO_PHOTO_LG.h }}
                  borderRadius="2xl"
                  overflow="hidden"
                  flexShrink={0}
                  borderWidth="1px"
                  borderColor="gray.200"
                  boxShadow="md"
                  transform="scale(1)"
                  transformOrigin="center"
                  transitionProperty="transform, border-color, box-shadow"
                  transitionDuration="0.4s"
                  transitionTimingFunction="cubic-bezier(0.33, 1, 0.68, 1)"
                  onContextMenu={(e) => e.preventDefault()}
                  userSelect="none"
                  _hover={{
                    transform: 'scale(1.008)',
                    borderColor: 'brand.300',
                    boxShadow: 'lg',
                  }}
                >
                  <Image
                    src="/home/me.png"
                    alt="Ansel Zeng"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    objectPosition="center top"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  <Box
                    position="absolute"
                    inset={0}
                    bg="linear-gradient(135deg, rgba(255, 123, 0, 0.07) 0%, transparent 50%)"
                    opacity={0}
                    pointerEvents="none"
                    transition="opacity 0.4s cubic-bezier(0.33, 1, 0.68, 1)"
                    _groupHover={{ opacity: 1 }}
                  />
                </Box>
              </MotionBox>
            </GridItem>

            <GridItem area="right">
              <MotionBox
                variants={itemVariants}
                w="full"
                h={{ base: 'auto', lg: '100%' }}
                minH={{ base: undefined, lg: HERO_PHOTO_LG.h }}
                display="flex"
                flexDirection="column"
              >
                <VStack
                  align={{ base: 'flex-start', lg: 'flex-end' }}
                  spacing={{ base: 4, lg: 0 }}
                  flex={{ base: undefined, lg: 1 }}
                  minH={{ base: undefined, lg: 0 }}
                  maxW={{ base: 'full', lg: '300px' }}
                  w="full"
                  ml={{ base: 0, lg: 'auto' }}
                  textAlign={{ base: 'left', lg: 'right' }}
                >
                  <HeroStat
                    label="Years building"
                    value="5+"
                    detail="Coding across school, internships, research, and projects."
                  />
                  <HeroFlexGap />
                  <HeroStat
                    label="Internships"
                    value="3"
                    detail="Software engineering roles in product and platform teams."
                  />
                  <HeroFlexGap />
                  <HeroStat
                    label="Research roles"
                    value="2"
                    detail="Graduate and undergraduate research assistantships."
                  />
                  <HeroFlexGap />
                  <Box w="full">
                    <Text {...heroSectionLabelProps} mb={3}>
                      Focus
                    </Text>
                    <Text
                      {...heroBodyTextProps}
                      whiteSpace="pre-line"
                      textAlign={{ base: 'left', lg: 'right' }}
                    >
                      {serviceLines.join('\n')}
                    </Text>
                  </Box>
                </VStack>
              </MotionBox>
            </GridItem>
          </Grid>
        </MotionBox>
      </Container>

      <Box bg="white" py={{ base: 10, lg: 16 }}>
        <Container maxW="container.lg" px={{ base: 5, lg: 10 }}>
          <MotionVStack
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            spacing={{ base: 8, lg: 10 }}
            align={{ base: 'center', lg: 'stretch' }}
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

            <VStack spacing={{ base: 10, lg: 12 }} w="full" alignItems={{ base: 'center', lg: 'stretch' }}>
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </VStack>
          </MotionVStack>
        </Container>
      </Box>

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

             <Flex w={{ base: "full", lg: "auto" }} gap={2} flexWrap="wrap" justify="center">
              <Button
                as={NextLink}
                href="/about"
                size="sm"
                variant="solid"
                rightIcon={<ChevronRightIcon />}
                w="auto"
              >
                Get In Touch
              </Button>
              <Button
                as={NextLink}
                href="/fun/blog"
                size="sm"
                variant="outline"
                w="auto"
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
