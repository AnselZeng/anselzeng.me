import { 
  Avatar, 
  Container, 
  Flex, 
  Heading, 
  HStack, 
  Image, 
  Text, 
  VStack 
} from "@chakra-ui/react";

export default function Page() {
  const content = `
    It’s 4:45 pm, Monday, August 31, 2020. I’m sitting by the cottage docks outlooking Muskoka Lakes, attempting to write down some of my thoughts for the first time. It is now T-minus nine days before the first day of university. As I prepare for the next chapter in my life, stress and pressure begin to sink in. Since the beginning of quarantine, it’s been tough to find comfort. Every day felt miserable, useless, being stuck in an endless cycle of boredom and solitude. However, in the past two weeks of quarantine, I’ve found myself dozed off into a very unexpected cinematic phase. I discovered Studio Ghibli.

    My Studio Ghibli journey began by stumbling across a YouTube video of Carrying You, the theme song from the 1983 film Castle in the Sky. I still fondly remember listening to it that night, feeling goosebumps rush down my back as the chorus faded in. It was a warm, yet odd sense. I knew deep down that I must’ve seen the movie or heard the song before. Then it clicked, memories of my childhood flooded my mind.

    Ever since I immigrated to Canada over a decade ago, it’s been a struggle to recollect my childhood memories from China. The only two reminiscences I have of the past are second-grade lunch breaks and the melody of Carrying You. Thinking about it, it’s still so weird how I can remember a song from a movie over a decade ago, yet I can’t even picture my elementary school. This is why I feel almost obligated to be emotionally attached to Castle in the Sky.

    What started off as watching one movie became an entire phase of my life. I’ve already begun work on creating minimalistic Studio Ghibli posters in Adobe Illustrator, and have planned to see Joe Hisaishi’s concert next summer. For the past two weeks, I would start my day off with a Studio Ghibli film. Some films fill me up with inspiration, while others pierce my heart and I end up with watering eyes.

    Nonetheless, I fall in love with Hayao Miyazaki’s creations more and more after every film. His works bring dreams and emotions to life. I remember last weekend, on a late-night bike ride with my mom, I briefed her on my thoughts about Studio Ghibli. How every film seems to breathe and explores the raw emotions of people. My creative juices are flowing low now, so I’ll wrap this up with a quote from Castle in the Sky: “The Earth speaks to all of us, and if we listen, we can understand.”
  `;

  return (
    <Container bg="#FFF8EB" maxW="100%" p={0}>
      <Container maxW="container.xl" p={0}>
        <Flex py={6} maxW="container.xl" m="auto" />
        <Container px={12} py={{ base: 12, lg: 24 }} maxW="container.lg">
          <VStack align="start" spacing={6}>
            <Heading size="2xl">Castle in the Sky</Heading>
            <HStack>
              <Avatar name="Ansel Zeng" src="/blog/pfp.png" />
              <VStack spacing={0} align="start">
                <Text>Ansel Zeng</Text>
                <Text fontSize="small">Aug 31, 2020 • 2 min read</Text>
              </VStack>
            </HStack>
            <Image src="/blog/ghibli.jpg" alt="ghibli" />
            {content.split("\n\n").map((paragraph, index) => (
              <Text key={index}>{paragraph.trim()}</Text>
            ))}
          </VStack>
        </Container>
      </Container>
    </Container>
  );
}
