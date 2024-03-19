import { parseISO, format } from 'date-fns';
import Head from 'next/head';
import Link from 'next/link';
import { Container, Flex, HStack, Heading, IconButton, Spacer, Stack, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMedium, faYoutube, faSpotify, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import { useEffect } from 'react';

const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const customIconButton = defineStyle({
  // background: 'orange.500',
});

export const buttonTheme = defineStyleConfig({
  variants: { customIconButton },
});

const name = 'AZ';
export const siteTitle = 'AZ | home';

const CustomIconButton = ({ label, icon, url, colour }) => (
  <IconButton
    aria-label={label}
    icon={<FontAwesomeIcon icon={icon} />}
    onClick={() => window.open(url, '_blank')}
    size={'sm'}
    variant="customIconButton"
    color='#B0B3B6'
    _hover={{
      color: colour,
      transform: 'scale(1.04)',
      transition: 'transform 0.2s ease-in-out',
    }}
  />
);

export default function Layout({ children, home }) {
  useEffect(() => {
    const handleSmoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').substring(1);
      smoothScrollTo(targetId);
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  const palette = {
    background: '#EDF1FD',
    header: 'rgba(237, 241, 253, 0.4)',
    secondaryColour: '#B7D668',
    gradient: 'linear(135deg, #246A4A 2.3%, #B7D668 98.3%)',
  };

  return (
    <Container maxW={'full'} m={'auto'} p={0} bg={palette.background}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {home ? (
        <Container maxW={'container.xl'} px={12} py={4} pos={'absolute'} bg={palette.header} left={0} right={0} id="home">
          <Flex align={'center'}>
            <Heading fontSize={'xxx-large'} m={0}>{name}</Heading>
            <Spacer />
            <Flex gap={46} fontSize={'smaller'} fontWeight={'600'}>
              <Link href='/'>HOME</Link>
              <Link href='#experience'>EXPERIENCE</Link>
              <Link href='/about'>ABOUT</Link>
            </Flex>
            <Spacer />
            <Link href={'/Ansel_Zeng_Resume.pdf'} target="_blank" rel="noopener noreferrer">RESUME</Link>
          </Flex>
        </Container>
      ) : (
        <Container maxW={'container.xl'} px={12} py={4} pos={'absolute'} bg={palette.header} left={0} right={0}>
          <Flex align={'center'}>
            <Heading fontSize={'xxx-large'} m={0}>{name}</Heading>
            <Spacer />
            <Flex gap={46} fontSize={'smaller'} fontWeight={'600'}>
              <Link href='/'>HOME</Link>
              <Link href='/#experience'>EXPERIENCE</Link>
              <Link href='/about'>ABOUT</Link>
            </Flex>
          </Flex>
        </Container>
      )}

      <main>{children}</main>

      <Container maxW={'100%'} bg={'#F1F1F1'}>
        <Container maxW={'container.xl'} px={12}>
          <Stack direction={'column'} spacing={6} p={12}>
            <HStack spacing={6} justifyContent={'center'}>
              <CustomIconButton
                label="LinkedIn"
                icon={faLinkedinIn}
                url='https://www.linkedin.com/in/anselzeng/'
                colour={'#0A65C2'}
              />
              <CustomIconButton
                label="GitHub"
                icon={faGithub}
                url='https://github.com/AnselZeng'
                colour={'#1F2328'}
              />
              <CustomIconButton
                label="Medium"
                icon={faMedium}
                url='https://anselzeng.medium.com/'
                colour={'#292929'}
              />
              <CustomIconButton
                label="YouTube"
                icon={faYoutube}
                url='https://www.youtube.com/@AnselZeng'
                colour={'#FF0000'}
              />
              <CustomIconButton
                label="Spotify"
                icon={faSpotify}
                url='https://open.spotify.com/user/21qlylh2xqrwsmdnu4aymmrui'
                colour={'#1DB954'}
              />
            </HStack>
            <Text color={'#707072'} fontSize={'medium'} textAlign={'center'}>Copyright © 2024 All rights reserved | Made with ❤️ by Ansel</Text>
          </Stack>
        </Container>
      </Container>
    </Container>
  );
}
