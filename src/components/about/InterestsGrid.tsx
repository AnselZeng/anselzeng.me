'use client';

import { useState, type ReactNode } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  HStack,
  Flex,
  Image,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { MotionBox } from '@/lib/motion';
import { itemVariants } from '@/lib/motion-variants';

const inView = { once: true, margin: '-100px' } as const;

const favouriteFilms = [
  {
    src: '/about/movies-shows/movies/lit.jpg',
    title: 'Lost in Translation',
    year: '2003',
    director: 'Sofia Coppola',
    blurb: 'Quiet, jet-lag melancholy and real human connection in Tokyo.',
  },
  {
    src: '/about/movies-shows/movies/lms.jpg',
    title: 'Little Miss Sunshine',
    year: '2006',
    director: 'Jonathan Dayton & Valerie Faris',
    blurb: 'Comedy and heart on one messy, impossible family road trip.',
  },
  {
    src: '/about/movies-shows/movies/whiplash.jpg',
    title: 'Whiplash',
    year: '2014',
    director: 'Damien Chazelle',
    blurb: 'Relentless creative drive, raw obsession, and what it costs.',
  },
];

const favouriteShows = [
  {
    src: '/about/movies-shows/shows/nge.jpg',
    title: 'Neon Genesis Evangelion',
    era: '1995–1996',
    byline: 'Hideaki Anno',
    blurb: 'Psychology, philosophy, and pressure under impossible stakes.',
  },
  {
    src: '/about/movies-shows/shows/got.jpg',
    title: 'Game of Thrones',
    era: '2011–2019',
    byline: 'David Benioff & D. B. Weiss',
    blurb: 'Epic fantasy that raised the bar for sheer scope on TV.',
  },
  {
    src: '/about/movies-shows/shows/bojack.jpg',
    title: 'BoJack Horseman',
    era: '2014–2020',
    byline: 'Raphael Bob-Waksberg',
    blurb: 'Animation hiding some of the heaviest character writing around.',
  },
];

const listeningMinutesByYear = [
  { year: 2020, minutes: 144_005 },
  { year: 2021, minutes: 164_498 },
  { year: 2022, minutes: 158_785 },
  { year: 2023, minutes: 153_137 },
  { year: 2024, minutes: 151_937 },
  { year: 2025, minutes: 123_437 },
];

const NOW_PLAYING = {
  title: 'Halo',
  artist: 'Tiffany Day',
  coverSrc: '/about/music/halo.png',
  albumName: "EVERYTHING I'VE EVER WANTED & DOIT4ME",
  albumTrackSrc: '/about/music/eiew.mp3',
};

const sportsTeams = [
  { name: 'New Orleans Saints', league: 'NFL', logo: '/about/sports/saints.png' },
  { name: 'San Antonio Spurs', league: 'NBA', logo: '/about/sports/spurs.png' },
  { name: 'Chicago Blackhawks', league: 'NHL', logo: '/about/sports/blackhawks.png' },
  { name: 'Toronto Blue Jays', league: 'MLB', logo: '/about/sports/jays.png' },
  { name: 'Chelsea FC', league: 'Premier League', logo: '/about/sports/chelsea.png' },
  { name: 'FC Barcelona', league: 'La Liga', logo: '/about/sports/barcelona.png' },
  { name: 'Scuderia Ferrari', league: 'Formula 1', logo: '/about/sports/ferrari.png' },
  { name: 'Netherlands (KNVB)', league: 'National team', logo: '/about/sports/knvb.png' },
  { name: 'USC Trojans', league: 'NCAA football', logo: '/about/sports/usc.png' },
];

const maxListeningMinutes = Math.max(...listeningMinutesByYear.map((y) => y.minutes));

function formatMinutes(n: number) {
  return `${n.toLocaleString('en-GB')} min`;
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <Text
      fontSize="xs"
      fontWeight="700"
      letterSpacing="0.2em"
      textTransform="uppercase"
      color="brand.500"
      mb={2}
    >
      {children}
    </Text>
  );
}

