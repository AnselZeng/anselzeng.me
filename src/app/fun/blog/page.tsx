import {
  Avatar,
  Box,
  Card,
  CardBody,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

interface BlogCardProps {
  imageSrc: string;
  altText: string;
  name: string;
  date: string;
  title: string;
  content: string;
  readTime: string;
  href: string;
  hoverColor: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  imageSrc,
  altText,
  name,
  date,
  title,
  content,
  readTime,
  href,
  hoverColor,
}) => (
  <Link href={href} passHref>
    <Box
      w="100%"
      borderRadius="lg"
      overflow="hidden"
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{
        transform: "scale(1.03)",
        boxShadow: `0 0 15px ${hoverColor}`,
      }}
    >
      <Card w="100%">
        <CardBody p={0}>
          <Flex direction={{ base: "column", lg: "row" }}>
            <Box w="100%">
              <Image
                src={imageSrc}
                alt={altText}
                boxSize="100%"
                objectFit="cover"
              />
            </Box>
            <VStack align="start" w="100%" p={6} spacing={3}>
              <HStack>
                <Avatar name={name} bg="orange" />
                <VStack spacing={0} align="start">
                  <Text>{name}</Text>
                  <Text fontSize="small">{date}</Text>
                </VStack>
              </HStack>
              <Heading size="lg">{title}</Heading>
              <Text noOfLines={3} textOverflow="ellipsis">
                {content}
              </Text>
              <Divider />
              <Text>{readTime}</Text>
            </VStack>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  </Link>
);

export default function Page() {
  return (
    <Container bg="#FFF8EB" maxW="100%" p={0}>
      <Container maxW="container.xl" p={0}>
        <Flex py={6} />
        <VStack px={12} py={{ base: 12, lg: 24 }} maxW="container.lg" m="auto">
          <Text>welcome to my</Text>
          <Heading textAlign={"center"}>one thought per year blog</Heading>
        </VStack>

        <VStack
          px={12}
          pb={{ base: 12, lg: 24 }}
          spacing={12}
          maxW="container.lg"
          m="auto"
        >
          <BlogCard
            imageSrc="/blog/everest/everest.png"
            altText="everest"
            name="Ansel Zeng"
            date="Jun 26, 2024"
            title="A Night on Everest"
            content="It’s 3:09 pm, Wednesday, June 26, 2024. I’m sitting with my Dad on our flight from Lhasa to Chengdu and eventually back home to Beijing. Today marks the end of our 10-day journey in Tibet. This is undoubtedly one of the most memorable trips I’ve ever taken. From the 40-hour train ride that took us from sea level to an altitude of over 3,000 m, to visiting Buddhist monasteries and learning about the history of this beautiful religion, there’s one event that’s etched into my memory the most: spending a night on Mount Everest Base Camp."
            readTime="5 min read"
            href="/fun/blog/everest"
            hoverColor="rgba(190, 220, 230, 0.8)"
          />
          <BlogCard
            imageSrc="/blog/longines.png"
            altText="longines"
            name="Ansel Zeng"
            date="Jul 27, 2022"
            title="From Crown to Caliber"
            content="It’s 8:09 am, Wednesday, July 27, 2022. I’m currently taking the train to work in person in downtown Toronto. Unlike previous business casual fits, hidden underneath my left sleeve today is a special piece of accessory. Here’s the story of my first mechanical watch. An unspoken rule in the watch industry is that you can, and must only, purchase a timepiece on a special occasion or hitting a particular milestone."
            readTime="2 min read"
            href="/fun/blog/longines"
            hoverColor="rgba(36, 61, 93, 0.8)"
          />
          <BlogCard
            imageSrc="/blog/blackpink.png"
            altText="blackpink"
            name="Ansel Zeng"
            date="Feb 12, 2021"
            title="Blackpink In Your Area"
            content="It’s 10:24 pm, Friday, February 12, 2021. Laying on the living room couch, I got the fireplace turned on and have finally decided to write my second blog post. Now a lot has happened since the first, which was written nine days before my first day of university. Fast forward to today, which happens to be Chinese New Year, I’ve just finished midterms and it’s the beginning of our second reading week."
            readTime="3 min read"
            href="/fun/blog/blackpink"
            hoverColor="rgba(73, 148, 144, 0.8)"
          />
          <BlogCard
            imageSrc="/blog/ghibli.jpg"
            altText="ghibli"
            name="Ansel Zeng"
            date="Aug 31, 2020"
            title="Castle in the Sky"
            content="It’s 4:45 pm, Monday, August 31, 2020. I’m sitting by the cottage docks outlooking Muskoka Lakes, attempting to write down some of my thoughts for the first time. It is now T-minus nine days before the first day of university. As I prepare for the next chapter in my life, stress and pressure begin to sink in. Since the beginning of quarantine, it’s been tough to find comfort. Every day felt miserable, useless, being stuck in an endless cycle of boredom and solitude."
            readTime="2 min read"
            href="/fun/blog/ghibli"
            hoverColor="rgba(49, 135, 99, 0.8)"
          />
        </VStack>
      </Container>
    </Container>
  );
}
