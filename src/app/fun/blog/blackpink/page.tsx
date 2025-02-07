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
    It’s 10:24 pm, Friday, February 12, 2021. Laying on the living room couch, I got the fireplace turned on and have finally decided to write my second blog post. Now a lot has happened since the first, which was written nine days before my first day of university. Fast forward to today, which happens to be Chinese New Year, I’ve just finished midterms and it’s the beginning of our second reading week.

    Getting used to online school was pretty tough and irritating, I began to struggle with time management. Over the course of my entire first semester, every day I woke up to play a game of catch-up. It was a constant barrage of assignments and quizzes one after another. This led to many days and nights of unproductivity, where I’d often stare at my blank monitor for hours on end. I knew to fix this schedule of ups and downs I needed a tool, a new coping mechanism to help me de-stress, focus, and feel refreshed again.

    As my close friends would have known, over the past five or six months, I fell into an addictive K-pop phase and became obsessed with Blackpink. Looking back at the beginning of September, I genuinely have no clue how or why I instantly clicked with Blackpink. Listening to their music cheered me up, it gave me confidence and somehow inspired my work ethic. No matter what I was doing, from waking up, studying or writing assignments, and even working out, I had Blackpink on loop 24/7.

    I remember binging two of their reality TV shows and asking myself how I got to that point. Since just a few weeks ago I had refrained from K-pop, and I’ve always despised reality shows. The answer is simple, Blackpink became my new coping method to de-stress. Their shows are my entertainment, and it sounds corny, but watching them made me smile. Blackpink always gives off a positive vibe, and their music is comforting to me. They filled this hopeless, solitary void that quarantine and university had brought upon my life. Supporting their shows and buying the vinyl is the least I could do to.

    If someone can brighten up just one person’s day, then they should deserve everything in the world. So, for Blackpink empowering millions of fans around the world, I believe they deserve every bit of success. Maybe in a few months, I’d doze off into another new genre of music, or discover a new favourite artist to listen to. But I’ll never forget the imprint Blackpink has left in my life, because without them, who knows how my first semester would’ve turned out. Now to end off this blog post that I somehow typed up in one and a half hours, I’d like to shoutout my top three favourite Blackpink songs: DDU-DU DDU-DU, STAY, and Don’t Know What To Do.
  `;

  return (
    <Container bg="#FFF8EB" maxW="100%" p={0}>
      <Container maxW="container.xl" p={0}>
        <Flex py={6} maxW="container.xl" m="auto" />
        <Container px={12} py={{ base: 12, lg: 24 }} maxW="container.lg">
          <VStack align="start" spacing={6}>
            <Heading size="2xl">Blackpink In Your Area</Heading>
            <HStack>
              <Avatar name="Ansel Zeng" src="/blog/pfp.png" />
              <VStack spacing={0} align="start">
                <Text>Ansel Zeng</Text>
                <Text fontSize="small">Feb 12, 2021 • 3 min read</Text>
              </VStack>
            </HStack>
            <Image src="/blog/blackpink.png" alt="blackpink" />
            {content.split("\n\n").map((paragraph, index) => (
              <Text key={index}>{paragraph.trim()}</Text>
            ))}
          </VStack>
        </Container>
      </Container>
    </Container>
  );
}