function PickCard({
  src,
  title,
  meta,
  blurb,
  byline,
}: {
  src: string;
  title: string;
  meta: string;
  blurb: string;
  byline?: string;
}) {
  return (
    <Flex
      direction={{ base: 'row', sm: 'column' }}
      gap={{ base: 4, sm: 0 }}
      align={{ base: 'center', sm: 'stretch' }}
      borderRadius="xl"
      overflow="hidden"
      borderWidth="1px"
      borderColor="gray.200"
      bg="white"
      boxShadow="sm"
      transition="box-shadow 0.2s, transform 0.2s"
      _hover={{ boxShadow: 'md', transform: 'translateY(-2px)' }}
    >
      <Box
        position="relative"
        flexShrink={0}
        w={{ base: '6.75rem', sm: '100%' }}
        overflow="hidden"
        bg="gray.100"
        sx={{ aspectRatio: '2 / 3' }}
      >
        <Image
          src={src}
          alt={title}
          position="absolute"
          inset={0}
          w="100%"
          h="100%"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>
      <VStack
        align="stretch"
        spacing={1}
        flex="1"
        minW={0}
        p={{ base: 3, sm: 4 }}
        pl={{ base: 0, sm: 4 }}
      >
        <Heading as="h4" fontSize="md" fontWeight="700" color="gray.800" lineHeight="1.3">
          {title}
        </Heading>
        <Text fontSize="xs" color="gray.500" fontWeight="600">
          {byline ? `${meta} · ${byline}` : meta}
        </Text>
        <Text fontSize="sm" color="gray.600" lineHeight="1.55">
          {blurb}
        </Text>
      </VStack>
    </Flex>
  );
}

function NowPlayingCover({ src, title }: { src: string; title: string }) {
  const [failed, setFailed] = useState(false);

  const shell = (child: ReactNode) => (
    <Flex
      flex={{ base: 'none', lg: '0 0 auto' }}
      flexShrink={0}
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      align="center"
      justify="center"
      w={{ base: 'full', lg: 'clamp(9.5rem, 40%, 12.75rem)' }}
      maxW={{ base: '176px', lg: 'clamp(9.5rem, 40%, 12.75rem)' }}
      mx={{ base: 'auto', lg: 0 }}
    >
      {child}
    </Flex>
  );

  if (failed) {
    return shell(
      <Flex
        w={{ base: '144px', lg: '100%' }}
        h={{ base: '144px', lg: 'auto' }}
        sx={{ aspectRatio: '1' }}
        borderRadius="lg"
        bg="orange.100"
        align="center"
        justify="center"
        boxShadow="sm"
        borderWidth="1px"
        borderColor="gray.200"
        transition="box-shadow 0.2s, transform 0.2s"
        _hover={{ boxShadow: 'md', transform: 'translateY(-2px)' }}
      >
        <Text fontSize="4xl" aria-hidden>
          🎵
        </Text>
      </Flex>
    );
  }

  return shell(
    <Box
      position="relative"
      w={{ base: '144px', lg: '100%' }}
      h={{ base: '144px', lg: 'auto' }}
      sx={{ aspectRatio: '1' }}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="sm"
      borderWidth="1px"
      borderColor="gray.200"
      transition="box-shadow 0.2s, transform 0.2s"
      _hover={{ boxShadow: 'md', transform: 'translateY(-2px)' }}
    >
      <Image
        src={src}
        alt={title}
        position="absolute"
        inset={0}
        w="100%"
        h="100%"
        objectFit="cover"
        onError={() => setFailed(true)}
      />
    </Box>
  );
}

