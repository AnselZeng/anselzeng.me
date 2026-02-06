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
  Grid,
  Badge,
  useBreakpointValue,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  OrderedList,
  ListItem,
} from '@chakra-ui/react';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { PlacesTable } from '@/components/fun/PlacesTable';
import World from '@react-map/world';
import { MotionBox, MotionVStack, MotionHStack, MotionGrid, MotionAccordionItem } from '@/lib/motion';
import { containerVariants, itemVariants } from '@/lib/motion-variants';

const travelStats = [
  { number: '18', label: 'Countries Visited', icon: '🌍' },
  { number: '6', label: 'Territories Explored', icon: '🏝️' },
  { number: '8/13', label: 'Canadian Provinces', icon: '🍁' },
  { number: '10/50', label: 'US States', icon: '🗽' },
];

interface AccordionItemListProps {
  title: string;
  items: string[];
}

const AccordionItemList: React.FC<AccordionItemListProps> = ({ title, items }) => (
  <MotionAccordionItem
    variants={itemVariants}
    border="1px solid"
    borderColor="gray.200"
    borderRadius="lg"
    mb={4}
  >
    <h2>
      <AccordionButton _hover={{ bg: 'gray.50' }}>
        <Box as="span" flex="1" textAlign="left" fontWeight="600" color="gray.800">
          {title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <OrderedList spacing={1}>
        {items.map((item, index) => (
          <ListItem key={index} color="gray.600" ml={4}>
            {item}
          </ListItem>
        ))}
      </OrderedList>
    </AccordionPanel>
  </MotionAccordionItem>
);

export default function TravelsPage() {
  const mapSize = useBreakpointValue({ base: 500, lg: 600 });

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
                colorScheme="teal"
                variant="subtle"
                px={2.5}
                py={0.5}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
              >
                Travel Adventures
              </Badge>
              <Heading
                fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Adventures Around the Globe ✈️
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                lineHeight="1.6"
              >
                Exploring cultures, cities, and natural wonders
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
                colorScheme="teal"
                variant="subtle"
                px={2.5}
                py={0.5}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
              >
                My Travel Story
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
                Raised across three continents in three countries—the Netherlands, China, and Canada—I've had the unique privilege of experiencing the richness and diversity of different cultures early on. These experiences shaped my curiosity, fueling my desire to always ask "why" and "how," and sparked a lifelong passion for understanding the world around me.
              </Text>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                mx="auto"
                lineHeight="1.6"
              >
                A special place in my heart is reserved for cities and their stories, particularly when it comes to urban development. From Barcelona's superblocks that redefine modern city life to the radial design of Mexico City, these cities reflect not only the ingenuity of their people but also the evolving needs of the communities they serve.
              </Text>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                mx="auto"
                lineHeight="1.6"
              >
                Some of my favorite travel memories include zip-lining through the cloud forests of Monteverde, relaxing in a rooftop hot tub while overlooking the Aegean Sea in Santorini, and spending an unforgettable night at Everest Base Camp. Each adventure deepened my appreciation for the world's natural wonders and the diverse experiences it offers.
              </Text>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                mx="auto"
                lineHeight="1.6"
              >
                Earlier this year, my mom embarked on a remarkable expedition to Antarctica, fulfilling her lifelong dream of visiting all seven continents. Her achievement inspires me to continue exploring the world, not just to see new places but to gain new perspectives. Each journey and destination helps me see the bigger picture, deepens my understanding of the world, and ultimately inspires me to make a meaningful impact.
              </Text>
            </MotionVStack>
          </MotionVStack>
        </Container>
      </Box>

      {/* Travel Stats Section */}
      <Box bg="teal.50" py={{ base: 10, lg: 16 }}>
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
                colorScheme="teal"
                variant="subtle"
                px={2.5}
                py={0.5}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
              >
                Travel Statistics
              </Badge>
              <Heading
                fontSize={{ base: 'xl', lg: '3xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Places I've Explored
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="520px"
                mx="auto"
                lineHeight="1.6"
              >
                A comprehensive overview of my global adventures and explorations.
              </Text>
            </MotionVStack>

            {/* World Map with Legend */}
            <MotionBox variants={itemVariants} w="full">
              <Box
                bg="white"
                borderRadius="xl"
                border="1px solid"
                borderColor="gray.200"
                p={{ base: 4, lg: 8 }}
                _hover={{
                  borderColor: 'teal.500',
                  boxShadow: 'lg',
                  transform: 'translateY(-4px)',
                }}
                transition="all 0.3s ease"
              >
                <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 6, lg: 8 }} align={{ base: "center", lg: "start" }}>
                  {/* Map */}
                  <Box flex={{ base: "none", lg: 2 }} w={{ base: "100%", lg: "auto" }}>
                    <VStack spacing={{ base: 2, lg: 4 }}>
                      <Box w="100%" h={{ base: "250px", lg: "400px" }} display="flex" alignItems="center" justifyContent="center">
                        <World
                          type="select-multiple"
                          size={mapSize}
                          mapColor="#E2E8F0"
                          strokeColor="#CBD5E0"
                          strokeWidth={1}
                          hoverColor="#0D9488"
                          selectColor="#14B8A6"
                          hints={false}
                          disableClick={true}
                          cityColors={{
                            "Netherlands": "#14B8A6",
                            "China": "#14B8A6",
                            "Hong Kong": "#14B8A6",
                            "Maldives": "#14B8A6",
                            "France": "#14B8A6",
                            "Monaco": "#14B8A6",
                            "Thailand": "#14B8A6",
                            "Vietnam": "#14B8A6",
                            "Philippines": "#14B8A6",
                            "Malaysia": "#14B8A6",
                            "Greece": "#14B8A6",
                            "Canada": "#14B8A6",
                            "United States": "#14B8A6",
                            "Aruba": "#14B8A6",
                            "Mexico": "#14B8A6",
                            "Panama": "#14B8A6",
                            "Costa Rica": "#14B8A6",
                            "Puerto Rico": "#14B8A6",
                            "Cuba": "#14B8A6",
                            "Curaçao": "#14B8A6",
                            "Bonaire": "#14B8A6",
                            "Sint Maarten": "#14B8A6",
                            "Anguilla": "#14B8A6",
                            "Austria": "#14B8A6",
                            "Czech Republic": "#14B8A6",
                            "Czechia": "#14B8A6"
                          }}
                          onSelect={(countries) => {
                            console.log('Selected countries:', countries);
                          }}
                        />
                      </Box>
                    </VStack>
                  </Box>

                  {/* Legend */}
                  <Box flex={{ base: "none", lg: 1 }} w={{ base: "100%", lg: "auto" }} minW={{ base: "auto", lg: "200px" }} h={{ base: "auto", lg: "400px" }} display="flex" alignItems="center" justifyContent="center">
                    <Box
                      bg="gray.50"
                      borderRadius="lg"
                      p={4}
                      border="1px solid"
                      borderColor="gray.200"
                      w="full"
                    >
                      <VStack spacing={3} align="stretch">
                        {travelStats.map((stat, index) => (
                          <HStack
                            key={stat.label}
                            spacing={3}
                            align="center"
                          >
                            <Text fontSize="md" m={0} p={0}>{stat.icon}</Text>
                            <HStack spacing={2} align="center">
                              <Text fontSize="md" fontWeight="700" color="teal.500" m={0} p={0}>
                                {stat.number}
                              </Text>
                              <Text fontSize={{ base: "xs", lg: "sm" }} fontWeight="500" color="gray.600" m={0} p={0}>
                                {stat.label}
                              </Text>
                            </HStack>
                          </HStack>
                        ))}
                      </VStack>
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </MotionBox>
          </MotionVStack>
        </Container>
      </Box>


      {/* Travel Logs Section */}
      <Box bg="white" py={{ base: 10, lg: 16 }}>
        <PlacesTable />
      </Box>

      {/* Inspiration Section */}
      <Box bg="teal.50" py={{ base: 10, lg: 16 }}>
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
                colorScheme="teal"
                variant="subtle"
                px={2.5}
                py={0.5}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
              >
                Travel Philosophy
              </Badge>
              <Heading
                fontSize={{ base: 'xl', lg: '3xl' }}
                fontWeight="700"
                color="gray.800"
              >
                Why I Travel
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                mx="auto"
                lineHeight="1.6"
              >
                Earlier this year, my mom embarked on a remarkable expedition to Antarctica, fulfilling her lifelong dream of visiting all seven continents. Her achievement inspires me to continue exploring the world, not just to see new places but to gain new perspectives.
              </Text>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="640px"
                mx="auto"
                lineHeight="1.6"
              >
                Each journey and destination helps me see the bigger picture, deepens my understanding of the world, and ultimately inspires me to make a meaningful impact.
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
                  title: 'Cultural Understanding',
                  description: 'Experiencing different ways of life and perspectives.',
                  icon: '🌍',
                },
                {
                  title: 'Personal Growth',
                  description: 'Stepping out of comfort zones and embracing new challenges.',
                  icon: '🌱',
                },
                {
                  title: 'Global Perspective',
                  description: 'Understanding interconnectedness and shared humanity.',
                  icon: '🤝',
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
                    borderColor: 'teal.500',
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
                Ready for the Next Adventure
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="520px"
                mx="auto"
                lineHeight="1.6"
              >
                Travel continues to be one of my greatest sources of inspiration and learning. I'm always excited to discover new places and create meaningful connections around the world.
              </Text>
            </MotionVStack>

            <Flex w={{ base: "full", lg: "auto" }} direction={{ base: "column", lg: "row" }} gap={3}>
              <Button
                as={Link}
                href="/fun/blog"
                size="sm"
                variant="solid"
                rightIcon={<ChevronRightIcon />}
                w={{ base: "full", lg: "auto" }}
              >
                Read My Blog
              </Button>
              <Button
                as={Link}
                href="/fun/design"
                size="sm"
                variant="outline"
                leftIcon={<ChevronLeftIcon />}
                w={{ base: "full", lg: "auto" }}
              >
                View My Designs
              </Button>
            </Flex>
          </MotionVStack>
        </Container>
      </Box>
    </Box>
  );
}
