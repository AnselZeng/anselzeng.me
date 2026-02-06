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
  Avatar,
} from '@chakra-ui/react';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { MotionBox, MotionVStack, MotionHStack, MotionGrid } from '@/lib/motion';
import { containerVariants, itemVariants } from '@/lib/motion-variants';

const blogPosts = [
  {
    id: 'chapter',
    title: 'Starting a New Chapter',
    excerpt: "It's 11:56 am, Friday, November 14, 2025. This morning I went out for a nice walk around the neighbourhood, through the forest and past the train tracks to grab a cup of coffee from Timmies. Going on walks has become more routine lately, since it feels like I'm just counting down the days, sitting at home aimlessly, in a way that weirdly reminds me of quarantine five years ago. Each walk feels like downtime for my eyes and brain after spending nearly every waking minute staring at my monitor, which pretty much sums up my day-to-day.",
    image: '/blog/chapter.png',
    date: 'Nov 14, 2025',
    readTime: '4 min read',
    category: 'Reflection',
    color: 'orange',
    href: '/fun/blog/chapter',
  },
  {
    id: 'harbin',
    title: 'Five Days in Harbin',
    excerpt: "It's 4:07 pm, Thursday, February 6, 2025. I just returned home with my Grandpa after joining him on his daily walk. As I listened to his numerous travels and adventures, I felt inspired to write down my recent solo trip to the chilly city of Harbin. Located in China's northernmost and easternmost province, Heilongjiang, the area is notoriously known for its bitterly cold winters. When I stepped off the high-speed rail, I was greeted by what felt like a cool breeze.",
    image: '/blog/harbin/cover.png',
    date: 'Feb 6, 2025',
    readTime: '5 min read',
    category: 'Travel',
    color: 'blue',
    href: '/fun/blog/harbin',
  },
  {
    id: 'everest',
    title: 'A Night on Everest',
    excerpt: "It's 3:09 pm, Wednesday, June 26, 2024. I'm sitting with my Dad on our flight from Lhasa to Chengdu and eventually back home to Beijing. Today marks the end of our 10-day journey in Tibet. This is undoubtedly one of the most memorable trips I've ever taken. From the 40-hour train ride that took us from sea level to an altitude of over 3,000 m, to visiting Buddhist monasteries and learning about the history of this beautiful religion, there's one event that's etched into my memory the most: spending a night on Mount Everest Base Camp.",
    image: '/blog/everest/cover.png',
    date: 'Jun 26, 2024',
    readTime: '5 min read',
    category: 'Adventure',
    color: 'cyan',
    href: '/fun/blog/everest',
  },
  {
    id: 'longines',
    title: 'From Crown to Caliber',
    excerpt: "It's 8:09 am, Wednesday, July 27, 2022. I'm currently taking the train to work in person in downtown Toronto. Unlike previous business casual fits, hidden underneath my left sleeve today is a special piece of accessory. Here's the story of my first mechanical watch. An unspoken rule in the watch industry is that you can, and must only, purchase a timepiece on a special occasion or hitting a particular milestone.",
    image: '/blog/longines.png',
    date: 'Jul 27, 2022',
    readTime: '2 min read',
    category: 'Personal',
    color: 'blue',
    href: '/fun/blog/longines',
  },
  {
    id: 'blackpink',
    title: 'Blackpink In Your Area',
    excerpt: "It's 10:24 pm, Friday, February 12, 2021. Laying on the living room couch, I got the fireplace turned on and have finally decided to write my second blog post. Now a lot has happened since the first, which was written nine days before my first day of university. Fast forward to today, which happens to be Chinese New Year, I've just finished midterms and it's the beginning of our second reading week.",
    image: '/blog/blackpink.png',
    date: 'Feb 12, 2021',
    readTime: '3 min read',
    category: 'Music',
    color: 'teal',
    href: '/fun/blog/blackpink',
  },
  {
    id: 'ghibli',
    title: 'Castle in the Sky',
    excerpt: "It's 4:45 pm, Monday, August 31, 2020. I'm sitting by the cottage docks outlooking Muskoka Lakes, attempting to write down some of my thoughts for the first time. It is now T-minus nine days before the first day of university. As I prepare for the next chapter in my life, stress and pressure begin to sink in. Since the beginning of quarantine, it's been tough to find comfort. Every day felt miserable, useless, being stuck in an endless cycle of boredom and solitude.",
    image: '/blog/ghibli.jpg',
    date: 'Aug 31, 2020',
    readTime: '2 min read',
    category: 'Reflection',
    color: 'green',
    href: '/fun/blog/ghibli',
  },
];

const categories = [
  { name: 'All', count: 6, color: 'gray' },
  { name: 'Travel', count: 2, color: 'blue' },
  { name: 'Adventure', count: 1, color: 'cyan' },
  { name: 'Personal', count: 1, color: 'purple' },
  { name: 'Music', count: 1, color: 'teal' },
  { name: 'Reflection', count: 2, color: 'green' },
];

