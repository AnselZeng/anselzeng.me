'use client';
import { Box, Stack, Tag, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { motion } from 'framer-motion';

const MotionTag = motion(Tag);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

interface HeaderProps {
  tag: string;
  title: string;
  subtitle: string;
}

const Header: FC<HeaderProps> = ({ tag, title, subtitle }) => {
  return (
    <Box px={{ base: 6, lg: 12 }} py={{ base: 12, lg: 24 }} color="#1D1D1F" maxW="container.lg" m="auto">
      <Stack spacing={4}>
        <MotionTag
          size="lg"
          w="fit-content"
          borderRadius="full"
          color="#1D1D1F"
          bg="transparent"
          border="1px"
          borderColor="#1D1D1F"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {tag}
        </MotionTag>
        <MotionHeading
          size="3xl"
          fontFamily="orelega"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </MotionHeading>
        <MotionText
          fontSize="1.8rem"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </MotionText>
      </Stack>
    </Box>
  );
};

export default Header;
