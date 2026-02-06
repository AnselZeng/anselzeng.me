'use client';

import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  HStack,
  Flex,
  Image,
  useDisclosure,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const itemVariants = {
  visible: { opacity: 1, y: 0 },
};

const movies = [
  { src: "/about/movies-shows/movies/lit.jpg", title: "Lost in Translation", year: "2003", director: "Sofia Coppola", rating: "9/10", note: "Perfectly captures the loneliness of being in a foreign place. Bill Murray's subtle performance is incredible." },
  { src: "/about/movies-shows/movies/br.jpg", title: "Blade Runner 2049", year: "2017", director: "Denis Villeneuve", rating: "8.5/10", note: "Visually stunning sequel that honours the original while standing on its own. The cinematography is breathtaking." },
  { src: "/about/movies-shows/movies/lis.jpg", title: "Lost in Starlight", year: "2025", director: "Han Ji-won", rating: "8/10", note: "Anticipated sci-fi romance with beautiful visuals and emotional depth. Can't wait for this one!" },
  { src: "/about/movies-shows/movies/lms.jpg", title: "Little Miss Sunshine", year: "2006", director: "Jonathan Dayton & Valerie Faris", rating: "9.5/10", note: "Perfect blend of comedy and heart. The dysfunctional family road trip that everyone can relate to." },
  { src: "/about/movies-shows/movies/minari.jpg", title: "Minari", year: "2020", director: "Lee Isaac Chung", rating: "9/10", note: "Beautiful portrayal of immigrant family life. The grandmother character steals every scene she's in." },
  { src: "/about/movies-shows/movies/whiplash.jpg", title: "Whiplash", year: "2014", director: "Damien Chazelle", rating: "9.5/10", note: "Intense and relentless. JK Simmons' performance is terrifying and mesmerizing at the same time." },
  { src: "/about/movies-shows/movies/baby.jpg", title: "Baby Driver", year: "2017", director: "Edgar Wright", rating: "8.5/10", note: "Pure cinematic joy with incredible music synchronization. Edgar Wright's style at its finest." }
];

const shows = [
  { src: "/about/movies-shows/shows/downton.jpg", title: "Downton Abbey", startYear: "2010", endYear: "2015", seasons: "6 seasons", rating: "8.5/10", note: "Perfect period drama with incredible attention to detail. The character development is masterful." },
  { src: "/about/movies-shows/shows/hoc.jpg", title: "House of Cards", startYear: "2013", endYear: "2018", seasons: "6 seasons", rating: "8/10", note: "Political thriller that defined Netflix originals. Kevin Spacey's Frank Underwood was iconic." },
  { src: "/about/movies-shows/shows/got.jpg", title: "Game of Thrones", startYear: "2011", endYear: "2019", seasons: "8 seasons", rating: "9/10", note: "Epic fantasy that changed television forever. Despite the ending, the journey was incredible." },
  { src: "/about/movies-shows/shows/bojack.jpg", title: "BoJack Horseman", startYear: "2014", endYear: "2020", seasons: "6 seasons", rating: "9.5/10", note: "Deepest animated show ever made. Tackles depression, addiction, and redemption with incredible nuance." },
  { src: "/about/movies-shows/shows/nge.jpg", title: "Neon Genesis Evangelion", startYear: "1995", endYear: "1996", seasons: "1 season", rating: "9/10", note: "Mind-bending anime that explores psychology and philosophy. The ending still confuses me." },
  { src: "/about/movies-shows/shows/office.jpg", title: "The Office", startYear: "2005", endYear: "2013", seasons: "9 seasons", rating: "9.5/10", note: "The ultimate comfort show. Perfect blend of cringe comedy and heartwarming moments." },
  { src: "/about/movies-shows/shows/startup.jpg", title: "Start-Up", startYear: "2020", endYear: "2020", seasons: "1 season", rating: "8/10", note: "Korean drama about tech startups. Great character development and emotional storytelling." }
];