export default function BlogPage() {
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
                colorScheme="cyan"
                variant="subtle"
                px={2.5}
                py={0.5}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
              >
                Personal Blog
              </Badge>
              <Heading
                fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
                fontWeight="700"
                color="gray.800"
              >
                One Thought Per Year 📝
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                lineHeight="1.6"
              >
                A collection of thoughts, experiences, and reflections from my journey through life
              </Text>
            </MotionVStack>
          </VStack>
        </MotionBox>
      </Container>

      {/* About Blog Section */}
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
                colorScheme="cyan"
                variant="subtle"
                px={2.5}
                py={0.5}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
              >
                About This Blog
              </Badge>
              <Heading
                fontSize={{ base: 'xl', lg: '3xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Why I Write
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                mx="auto"
                lineHeight="1.6"
              >
                Writing has become one of my most cherished forms of self-expression and reflection. Each post captures a moment in time, a thought, or an experience that has shaped my perspective on life. From travel adventures to personal milestones, these posts represent my journey of growth, discovery, and understanding of the world around me.
              </Text>
            </MotionVStack>

            <MotionGrid
              variants={containerVariants}
              templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
              gap={8}
              w="full"
            >
              {[
                {
                  title: 'Self Reflection',
                  description: 'Reflecting on experiences and lessons learned along the way.',
                  icon: '🌱',
                },
                {
                  title: 'Travel Stories',
                  description: 'Sharing adventures and discoveries from around the world.',
                  icon: '✈️',
                },
                {
                  title: 'Life Moments',
                  description: 'Capturing meaningful experiences and personal milestones.',
                  icon: '📸',
                },
              ].map((value, index) => (
                <MotionBox
                  key={value.title}
                  variants={itemVariants}
                  bg="white"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="gray.200"
                  p={8}
                  textAlign="center"
                  _hover={{
                    borderColor: 'cyan.500',
                    boxShadow: 'lg',
                    transform: 'translateY(-4px)',
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <VStack spacing={4}>
                    <Text fontSize={{ base: "2xl", lg: "4xl" }}>{value.icon}</Text>
                    <Heading fontSize="md" fontWeight="600" color="gray.800">
                      {value.title}
                    </Heading>
                    <Text fontSize="md" color="gray.600" lineHeight="1.5">
                      {value.description}
                    </Text>
                  </VStack>
                </MotionBox>
              ))}
            </MotionGrid>
          </MotionVStack>
        </Container>
      </Box>

      {/* Blog Posts Section */}
      <Box bg="cyan.50" py={{ base: 10, lg: 16 }}>
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
                colorScheme="cyan"
                variant="subtle"
                px={2.5}
                py={0.5}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
              >
                Latest Posts
              </Badge>
              <Heading
                fontSize={{ base: 'xl', lg: '3xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Recent Thoughts
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="560px"
                mx="auto"
                lineHeight="1.6"
              >
                A collection of my personal reflections, travel experiences, and moments of inspiration.
              </Text>
            </MotionVStack>

            <VStack spacing={6} w="full">
              {blogPosts.map((post, index) => (
                <MotionBox
                  key={post.id}
                  variants={itemVariants}
                  w="full"
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
                  <Link href={post.href}>
                    <Flex
                      direction={{ base: 'column', lg: 'row' }}
                      align="stretch"
                    >
                      {/* Image Section */}
                      <Box 
                        flex={{ base: 'none', lg: '0 0 500px' }}
                        w={{ base: '100%', lg: '500px' }}
                        h={{ base: '200px', lg: 'auto' }}
                        overflow="hidden"
                        onContextMenu={(e) => e.preventDefault()}
                        userSelect="none"
                      >
                        <Image
                          src={post.image}
                          alt={post.title}
                          width="100%"
                          height="100%"
                          objectFit="cover"
                          draggable={false}
                          onContextMenu={(e) => e.preventDefault()}
                        />
                      </Box>
                      
                      {/* Content Section */}
                      <VStack
                        flex={1}
                        align="flex-start"
                        justify="space-between"
                        p={6}
                        spacing={4}
                      >
                        {/* Author Info */}
                        <HStack spacing={3} align="center">
                          <Box
                            onContextMenu={(e) => e.preventDefault()}
                            userSelect="none"
                          >
                            <Avatar name="Ansel Zeng" src="/blog/pfp.png" size="md" />
                          </Box>
                          <VStack spacing={2} align="flex-start">
                            <Text fontSize="md" fontWeight="600" color="gray.800" lineHeight="1.2" m={0} p={0}>
                              Ansel Zeng
                            </Text>
                            <Text fontSize="md" color="gray.500" lineHeight="1" m={0} p={0}>
                              {post.date}
                            </Text>
                          </VStack>
                        </HStack>

                        {/* Main Content */}
                        <VStack spacing={3} align="flex-start" w="full" flex={1}>
                          <Heading fontSize={{ base: 'xl', lg: '2xl' }} fontWeight="600" color="gray.800">
                            {post.title}
                          </Heading>
                          <Text color="gray.600" lineHeight="1.6" noOfLines={4} m={0} p={0}>
                            {post.excerpt}
                          </Text>
                        </VStack>

                        {/* Footer */}
                        <HStack spacing={2} w="full" justify="space-between" align="center">
                          <Text fontSize="md" color="gray.500" m={0} p={0}>
                            {post.readTime}
                          </Text>
                          <ChevronRightIcon color="gray.400" />
                        </HStack>
                      </VStack>
                    </Flex>
                  </Link>
                </MotionBox>
              ))}
            </VStack>
          </MotionVStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="white" py={{ base: 10, lg: 16 }}>
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
                Stay Connected
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="560px"
                mx="auto"
                lineHeight="1.6"
              >
                I'm always excited to share new thoughts and experiences. Follow along for more stories from my journey.
              </Text>
            </MotionVStack>

            <Flex w={{ base: "full", lg: "auto" }} direction={{ base: "column", lg: "row" }} gap={3}>
              <Button
                as={Link}
                href="/about"
                size="sm"
                variant="solid"
                w={{ base: "full", lg: "auto" }}
              >
                Learn More About Me
              </Button>
              <Button
                as={Link}
                href="/fun/travels"
                size="sm"
                variant="outline"
                leftIcon={<ChevronLeftIcon />}
                w={{ base: "full", lg: "auto" }}
              >
                View My Travels
              </Button>
            </Flex>
          </MotionVStack>
        </Container>
      </Box>
    </Box>
  );
}
