import Head from 'next/head';
import { Container, Link, Text } from '@chakra-ui/react';
import Layout from '../components/layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>AZ | about</title>
      </Head>
      <Container 
        maxW={'100%'} 
        h={'100vh'} 
        p={0} 
        display={'flex'} 
        alignItems={'center'} 
        justifyContent={'center'}
      >
        <Text>
          work in progress... [
          <Link 
            fontWeight={'bold'} 
            href='https://this-is-ansel.netlify.app/about/' 
            target="_blank" 
            rel="noopener noreferrer"
          >
            About Me
          </Link>
          ]
        </Text>
      </Container>
    </Layout>
  );
}
