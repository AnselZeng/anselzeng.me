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

function sectionPathPrefix(section: NavSection): string {
  const href = section.items[0]?.href ?? '';
  const firstSegment = href.split('/').filter(Boolean)[0];
  return firstSegment ? `/${firstSegment}` : '';
}

function mobileNavIsActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

function MobileNavLinkRow({
  href,
  label,
  emoji,
  pathname,
  onNavigate,
}: {
  href: string;
  label: string;
  emoji?: string;
  pathname: string;
  onNavigate: () => void;
}) {
  const active = mobileNavIsActive(pathname, href);
  return (
    <Link href={href} onClick={onNavigate} style={{ textDecoration: 'none' }}>
      <Box py={3.5} px={1} _active={{ bg: 'orange.50' }}>
        <HStack spacing={3}>
          {emoji ? (
            <Box as="span" fontSize="lg" aria-hidden>
              {emoji}
            </Box>
          ) : null}
          <Box
            as="span"
            fontSize="lg"
            fontWeight={active ? '700' : '500'}
            color={active ? 'brand.500' : 'gray.700'}
          >
            {label}
          </Box>
        </HStack>
      </Box>
    </Link>
  );
}

function MobileNavOverlay({
  isOpen,
  onClose,
  pathname,
}: {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu-overlay"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(255, 248, 235, 0.97)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100dvh',
            width: '100%',
            boxSizing: 'border-box',
            paddingTop: 'max(1rem, env(safe-area-inset-top, 0px))',
            paddingBottom: 'max(1rem, env(safe-area-inset-bottom, 0px))',
            overflowY: 'auto',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '24rem',
              flexShrink: 0,
            }}
          >
            <Box px={{ base: 5, sm: 6 }} py={{ base: 4, sm: 5 }}>
              <VStack align="stretch" spacing={0}>
                <MobileNavLinkRow href="/" label="Home" pathname={pathname} onNavigate={onClose} />

                {navSections.map((section) => (
                  <Box key={section.label} pt={8}>
                    <Box
                      as="p"
                      fontSize="xs"
                      fontWeight="700"
                      letterSpacing="0.14em"
                      textTransform="uppercase"
                      color="gray.400"
                      mb={2}
                      px={1}
                    >
                      {section.label}
                    </Box>
                    <VStack align="stretch" spacing={0}>
                      {section.items.map((item) => (
                        <MobileNavLinkRow
                          key={item.href}
                          href={item.href}
                          label={item.label}
                          emoji={item.emoji}
                          pathname={pathname}
                          onNavigate={onClose}
                        />
                      ))}
                    </VStack>
                  </Box>
                ))}

                <Box pt={8}>
                  <MobileNavLinkRow
                    href="/about"
                    label="About"
                    pathname={pathname}
                    onNavigate={onClose}
                  />
                </Box>
              </VStack>
            </Box>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 62em)');
    const closeOnDesktop = () => {
      if (mq.matches) setIsMenuOpen(false);
    };
    mq.addEventListener('change', closeOnDesktop);
    return () => mq.removeEventListener('change', closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMenuOpen]);

  const bgColor = useColorModeValue('rgba(255, 248, 235, 0.95)', 'rgba(17, 24, 39, 0.95)');
  const borderColor = useColorModeValue('rgba(255, 123, 0, 0.1)', 'rgba(255, 123, 0, 0.2)');

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isSectionActive = (section: NavSection) => {
    const prefix = sectionPathPrefix(section);
    if (!prefix) return false;
    return pathname === prefix || pathname.startsWith(`${prefix}/`);
  };

  return (
    <>
      <MotionBox
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex={1001}
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
            <Box
              display={{
                base: isMenuOpen ? 'none' : 'block',
                lg: 'block',
              }}
            >
              <Link href="/" style={{ lineHeight: 0 }}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                  minH="44px"
                  minW={{ base: '44px', lg: 'fit-content' }}
                  pl={{ base: 1, lg: 0 }}
                  pr={{ base: 1, lg: 0 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Heading
                      as="span"
                      fontSize={{ base: 'xl', lg: '3xl' }}
                      fontWeight="700"
                      color="brand.500"
                      cursor="pointer"
                      lineHeight="1"
                    >
                      AZ
                    </Heading>
                  </motion.div>
                </Box>
              </Link>
            </Box>

            <HStack spacing={2} display={{ base: 'none', lg: 'flex' }}>
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
                      color={isSectionActive(section) ? 'brand.500' : 'gray.600'}
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

            <IconButton
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
              variant="ghost"
              size="md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              color="gray.600"
              display={{ base: 'flex', lg: 'none' }}
              ml={{ base: isMenuOpen ? 'auto' : 0, lg: 0 }}
              _hover={{
                color: 'brand.500',
                bg: 'brand.50',
                transform: 'scale(1.008)',
              }}
              minW="44px"
              h="44px"
              borderRadius="lg"
              mr={{ base: -1, lg: 0 }}
            />
          </Flex>
        </Container>
      </MotionBox>

      <MobileNavOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
