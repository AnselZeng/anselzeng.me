'use client';
import { Box, VStack, Heading, Text, SimpleGrid, Image, Card } from '@chakra-ui/react';
import { FC } from 'react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionSimpleGrid = motion(SimpleGrid);

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
    <Box px={{ base: 6, lg: 12 }} pt={0} pb={{ base: 12, lg: 24 }} maxW="container.lg" m="auto">
      <VStack spacing={4} pb={4} alignItems="flex-start">
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
      </VStack>
      
      <MotionSimpleGrid
        columns={{ sm: 2, md: 3 }}
        spacing={4}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        {pictures.map((pic, index) => (
          <Card p={4} key={index}>
            <Image src={pic} alt={`highlight-${index}`} />
          </Card>
        ))}
      </MotionSimpleGrid>
    </Box>
  );
};

export default Highlights;
