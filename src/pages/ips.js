import * as React from 'react';
import Layout from '../components/caseLayout';
import Seo from '../components/seo';
import { Box, Container, Divider, Flex, HStack, Heading, Image, Spacer, Stack, Tag, Text, VStack } from '@chakra-ui/react';
import { lato, orelega } from '../components/layout.module.css';
import IpsHero from '../images/ips_hero.png';
import SpotifyArtist from '../images/ips/artist.png';
import SpotifySong from '../images/ips/song.png';
import SpotifyAll from '../images/ips/all.png';

const AboutPage = () => {
  const palette = {
    mainColour: '#1A783C',
    secondaryColour: '#A1D3BB',
    lightGray: '#ADADAD',
    veryLightGray: '#EBEBEB',
    darkBlack: '#333333',
    white: '#F5F5F3',
    gray: '#727272',
    darkGreen: '#246A4A',
    black: '#1D1D1F',
    blue: '#35457C',
    lightBlue: '#9CACE3',
  };

  const renderTextItems = (items) => items.map((item) => <Text color={palette.gray}>{item}</Text>);

  return (
    <Layout pageTitle="ips">
      <Container maxW='100%' m='0' p='0'>
        <Box px={{ base: '10%', lg: '32' }} py={{ base: '12', lg: '24' }} className={orelega} color={palette.black}>
          <Stack spacing='4'>
            <Tag size='lg' w='fit-content' borderRadius='full' color={palette.black} bg='transparent' border='1px' borderColor={palette.black}>FELLOWSHIP</Tag>
            <Heading size='3xl' style={{ fontFamily: 'orelega' }}>Ivey Product Society</Heading>
            <Text fontSize='1.8rem'>enhancing spotify's social experience through customization on the profile page</Text>
          </Stack>
        </Box>

        <Box display='flex' justifyContent='center'>
          <Image src={IpsHero} alt='ips hero' />
        </Box>

        <Box px='10%' py={{ base: '12', lg: '24' }}>
          <Stack spacing={{ base: '8', lg: '20' }}>
            <VStack maxW={{ base: '100%', lg: '60%' }} spacing='4' alignItems='flex-start'>
              <Heading size='sm' color={palette.lightGray} style={{ fontFamily: 'orelega' }}>01 | OVERVIEW</Heading>
              <Text fontSize='2xl' fontWeight='black' color={palette.black} className={lato}>the path to product</Text>
              <Text fontSize='lg' color={palette.black} className={lato}>
                The Ivey Product Fellowship is an alumni-facilitated bootcamp where students engage in product-management-focused curriculum and showcase a capstone product to industry professionals. As someone who had little to no prior experience in the product realm, I was thrilled to be surrounded by a community of accomplished alumni.
              </Text>
              <Text fontSize='lg' color={palette.black} className={lato}>
                Having listened to 164,498 minutes of music in just the past year, it was natural for me to select Spotify as the app for my capstone project. As an avid music streamer from morning till night, I've become intimately familiar with the app's latest features and intricate UX/UI design details. However, this immersion also led me to harbor complaints and a persistent feeling that something was missing.
              </Text>
              <Text fontSize='lg' color={palette.black} className={lato}>
                IPS (Ivey Product Society) presented an ideal opportunity for me to address these challenges head-on while gaining valuable insights into the world of product management.
              </Text>
            </VStack>
            <Stack spacing={{ base: '4', lg: '0' }} alignItems='flex-start' display='flex' flexWrap='wrap' direction={{ base: 'column', lg: 'row' }}>
              <VStack spacing='1' alignItems='flex-start' w='fit-content'>
                <Heading pb='3' size='sm' color={palette.mainColour}>MY ROLE</Heading>
                {renderTextItems(['Product Management', 'Fellow'])}
              </VStack>
              <Spacer />
              <VStack spacing='1' alignItems='flex-start' w='fit-content'>
                <Heading pb='3' size='sm' color={palette.mainColour}>TEAM</Heading>
                {renderTextItems(['Ansel (Me 😄)', 'Brennan (Program Lead)', 'David (Alumni Coach)', 'Rohan (Student Mentor)'])}
              </VStack>
              <Spacer />
              <VStack spacing='1' alignItems='flex-start' w='fit-content'>
                <Heading pb='3' size='sm' color={palette.mainColour}>TOOLS</Heading>
                {renderTextItems(['Notion', 'Figma'])}
              </VStack>
              <Spacer />
              <VStack spacing='1' alignItems='flex-start' w='fit-content'>
                <Heading pb='3' size='sm' color={palette.mainColour}>TIMELINE</Heading>
                {renderTextItems(['Jan - Apr 2023'])}
              </VStack>
              <Spacer />
            </Stack>
          </Stack>
        </Box>
        
        <Box px='10%' py={{ base: '12', lg: '24' }} display='flex' justifyContent='center' bg={palette.mainColour}>
          <VStack maxW={{ base: '100%', lg: '60%' }} spacing='4'>
            <Heading size='sm' color={palette.secondaryColour} style={{ fontFamily: 'orelega' }} textAlign='center'>02 | THE CHALLENGE</Heading>
            <Text fontSize={{ base: 'xl', lg: '3xl' }} color='white' className={lato} textAlign='center'>
              How can Spotify effectively boost user engagement and encourage a higher frequency of platform usage?
            </Text>
          </VStack>
        </Box>

        <Box px='10%' py={{ base: '12', lg: '24' }}>
          <VStack maxW={{ base: '100%', lg: '60%' }} spacing='4' alignItems='flex-start'>
            <Heading size='sm' color={palette.lightGray} style={{ fontFamily: 'orelega' }}>03 | PROBLEM ALIGNMENT</Heading>
            <Text fontSize='2xl' fontWeight='black' color={palette.black} className={lato}>is there really something wrong?</Text>
            <Text fontSize='lg' color={palette.black} className={lato}>
              Spotify's limited social capabilities hinder meaningful interaction between users, resulting in difficulties with music discovery, playlist sharing, and engagement with friends' listening habits. This issue can potentially impede user retention and underutilization of the platform.
            </Text>
            <Text fontSize='lg' color={palette.black} className={lato}>
              To overcome this challenge, Spotify should prioritize enhancing its social features. By introducing customizable profile pages and fostering music-centered social groups, users can connect, share playlists, and discover music more seamlessly. This approach aims to boost user engagement, satisfaction, and retention by creating a more interactive and socially connected platform experience.
            </Text>
          </VStack>
        </Box>

        <Box px='10%' pt='0' pb={{ base: '12', lg: '24' }}>
          <VStack maxW={{ base: '100%', lg: '60%' }} spacing='4' alignItems='flex-start'>
            <Heading size='sm' color={palette.lightGray} style={{ fontFamily: 'orelega' }}>04 | RESEARCH</Heading>
            <Text fontSize='2xl' fontWeight='black' color={palette.black} className={lato}>gaining some user insights</Text>
            <Text fontSize='lg' color={palette.black} className={lato}>
              To understand Spotify usage among different demographics, I interviewed a diverse group of individuals from around the school. The interviews revealed that while some users enjoy the platform's customization options and algorithm-generated playlists, others found the lack of new content and limited social features to be a drawback.
            </Text>
            <Text pb='4' fontSize='lg' color={palette.black} className={lato}>
              These are six main takeaways from the conducted UXR (User Experience Research).
            </Text>
          </VStack>
          <HStack maxW='60%' pb='4' spacing={4} className={lato} flexWrap='wrap'>
            <Flex flex='1' flexDir='column'>
              <Heading size='md' pb='2' color={palette.mainColour} className={lato}>01</Heading>
              <Text>Lack of user interactions</Text>
            </Flex>
            <Flex flex='1' flexDir='column'>
              <Heading size='md' pb='2' color={palette.mainColour} className={lato}>02</Heading>
              <Text>Values listening activity</Text>
            </Flex>
            <Flex flex='1' flexDir='column'>
              <Heading size='md' pb='2' color={palette.mainColour} className={lato}>03</Heading>
              <Text>Lack of customization</Text>
            </Flex>
          </HStack>
          <HStack maxW='60%' spacing={4} className={lato} flexWrap='wrap'>
            <Flex flex='1' flexDir='column'>
              <Heading size='md' pb='2' color={palette.mainColour} className={lato}>04</Heading>
              <Text>Potential social media app</Text>
            </Flex>
            <Flex flex='1' flexDir='column'>
              <Heading size='md' pb='2' color={palette.mainColour} className={lato}>05</Heading>
              <Text>Praises smart algorithm</Text>
            </Flex>
            <Flex flex='1' flexDir='column'>
              <Heading size='md' pb='2' color={palette.mainColour} className={lato}>06</Heading>
              <Text>Discoverability struggles</Text>
            </Flex>
          </HStack>
        </Box>

        <Box px='10%' py={{ base: '12', lg: '24' }} display='flex' justifyContent='center' bg={palette.mainColour}>
          <VStack maxW={{ base: '100%', lg: '80%' }} spacing='4'>
            <Heading size='sm' color={palette.secondaryColour} style={{ fontFamily: 'orelega' }} textAlign='center'>05 | VALUE PROPOSITION</Heading>
            <Text fontSize={{ base: 'xl', lg: '3xl' }} color='white' className={lato} textAlign='center'>
              By enhancing its social features through customizable profile pages, Spotify can offer a richer and more rewarding user experience, leading to increased engagement, retention, and satisfaction.
            </Text>
          </VStack>
        </Box>

        <Box px='10%' py={{ base: '12', lg: '24' }}>
          <VStack maxW={{ base: '100%', lg: '60%' }} spacing='4' alignItems='flex-start'>
            <Heading size='sm' color={palette.lightGray} style={{ fontFamily: 'orelega' }}>06 | SOLUTION DETAILS</Heading>
            <Text fontSize='2xl' fontWeight='black' color={palette.black} className={lato}>unveiling your melodic persona</Text>
            <Text fontSize='lg' color={palette.black} className={lato}>
              The proposed solution to enhance the user experience on Spotify is the introduction of Customizable Profile Pages. This feature empowers users to personalize their profiles, showcasing their unique personalities and music preferences. Users can fully customize their profile page by adding a featured showcase to display a variety of awards or statistics. This visual customization allows users to express their musical tastes and create visually appealing profiles that capture attention.
            </Text>
          </VStack>
        </Box>

        <Box mx='10%' px='10%' py={{ base: '10', lg: '20' }} bg={palette.veryLightGray}>
          <VStack maxW='100%' spacing='4' alignItems='flex-start'>
            <Text m='auto' pb='4' fontSize='2xl' fontWeight='black' color={palette.black} className={lato}>showcases</Text>
            <Image src={SpotifyArtist} alt='Spotify Artist' />
            <Text pb='4' fontSize='lg' color={palette.black} className={lato}>
              Fig 1. User flow for adding a showcase featuring their <b>favourite artist</b>.
            </Text>
            <Image src={SpotifySong} alt='Spotify Song' />
            <Text pb='4' fontSize='lg' color={palette.black} className={lato}>
              Fig 2. User flow for adding a showcase featuring their <b>favourite song</b>.
            </Text>
            <Divider borderColor={'black'} />
            <Image pt='4' src={SpotifyAll} alt='Spotify All' />
            <Text fontSize='lg' color={palette.black} className={lato}>
              Fig 3. Other potential showcase options, including <b>Spotify Wrapped</b>.
            </Text>
          </VStack>
        </Box>
        
        <Box px='10%' py={{ base: '12', lg: '24' }}>
          <VStack maxW={{ base: '100%', lg: '60%' }} spacing='4' alignItems='flex-start'>
            <Heading size='sm' color={palette.lightGray} style={{ fontFamily: 'orelega' }}>07 | THE FINALE</Heading>
            <Text fontSize='2xl' fontWeight='black' color={palette.black} className={lato}>end of the beginning</Text>
            <Text fontSize='lg' color={palette.black} className={lato}>
              As the curtains draw on my journey with Ivey Product Society, I’m filled with gratitude for the immense growth and learning I have experienced. From creating a Product Requirements Document to conducting user research, the hands-on nature of the program not only sharpened my product skills but also taught me the art of translating ideas into tangible solutions.
            </Text>
            <Text fontSize='lg' color={palette.black} className={lato}>
              Undoubtedly, one of the standout moments was presenting my capstone project to a panel of PMs from Meta and Wealthsimple. The intensity of the technical questions definitely put me on the spot, but the thorough feedback I received left a lasting mark on my product mindset and thought process. It was a transformative experience that propelled me to new heights.
            </Text>
            <Text fontSize='lg' color={palette.black} className={lato}>
              I extend my heartfelt appreciation to the dedicated Ivey alumni who selflessly dedicate their valuable time to the fellowship. Their mentorship and guidance have opened doors I never imagined possible. This incredible opportunity has ignited an unquenchable thirst for product innovation within me, and I eagerly look forward to the exciting journey ahead!
            </Text>
          </VStack>
        </Box>

      </Container>
    </Layout>
  );
};

export const Head = () => <Seo title="ips" />;

export default AboutPage;
