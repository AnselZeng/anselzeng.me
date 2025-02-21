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
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

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
    <Box px={{ base: 6, lg: 12 }} py={{ base: '12', lg: '24' }} maxW="container.lg" m="auto">
      <VStack spacing={4} alignItems="flex-start">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Heading size="sm" color={colors.lightGray} fontFamily="orelega">
            {heading}
          </Heading>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Text fontSize="2xl" fontWeight="black" color={colors.black}>
            {subtitle}
          </Text>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Text fontSize="lg" color={colors.black}>
            {overviewText}
          </Text>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Text pb={{ base: '8', lg: '16' }} fontSize="lg" color={colors.black}>
            {additionalText}
          </Text>
        </MotionBox>
      </VStack>
      <Stack align="start" spacing={{ base: 2, lg: 4 }} direction={{ base: 'column', lg: 'row' }}>
        <Flex w="100%" flexDir="column">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Heading size="md" pb={4} color={colors.primaryColour}>
              {titleOne}
            </Heading>
          </MotionBox>
          <UnorderedList spacing={2}>
            {pointsOne.map((item, index) => (
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <ListItem key={index} color={colors.black}>
                  {item}
                </ListItem>
              </MotionBox>
            ))}
          </UnorderedList>
        </Flex>
        <Flex w="100%" flexDir="column">
          {showTitleTwo && (
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Heading size="md" pb={4} color={colors.primaryColour}>
                {titleTwo}
              </Heading>
            </MotionBox>
          )}
          <UnorderedList spacing={2}>
            {pointsTwo.map((item, index) => (
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <ListItem key={index} color={colors.black}>
                  {item}
                </ListItem>
              </MotionBox>
            ))}
          </UnorderedList>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Points;
