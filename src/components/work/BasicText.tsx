import { Box, VStack, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface BasicTextProps {
  heading: string;
  subtitle: string;
  texts: string[];
  colors: {
    lightGray: string;
    black: string;
  };
}

const BasicText: FC<BasicTextProps> = ({
  heading,
  subtitle,
  texts,
  colors,
}) => {
  return (
    <Box px={12} py={{ base: 12, lg: 24 }} maxW="container.lg" m="auto">
      <VStack spacing={4} alignItems="flex-start">
        <Heading size="sm" color={colors.lightGray} fontFamily="orelega">
          {heading}
        </Heading>
        <Text fontSize="2xl" fontWeight="black" color={colors.black}>
          {subtitle}
        </Text>
        {texts.map((text, index) => (
          <Text key={index} fontSize="lg" color={colors.black}>
            {text}
          </Text>
        ))}
      </VStack>
    </Box>
  );
};

export default BasicText;
