import { Box, VStack, Heading, Text, SimpleGrid, Image, Card } from '@chakra-ui/react';
import { FC } from 'react';

interface HighlightsProps {
  heading: string;
  subtitle: string;
  pictures: string[];
  colors: {
    lightGray: string;
    black: string;
  };
}

const Highlights: FC<HighlightsProps> = ({
  heading,
  subtitle,
  pictures,
  colors,
}) => {
  return (
    <Box px={12} pt={0} pb={{ base: 12, lg: 24 }} maxW="container.lg" m="auto">
      <VStack spacing={4} pb={4} alignItems="flex-start">
        <Heading size="sm" color={colors.lightGray} fontFamily="orelega">
          {heading}
        </Heading>
        <Text fontSize="2xl" fontWeight="black" color={colors.black}>
          {subtitle}
        </Text>
      </VStack>
      
      <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={4}>
        {pictures.map((pic, index) => (
          <Card p={4} key={index}>
            <Image src={pic} alt={`highlight-${index}`} />
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Highlights;
