import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Heading,
  ListItem,
  OrderedList,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { PlacesTable } from "@/components/fun/PlacesTable";

interface AccordionItemListProps {
  title: string;
  items: string[];
}

const AccordionItemList: React.FC<AccordionItemListProps> = ({ title, items }) => (
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex="1" textAlign="left">
          {title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <OrderedList>
        {items.map((item, index) => (
          <ListItem ml={2} key={index}>
            {item}
          </ListItem>
        ))}
      </OrderedList>
    </AccordionPanel>
  </AccordionItem>
);

export default function Page() {
  const countries = [
    "Canada",
    "China",
    "Costa Rica",
    "Cuba",
    "France",
    "Greece",
    "Malaysia",
    "Maldives",
    "Mexico",
    "Monaco",
    "Netherlands",
    "Panama",
    "Philippines",
    "Thailand",
    "United States",
    "Vietnam",
  ];

  const territories = [
    "Anguilla (🇬🇧)",
    "Aruba (🇳🇱)",
    "Bonaire (🇳🇱)",
    "Curaçao (🇳🇱)",
    "Puerto Rico (🇺🇸)",
    "Saint Martin (🇳🇱/🇫🇷)",
  ];

  const canadaItems = [
    "Alberta",
    "British Columbia",
    "New Brunswick",
    "Northwest Territories",
    "Nova Scotia",
    "Ontario",
    "Prince Edward Island",
    "Québec",
  ];

  const usaItems = [
    "Arizona",
    "California",
    "Florida",
    "Illinois",
    "Massachusetts",
    "Michigan",
    "Nevada",
    "New York",
    "Puerto Rico (Territory)",
    "Utah",
    "Washington",
    "Washington, D.C. (Federal District)",
  ];

  return (
    <Container bg="#FFF8EB" maxW="100%" p={0}>
      <Container maxW="container.xl" p={0}>
        <Flex py={6} />
        <VStack px={12} py={{ base: 12, lg: 24 }} maxW="container.lg" m="auto">
          <Text>welcome to my</Text>
          <Heading textAlign="center">adventures around the globe</Heading>
        </VStack>
      </Container>

      <Container px={0} py={{ base: 12, lg: 24 }} maxW="100%" bg="white">
        <Container px={12} maxW="container.lg">
          <Heading pb={4} size="md">
            a brief introduction
          </Heading>
          <VStack pb={12} spacing={4}>
            <Text>
              Raised across three continents in three countries—the Netherlands, China, and Canada—I&apos;ve had the
              unique privilege of experiencing the richness and diversity of different cultures early on. These
              experiences shaped my curiosity, fueling my desire to always ask &quot;why&quot; and &quot;how,&quot;
              and sparked a lifelong passion for understanding the world around me.
            </Text>
            <Text>
              A special place in my heart is reserved for cities and their stories, particularly when it comes to urban
              development. From Barcelona&apos;s superblocks that redefine modern city life to the radial design of Mexico
              City, these cities reflect not only the ingenuity of their people but also the evolving needs of the
              communities they serve.
            </Text>
            <Text>
              Some of my favorite travel memories include zip-lining through the cloud forests of Monteverde, relaxing
              in a rooftop hot tub while overlooking the Aegean Sea in Santorini, and spending an unforgettable night at
              Everest Base Camp. Each adventure deepened my appreciation for the world&apos;s natural wonders and the diverse
              experiences it offers.
            </Text>
            <Text>
              Earlier this year, my mom embarked on a remarkable expedition to Antarctica, fulfilling her lifelong dream
              of visiting all seven continents. Her achievement inspires me to continue exploring the world, not just to
              see new places but to gain new perspectives. Each journey and destination helps me see the bigger picture,
              deepens my understanding of the world, and ultimately inspires me to make a meaningful impact.
            </Text>
          </VStack>
          <Heading pb={4} size="md">
            my travel stats
          </Heading>
          <Accordion allowToggle width="100%">
            <Stack spacing={{ base: 0, lg: 12 }} direction={{ base: "column", lg: "row" }}>
              <Box width="100%">
                <AccordionItemList title="🇺🇳 Countries" items={countries} />
                <AccordionItemList title="🌐 Territories" items={territories} />
              </Box>
              <Box width="100%">
                <AccordionItemList title="🇨🇦 Canadian Provinces and Territories" items={canadaItems} />
                <AccordionItemList title="🇺🇸 U.S. States and Territories" items={usaItems} />
              </Box>
            </Stack>
          </Accordion>
        </Container>
      </Container>

      <PlacesTable />

      <Flex py={{ base: 6, lg: 12 }} />
    </Container>
  );
}
