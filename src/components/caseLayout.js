import * as React from 'react';
import { Link } from 'gatsby';
import { Box, ButtonGroup, Container, Flex, IconButton, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import { createIcon } from '@chakra-ui/icons';
import { lato, orelega } from './layout.module.css';

const EmailIcon = createIcon({
  displayName: 'EmailIcon',
  viewBox: '0 0 24 24',
  path: <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 19V8l7 4 7-4v11H5z" />,
});

const LinkedInIcon = createIcon({
  displayName: 'LinkedInIcon',
  viewBox: '0 0 24 24',
  path: <path fill="white" d="M18.75 3H5.25C3.57 3 2.25 4.32 2.25 6v12c0 1.68 1.32 3 3 3h13.5c1.68 0 3-1.32 3-3V6c0-1.68-1.32-3-3-3zM9 18H6V9h3v9zM7.5 7.5C6.57 7.5 5.8 6.73 5.8 5.8S6.57 4.1 7.5 4.1s1.7.77 1.7 1.7S8.43 7.5 7.5 7.5zM18 18h-3v-4.95c0-1.15-.02-2.65-1.6-2.65-1.6 0-1.85 1.25-1.85 2.55V18h-3V9h2.85v1.36h.04c.4-.75 1.35-1.55 2.8-1.55 3 0 3.55 1.95 3.55 4.5V18z" />,
});

const GitHubIcon = createIcon({
  displayName: 'GitHubIcon',
  viewBox: '0 0 24 24',
  path: <path fill="currentColor" d="M12 0a12 12 0 00-3.8 23c.6.1.8-.3.8-.7v-2.4c-3.3.7-4-1.6-4-1.6C4 16 3 15.6 3 15.6c-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .8 2.5.5 3.1.4.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2A11.4 11.4 0 0112 4.8c1.1 0 2.3.1 3.3-.1 2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.7.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.3c0 .4.2.9.8.7A12 12 0 0012 0" />,
});

const Layout = ({ children }) => {
  const palette = {
    white: '#F5F5F3',
    secondaryColour: '#B7D668',
    gradient: 'linear(135deg, #246A4A 2.3%, #B7D668 98.3%)',
  };

  const buttonLinks = [
    { icon: <EmailIcon />, url: 'mailto:azeng.hba2025@ivey.ca' },
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/anselzeng/' },
    { icon: <GitHubIcon />, url: 'https://github.com/AnselZeng' },
  ];

  const isMobile = useBreakpointValue({ base: true, lg: false });

  const navRef = React.useRef(null);
  const boxRef = React.useRef(null);

  React.useEffect(() => {
    if (isMobile && navRef.current && boxRef.current) {
      const navHeight = navRef.current.clientHeight;
      boxRef.current.style.marginTop = `${navHeight}px`;
    } else {
      boxRef.current.style.marginTop = '0';
    }
  }, [isMobile]);

  return (
    <Box w="100%" h="100vh" display="flex">
      <Box as="nav" position="fixed" w={{ base: '100%', lg: '8%' }} h={{ base: 'auto', lg: '100vh' }} bg="bg-surface" display="flex" zIndex="1" ref={navRef}>
        <Container maxW="100%" m="0" py={{ base: '0', lg: '8'}} bgGradient={palette.gradient} borderRight={{ base: 'none', lg: '4px' }} borderColor={{ lg: palette.secondaryColour }}>
          <Stack w="100%" h="100%" justifyContent="space-between" direction={{ base: 'row', lg: 'column' }}>
            <Link to="../">
              <Box w="100%" display="flex" flexDir="column" className={orelega}>
                <Text fontSize="5xl" color="white" textAlign="center">az</Text>
              </Box>
            </Link>
            {!isMobile && (
              <Box w="100%" className={lato}>
                <Flex py="8" flexDir="column">
                  <ButtonGroup variant="link" spacing="0" display="flex" flexDir={{ base: 'row', lg: 'column' }}>
                    {buttonLinks.map((item) => (
                      <IconButton
                        color="white"
                        key={item.url}
                        as="a"
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        icon={item.icon}
                        fontSize="4xl"
                      />
                    ))}
                  </ButtonGroup>
                </Flex>
              </Box>
            )}
          </Stack>
        </Container>
      </Box>
      <Box w={{ base: '100%', lg: '92%' }} ml={{ base: '0', lg: '8%' }} mt={{ base: '0', lg: '0'}} bg={palette.white} display="flex" ref={boxRef}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