export default function InterestsGrid() {
  return (
    <VStack spacing={{ base: 14, lg: 20 }} w="full" align="stretch">
      <MotionBox
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        w="full"
      >
        <SectionLabel>Films</SectionLabel>
        <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="700" color="gray.800" mb={6}>
          Three I return to
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={6}>
          {favouriteFilms.map((m) => (
            <PickCard
              key={m.title}
              src={m.src}
              title={m.title}
              meta={m.year}
              byline={m.director}
              blurb={m.blurb}
            />
          ))}
        </SimpleGrid>
      </MotionBox>

      <MotionBox
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        w="full"
      >
        <SectionLabel>Series</SectionLabel>
        <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="700" color="gray.800" mb={6}>
          Three that stuck
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={6}>
          {favouriteShows.map((s) => (
            <PickCard
              key={s.title}
              src={s.src}
              title={s.title}
              meta={s.era}
              byline={s.byline}
              blurb={s.blurb}
            />
          ))}
        </SimpleGrid>
      </MotionBox>

      <MotionBox
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        w="full"
        borderRadius="2xl"
        borderWidth="1px"
        borderColor="gray.200"
        bg="gray.50"
        p={{ base: 6, md: 8 }}
      >
        <SectionLabel>Music</SectionLabel>
        <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="700" color="gray.800" mb={8}>
          Listening, by the numbers
        </Heading>
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 10, lg: 12 }} alignItems="stretch">
          <GridItem display="flex" flexDirection="column" minH={0}>
            <Text fontSize="sm" color="gray.600" mb={4} lineHeight="1.6" flexShrink={0}>
              Minutes streamed per year, taken from my Spotify Wrapped.
            </Text>
            <VStack align="stretch" spacing={4} flex="1">
              {listeningMinutesByYear.map(({ year, minutes }) => (
                <Box key={year}>
                  <HStack justify="space-between" mb={1.5}>
                    <Text fontSize="sm" fontWeight="700" color="gray.800">
                      {year}
                    </Text>
                    <Text fontSize="sm" color="gray.500" sx={{ fontVariantNumeric: 'tabular-nums' }}>
                      {formatMinutes(minutes)}
                    </Text>
                  </HStack>
                  <Box h="8px" bg="white" borderRadius="full" overflow="hidden" borderWidth="1px" borderColor="gray.200">
                    <Box
                      h="100%"
                      w={`${(minutes / maxListeningMinutes) * 100}%`}
                      bg="brand.400"
                      borderRadius="full"
                      transition="width 0.6s ease-out"
                    />
                  </Box>
                </Box>
              ))}
            </VStack>
          </GridItem>
          <GridItem display="flex" flexDirection="column" minH={0}>
            <Text fontSize="sm" fontWeight="700" color="gray.800" mb={3} flexShrink={0}>
              On repeat right now
            </Text>
            <Flex
              direction="column"
              flex="1"
              minH={0}
              bg="white"
              borderRadius="xl"
              p={5}
              borderWidth="1px"
              borderColor="gray.200"
              w="full"
            >
              <Flex
                direction={{ base: 'column', lg: 'row' }}
                gap={6}
                align={{ base: 'center', lg: 'stretch' }}
                w="full"
                flexShrink={0}
                minH={0}
              >
                <NowPlayingCover src={NOW_PLAYING.coverSrc} title={NOW_PLAYING.title} />
                <Flex
                  direction="column"
                  flex="1"
                  minW={0}
                  minH={0}
                  w="full"
                  align={{ base: 'center', lg: 'stretch' }}
                  pt={{ lg: 1 }}
                >
                  <VStack
                    align={{ base: 'center', lg: 'flex-start' }}
                    spacing={1}
                    w="full"
                    flexShrink={0}
                  >
                    <Heading
                      as="h4"
                      fontSize="lg"
                      fontWeight="700"
                      color="gray.800"
                      textAlign={{ base: 'center', lg: 'left' }}
                    >
                      {NOW_PLAYING.title}
                    </Heading>
                    <Text
                      color="gray.600"
                      fontWeight="500"
                      textAlign={{ base: 'center', lg: 'left' }}
                      lineHeight="1.35"
                    >
                      {NOW_PLAYING.artist}
                    </Text>
                  </VStack>
                  <Box
                    flex={{ base: 'none', lg: '1' }}
                    minH={0}
                    minW={0}
                    aria-hidden
                  />
                  <Box
                    w="full"
                    flexShrink={0}
                    borderTopWidth="1px"
                    borderTopColor="gray.100"
                    mt={{ base: 3, lg: 0 }}
                  />
                  <Box
                    flex={{ base: 'none', lg: '1' }}
                    minH={0}
                    minW={0}
                    aria-hidden
                  />
                  <Box w="full" flexShrink={0} pt={{ base: 3, lg: 0 }}>
                    <Text
                      fontSize="xs"
                      fontWeight="700"
                      color="gray.500"
                      letterSpacing="0.06em"
                      textTransform="uppercase"
                      mb={2}
                      textAlign={{ base: 'center', lg: 'left' }}
                    >
                      From the album
                    </Text>
                    <Text
                      fontSize="sm"
                      fontWeight="700"
                      color="gray.800"
                      lineHeight="1.35"
                      textAlign={{ base: 'center', lg: 'left' }}
                    >
                      {NOW_PLAYING.albumName}
                    </Text>
                  </Box>
                </Flex>
              </Flex>

              <Box flex={{ base: 'none', lg: '1' }} minH={0} minW={0} aria-hidden />
              <Box
                w="full"
                flexShrink={0}
                borderTopWidth="1px"
                borderTopColor="gray.100"
                mt={{ base: 5, lg: 0 }}
              />
              <Box flex={{ base: 'none', lg: '1' }} minH={0} minW={0} aria-hidden />
              <Box w="full" flexShrink={0} pt={{ base: 5, lg: 0 }}>
                <Box
                  as="audio"
                  controls
                  preload="metadata"
                  w="full"
                  maxW="100%"
                  display="block"
                  src={NOW_PLAYING.albumTrackSrc}
                />
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </MotionBox>

      <MotionBox
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        w="full"
      >
        <SectionLabel>Sports</SectionLabel>
        <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="700" color="gray.800" mb={2}>
          Teams I follow
        </Heading>
        <Text fontSize="sm" color="gray.600" mb={8} maxW="lg" lineHeight="1.6">
          A mix of where I&apos;ve lived, family ties, and plain old bandwagon joy.
        </Text>
        <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
          {sportsTeams.map((team) => (
            <Box
              key={team.name}
              borderRadius="xl"
              borderWidth="1px"
              borderColor="gray.200"
              bg="white"
              p={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              gap={3}
              transition="box-shadow 0.2s, border-color 0.2s"
              _hover={{ borderColor: 'orange.200', boxShadow: 'md' }}
            >
              <Box w="56px" h="56px" flexShrink={0}>
                <Image src={team.logo} alt={team.name} w="100%" h="100%" objectFit="contain" />
              </Box>
              <VStack spacing={0}>
                <Text fontSize="sm" fontWeight="700" color="gray.800" lineHeight="1.35">
                  {team.name}
                </Text>
                <Text fontSize="xs" color="gray.500">
                  {team.league}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </MotionBox>

      <MotionBox
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        w="full"
      >
        <SectionLabel>Videography</SectionLabel>
        <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="700" color="gray.800" mb={6}>
          Four days in Vienna
        </Heading>
        <Box
          borderRadius="2xl"
          overflow="hidden"
          borderWidth="1px"
          borderColor="gray.200"
          bg="white"
          boxShadow="sm"
        >
          <Box position="relative" w="100%" bg="black" sx={{ aspectRatio: '16/9' }}>
            <iframe
              title="Four days in Vienna — travel video"
              src="https://www.youtube.com/embed/xMHY4k8ylrQ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
            />
          </Box>
          <Box p={{ base: 5, md: 8 }}>
            <Text fontSize="md" color="gray.600" lineHeight="1.7">
              This is my latest travel vlog. The trip itself was about two weeks on the road through Austria and
              Czechia with my mom — but this edit is only four days in Vienna. We went to museums and palaces, and
              even saw <Text as="span" fontStyle="italic">The Kiss</Text>.
            </Text>
            <Text fontSize="md" color="gray.600" lineHeight="1.7" mt={3}>
              P.S. I already miss Almdudler.
            </Text>
          </Box>
        </Box>
      </MotionBox>
    </VStack>
  );
}
