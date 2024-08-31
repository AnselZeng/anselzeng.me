import { Box, VStack, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface BannerTextProps {
  heading: string;
  mainText: string;
  primaryColour: string;
  secondaryColour: string;
  textColor: string;
}

const BannerText: FC<BannerTextProps> = ({
  heading,
  mainText,
  primaryColour,
  secondaryColour,
  textColor,
}) => {
  return (
    <Box px={12} py={{ base: 12, lg: 24 }} bg={primaryColour} m="auto">
      <Box
        px={{ base: 0, lg: 12 }}
        maxW="container.lg"
        m="auto"
        display="flex"
        justifyContent="center"
      >
        <VStack maxW={{ base: '100%', lg: '80%' }} spacing={4}>
          <Heading
            size="sm"
            color={secondaryColour}
            fontFamily="orelega"
            textAlign="center"
          >
            {heading}
          </Heading>
          <Text fontSize={{ base: 'xl', lg: '3xl' }} color={textColor} textAlign="center">
            {mainText}
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default BannerText;
