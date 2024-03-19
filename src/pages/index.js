import * as React from 'react';
import { Link } from "gatsby";
import Layout from '../components/layout';
import Seo from '../components/seo';
import { 
  Box, Button, Card, CardBody, CardFooter, Container, HStack, Heading, Image, 
  ListItem, SimpleGrid, Stack, Tag, TagLabel, Text, UnorderedList, VStack 
} from '@chakra-ui/react';
import { lato, orelega } from '../components/layout.module.css';
import TELUScover from '../images/telus.png';
import IPScover from '../images/ips.png';
import RBCcover from '../images/rbc.png';
import Tweebaacover from '../images/tweebaa.png';
import me from '../images/me.png';

const IndexPage = () => {
  const palette = {
    white: '#F5F5F3',
    gray: '#727272',
    mainColour: '#246A4A',
  };

  const renderTag = tags => tags.map(tag => (
    <Tag key={tag} size='md' colorScheme='green' borderRadius='full'>
      <TagLabel>{tag}</TagLabel>
    </Tag>
  ));

  return (
    <Layout pageTitle="home">
      <Container maxW='100%' m='0' p='0'>
        <Box id='work' px='10%' py={{ base: '10', lg: '10%' }}>
          <SimpleGrid spacing={{ base: '16', lg: '24' }}>
            {[{
              cover: TELUScover,
              company: 'Telus • Internship [2023]',
              project: 'open ran orchestration and automation',
              tags: ['Software Development', '5G Infrastructure', 'DevOps', 'Zero-Touch Provisioning'],
              link: '/telus',
            }, {
              cover: IPScover,
              company: 'Ivey Product Society • Fellowship [2023]',
              project: "enhancing spotify's social experience through customization on the profile page",
              tags: ['Product Management', 'User Experience Research', 'PRD', 'Usability Testing'],
              link: '/ips',
            }, {
              cover: RBCcover,
              company: 'Royal Bank of Canada • Internship [2022]',
              project: 'transforming credit adjudication strategy and processes within home equity finance',
              tags: ['Software Development', 'Agile Methodology', 'Java Spring Boot', 'Unit Testing'],
              link: '/rbc',
            }, {
              cover: Tweebaacover,
              company: 'Tweebaa • Internship [2021]',
              project: 'pioneering the future of e-commerce through value-exchanging social networking',
              tags: ['UX/UI Design', 'Wireframing', 'Information Architecture', 'User Flows', 'Figma'],
              button: { text: 'not available yet', disabled: true },
            }].map(({ cover, company, project, tags, link, button }) => (
              <Card key={company} bg='transparent' variant='unstyled'>
                <Stack spacing='0'>
                  <CardBody>
                    <Text size='sm' pb='4' color={palette.gray} className={lato}>{company}</Text>
                    <Image src={cover} alt={company} />
                    <Heading size='lg' py='4' color={palette.mainColour} style={{ fontFamily: 'orelega' }}>{project}</Heading>
                    <HStack pb='6' display='flex' flexWrap='wrap'>
                      {renderTag(tags)}
                    </HStack>
                  </CardBody>
                  <CardFooter>
                    {button ? (
                      <Button
                        className={orelega}
                        color={palette.mainColour}
                        bg='white'
                        variant='solid'
                        border='1px'
                        borderRadius='0'
                        borderColor={palette.mainColour}
                        _hover={{ color: 'white', bg: palette.mainColour }}
                        isDisabled={button.disabled}
                      >
                        {button.text}
                      </Button>
                    ) : (
                      <Link to={link}>
                        <Button
                          className={orelega}
                          color={palette.mainColour}
                          bg='white'
                          variant='solid'
                          border='1px'
                          borderRadius='0'
                          borderColor={palette.mainColour}
                          _hover={{ color: 'white', bg: palette.mainColour }}
                        >
                          read case
                        </Button>
                      </Link>
                    )}
                  </CardFooter>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
        
        <Box id='about' px='10%' pt={{ base: '0', lg: '10%' }} pb={{ base: '12', lg: '10%' }} className={lato}>
          <VStack spacing='4' align='start'>
            <Image src={me} alt='me' m='auto' maxW='50%' borderTopRadius='full' />
            <Text pt='10'>I'm a Toronto-based Software Engineer, with a passion for software development and leading positive change. I find inspiration in the ever-evolving world of technology, staying up-to-date with the latest advancements and exploring how they can be leveraged to create meaningful experiences for users.</Text>
            <Text>Aside from programming, my hobbies include playing hockey, indulging in live concerts, delving into record stores, and binging <a href='https://www.youtube.com/@TeddyBaldassarre' target='_blank' rel='noreferrer' style={{ textDecoration: 'underline' }}>Teddy Baldassarre</a>'s watch reviews!</Text>
            <Text>Currently pursuing a dual degree in computer science at Western University and business administration at Ivey Business School.</Text>
            <UnorderedList pt='4' spacing='4'>
              <ListItem>
                <a href='https://www.hackwestern.com/' target='_blank' rel='noopener noreferrer'><span style={{ fontWeight: '900', textDecoration: 'underline' }}>hack western</span></a>
                <Text>Organizing and leading web dev at Western University's largest hackathon 💻</Text>
              </ListItem>
              <ListItem>
                <a href='https://iveytechclub.ca/' target='_blank' rel='noopener noreferrer'><span style={{ fontWeight: '900', textDecoration: 'underline' }}>ivey tech club</span></a>
                <Text>Building and growing the tech community for students at Ivey Business School ⚙️</Text>
              </ListItem>
            </UnorderedList>
          </VStack>
        </Box>
      </Container>
    </Layout>
  );
};

export const Head = () => <Seo title="home" />;

export default IndexPage;
