'use client';
import { Box, VStack, Text, Image, Divider } from '@chakra-ui/react';
import { FC } from 'react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionImage = motion(Image);

interface ShowcaseItem {
  src: string;
  alt: string;
  description: string;
  boldText: string;
}

interface ShowcaseProps {
  title: string;
  items: ShowcaseItem[];
  bgColor: string;
  textColor: string;
}

const Showcase: FC<ShowcaseProps> = ({ title, items, bgColor, textColor }) => {
  return (
    <Box px={{ base: 6, lg: 12 }} maxW="container.lg" m="auto">
      <Box px={{ base: 6, lg: '10%' }} py={{ base: '10', lg: '20' }} bg={bgColor}>
        <VStack maxW="100%" spacing={4} alignItems="flex-start">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Text m="auto" pb={4} fontSize="2xl" fontWeight="black" color={textColor}>
              {title}
            </Text>
          </MotionBox>
          <MotionImage
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            src={items[0].src}
            alt={items[0].alt}
          />
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Text pb={4} fontSize="lg" color={textColor}>
            {`Fig 1. ${items[0].description} `}
            <b>{items[0].boldText}</b>.
          </Text>
          </MotionBox>
          <MotionImage
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            src={items[1].src}
            alt={items[1].alt}
          />
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Text pb={4} fontSize="lg" color={textColor}>
            {`Fig 2. ${items[1].description} `}
            <b>{items[1].boldText}</b>.
          </Text>
          </MotionBox>
          <Divider borderColor="black" />
          <MotionImage
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            pt={4}
            src={items[2].src}
            alt={items[2].alt}
          />
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Text fontSize="lg" color={textColor}>
            {`Fig 3. ${items[2].description} `}
            <b>{items[2].boldText}</b>.
          </Text>
          </MotionBox>
        </VStack>
      </Box>
    </Box>
  );
};

export default Showcase;
