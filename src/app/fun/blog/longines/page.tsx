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
    It’s 8:09 am, Wednesday, July 27, 2022. I’m currently taking the train to work in person in downtown Toronto. Unlike previous business casual fits, hidden underneath my left sleeve today is a special piece of accessory. Here’s the story of my first mechanical watch.

    An unspoken rule in the watch industry is that you can, and must only, purchase a timepiece on a special occasion or hitting a particular milestone. For me, it’s the long-awaited goal to get into my dream university program. After three years of hard work, many sleepless nights, and tons of manifestation, I received my offer to Ivey Business School this summer. Looking back, it’s honestly hard to describe the joy that filled me when I read the acceptance email.

    Immediately I called my parents, sharing with them this exciting news that I’ve been anxiously waiting for so long. After congratulating me and knowing I’d been wanting a proper watch for years, they asked what I had in mind. To me the answer was clear—it seemed only appropriate to look from the same brand my dad had purchased his first watch from, Longines.

    Founded in 1832, Longines is older than almost every major Swiss watchmaker today. There’s no question that this is a name built on tradition and heritage. Needless to say, I was beyond excited when walking into the boutique at Yorkdale. Fast forwarding, now having spent almost two weeks binging watch reviews and reading up on the history of certain timepieces, I’ve recently fallen into a deep rabbit hole of the watch industry.

    It’s absolutely fascinating to me how a piece of accessory can cost more than a car, or even a house. Watches like the iconic JLC Reverso and Speedmaster Professional have made me fall in love with horology, the art of watchmaking. From learning about how the Royal Oak saved Audemars Piguet during the Quartz Crisis, to understanding how the Grand Seiko spring drive works, I dream to build my own collection of classic timepieces.

    To me, this watch holds much more than just its dollar value. Wearing it reminds me of the hard work I put in to reach where I am today. To me, it doesn’t just tell me the time. Rather, this watch makes me value time. Each tick of its meticulous movement is a constant reminder that life has no rewind — so do my best for everything and appreciate what I have today. Above all, the sentimental value of this timepiece is priceless. I’m not interested in its value appreciation, as I hope to pass my first watch on to generations to come.
  `;

  return (
    <Container bg="#FFF8EB" maxW="100%" p={0}>
      <Container maxW="container.xl" p={0}>
        <Flex py={6} maxW="container.xl" m="auto" />
        <Container px={12} py={{ base: 12, lg: 24 }} maxW="container.lg">
          <VStack align="start" spacing={6}>
            <Heading size="2xl">From Crown to Caliber</Heading>
            <HStack>
              <Avatar name="Ansel Zeng" src="/blog/pfp.png" />
              <VStack spacing={0} align="start">
                <Text>Ansel Zeng</Text>
                <Text fontSize="small">Jul 27, 2022 • 2 min read</Text>
              </VStack>
            </HStack>
            <Image src="/blog/longines.png" alt="longines" />
            {content.split("\n\n").map((paragraph, index) => (
              <Text key={index}>{paragraph.trim()}</Text>
            ))}
          </VStack>
        </Container>
      </Container>
    </Container>
  );
}
