import * as React from 'react';
import { Box, Button, ButtonGroup, Container, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { lato, orelega } from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  const palette = {
    white: '#F5F5F3',
    mainColour: '#246A4A',
    secondaryColour: '#B7D668',
    gradient: 'linear(135deg, #246A4A 2.3%, #B7D668 98.3%)',
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 100;
      const elementPosition = section.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box as="section" w="100%" h="100vh" display="flex">
      <Box as="nav" position={{ base: 'absolute', lg: 'fixed' }} w={{ base: '100%', lg: '45%' }} minH="100vh" bg="bg-surface" display="flex">
        <Container maxW="100%" m="0" px="16" py="8" bgGradient={palette.gradient} borderRight={{ base: 'none', lg: '4px' }} borderColor={{ lg: palette.secondaryColour }}>
          <VStack w="100%" h="100%" justifyContent="space-between">
            <Box w="100%" display="flex" flexDir="column" className={orelega}>
              <Text mb={{ base: '-4', lg: '-10' }} fontSize={{ base: '5xl', lg: '8xl' }} color={palette.white}>ansel zeng</Text>
              <Text mb="4" fontSize={{ base: '5xl', lg: '8xl' }} color={palette.secondaryColour}>portfolio</Text>
              <Flex>
                <ButtonGroup variant="outline" spacing={{ base: '4', lg: '8' }} display="flex" flexWrap="wrap">
                  {['work', 'about'].map((item) => (
                    <Button
                      size={{ base: 'sm', lg: 'md' }}
                      color={palette.secondaryColour}
                      borderColor={palette.secondaryColour}
                      _hover={{ color: palette.mainColour, bg: palette.secondaryColour }}
                      fontWeight="normal"
                      borderRadius="full"
                      key={item}
                      onClick={() => scrollToSection(item)}
                    >
                      {item}
                    </Button>
                  ))}
                </ButtonGroup>
              </Flex>
            </Box>
            <Box w="100%" className={lato}>
              <Text fontSize={{ base: 'xl', lg: '2xl' }}>
                Welcome! I’m Ansel — a software engineer crafting impactful solutions through technical expertise, innovation, and user-centric design.
              </Text>
              <Flex py="8">
                <HStack display="flex" flexWrap="wrap" spacing={{ base: '4', lg: '8' }}>
                  {[
                    { label: 'email', url: 'mailto:azeng.hba2025@ivey.ca' },
                    { label: 'linkedin', url: 'https://www.linkedin.com/in/anselzeng/' },
                    { label: 'github', url: 'https://github.com/AnselZeng' },
                    { label: 'blog', url: 'https://anselzeng.medium.com/' },
                    { label: 'resume', url: '/Ansel_Zeng_Resume.pdf' }
                  ].map((item) => (
                    <a key={item.label} href={item.url} target="_blank" rel="noopener noreferrer">
                      <Button color="black" variant="link" borderRadius="full">{item.label}</Button>
                    </a>
                  ))}
                </HStack>
              </Flex>
            </Box>
          </VStack>
        </Container>
      </Box>

      <Box w={{ base: '100%', lg: '55%' }} ml={{ base: '0', lg: '45%' }} mt={{ base: '100vh', lg: '0' }} bg={palette.white} display="flex">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
