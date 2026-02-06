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
} from '@chakra-ui/react';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { MotionBox, MotionVStack, MotionGrid } from '@/lib/motion';
import { containerVariants, itemVariants } from '@/lib/motion-variants';

const userInsights = [
  { number: '01', text: 'Lack of user interactions' },
  { number: '02', text: 'Values listening activity' },
  { number: '03', text: 'Lack of customization' },
  { number: '04', text: 'Potential social media app' },
  { number: '05', text: 'Praises smart algorithm' },
  { number: '06', text: 'Discoverability struggles' },
];

const showcases = [
  { 
    src: '/ips/artist.png', 
    alt: 'spotify artist', 
    title: 'Artist Showcase',
    description: 'User flow for adding a showcase featuring their',
    boldText: 'favourite artist'
  },
  { 
    src: '/ips/song.png', 
    alt: 'spotify song', 
    title: 'Song Showcase',
    description: 'User flow for adding a showcase featuring their',
    boldText: 'favourite song'
  },
  { 
    src: '/ips/all.png', 
    alt: 'spotify all', 
    title: 'Additional Options',
    description: 'Other potential showcase options, including',
    boldText: 'Spotify Wrapped'
  },
];

export default function IPSPage() {
  return (
    <Box>
      {/* Hero Section */}
        <Container maxW="container.lg" px={{ base: 5, lg: 10 }} py={{ base: 10, lg: 20 }}>
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <VStack spacing={6} align="center" textAlign="center">
            <MotionVStack variants={itemVariants} spacing={4}>
              <Badge
                colorScheme="green"
                variant="subtle"
                px={2.5}
                py={0.5}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
              >
                Product Management Fellowship
              </Badge>
              <Heading
                fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Ivey Product Society{' '}
                <Text as="span" color="brand.500">
                  🎧
                </Text>
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                lineHeight="1.6"
              >
                Enhancing Spotify's social experience through customization on the profile page
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
                  src="/ips/ips_hero.png"
                  alt="IPS Hero"
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
                colorScheme="green"
                variant="subtle"
                px={2.5}
                py={0.5}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
              >
                01 | Overview
              </Badge>
              <Heading
                fontSize={{ base: 'xl', lg: '3xl' }}
                fontWeight="700"
                color="gray.800"
              >
                The Path to Product
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                mx="auto"
                lineHeight="1.6"
              >
                The Ivey Product Fellowship is an alumni-facilitated bootcamp where students engage in product-management-focused curriculum and showcase a capstone product to industry professionals. As someone who had little to no prior experience in the product realm, I was thrilled to be surrounded by a community of accomplished alumni.
              </Text>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                mx="auto"
                lineHeight="1.6"
              >
                Having listened to 164,498 minutes of music in just the past year, it was natural for me to select Spotify as the app for my capstone project. As an avid music streamer from morning till night, I've become intimately familiar with the app's latest features and intricate UX/UI design details. However, this immersion also led me to harbor complaints and a persistent feeling that something was missing.
              </Text>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                mx="auto"
                lineHeight="1.6"
              >
                IPS (Ivey Product Society) presented an ideal opportunity for me to address these challenges head-on while gaining valuable insights into the world of product management.
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
                    bg="green.100"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ base: "lg", lg: "2xl" }}
                  >
                    🎯
                  </Box>
                  <VStack spacing={2}>
                    <Text fontWeight="600" color="gray.800">Role</Text>
                    <Text fontSize="md" color="gray.600">Product Management Fellow</Text>
                  </VStack>
                </VStack>
              </MotionBox>

              <MotionBox variants={itemVariants}>
                <VStack spacing={4} align="center" textAlign="center">
                  <Box
                    w="60px"
                    h="60px"
                    borderRadius="full"
                    bg="green.100"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ base: "lg", lg: "2xl" }}
                  >
                    👥
                  </Box>
                  <VStack spacing={2}>
                    <Text fontWeight="600" color="gray.800">Team</Text>
                    <Text fontSize="md" color="gray.600">Ansel (Me 😄), Brennan (Program Lead), David (Alumni Coach), Rohan (Student Mentor)</Text>
                  </VStack>
                </VStack>
              </MotionBox>

              <MotionBox variants={itemVariants}>
                <VStack spacing={4} align="center" textAlign="center">
                  <Box
                    w="60px"
                    h="60px"
                    borderRadius="full"
                    bg="green.100"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ base: "lg", lg: "2xl" }}
                  >
                    🛠️
                  </Box>
                  <VStack spacing={2}>
                    <Text fontWeight="600" color="gray.800">Tools</Text>
                    <Text fontSize="md" color="gray.600">Notion, Figma</Text>
                  </VStack>
                </VStack>
              </MotionBox>

              <MotionBox variants={itemVariants}>
                <VStack spacing={4} align="center" textAlign="center">
                  <Box
                    w="60px"
                    h="60px"
                    borderRadius="full"
                    bg="green.100"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ base: "lg", lg: "2xl" }}
                  >
                    📅
                  </Box>
                  <VStack spacing={2}>
                    <Text fontWeight="600" color="gray.800">Timeline</Text>
                    <Text fontSize="md" color="gray.600">Jan – Apr 2023</Text>
                  </VStack>
                </VStack>
              </MotionBox>
            </MotionGrid>
          </MotionVStack>
        </Container>
      </Box>

      {/* Challenge Section */}
      <Box bg="green.500" py={{ base: 10, lg: 16 }}>
        <Container maxW="container.lg" px={{ base: 5, lg: 10 }}>
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
                px={2.5}
                py={0.5}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
              >
                02 | The Challenge
              </Badge>
              <Heading
                fontSize={{ base: 'xl', lg: '3xl' }}
                fontWeight="700"
                color="white"
              >
                Spotify's Social Gap
              </Heading>
              <Text
                fontSize="md"
                color="white"
                maxW="640px"
                mx="auto"
                lineHeight="1.6"
              >
                How can Spotify bridge its social features gap to boost user engagement and encourage higher platform usage frequency through meaningful music connections?
              </Text>
            </MotionVStack>
          </MotionVStack>
        </Container>
      </Box>

      {/* Problem Alignment Section */}
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
                colorScheme="green"
                variant="subtle"
                px={2.5}
                py={0.5}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
              >
                03 | Problem Alignment
              </Badge>
              <Heading
                fontSize={{ base: 'xl', lg: '3xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Is There Really Something Wrong?
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                mx="auto"
                lineHeight="1.6"
              >
                Spotify's limited social capabilities hinder meaningful interaction between users, resulting in difficulties with music discovery, playlist sharing, and engagement with friends' listening habits. This issue can potentially impede user retention and underutilization of the platform.
              </Text>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                mx="auto"
                lineHeight="1.6"
              >
                To overcome this challenge, Spotify should prioritize enhancing its social features. By introducing customizable profile pages and fostering music-centered social groups, users can connect, share playlists, and discover music more seamlessly.
              </Text>
            </MotionVStack>
          </MotionVStack>
        </Container>
      </Box>

      {/* User Research Section */}
      <Box bg="green.50" py={{ base: 10, lg: 16 }}>
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
                colorScheme="green"
                variant="subtle"
                px={2.5}
                py={0.5}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
              >
                04 | Research
              </Badge>
              <Heading
                fontSize={{ base: 'xl', lg: '3xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Gaining Some User Insights
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                mx="auto"
                lineHeight="1.6"
              >
                To understand Spotify usage among different demographics, I interviewed a diverse group of individuals from around the school. The interviews revealed that while some users enjoy the platform's customization options and algorithm-generated playlists, others found the lack of new content and limited social features to be a drawback.
              </Text>
            </MotionVStack>

            <MotionGrid
              variants={containerVariants}
              templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
              gap={6}
              w="full"
            >
              {userInsights.map((insight, index) => (
                <MotionBox
                  key={insight.number}
                  variants={itemVariants}
                  bg="white"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="gray.200"
                  p={6}
                  _hover={{
                    borderColor: 'green.500',
                    boxShadow: 'lg',
                    transform: 'translateY(-4px)',
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <VStack spacing={4} align="flex-start">
                    <HStack spacing={3}>
                      <Box
                        w="40px"
                        h="40px"
                        borderRadius="full"
                        bg="green.100"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize="md"
                        fontWeight="600"
                        color="green.600"
                      >
                        {insight.number}
                      </Box>
                      <Text fontWeight="600" color="gray.800">
                        {insight.text}
                      </Text>
                    </HStack>
                  </VStack>
                </MotionBox>
              ))}
            </MotionGrid>
          </MotionVStack>
        </Container>
      </Box>

      {/* Value Proposition Section */}
      <Box bg="green.500" py={{ base: 10, lg: 16 }}>
        <Container maxW="container.lg" px={{ base: 5, lg: 10 }}>
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
                px={2.5}
                py={0.5}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
              >
                05 | Value Proposition
              </Badge>
              <Heading
                fontSize={{ base: 'xl', lg: '3xl' }}
                fontWeight="700"
                color="white"
              >
                Enhanced Social Experience
              </Heading>
              <Text
                fontSize="md"
                color="white"
                maxW="640px"
                mx="auto"
                lineHeight="1.6"
              >
                By enhancing its social features through customizable profile pages, Spotify can offer a richer and more rewarding user experience, leading to increased engagement, retention, and satisfaction.
              </Text>
            </MotionVStack>
          </MotionVStack>
        </Container>
      </Box>

      {/* Solution Section */}
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
                colorScheme="green"
                variant="subtle"
                px={2.5}
                py={0.5}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
              >
                06 | Solution
              </Badge>
              <Heading
                fontSize={{ base: 'xl', lg: '3xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Unveiling Your Melodic Persona
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                mx="auto"
                lineHeight="1.6"
              >
                The proposed solution to enhance the user experience on Spotify is the introduction of Customizable Profile Pages. This feature empowers users to personalize their profiles, showcasing their unique personalities and music preferences. Users can fully customize their profile page by adding a featured showcase to display a variety of awards or statistics. This visual customization allows users to express their musical tastes and create visually appealing profiles that capture attention.
              </Text>
            </MotionVStack>

            <MotionBox variants={itemVariants}>
              <Box
                bg="gray.100"
                borderRadius="2xl"
                p={8}
                textAlign="center"
              >
                <VStack spacing={0}>
                  {showcases.map((showcase, index) => (
                    <Box key={showcase.title} w="full">
                      <VStack spacing={6}>
                        <Heading fontSize={{ base: "lg", lg: "2xl" }} fontWeight="600" color="gray.800">
                          {showcase.title}
                        </Heading>
                        <Image
                          src={showcase.src}
                          alt={showcase.alt}
                          width="100%"
                          height="auto"
                          objectFit="cover"
                        />
                        <Text color="gray.600" lineHeight="1.6" fontSize="md" maxW="560px">
                          {showcase.description}{' '}
                          <Text as="span" fontWeight="600" color="green.500">
                            {showcase.boldText}
                          </Text>
                        </Text>
                      </VStack>
                      {index < showcases.length - 1 && (
                        <Divider my={4} borderColor="gray.300" />
                      )}
                    </Box>
                  ))}
                </VStack>
              </Box>
            </MotionBox>
          </MotionVStack>
        </Container>
      </Box>

      {/* Impact Section */}
      <Box bg="green.50" py={{ base: 10, lg: 16 }}>
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
                colorScheme="green"
                variant="subtle"
                px={2.5}
                py={0.5}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
              >
                07 | Impact & Learnings
              </Badge>
              <Heading
                fontSize={{ base: 'xl', lg: '3xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Key Takeaways
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                mx="auto"
                lineHeight="1.6"
              >
                As the curtains draw on my journey with Ivey Product Society, I'm filled with gratitude for the immense growth and learning I have experienced. From creating a Product Requirements Document to conducting user research, the hands-on nature of the program not only sharpened my product skills but also taught me the art of translating ideas into tangible solutions.
              </Text>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                mx="auto"
                lineHeight="1.6"
              >
                Undoubtedly, one of the standout moments was presenting my capstone project to a panel of PMs from Meta and Wealthsimple. The intensity of the technical questions definitely put me on the spot, but the thorough feedback I received left a lasting mark on my product mindset and thought process. It was a transformative experience that propelled me to new heights.
              </Text>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                mx="auto"
                lineHeight="1.6"
              >
                I extend my heartfelt appreciation to the dedicated Ivey alumni who selflessly dedicate their valuable time to the fellowship. Their mentorship and guidance have opened doors I never imagined possible. This incredible opportunity has ignited an unquenchable thirst for product innovation within me, and I eagerly look forward to the exciting journey ahead!
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
                borderColor="gray.200"
                p={8}
                _hover={{
                  borderColor: 'green.500',
                  boxShadow: 'lg',
                  transform: 'translateY(-4px)',
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <VStack spacing={4} align="flex-start">
                  <HStack spacing={4}>
                    <Text fontSize={{ base: "2xl", lg: "3xl" }}>🎯</Text>
                    <Heading fontSize="md" fontWeight="600" color="gray.800">
                      Product Strategy
                    </Heading>
                  </HStack>
                  <Text color="gray.600" lineHeight="1.6">
                    Learned to identify user pain points and translate them into actionable product features that drive user engagement and satisfaction.
                  </Text>
                </VStack>
              </MotionBox>

              <MotionBox
                variants={itemVariants}
                bg="white"
                borderRadius="xl"
                border="1px solid"
                borderColor="gray.200"
                p={8}
                _hover={{
                  borderColor: 'green.500',
                  boxShadow: 'lg',
                  transform: 'translateY(-4px)',
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <VStack spacing={4} align="flex-start">
                  <HStack spacing={4}>
                    <Text fontSize={{ base: "2xl", lg: "3xl" }}>👥</Text>
                    <Heading fontSize="md" fontWeight="600" color="gray.800">
                      User Research
                    </Heading>
                  </HStack>
                  <Text color="gray.600" lineHeight="1.6">
                    Developed skills in conducting user interviews, analyzing feedback, and using insights to inform product decisions and feature prioritization.
                  </Text>
                </VStack>
              </MotionBox>

              <MotionBox
                variants={itemVariants}
                bg="white"
                borderRadius="xl"
                border="1px solid"
                borderColor="gray.200"
                p={8}
                _hover={{
                  borderColor: 'green.500',
                  boxShadow: 'lg',
                  transform: 'translateY(-4px)',
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <VStack spacing={4} align="flex-start">
                  <HStack spacing={4}>
                    <Text fontSize={{ base: "2xl", lg: "3xl" }}>🎨</Text>
                    <Heading fontSize="md" fontWeight="600" color="gray.800">
                      Design Thinking
                    </Heading>
                  </HStack>
                  <Text color="gray.600" lineHeight="1.6">
                    Applied design thinking principles to create user-centered solutions that balance business objectives with user needs and technical constraints.
                  </Text>
                </VStack>
              </MotionBox>

              <MotionBox
                variants={itemVariants}
                bg="white"
                borderRadius="xl"
                border="1px solid"
                borderColor="gray.200"
                p={8}
                _hover={{
                  borderColor: 'green.500',
                  boxShadow: 'lg',
                  transform: 'translateY(-4px)',
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <VStack spacing={4} align="flex-start">
                  <HStack spacing={4}>
                    <Text fontSize={{ base: "2xl", lg: "3xl" }}>📊</Text>
                    <Heading fontSize="md" fontWeight="600" color="gray.800">
                      Market Analysis
                    </Heading>
                  </HStack>
                  <Text color="gray.600" lineHeight="1.6">
                    Gained experience in competitive analysis, market research, and understanding industry trends to inform strategic product decisions.
                  </Text>
                </VStack>
              </MotionBox>
            </MotionGrid>
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
                Product Management Journey
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="560px"
                mx="auto"
                lineHeight="1.6"
              >
                The Ivey Product Society fellowship was a transformative experience that deepened my understanding of product management and user-centered design.
              </Text>
            </MotionVStack>

            <Flex w="auto" direction="row" gap={3} flexWrap="wrap" justify="center">
              <Button
                as={Link}
                href="/work/rbc"
                size="sm"
                variant="solid"
                rightIcon={<ChevronRightIcon />}
                w="auto"
              >
                Next Project
              </Button>
              <Button
                as={Link}
                href="/work/telus"
                size="sm"
                variant="outline"
                leftIcon={<ChevronLeftIcon />}
                w="auto"
              >
                Previous Project
              </Button>
            </Flex>
          </MotionVStack>
        </Container>
      </Box>
    </Box>
  );
}
