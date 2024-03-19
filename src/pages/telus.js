import * as React from 'react';
import Layout from '../components/caseLayout';
import Seo from '../components/seo';
import { 
  Box, Container, Heading, Image, Spacer, Stack, Tag, Text, VStack
} from '@chakra-ui/react';

import { orelega } from '../components/layout.module.css';
import TelusHero from '../images/telus_hero.png';

const AboutPage = () => {
  const palette = {
    purple: '#4B286D',
    white: '#F5F5F3',
    lightGray: '#ADADAD',
    gray: '#727272',
    darkGreen: '#246A4A',
    black: '#1D1D1F',
    blue: '#35457C',
    lightBlue: '#9CACE3',
  };

  return (
    <Layout pageTitle="rbc">
      <Container maxW='100%' m='0' p='0'>
        <Box px={{ base: '10%', lg: '32' }} py={{ base: '12', lg: '24' }} className={orelega} color={palette.black}>
          <Stack spacing='4'>
            <Tag size='lg' w='fit-content' borderRadius='full' color={palette.black} bg='transparent' border='1px' borderColor={palette.black}>INTERNSHIP</Tag>
            <Heading size='3xl' style={{ fontFamily: 'orelega' }}>Telus</Heading>
          </Stack>
        </Box>

        <Box display='flex' justifyContent='center'>
          <Image src={TelusHero} alt='rbc hero' />
        </Box>

        <Box px='10%' py={{ base: '12', lg: '24' }}>
          <Stack spacing={{ base: '8', lg: '20' }}>
            <Stack spacing={{ base: '4', lg: '0' }} alignItems='flex-start' display='flex' flexWrap='wrap' direction={{ base: 'column', lg: 'row' }}>
              <VStack spacing='1' alignItems='flex-start' w='fit-content'>
                <Heading pb='3' size='sm' color={palette.purple}>MY ROLE</Heading>
                {['Software Engineer', 'Intern'].map((item, index) => (
                  <Text key={index} color={palette.gray}>{item}</Text>
                ))}
              </VStack>
              <Spacer />
              <VStack spacing='1' alignItems='flex-start' w='fit-content'>
                <Heading pb='3' size='sm' color={palette.purple}>TEAM</Heading>
                {['Open RAN', 'Orchestration & Automation', 'DevOps', 'Infrastructure'].map((item, index) => (
                  <Text key={index} color={palette.gray}>{item}</Text>
                ))}
              </VStack>
              <Spacer />
              <VStack spacing='1' alignItems='flex-start' w='fit-content'>
                <Heading pb='3' size='sm' color={palette.purple}>TOOLS</Heading>
                {['JavaScript', 'Google Sheets API', 'Linux', 'Kubernetes'].map((item, index) => (
                  <Text key={index} color={palette.gray}>{item}</Text>
                ))}
              </VStack>
              <Spacer />
              <VStack spacing='1' alignItems='flex-start' w='fit-content'>
                <Heading pb='3' size='sm' color={palette.purple}>TIMELINE</Heading>
                {['May - Aug 2023'].map((item, index) => (
                  <Text key={index} color={palette.gray}>{item}</Text>
                ))}
              </VStack>
              <Spacer />
            </Stack>
          </Stack>
        </Box>

        <Box px='10%' py={{ base: '12', lg: '24' }} display='flex' justifyContent='center' bg={palette.purple}>
          <VStack maxW={{ base: '100%', lg: '60%' }} spacing='4'>
            <Heading size='sm' color={palette.white} style={{ fontFamily: 'orelega' }} textAlign='center'>work in progress...</Heading>
          </VStack>
        </Box>

      </Container>
    </Layout>
  );
};

export const Head = () => <Seo title="rbc" />;

export default AboutPage;