export default function InterestsGrid() {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const { isOpen: isMoviesOpen, onOpen: onMoviesOpen, onClose: onMoviesClose } = useDisclosure();
  const { isOpen: isMusicOpen, onOpen: onMusicOpen, onClose: onMusicClose } = useDisclosure();
  const { isOpen: isSportsOpen, onOpen: onSportsOpen, onClose: onSportsClose } = useDisclosure();
  const { isOpen: isVideographyOpen, onOpen: onVideographyOpen, onClose: onVideographyClose } = useDisclosure();
  const [selectedVideoTab, setSelectedVideoTab] = useState(0);
  
  // Sports teams state
  const [teamPositions, setTeamPositions] = useState<Record<string, { position: string; name: string; logo: string; league: string; motto: string }>>({
    saints: { position: "top", name: "New Orleans Saints", logo: "/about/sports/saints.png", league: "NFL • American Football", motto: "Who Dat Nation" },
    spurs: { position: "topRight", name: "San Antonio Spurs", logo: "/about/sports/spurs.png", league: "NBA • Basketball", motto: "Go Spurs Go" },
    blackhawks: { position: "right", name: "Chicago Blackhawks", logo: "/about/sports/blackhawks.png", league: "NHL • Ice Hockey", motto: "Let's Go Hawks" },
    blueJays: { position: "bottomRight", name: "Toronto Blue Jays", logo: "/about/sports/jays.png", league: "MLB • Baseball", motto: "Let's Go Blue Jays" },
    chelsea: { position: "bottom", name: "Chelsea FC", logo: "/about/sports/chelsea.png", league: "Premier League • England", motto: "Keep The Blue Flag Flying High" },
    barcelona: { position: "bottomLeft", name: "FC Barcelona", logo: "/about/sports/barcelona.png", league: "La Liga • Spain", motto: "Més que un club" },
    ferrari: { position: "left", name: "Scuderia Ferrari", logo: "/about/sports/ferrari.png", league: "Formula 1 • Italy", motto: "Forza Ferrari" },
    netherlands: { position: "topLeft", name: "Netherlands (KNVB)", logo: "/about/sports/knvb.png", league: "FIFA • National Team", motto: "Hup Holland Hup" },
    usc: { position: "center", name: "USC Trojans", logo: "/about/sports/usc.png", league: "NCAA • College Football", motto: "Fight On" }
  });

  const getCenterTeam = () => {
    return Object.values(teamPositions).find(team => team.position === "center");
  };

  const swapWithCenter = (clickedTeamKey: string) => {
    setTeamPositions(prev => {
      const newPositions = { ...prev };
      const centerTeamKey = Object.keys(newPositions).find(key => newPositions[key as keyof typeof newPositions].position === "center");
      
      if (centerTeamKey) {
        // Swap positions
        const clickedPosition = newPositions[clickedTeamKey as keyof typeof newPositions].position;
        newPositions[clickedTeamKey as keyof typeof newPositions].position = "center";
        newPositions[centerTeamKey as keyof typeof newPositions].position = clickedPosition;
      }

      return newPositions;
    });
  };

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
        {/* 1. Movies & Shows Section */}
        <MotionBox
          variants={itemVariants}
          bg="white"
          borderRadius="2xl"
          border="1px solid"
          borderColor="gray.200"
          p={6}
          cursor="pointer"
          _hover={{
            borderColor: "red.300",
            boxShadow: "lg",
            transform: "translateY(-2px)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={() => {
            if (isMobile) {
              alert("Coming Soon!");
            } else {
              onMoviesOpen();
            }
          }}
        >
          <VStack spacing={3} align="center" textAlign="center">
            <Box
              w="80px"
              h="80px"
              bg="red.50"
              borderRadius="xl"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="4xl">🍿</Text>
            </Box>
            <Heading fontSize="xl" fontWeight="700" color="gray.800">Movies & Shows</Heading>
            <Text fontSize="md" color="gray.600" lineHeight="1.6" noOfLines={3}>
              From Studio Ghibli films to binge-worthy series. I love getting lost in great storytelling.
            </Text>
            <Text fontSize="sm" color="red.500" fontWeight="500">{isMobile ? "Coming Soon" : "Click to learn more"}</Text>
          </VStack>
        </MotionBox>

        {/* 2. Music Section */}
        <MotionBox
          variants={itemVariants}
          bg="white"
          borderRadius="2xl"
          border="1px solid"
          borderColor="gray.200"
          p={6}
          cursor="pointer"
          _hover={{
            borderColor: "teal.300",
            boxShadow: "lg",
            transform: "translateY(-2px)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={() => {
            if (isMobile) {
              alert("Coming Soon!");
            } else {
              onMusicOpen();
            }
          }}
        >
          <VStack spacing={3} align="center" textAlign="center">
            <Box
              w="80px"
              h="80px"
              bg="teal.50"
              borderRadius="xl"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="4xl">🎵</Text>
            </Box>
            <Heading fontSize="xl" fontWeight="700" color="gray.800">Music</Heading>
            <Text fontSize="md" color="gray.600" lineHeight="1.6" noOfLines={3}>
              A huge music enthusiast with 150K+ minutes streamed annually. From vinyl collecting to discovering new artists.
            </Text>
            <Text fontSize="sm" color="teal.500" fontWeight="500">{isMobile ? "Coming Soon" : "Click to learn more"}</Text>
          </VStack>
        </MotionBox>

        {/* 3. Sports Teams Section */}
        <MotionBox
          variants={itemVariants}
          bg="white"
          borderRadius="2xl"
          border="1px solid"
          borderColor="gray.200"
          p={6}
          cursor="pointer"
          _hover={{
            borderColor: "orange.300",
            boxShadow: "lg",
            transform: "translateY(-2px)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={() => {
            if (isMobile) {
              alert("Coming Soon!");
            } else {
              onSportsOpen();
            }
          }}
        >
          <VStack spacing={3} align="center" textAlign="center">
            <Box
              w="80px"
              h="80px"
              bg="orange.50"
              borderRadius="xl"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="4xl">⚽</Text>
            </Box>
            <Heading fontSize="xl" fontWeight="700" color="gray.800">Sports Teams</Heading>
            <Text fontSize="md" color="gray.600" lineHeight="1.6" noOfLines={3}>
              Following multiple teams across different sports and leagues. Always cheering for my favourites.
            </Text>
            <Text fontSize="sm" color="orange.500" fontWeight="500">{isMobile ? "Coming Soon" : "Click to learn more"}</Text>
          </VStack>
        </MotionBox>

        {/* 4. Camping & Nature Section */}
        {/* Note: Modal was disabled - green colors used were: green.300 (hover border), green.500 (text), green.600 (modal title), green.50 (modal bg), green.800 (modal text), green.700 (modal bullets) */}
        <MotionBox
          variants={itemVariants}
          bg="white"
          borderRadius="2xl"
          border="1px solid"
          borderColor="gray.200"
          p={6}
        >
          <VStack spacing={3} align="center" textAlign="center">
            <Box
              w="80px"
              h="80px"
              bg="green.50"
              borderRadius="xl"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="4xl">🏕️</Text>
            </Box>
            <Heading fontSize="xl" fontWeight="700" color="gray.800">Camping & Nature</Heading>
            <Text fontSize="md" color="gray.600" lineHeight="1.6" noOfLines={3}>
              From scouting adventures to outdoor exploration. Proud recipient of the Chief Scout&apos;s Award.
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="500">Coming Soon</Text>
          </VStack>
        </MotionBox>

        {/* 5. Hockey Section */}
        {/* Note: Modal was disabled - colors used were: blue.300 (hover border), blue.500 (text), blue.600 (modal title), blue.50 (modal bg), blue.800 (modal text), blue.700 (modal bullets) */}
        <MotionBox
          variants={itemVariants}
          bg="white"
          borderRadius="2xl"
          border="1px solid"
          borderColor="gray.200"
          p={6}
        >
          <VStack spacing={3} align="center" textAlign="center">
            <Box
              w="80px"
              h="80px"
              bg="blue.50"
              borderRadius="xl"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="4xl">🏒</Text>
            </Box>
            <Heading fontSize="xl" fontWeight="700" color="gray.800">Hockey</Heading>
            <Text fontSize="md" color="gray.600" lineHeight="1.6" noOfLines={3}>
              11 years of competitive hockey taught me discipline, resilience, and the value of teamwork.
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="500">Coming Soon</Text>
          </VStack>
        </MotionBox>

        {/* 6. Videography Section */}
        <MotionBox
          variants={itemVariants}
          bg="white"
          borderRadius="2xl"
          border="1px solid"
          borderColor="gray.200"
          p={6}
          cursor="pointer"
          _hover={{
            borderColor: "purple.300",
            boxShadow: "lg",
            transform: "translateY(-2px)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={() => {
            if (isMobile) {
              alert("Coming Soon!");
            } else {
              onVideographyOpen();
            }
          }}
        >
          <VStack spacing={3} align="center" textAlign="center">
            <Box
              w="80px"
              h="80px"
              bg="purple.50"
              borderRadius="xl"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="4xl">🎬</Text>
            </Box>
            <Heading fontSize="xl" fontWeight="700" color="gray.800">Videography</Heading>
            <Text fontSize="md" color="gray.600" lineHeight="1.6" noOfLines={3}>
              Cinematic vlogs, travel documentaries, and robotics coverage. Passionate about storytelling through film.
            </Text>
            <Text fontSize="sm" color="purple.500" fontWeight="500">{isMobile ? "Coming Soon" : "Click to learn more"}</Text>
          </VStack>
        </MotionBox>

        {/* 7. Chess Section */}
        {/* Note: Modal was disabled - colors used were: gray.400 (hover border), gray.500 (text), gray.600 (modal title), gray.50 (modal bg), gray.800 (modal text), gray.700 (modal bullets) */}
        <MotionBox
          variants={itemVariants}
          bg="white"
          borderRadius="2xl"
          border="1px solid"
          borderColor="gray.200"
          p={6}
        >
          <VStack spacing={3} align="center" textAlign="center">
            <Box
              w="80px"
              h="80px"
              bg="gray.50"
              borderRadius="xl"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="4xl">♟️</Text>
            </Box>
            <Heading fontSize="xl" fontWeight="700" color="gray.800">Chess</Heading>
            <Text fontSize="md" color="gray.600" lineHeight="1.6" noOfLines={3}>
              Strategic thinking and problem-solving through the ancient game of kings.
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="500">Coming Soon</Text>
          </VStack>
        </MotionBox>

        {/* 8. Running Section */}
        {/* Note: Modal was disabled - colors used were: cyan.300 (hover border), cyan.500 (text), cyan.600 (modal title), cyan.50 (modal bg), cyan.800 (modal text), cyan.700 (modal bullets) */}
        <MotionBox
          variants={itemVariants}
          bg="white"
          borderRadius="2xl"
          border="1px solid"
          borderColor="gray.200"
          p={6}
        >
          <VStack spacing={3} align="center" textAlign="center">
            <Box
              w="80px"
              h="80px"
              bg="cyan.50"
              borderRadius="xl"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="4xl">🏃</Text>
            </Box>
            <Heading fontSize="xl" fontWeight="700" color="gray.800">Running</Heading>
            <Text fontSize="md" color="gray.600" lineHeight="1.6" noOfLines={3}>
              Tracking my runs and staying active with Strava. From casual jogs to longer distances.
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="500">Coming Soon</Text>
          </VStack>
        </MotionBox>

        {/* 9. Cooking Section */}
        {/* Note: Modal was disabled - colors used were: yellow.400 (hover border), yellow.600 (text), yellow.600 (modal title), yellow.50 (modal bg), yellow.800 (modal text), yellow.700 (modal bullets) */}
        <MotionBox
          variants={itemVariants}
          bg="white"
          borderRadius="2xl"
          border="1px solid"
          borderColor="gray.200"
          p={6}
        >
          <VStack spacing={3} align="center" textAlign="center">
            <Box
              w="80px"
              h="80px"
              bg="yellow.50"
              borderRadius="xl"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="4xl">👨‍🍳</Text>
            </Box>
            <Heading fontSize="xl" fontWeight="700" color="gray.800">Cooking</Heading>
            <Text fontSize="md" color="gray.600" lineHeight="1.6" noOfLines={3}>
              Experimenting with flavours and techniques to create delicious meals and memories.
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="500">Coming Soon</Text>
          </VStack>
        </MotionBox>
      </SimpleGrid>

      {/* Movies & Shows Modal */}
      <Modal isOpen={isMoviesOpen} onClose={onMoviesClose} size={{ base: "xl", md: "4xl", lg: "6xl" }} isCentered>
        <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
        <ModalContent borderRadius="2xl" overflow="hidden" boxShadow="2xl">
          <ModalHeader bg="gradient-to-r from-red.50 to-red.100" borderBottom="1px solid" borderColor="red.200">
            <HStack spacing={4} align="center">
              <Box
                w="50px"
                h="50px"
                bg="red.50"
                borderRadius="xl"
                border="1px solid"
                borderColor="red.200"
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxShadow="lg"
              >
                <Text fontSize="2xl">🍿</Text>
              </Box>
              <VStack spacing={1} align="start">
                <Heading fontSize="2xl" color="red.800" fontWeight="700">Movies & Shows</Heading>
                <Text fontSize="sm" color="red.600" fontWeight="500">My favourite entertainment picks</Text>
              </VStack>
            </HStack>
          </ModalHeader>
          <ModalCloseButton size="lg" color="red.600" />
          <ModalBody p={8} bg="gray.50">
            <HStack spacing={8} align="stretch">
                {/* Left side container with both poster stacks */}
                <Box flex={1} bg="white" borderRadius="xl" p={6} boxShadow="lg" border="1px solid" borderColor="red.100">
                  <VStack spacing={0} align="center" justify="space-between" h="full">
                    {/* Movies Section */}
                    <VStack spacing={0} align="center">
                    <HStack spacing={3} align="center">
                      <Box w="6px" h="6px" bg="red.500" borderRadius="full"></Box>
                      <Heading fontSize="lg" color="red.800" fontWeight="600">Movies</Heading>
                      <Box w="6px" h="6px" bg="red.500" borderRadius="full"></Box>
                    </HStack>
                    {/* Movie Posters Stack */}
                    <Box position="relative" height="180px" width="400px" display="flex" justifyContent="center" alignItems="center">
                      {movies.map((movie, index) => (
                        <Box
                          key={index}
                          position="absolute"
                          width="80px"
                          height="120px"
                          borderRadius="lg"
                          overflow="hidden"
                          boxShadow="xl"
                          transform={index === 3 ? `rotate(${(index - 3) * 2}deg) translateX(${(index - 3) * 40}px) translateY(-8px) scale(1.1)` : `rotate(${(index - 3) * 4}deg) translateX(${(index - 3) * 40}px)`}
                          transition="all 0.3s ease"
                          _hover={{
                            transform: `${index === 3 ? 
                              `rotate(${(index - 3) * 2}deg) translateX(${(index - 3) * 40}px) translateY(-12px) scale(1.15)` : 
                              `rotate(${(index - 3) * 2}deg) translateX(${(index - 3) * 40}px) translateY(-5px) scale(1.05)`} !important`,
                            boxShadow: "2xl"
                          }}
                          zIndex={index === 3 ? 20 : [15, 16, 17, 18, 19, 18, 15][index]}
                          cursor="pointer"
                          onClick={() => {
                            // Update selected info (movie)
                            const titleEl = document.getElementById('selected-title');
                            const yearEl = document.getElementById('selected-year');
                            const directorEl = document.getElementById('selected-director');
                            const posterEl = document.getElementById('selected-poster');
                            const typeEl = document.getElementById('selected-type');
                            const ratingEl = document.getElementById('selected-rating');
                            const noteEl = document.getElementById('selected-note');
                            
                            if (titleEl) titleEl.textContent = movie.title;
                            if (yearEl) yearEl.textContent = movie.year;
                            if (directorEl) directorEl.textContent = movie.director;
                            if (posterEl) (posterEl as HTMLImageElement).src = movie.src;
                            if (typeEl) typeEl.textContent = "Movie";
                            if (ratingEl) ratingEl.textContent = movie.rating;
                            if (noteEl) noteEl.textContent = movie.note;
                            
                            // Reset all movie posters
                            const moviePosters = document.querySelectorAll('[data-movie-poster]');
                            moviePosters.forEach((poster, i) => {
                              if (i === index) {
                                (poster as HTMLElement).style.zIndex = '20';
                                (poster as HTMLElement).style.transform = `rotate(${(index - 3) * 2}deg) translateX(${(index - 3) * 40}px) translateY(-8px) scale(1.1)`;
                                (poster as HTMLElement).setAttribute('data-selected', 'true');
                              } else {
                                let zIndex;
                                if (index === 0) zIndex = [20, 19, 18, 17, 16, 15, 14][i];
                                else if (index === 1) zIndex = [18, 20, 19, 17, 16, 15, 14][i];
                                else if (index === 2) zIndex = [18, 19, 20, 17, 16, 15, 14][i];
                                else if (index === 3) zIndex = [17, 18, 19, 20, 16, 15, 14][i];
                                else if (index === 4) zIndex = [15, 16, 18, 19, 20, 15, 14][i];
                                else if (index === 5) zIndex = [15, 16, 17, 18, 19, 20, 14][i];
                                else if (index === 6) zIndex = [15, 16, 17, 18, 19, 20, 20][i];
                                (poster as HTMLElement).style.zIndex = `${zIndex}`;
                                (poster as HTMLElement).style.transform = `rotate(${(i - 3) * 4}deg) translateX(${(i - 3) * 40}px)`;
                                (poster as HTMLElement).removeAttribute('data-selected');
                              }
                            });
                            
                            // Reset all show posters to default (middle on top, no protruding effect)
                            const showPosters = document.querySelectorAll('[data-show-poster]');
                            showPosters.forEach((poster, i) => {
                              if (i === 3) {
                                (poster as HTMLElement).style.zIndex = '20';
                                (poster as HTMLElement).style.transform = `rotate(${(i - 3) * 4}deg) translateX(${(i - 3) * 40}px)`;
                              } else {
                                (poster as HTMLElement).style.zIndex = `${[15, 16, 17, 18, 19, 18, 15][i]}`;
                                (poster as HTMLElement).style.transform = `rotate(${(i - 3) * 4}deg) translateX(${(i - 3) * 40}px)`;
                              }
                            });
                          }}
                          data-movie-poster
                        >
                          <Image
                            src={movie.src}
                            alt={movie.title}
                            width="100%"
                            height="100%"
                            objectFit="cover"
                          />
                        </Box>
                      ))}
                    </Box>
                  </VStack>

                  {/* TV Shows Section */}
                  <VStack spacing={0} align="center">
                    <HStack spacing={3} align="center">
                      <Box w="6px" h="6px" bg="red.500" borderRadius="full"></Box>
                      <Heading fontSize="lg" color="red.800" fontWeight="600">TV Shows</Heading>
                      <Box w="6px" h="6px" bg="red.500" borderRadius="full"></Box>
                    </HStack>
                    {/* Show Posters Stack */}
                    <Box position="relative" height="180px" width="400px" display="flex" justifyContent="center" alignItems="center">
                      {shows.map((show, index) => (
                        <Box
                          key={index}
                          position="absolute"
                          width="80px"
                          height="120px"
                          borderRadius="lg"
                          overflow="hidden"
                          boxShadow="xl"
                          transform={`rotate(${(index - 3) * 4}deg) translateX(${(index - 3) * 40}px)`}
                          transition="all 0.3s ease"
                          _hover={{
                            transform: `${index === 3 ? 
                              `rotate(${(index - 3) * 2}deg) translateX(${(index - 3) * 40}px) translateY(-8px) scale(1.1)` : 
                              `rotate(${(index - 3) * 2}deg) translateX(${(index - 3) * 40}px) translateY(-5px) scale(1.05)`} !important`,
                            boxShadow: "2xl"
                          }}
                          zIndex={index === 3 ? 20 : [15, 16, 17, 18, 19, 18, 15][index]}
                          cursor="pointer"
                          onClick={() => {
                            // Update selected info (show)
                            const titleEl = document.getElementById('selected-title');
                            const yearEl = document.getElementById('selected-year');
                            const directorEl = document.getElementById('selected-director');
                            const posterEl = document.getElementById('selected-poster');
                            const typeEl = document.getElementById('selected-type');
                            const ratingEl = document.getElementById('selected-rating');
                            const noteEl = document.getElementById('selected-note');
                            
                            if (titleEl) titleEl.textContent = show.title;
                            if (yearEl) yearEl.textContent = show.startYear === show.endYear ? show.startYear : `${show.startYear} - ${show.endYear}`;
                            if (directorEl) directorEl.textContent = show.seasons;
                            if (posterEl) (posterEl as HTMLImageElement).src = show.src;
                            if (typeEl) typeEl.textContent = "TV Show";
                            if (ratingEl) ratingEl.textContent = show.rating;
                            if (noteEl) noteEl.textContent = show.note;
                            
                            // Reset all show posters
                            const showPosters = document.querySelectorAll('[data-show-poster]');
                            showPosters.forEach((poster, i) => {
                              if (i === index) {
                                (poster as HTMLElement).style.zIndex = '20';
                                (poster as HTMLElement).style.transform = `rotate(${(index - 3) * 2}deg) translateX(${(index - 3) * 40}px) translateY(-8px) scale(1.1)`;
                                (poster as HTMLElement).setAttribute('data-selected', 'true');
                              } else {
                                let zIndex;
                                if (index === 0) zIndex = [20, 19, 18, 17, 16, 15, 14][i];
                                else if (index === 1) zIndex = [18, 20, 19, 17, 16, 15, 14][i];
                                else if (index === 2) zIndex = [18, 19, 20, 17, 16, 15, 14][i];
                                else if (index === 3) zIndex = [17, 18, 19, 20, 16, 15, 14][i];
                                else if (index === 4) zIndex = [15, 16, 18, 19, 20, 15, 14][i];
                                else if (index === 5) zIndex = [15, 16, 17, 18, 19, 20, 14][i];
                                else if (index === 6) zIndex = [15, 16, 17, 18, 19, 20, 20][i];
                                (poster as HTMLElement).style.zIndex = `${zIndex}`;
                                (poster as HTMLElement).style.transform = `rotate(${(i - 3) * 4}deg) translateX(${(i - 3) * 40}px)`;
                                (poster as HTMLElement).removeAttribute('data-selected');
                              }
                            });
                            
                            // Reset all movie posters to default (middle on top, no protruding effect)
                            const moviePosters = document.querySelectorAll('[data-movie-poster]');
                            moviePosters.forEach((poster, i) => {
                              if (i === 3) {
                                (poster as HTMLElement).style.zIndex = '20';
                                (poster as HTMLElement).style.transform = `rotate(${(i - 3) * 4}deg) translateX(${(i - 3) * 40}px)`;
                              } else {
                                (poster as HTMLElement).style.zIndex = `${[15, 16, 17, 18, 19, 18, 15][i]}`;
                                (poster as HTMLElement).style.transform = `rotate(${(i - 3) * 4}deg) translateX(${(i - 3) * 40}px)`;
                              }
                            });
                          }}
                          data-show-poster
                        >
                          <Image
                            src={show.src}
                            alt={show.title}
                            width="100%"
                            height="100%"
                            objectFit="cover"
                          />
                        </Box>
                      ))}
                    </Box>
                  </VStack>
                  </VStack>
                </Box>
                
                {/* Right side with single info box */}
                <Box flex={1} bg="white" borderRadius="xl" p={6} boxShadow="lg" border="1px solid" borderColor="red.100">
                  <VStack spacing={5} align="center">
                    <Box position="relative">
                      <Image
                        id="selected-poster"
                        src={movies[3].src}
                        alt="Selected"
                        width="140px"
                        height="210px"
                        borderRadius="lg"
                        objectFit="cover"
                        boxShadow="xl"
                        border="3px solid"
                        borderColor="red.300"
                      />
                      <Box
                        position="absolute"
                        top="-8px"
                        right="-8px"
                        w="24px"
                        h="24px"
                        bg="red.500"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        boxShadow="lg"
                      >
                        <Text id="selected-type-icon" fontSize="xs" color="white" fontWeight="bold">★</Text>
                      </Box>
                    </Box>
                    
                    <VStack spacing={3} textAlign="center" w="full">
                      <Text id="selected-title" fontSize="xl" fontWeight="700" color="red.900">
                        {movies[3].title}
                      </Text>
                      
                      <HStack spacing={2} align="center">
                        <Text id="selected-year" fontSize="md" color="red.700" fontWeight="500">
                          {movies[3].year}
                        </Text>
                        <Box w="4px" h="4px" bg="red.400" borderRadius="full"></Box>
                        <Text id="selected-director" fontSize="sm" color="red.600" fontWeight="500">
                          {movies[3].director}
                        </Text>
                      </HStack>
                      
                      <HStack spacing={2} align="center">
                        <Text id="selected-rating" fontSize="lg" color="red.800" fontWeight="700">
                          {movies[3].rating}
                        </Text>
                        <Text fontSize="sm" color="red.500" fontWeight="500">⭐</Text>
                      </HStack>
                      
                      <Box w="full" p={3} bg="white" borderRadius="lg" boxShadow="sm" border="1px solid" borderColor="red.200">
                        <Text id="selected-note" fontSize="sm" color="red.800" lineHeight="1.5" textAlign="left">
                          {movies[3].note}
                        </Text>
                      </Box>
                    </VStack>
                  </VStack>
                </Box>
              </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Music Modal */}
      <Modal isOpen={isMusicOpen} onClose={onMusicClose} size={{ base: "xl", md: "4xl", lg: "6xl" }} isCentered>
        <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
        <ModalContent borderRadius="2xl" overflow="hidden" boxShadow="2xl">
          <ModalHeader bg="gradient-to-r from-teal.50 to-teal.100" borderBottom="1px solid" borderColor="teal.200">
            <HStack spacing={4} align="center">
              <Box
                w="50px"
                h="50px"
                bg="teal.50"
                borderRadius="xl"
                border="1px solid"
                borderColor="teal.200"
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxShadow="lg"
              >
                <Text fontSize="2xl">🎵</Text>
              </Box>
              <VStack spacing={1} align="start">
                <Heading fontSize="2xl" color="teal.800" fontWeight="700">Music</Heading>
                <Text fontSize="sm" color="teal.600" fontWeight="500">My musical journey & current obsessions</Text>
              </VStack>
            </HStack>
          </ModalHeader>
          <ModalCloseButton size="lg" color="teal.600" />
          <ModalBody p={8} bg="gray.50">
            <VStack spacing={8} align="stretch">
              {/* Currently Listening Section */}
              <Box bg="white" borderRadius="xl" p={6} boxShadow="lg" border="1px solid" borderColor="teal.100">
                <VStack spacing={6} align="stretch">
                  <HStack spacing={3} align="center" justify="center">
                    <Box w="6px" h="6px" bg="teal.500" borderRadius="full"></Box>
                    <Heading fontSize="lg" color="teal.800" fontWeight="600">Currently On Loop</Heading>
                    <Box w="6px" h="6px" bg="teal.500" borderRadius="full"></Box>
                  </HStack>
                  
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    {/* Le Sserafim */}
                    <MotionBox 
                      bg="gradient-to-br from-red.50 to-red.100" 
                      borderRadius="lg" 
                      p={4} 
                      border="1px solid" 
                      borderColor="red.200"
                    >
                      <HStack spacing={4}>
                        <MotionBox
                          whileHover={{ rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Image
                            src="/about/music/lsrfm.jpg"
                            alt="LE SSERAFIM - Unforgiven"
                            width="60px"
                            height="60px"
                            borderRadius="lg"
                            objectFit="cover"
                            boxShadow="md"
                          />
                        </MotionBox>
                        <VStack spacing={1} align="start">
                          <Text fontSize="lg" fontWeight="700" color="red.800">LE SSERAFIM</Text>
                          <Text fontSize="sm" color="red.600">Unforgiven • K-Pop</Text>
                        </VStack>
                      </HStack>
                    </MotionBox>

                    {/* AJ Tracey */}
                    <MotionBox 
                      bg="gradient-to-br from-blue.50 to-blue.100" 
                      borderRadius="lg" 
                      p={4} 
                      border="1px solid" 
                      borderColor="blue.200"
                    >
                      <HStack spacing={4}>
                        <MotionBox
                          whileHover={{ rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Image
                            src="/about/music/aj.jpg"
                            alt="AJ Tracey - Don't Die Before You're Dead"
                            width="60px"
                            height="60px"
                            borderRadius="lg"
                            objectFit="cover"
                            boxShadow="md"
                          />
                        </MotionBox>
                        <VStack spacing={1} align="start">
                          <Text fontSize="lg" fontWeight="700" color="blue.800">AJ Tracey</Text>
                          <Text fontSize="sm" color="blue.600">Don't Die Before You're Dead • UK Rap</Text>
                        </VStack>
                      </HStack>
                    </MotionBox>

                    {/* ODESZA */}
                    <MotionBox 
                      bg="gradient-to-br from-green.50 to-green.100" 
                      borderRadius="lg" 
                      p={4} 
                      border="1px solid" 
                      borderColor="green.200"
                    >
                      <HStack spacing={4}>
                        <MotionBox
                          whileHover={{ rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Image
                            src="/about/music/odesza.jpg"
                            alt="ODESZA - The Last Goodbye"
                            width="60px"
                            height="60px"
                            borderRadius="lg"
                            objectFit="cover"
                            boxShadow="md"
                          />
                        </MotionBox>
                        <VStack spacing={1} align="start">
                          <Text fontSize="lg" fontWeight="700" color="green.800">ODESZA</Text>
                          <Text fontSize="sm" color="green.600">The Last Goodbye • Electronic</Text>
                        </VStack>
                      </HStack>
                    </MotionBox>

                    {/* Zhao Lei */}
                    <MotionBox 
                      bg="gradient-to-br from-yellow.50 to-yellow.100" 
                      borderRadius="lg" 
                      p={4} 
                      border="1px solid" 
                      borderColor="yellow.200"
                    >
                      <HStack spacing={4}>
                        <MotionBox
                          whileHover={{ rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Image
                            src="/about/music/zl.jpg"
                            alt="Zhao Lei - Teen on Shuqian Street"
                            width="60px"
                            height="60px"
                            borderRadius="lg"
                            objectFit="cover"
                            boxShadow="md"
                          />
                        </MotionBox>
                        <VStack spacing={1} align="start">
                          <Text fontSize="lg" fontWeight="700" color="yellow.800">Zhao Lei</Text>
                          <Text fontSize="sm" color="yellow.600">Teen on Shuqian Street • Chinese Folk</Text>
                        </VStack>
                      </HStack>
                    </MotionBox>
                  </SimpleGrid>
                </VStack>
              </Box>

              {/* Bottom Section - Side by Side */}
              <HStack spacing={6} align="stretch">
                {/* Spotify Wrapped Stats */}
                <Box flex={1} bg="white" borderRadius="xl" p={6} boxShadow="lg" border="1px solid" borderColor="teal.100">
                  <VStack spacing={4} align="stretch" justify="center" h="full">
                    <HStack spacing={3} align="center" justify="center">
                      <Box w="6px" h="6px" bg="teal.500" borderRadius="full"></Box>
                      <Heading fontSize="lg" color="teal.800" fontWeight="600">Spotify Wrapped Stats</Heading>
                      <Box w="6px" h="6px" bg="teal.500" borderRadius="full"></Box>
                    </HStack>
                    
                    <VStack spacing={3} align="stretch" flex={1}>
                      <HStack spacing={2} justify="center" flex={1} h="full">
                        <Box textAlign="center" bg="teal.50" borderRadius="md" border="1px solid" borderColor="teal.200" display="flex" flexDirection="column" justifyContent="center" alignItems="center" flex={1}>
                          <Text fontSize="md" fontWeight="600" color="teal.800">2024</Text>
                          <Text fontSize="sm" color="teal.600">151,937</Text>
                        </Box>
                        <Box textAlign="center" bg="teal.50" borderRadius="md" border="1px solid" borderColor="teal.200" display="flex" flexDirection="column" justifyContent="center" alignItems="center" flex={1}>
                          <Text fontSize="md" fontWeight="600" color="teal.800">2023</Text>
                          <Text fontSize="sm" color="teal.600">153,137</Text>
                        </Box>
                        <Box textAlign="center" bg="teal.50" borderRadius="md" border="1px solid" borderColor="teal.200" display="flex" flexDirection="column" justifyContent="center" alignItems="center" flex={1}>
                          <Text fontSize="md" fontWeight="600" color="teal.800">2022</Text>
                          <Text fontSize="sm" color="teal.600">158,785</Text>
                        </Box>
                        <Box textAlign="center" bg="teal.50" borderRadius="md" border="1px solid" borderColor="teal.200" display="flex" flexDirection="column" justifyContent="center" alignItems="center" flex={1}>
                          <Text fontSize="md" fontWeight="600" color="teal.800">2021</Text>
                          <Text fontSize="sm" color="teal.600">164,498</Text>
                        </Box>
                        <Box textAlign="center" bg="teal.50" borderRadius="md" border="1px solid" borderColor="teal.200" display="flex" flexDirection="column" justifyContent="center" alignItems="center" flex={1}>
                          <Text fontSize="md" fontWeight="600" color="teal.800">2020</Text>
                          <Text fontSize="sm" color="teal.600">144,005</Text>
                        </Box>
                      </HStack>
                      <VStack spacing={1} align="center">
                        <Text fontSize="sm" color="teal.600" fontWeight="500" textAlign="center">
                          Annual Listening Minutes
                        </Text>
                        <Text fontSize="xs" color="teal.500" textAlign="center" fontStyle="italic">
                          That's about 7 hours per day on average!
                        </Text>
                      </VStack>
                    </VStack>
                  </VStack>
                </Box>

                {/* Musical Lifestyle */}
                <Box flex={1.5} bg="white" borderRadius="xl" p={6} boxShadow="lg" border="1px solid" borderColor="teal.100">
                  <VStack spacing={4} align="stretch">
                    
                    <Text fontSize="md" color="teal.700" lineHeight="1.6">
                      Music is the soundtrack to my entire day. From the moment I wake up to when I fall asleep, 
                      it's playing. On the bus to school, during runs, while studying, cooking, showering - 
                      dawn till dusk, music accompanies every moment. I explore every genre imaginable, from 
                      K-Pop to Spanish music, hip-hop to indie rock, electronic to rap, classic R&B to alternative. 
                      If it has a beat or melody, I'm probably listening to it.
                    </Text>
                  </VStack>
                </Box>
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Sports Teams Modal */}
      <Modal isOpen={isSportsOpen} onClose={onSportsClose} size={{ base: "xl", md: "4xl", lg: "6xl" }} isCentered>
        <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
        <ModalContent borderRadius="2xl" overflow="hidden" boxShadow="2xl">
          <ModalHeader bg="gradient-to-r from-orange.50 to-orange.100" borderBottom="1px solid" borderColor="orange.200">
            <HStack spacing={4} align="center">
              <Box
                w="50px"
                h="50px"
                bg="orange.50"
                borderRadius="xl"
                border="1px solid"
                borderColor="orange.200"
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxShadow="lg"
              >
                <Text fontSize="2xl">⚽</Text>
              </Box>
              <VStack spacing={1} align="start">
                <Heading fontSize="2xl" color="orange.800" fontWeight="700">Sports Teams</Heading>
                <Text fontSize="sm" color="orange.600" fontWeight="500">From the gridiron to the pitch, the court to the ice</Text>
              </VStack>
            </HStack>
          </ModalHeader>
          <ModalCloseButton size="lg" color="orange.600" />
          <ModalBody p={8} bg="gray.50">
            <HStack spacing={8} align="stretch">
              {/* Left side - Circular logo arrangement */}
              <Box flex={1} bg="white" borderRadius="xl" p={6} boxShadow="lg" border="1px solid" borderColor="orange.100">
                <VStack spacing={6} align="center" justify="center" h="full">
                  <Text fontSize="sm" color="orange.600" fontWeight="500" textAlign="center">
                    Click any team to view details
                  </Text>
                  <Box position="relative" width="300px" height="300px" display="flex" alignItems="center" justifyContent="center">
                    {/* Dynamic team logos based on positions */}
                    {Object.entries(teamPositions).map(([teamKey, team]) => {
                      const isCenter = team.position === "center";
                      const size = isCenter ? "80px" : "60px";
                      
                      let positionStyle = {};
                      switch (team.position) {
                        case "top":
                          positionStyle = { top: "0", left: "50%", transform: "translateX(-50%)" };
                          break;
                        case "topRight":
                          positionStyle = { top: "15%", right: "15%" };
                          break;
                        case "right":
                          positionStyle = { top: "50%", right: "0", transform: "translateY(-50%)" };
                          break;
                        case "bottomRight":
                          positionStyle = { bottom: "15%", right: "15%" };
                          break;
                        case "bottom":
                          positionStyle = { bottom: "0", left: "50%", transform: "translateX(-50%)" };
                          break;
                        case "bottomLeft":
                          positionStyle = { bottom: "15%", left: "15%" };
                          break;
                        case "left":
                          positionStyle = { top: "50%", left: "0", transform: "translateY(-50%)" };
                          break;
                        case "topLeft":
                          positionStyle = { top: "15%", left: "15%" };
                          break;
                        case "center":
                          positionStyle = { top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
                          break;
                      }

                      const hoverTransform = team.position === "center" 
                        ? "translate(-50%, -50%) scale(1.1)"
                        : team.position === "top" || team.position === "bottom"
                        ? "translateX(-50%) scale(1.1)"
                        : team.position === "left" || team.position === "right"
                        ? "translateY(-50%) scale(1.1)"
                        : "scale(1.1)";

                      return (
                        <Box
                          key={teamKey}
                          position="absolute"
                          {...positionStyle}
                          w={size}
                          h={size}
                          borderRadius="lg"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          overflow="hidden"
                          bg="transparent"
                          cursor="pointer"
                          _hover={{ transform: hoverTransform }}
                          transition="all 0.3s ease"
                          onClick={() => swapWithCenter(teamKey)}
                        >
                          <Image
                            src={team.logo}
                            alt={team.name}
                            width="100%"
                            height="100%"
                            objectFit="contain"
                          />
                        </Box>
                      );
                    })}

                  </Box>
                </VStack>
              </Box>

              {/* Right side - Selected team info */}
              <Box flex={1} bg="white" borderRadius="xl" p={6} boxShadow="lg" border="1px solid" borderColor="orange.100">
                <VStack spacing={6} align="center" justify="center" h="full">
                  <Box
                    w="120px"
                    h="120px"
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    overflow="hidden"
                    bg="transparent"
                  >
                    <Image
                      src={getCenterTeam()?.logo}
                      alt={getCenterTeam()?.name}
                      width="100%"
                      height="100%"
                      objectFit="contain"
                    />
                  </Box>
                  
                  <VStack spacing={3} align="center" textAlign="center">
                    <Text fontSize="2xl" fontWeight="700" color="orange.800">
                      {getCenterTeam()?.name}
                    </Text>
                    <Text fontSize="md" color="orange.600" fontWeight="500">
                      {getCenterTeam()?.league}
                    </Text>
                    <Text fontSize="sm" color="orange.500" fontStyle="italic">
                      {getCenterTeam()?.motto}
                    </Text>
                  </VStack>
                </VStack>
              </Box>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Videography Modal */}
      <Modal isOpen={isVideographyOpen} onClose={onVideographyClose} size={{ base: "xl", md: "4xl", lg: "6xl" }} isCentered>
        <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
        <ModalContent borderRadius="2xl" overflow="hidden" boxShadow="2xl">
          <ModalHeader bg="gradient-to-r from-purple.50 to-purple.100" borderBottom="1px solid" borderColor="purple.200">
            <HStack spacing={4} align="center">
              <Box
                w="50px"
                h="50px"
                bg="purple.50"
                borderRadius="xl"
                border="1px solid"
                borderColor="purple.200"
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxShadow="lg"
              >
                <Text fontSize="2xl">🎬</Text>
              </Box>
              <VStack spacing={1} align="start">
                <Heading fontSize="2xl" color="purple.800" fontWeight="700">Videography</Heading>
                <Text fontSize="sm" color="purple.600" fontWeight="500">Cinematic storytelling through film</Text>
              </VStack>
            </HStack>
          </ModalHeader>
          <ModalCloseButton size={{ base: "md", lg: "lg" }} color="purple.600" />
          <ModalBody p={{ base: 4, lg: 8 }} bg="gray.50">
            <VStack spacing={{ base: 6, lg: 8 }} align="stretch">
              {/* Featured Videos Section */}
              <Box bg="white" borderRadius="xl" p={{ base: 4, lg: 6 }} boxShadow="lg" border="1px solid" borderColor="purple.100">
                <VStack spacing={6} align="stretch">
                  <HStack spacing={3} align="center" justify="center">
                    <Box w="6px" h="6px" bg="purple.500" borderRadius="full"></Box>
                    <Heading fontSize={{ base: "xl", lg: "2xl" }} color="purple.800" fontWeight="600">Featured YouTube Videos</Heading>
                    <Box w="6px" h="6px" bg="purple.500" borderRadius="full"></Box>
                  </HStack>

                  <Tabs variant="enclosed" colorScheme="purple" index={selectedVideoTab} onChange={setSelectedVideoTab}>
                    <TabList>
                      <Tab flex={1}>Vienna</Tab>
                      <Tab flex={1}>Panama</Tab>
                      <Tab flex={1}>Costa Rica</Tab>
                      <Tab flex={1}>Poppy</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel px={0} py={0}>
                        <Box bg="gradient-to-br from-purple.50 to-purple.100" borderRadius="lg" pt={4} px={0} pb={0}>
                          <Flex direction={{ base: "column", lg: "row" }} align="stretch">
                            {/* Video */}
                            <Box flex={1}>
                              <Box
                                position="relative"
                                w="100%"
                                borderRadius="md"
                                overflow="hidden"
                                bg="black"
                                sx={{
                                  aspectRatio: "16/9"
                                }}
                              >
                                <iframe
                                  width="100%"
                                  height="100%"
                                  src="https://www.youtube.com/embed/xMHY4k8ylrQ"
                                  title="Vienna"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowFullScreen
                                  style={{ borderRadius: "8px" }}
                                />
                              </Box>
                            </Box>
                            
                            {/* Text Content */}
                            <Box flex={1} pt={{ base: 2, lg: 4 }} pl={{ base: 2, lg: 4 }} pb={{ base: 2, lg: 4 }}>
                              <VStack spacing={{ base: 2, lg: 3 }} align="stretch">
                                <Heading fontSize={{ base: "lg", lg: "xl" }} color="purple.800" fontWeight="600">Vienna Visit</Heading>
                                <Text fontSize="md" color="purple.700" lineHeight="1.6">
                                  During September 2025, I went on a two-week road trip around Austria and Czechia with my mom. We spent 4 of those days in Vienna, visiting all sorts of museums, art galleries, and the royal palaces. The city's rich history and stunning architecture left a lasting impression, from the grandeur of Schönbrunn Palace to the masterpieces housed in the Kunsthistorisches Museum. Seeing Klimt's "The Kiss" in person was a highlight of the trip. I already miss Almdudler.
                                </Text>
                              </VStack>
                            </Box>
                          </Flex>
                        </Box>
                      </TabPanel>
                      <TabPanel px={0} py={0}>
                        <Box bg="gradient-to-br from-blue.50 to-blue.100" borderRadius="lg" pt={4} px={0} pb={0}>
                          <Flex direction={{ base: "column", lg: "row" }} align="stretch">
                            {/* Video */}
                            <Box flex={1}>
                              <Box
                                position="relative"
                                w="100%"
                                borderRadius="md"
                                overflow="hidden"
                                bg="black"
                                sx={{
                                  aspectRatio: "16/9"
                                }}
                              >
                                <iframe
                                  width="100%"
                                  height="100%"
                                  src="https://www.youtube.com/embed/C5rylgbIcDA"
                                  title="🇵🇦 P A N A M A"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowFullScreen
                                  style={{ borderRadius: "8px" }}
                                />
                              </Box>
                            </Box>
                            
                            {/* Text Content */}
                            <Box flex={1} pt={{ base: 2, lg: 4 }} pl={{ base: 2, lg: 4 }} pb={{ base: 2, lg: 4 }}>
                              <VStack spacing={{ base: 2, lg: 3 }} align="stretch">
                                <Heading fontSize={{ base: "lg", lg: "xl" }} color="purple.800" fontWeight="600">Panama Adventure</Heading>
                                <Text fontSize="md" color="purple.700" lineHeight="1.6">
                                  From December 25th, 2017 to January 1st, 2018 I went to visit Panama, a country well known for it's significant Canal. I had the incredible opportunity to see the Panama Canal up close, witnessing this man-made waterway that stretches 80km from the Atlantic to the Pacific. One of the most fascinating things I learned is that you can see both the sunrise and sunset from the same spot because Panama's unique geography allows you to witness both oceans from one location.
                                </Text>
                              </VStack>
                            </Box>
                          </Flex>
                        </Box>
                      </TabPanel>
                      <TabPanel px={0} py={0}>
                        <Box bg="gradient-to-br from-green.50 to-green.100" borderRadius="lg" pt={4} px={0} pb={0}>
                          <Flex direction={{ base: "column", lg: "row" }} align="stretch">
                            {/* Video */}
                            <Box flex={1}>
                              <Box
                                position="relative"
                                w="100%"
                                borderRadius="md"
                                overflow="hidden"
                                bg="black"
                                sx={{
                                  aspectRatio: "16/9"
                                }}
                              >
                                <iframe
                                  width="100%"
                                  height="100%"
                                  src="https://www.youtube.com/embed/yjTr-P5jxlU"
                                  title="🇨🇷 C O S T A R I C A"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowFullScreen
                                  style={{ borderRadius: "8px" }}
                                />
                              </Box>
                            </Box>
                            
                            {/* Text Content */}
                            <Box flex={1} pt={{ base: 2, lg: 4 }} pl={{ base: 2, lg: 4 }} pb={{ base: 2, lg: 4 }}>
                              <VStack spacing={{ base: 2, lg: 3 }} align="stretch">
                                <Heading fontSize={{ base: "lg", lg: "xl" }} color="purple.800" fontWeight="600">Costa Rica Journey</Heading>
                                <Text fontSize="md" color="purple.700" lineHeight="1.6">
                                  From March 10th, 2018 to March 18th, 2018 I went to visit Costa Rica, a country well known for it's significant Volcanoes. During my adventure, I experienced the longest zipline in Central America at Monteverde, soaring through the canopy and witnessing incredible views of the volcanic landscape below. I explored various types of rainforests, from cloud forests to tropical rainforests, each offering unique ecosystems and breathtaking biodiversity. Pura vida!
                                </Text>
                              </VStack>
                            </Box>
                          </Flex>
                        </Box>
                      </TabPanel>
                      <TabPanel px={0} py={0}>
                        <Box bg="gradient-to-br from-pink.50 to-pink.100" borderRadius="lg" pt={4} px={0} pb={0}>
                          <Flex direction={{ base: "column", lg: "row" }} align="stretch">
                            {/* Video */}
                            <Box flex={1}>
                              <Box
                                position="relative"
                                w="100%"
                                borderRadius="md"
                                overflow="hidden"
                                bg="black"
                                sx={{
                                  aspectRatio: "16/9"
                                }}
                              >
                                <iframe
                                  width="100%"
                                  height="100%"
                                  src="https://www.youtube.com/embed/inCQ4rmAsVs"
                                  title="🌸 P O P P Y"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowFullScreen
                                  style={{ borderRadius: "8px" }}
                                />
                              </Box>
                            </Box>
                            
                            {/* Text Content */}
                            <Box flex={1} pt={{ base: 2, lg: 4 }} pl={{ base: 2, lg: 4 }} pb={{ base: 2, lg: 4 }}>
                              <VStack spacing={{ base: 2, lg: 3 }} align="stretch">
                                <Heading fontSize={{ base: "lg", lg: "xl" }} color="purple.800" fontWeight="600">Poppy</Heading>
                                <Text fontSize="md" color="purple.700" lineHeight="1.6">
                                  A video Michael and I made for Remembrance Day. We storyplanned the entire project, incorporating voiceover of the poem "In Flanders Fields" while filming around our city, visiting parks and meaningful locations. It was played at our school assembly and we won an award from the Royal Canadian Legion, a nonprofit Canadian veterans organization, for the video. Lest we forget.
                                </Text>
                              </VStack>
                            </Box>
                          </Flex>
                        </Box>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </VStack>
              </Box>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
