'use client';
import { Box, VStack, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

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
    <Box px={{ base: 6, lg: 12 }} py={{ base: 12, lg: 24 }} bg={primaryColour} m="auto">
      <Box
        px={{ base: 0, lg: 12 }}
        maxW="container.lg"
        m="auto"
        display="flex"
        justifyContent="center"
      >
        <VStack maxW={{ base: '100%', lg: '80%' }} spacing={4}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              size="sm"
              color={secondaryColour}
              fontFamily="orelega"
              textAlign="center"
            >
              {heading}
            </Heading>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Text fontSize={{ base: 'xl', lg: '3xl' }} color={textColor} textAlign="center">
              {mainText}
            </Text>
          </MotionBox>
        </VStack>
      </Box>
    </Box>
  );
};

export default BannerText;
