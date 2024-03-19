import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { Button, Container, Flex, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import Experiences from './exp.js';

const me = 'Ansel Zeng';

export default function Home() {
  const palette = {
    name: '#385898',
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container maxW={'container.xl'} h={'100vh'} p={0}>
        <HStack h={'100%'} m={'auto'} px={12} gap={8} justifyContent={'center'} maxW={'container.lg'}>
          <VStack gap={2} align={'flex-start'}>
            <Flex align={'center'}>
              <div style={{ borderBottom: '1.5px solid black', width: '1.5rem' }} />
              <Text fontSize={'smaller'} ml={2}>HELLO</Text>
            </Flex>
            <Heading>I'm{' '}<span style={{ color: palette.name }}>Ansel</span>{' '}Zeng</Heading>
            <Text fontSize={'small'}>CS & business student, with a passion for software development and leading positive change. I find inspiration in the ever-evolving world of technology, staying up-to-date with the latest advancements and exploring how they can be leveraged to create meaningful experiences for users.</Text>
            <a href={'/Ansel_Zeng_Resume.pdf'} target="_blank" rel="noopener noreferrer">
              <Button mt={4} size={'sm'} colorScheme={'facebook'}>DOWNLOAD CV</Button>
            </a>
          </VStack>
          <Image src="/images/profile.png" width={400} height={60} alt={me} style={{ zIndex: '2' }} />
        </HStack>
      </Container>
      <Experiences />
    </Layout>
  );
}
