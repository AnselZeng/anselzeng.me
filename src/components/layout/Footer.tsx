'use client';

import {
  Box,
  Container,
  Flex,
  HStack,
  Text,
  VStack,
  Link,
  Icon,
  Divider,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaMedium, FaYoutube, FaSpotify } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/anselzeng/',
    color: '#0A65C2',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/AnselZeng',
    color: '#1F2328',
  },
  {
    name: 'Medium',
    icon: FaMedium,
    href: 'https://anselzeng.medium.com/',
    color: '#292929',
  },
  {
    name: 'YouTube',
    icon: FaYoutube,
    href: 'https://www.youtube.com/@AnselZeng',
    color: '#FF0000',
  },
  {
    name: 'Spotify',
    icon: FaSpotify,
    href: 'https://open.spotify.com/user/21qlylh2xqrwsmdnu4aymmrui',
    color: '#1DB954',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" bg="white" borderTop="1px solid" borderColor="gray.200">
      <Container maxW="container.lg" px={{ base: 5, lg: 10 }}>
        <VStack spacing={{ base: 4, lg: 5 }} py={{ base: 6, lg: 8 }}>
          {/* Social Links */}
          <HStack spacing={{ base: 3, lg: 4 }}>
            {socialLinks.map((social) => (
              <motion.div
                key={social.name}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={social.href}
                  isExternal
                  aria-label={social.name}
                  color="gray.500"
                  _hover={{ color: social.color }}
                  transition="color 0.2s"
                >
                  <Icon as={social.icon} boxSize={{ base: 4, lg: 5 }} />
                </Link>
              </motion.div>
            ))}
          </HStack>

          <Divider borderColor="gray.200" />

          {/* Copyright */}
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
            w="full"
            gap={4}
          >
            <Text color="gray.500" fontSize="xs">
              © {currentYear} Ansel Zeng. All rights reserved.
            </Text>
            <Text color="gray.500" fontSize="xs">
              Built with Next.js, Chakra UI & Framer Motion
            </Text>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}
