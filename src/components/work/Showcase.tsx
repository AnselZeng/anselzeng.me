import { Box, VStack, Text, Image, Divider } from '@chakra-ui/react';
import { FC } from 'react';

interface ShowcaseItem {
  src: string;
  alt: string;
  description: string;
  boldText: string;
}

interface ShowcaseProps {
  title: string;
  items: ShowcaseItem[];
  bgColor: string;
  textColor: string;
}

const Showcase: FC<ShowcaseProps> = ({ title, items, bgColor, textColor }) => {
  return (
    <Box px={12} maxW="container.lg" m="auto">
      <Box px="10%" py={{ base: '10', lg: '20' }} bg={bgColor}>
        <VStack maxW="100%" spacing={4} alignItems="flex-start">
          <Text m="auto" pb={4} fontSize="2xl" fontWeight="black" color={textColor}>
            {title}
          </Text>
          <Image src={items[0].src} alt={items[0].alt} />
          <Text pb={4} fontSize="lg" color={textColor}>
            {`Fig 1. ${items[0].description} `}
            <b>{items[0].boldText}</b>.
          </Text>
          <Image src={items[1].src} alt={items[1].alt} />
          <Text pb={4} fontSize="lg" color={textColor}>
            {`Fig 2. ${items[1].description} `}
            <b>{items[1].boldText}</b>.
          </Text>
          <Divider borderColor="black" />
          <Image pt={4} src={items[2].src} alt={items[2].alt} />
          <Text fontSize="lg" color={textColor}>
            {`Fig 3. ${items[2].description} `}
            <b>{items[2].boldText}</b>.
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default Showcase;
