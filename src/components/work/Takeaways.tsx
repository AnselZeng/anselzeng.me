'use client';
import { Box, VStack, Heading, Text, HStack, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

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
    <Box px={{ base: 6, lg: 12 }} pt={0} pb={{ base: '12', lg: '24' }} maxW="container.lg" m="auto">
      <VStack spacing={4} alignItems="flex-start">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Heading size="sm" color={colors.secondaryColour} fontFamily="orelega">
            {sectionTitle}
          </Heading>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Text fontSize="2xl" fontWeight="black" color={colors.subtitleColor}>
            {subtitle}
          </Text>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Text fontSize="lg" color={colors.subtitleColor}>
            {description}
          </Text>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Text pb={6} fontSize="lg" color={colors.subtitleColor}>
            {takeawaysTitle}
          </Text>
        </MotionBox>
      </VStack>

      <HStack pb={4} spacing={4} flexWrap="wrap">
        {takeaways.slice(0, 3).map((takeaway, index) => (
          <Flex key={index} flex="1" flexDir="column">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Heading size="md" pb={2} color={colors.primaryColour}>
                {takeaway.number}
              </Heading>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Text>{takeaway.text}</Text>
            </MotionBox>
          </Flex>
        ))}
      </HStack>

      <HStack spacing={4} flexWrap="wrap">
        {takeaways.slice(3).map((takeaway, index) => (
          <Flex key={index + 3} flex="1" flexDir="column">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Heading size="md" pb={2} color={colors.primaryColour}>
                {takeaway.number}
              </Heading>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Text>{takeaway.text}</Text>
            </MotionBox>
          </Flex>
        ))}
      </HStack>
    </Box>
  );
};

export default Takeaways;
