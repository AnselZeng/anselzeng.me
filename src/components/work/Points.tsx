'use client';
import {
  Box,
  VStack,
  Heading,
  Text,
  Flex,
  UnorderedList,
  ListItem,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FC } from 'react';

interface PointsProps {
  heading: string;
  subtitle: string;
  overviewText: string;
  additionalText: string;
  titleOne: string;
  titleTwo?: string;
  pointsOne: string[];
  pointsTwo: string[];
  colors: {
    lightGray: string;
    black: string;
    primaryColour: string;
  };
}

const Points: FC<PointsProps> = ({
  heading,
  subtitle,
  overviewText,
  additionalText,
  titleOne,
  titleTwo,
  pointsOne,
  pointsTwo,
  colors,
}) => {
  const showTitleTwo = useBreakpointValue({ base: false, lg: true });

  return (
    <Box px={12} py={{ base: '12', lg: '24' }} maxW="container.lg" m="auto">
      <VStack spacing={4} alignItems="flex-start">
        <Heading size="sm" color={colors.lightGray} fontFamily="orelega">
          {heading}
        </Heading>
        <Text fontSize="2xl" fontWeight="black" color={colors.black}>
          {subtitle}
        </Text>
        <Text fontSize="lg" color={colors.black}>
          {overviewText}
        </Text>
        <Text pb={{ base: '8', lg: '16' }} fontSize="lg" color={colors.black}>
          {additionalText}
        </Text>
      </VStack>
      <Stack align="start" spacing={{ base: 2, lg: 4 }} direction={{ base: 'column', lg: 'row' }}>
        <Flex w="100%" flexDir="column">
          <Heading size="md" pb={4} color={colors.primaryColour}>
            {titleOne}
          </Heading>
          <UnorderedList spacing={2}>
            {pointsOne.map((item, index) => (
              <ListItem key={index} color={colors.black}>
                {item}
              </ListItem>
            ))}
          </UnorderedList>
        </Flex>
        <Flex w="100%" flexDir="column">
          {showTitleTwo && (
            <Heading size="md" pb={4} color={colors.primaryColour}>
              {titleTwo}
            </Heading>
          )}
          <UnorderedList spacing={2}>
            {pointsTwo.map((item, index) => (
              <ListItem key={index} color={colors.black}>
                {item}
              </ListItem>
            ))}
          </UnorderedList>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Points;
