import { Box, VStack, Heading, Text, HStack, Flex } from '@chakra-ui/react';
import { FC } from 'react';

interface Takeaway {
  number: string;
  text: string;
}

interface TakeawaysProps {
  sectionTitle: string;
  subtitle: string;
  description: string;
  takeawaysTitle: string;
  takeaways: Takeaway[];
  colors: {
    secondaryColour: string;
    subtitleColor: string;
    primaryColour: string;
  };
}

const Takeaways: FC<TakeawaysProps> = ({
  sectionTitle,
  subtitle,
  description,
  takeawaysTitle,
  takeaways,
  colors,
}) => {
  return (
    <Box px={12} pt={0} pb={{ base: '12', lg: '24' }} maxW="container.lg" m="auto">
      <VStack spacing={4} alignItems="flex-start">
        <Heading size="sm" color={colors.secondaryColour} fontFamily="orelega">
          {sectionTitle}
        </Heading>
        <Text fontSize="2xl" fontWeight="black" color={colors.subtitleColor}>
          {subtitle}
        </Text>
        <Text fontSize="lg" color={colors.subtitleColor}>
          {description}
        </Text>
        <Text pb={6} fontSize="lg" color={colors.subtitleColor}>
          {takeawaysTitle}
        </Text>
      </VStack>

      <HStack pb={4} spacing={4} flexWrap="wrap">
        {takeaways.slice(0, 3).map((takeaway, index) => (
          <Flex key={index} flex="1" flexDir="column">
            <Heading size="md" pb={2} color={colors.primaryColour}>
              {takeaway.number}
            </Heading>
            <Text>{takeaway.text}</Text>
          </Flex>
        ))}
      </HStack>

      <HStack spacing={4} flexWrap="wrap">
        {takeaways.slice(3).map((takeaway, index) => (
          <Flex key={index + 3} flex="1" flexDir="column">
            <Heading size="md" pb={2} color={colors.primaryColour}>
              {takeaway.number}
            </Heading>
            <Text>{takeaway.text}</Text>
          </Flex>
        ))}
      </HStack>
    </Box>
  );
};

export default Takeaways;
