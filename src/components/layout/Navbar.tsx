'use client';

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
  VStack,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

interface NavItem {
  label: string;
  href: string;
  emoji?: string;
}

interface NavSection {
  label: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    label: 'Work',
    items: [
      { href: '/work/telus', label: 'Telus', emoji: '🗼' },
      { href: '/work/ips', label: 'IPS', emoji: '🎧' },
      { href: '/work/rbc', label: 'RBC', emoji: '🏦' },
      { href: '/work/tweebaa', label: 'Tweebaa', emoji: '📱' },
    ],
  },
  {
    label: 'Fun',
    items: [
      { href: '/fun/design', label: 'Design', emoji: '🎨' },
      { href: '/fun/travels', label: 'Travels', emoji: '✈️' },
      { href: '/fun/blog', label: 'Blog', emoji: '📝' },
    ],
  },
];

const allNavItems: NavItem[] = [
  { href: '/', label: 'Home' },
  ...navSections.flatMap(section => section.items),
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const pathname = usePathname();
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgColor = useColorModeValue('rgba(255, 248, 235, 0.95)', 'rgba(17, 24, 39, 0.95)');
  const borderColor = useColorModeValue('rgba(255, 123, 0, 0.1)', 'rgba(255, 123, 0, 0.2)');

  const isActive = (href: string) => pathname === href;

  const MobileMenu = () => (
    <AnimatePresence>
      {isMenuOpen && (
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(255, 248, 235, 0.98)"
          backdropFilter="blur(10px)"
          zIndex={1000}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <IconButton
            aria-label="Close menu"
            icon={<CloseIcon />}
            variant="ghost"
            size="md"
            onClick={() => setIsMenuOpen(false)}
            color="gray.600"
            _hover={{ 
              color: 'brand.500',
              bg: 'brand.50',
              transform: 'scale(1.05)',
            }}
            position="absolute"
            top="16px"
            right="16px"
            zIndex={1001}
            minW="44px"
            h="44px"
            borderRadius="lg"
            transition="all 0.2s"
          />
          
          <VStack spacing={6} align="center" px={4}>
            {allNavItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="ghost"
                    size="md"
                    fontSize="md"
                    fontWeight="500"
                    color={isActive(item.href) ? 'brand.500' : 'gray.600'}
                    _hover={{
                      color: 'brand.500',
                      transform: 'scale(1.05)',
                    }}
                    transition="all 0.2s"
                    minH="44px"
                    px={5}
                  >
                    {item.emoji && <span style={{ marginRight: '8px' }}>{item.emoji}</span>}
                    {item.label}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </VStack>
        </MotionBox>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <MotionBox
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex={999}
        bg={scrolled ? bgColor : 'transparent'}
        borderBottom={scrolled ? `1px solid ${borderColor}` : 'none'}
        backdropFilter={scrolled ? 'blur(10px)' : 'none'}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Container maxW="container.lg" px={{ base: 5, lg: 10 }}>
          <Flex
            py={{ base: 2.5, lg: 3 }}
            alignItems="center"
            justifyContent="space-between"
            minH={{ base: "52px", lg: "56px" }}
          >
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heading
                  as="span"
                  fontSize={{ base: 'xl', lg: '3xl' }}
                  fontWeight="700"
                  color="brand.500"
                  cursor="pointer"
                >
                  AZ
                </Heading>
              </motion.div>
            </Link>

            {!isMobile ? (
              <HStack spacing={2}>
                <Link href="/">
                  <Box
                    as="span"
                    display="inline-block"
                    px={3}
                    py={1.5}
                    fontSize="md"
                    fontWeight="500"
                    color={isActive('/') ? 'brand.500' : 'gray.600'}
                    bg="transparent"
                    borderRadius="md"
                    cursor="pointer"
                    transition="all 0.2s"
                    _hover={{ 
                      color: 'brand.500',
                      bg: 'transparent'
                    }}
                    _active={{ 
                      bg: 'transparent',
                      color: 'brand.500',
                      transform: 'none'
                    }}
                    _focus={{ 
                      bg: 'transparent',
                      color: 'brand.500',
                      outline: 'none'
                    }}
                  >
                    Home
                  </Box>
                </Link>

                {navSections.map((section) => (
                  <Menu key={section.label}>
                    <MenuButton
                      as={Button}
                      variant="ghost"
                      size="sm"
                      rightIcon={<ChevronDownIcon />}
                      fontSize="md"
                      fontWeight="500"
                      color="gray.600"
                      _hover={{ color: 'brand.500' }}
                      _active={{ bg: 'transparent' }}
                    >
                      {section.label}
                    </MenuButton>
                    <MenuList
                      bg="white"
                      border="1px solid"
                      borderColor="gray.100"
                      borderRadius="xl"
                      boxShadow="xl"
                      py={2}
                      minW="fit-content"
                    >
                      {section.items.map((item) => (
                        <MenuItem
                          key={item.href}
                          as={Link}
                          href={item.href}
                          bg="transparent"
                          fontSize="md"
                          color={isActive(item.href) ? 'brand.500' : 'gray.600'}
                          _hover={{
                            bg: 'brand.50',
                            color: 'brand.500',
                          }}
                          transition="background 0.15s ease"
                        >
                          {item.emoji && <span style={{ marginRight: '8px' }}>{item.emoji}</span>}
                          {item.label}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                ))}

                <Link href="/about">
                  <Box
                    as="span"
                    display="inline-block"
                    px={3}
                    py={1.5}
                    fontSize="md"
                    fontWeight="500"
                    color={isActive('/about') ? 'brand.500' : 'gray.600'}
                    bg="transparent"
                    borderRadius="md"
                    cursor="pointer"
                    transition="all 0.2s"
                    _hover={{ 
                      color: 'brand.500',
                      bg: 'transparent'
                    }}
                    _active={{ 
                      bg: 'transparent',
                      color: 'brand.500',
                      transform: 'none'
                    }}
                    _focus={{ 
                      bg: 'transparent',
                      color: 'brand.500',
                      outline: 'none'
                    }}
                  >
                    About
                  </Box>
                </Link>
              </HStack>
            ) : (
              <IconButton
                aria-label="Toggle menu"
                icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
                variant="ghost"
                size="md"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                color="gray.600"
                _hover={{ 
                  color: 'brand.500',
                  bg: 'brand.50',
                  transform: 'scale(1.05)',
                }}
                minW="44px"
                h="44px"
                borderRadius="lg"
                transition="all 0.2s"
              />
            )}
          </Flex>
        </Container>
      </MotionBox>

      {isMobile && <MobileMenu />}
    </>
  );
}
