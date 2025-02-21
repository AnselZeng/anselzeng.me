'use client';
import { Box, VStack, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

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
    <Box px={{ base: 6, lg: 12 }} py={{ base: 12, lg: 24 }} maxW="container.lg" m="auto">
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
        {texts.map((text, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Text fontSize="lg" color={colors.black}>
              {text}
            </Text>
          </MotionBox>
        ))}
      </VStack>
    </Box>
  );
};

export default BasicText;
