import * as React from 'react';
import { Box, Button, Card, Container, Flex, HStack, Heading, Image, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Spacer, Stack, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Tag, Text, UnorderedList, VStack, useDisclosure } from '@chakra-ui/react';
import Layout from '../components/caseLayout';
import Seo from '../components/seo';
import { lato, orelega } from '../components/layout.module.css';
import RbcHero from '../images/rbc_hero.png';
import Image1 from '../images/rbc/1.jpeg';
import Image2 from '../images/rbc/2.jpeg';
import Image3 from '../images/rbc/3.jpeg';
import Image4 from '../images/rbc/4.jpeg';
import Image5 from '../images/rbc/5.jpeg';
import Image6 from '../images/rbc/6.jpeg';
import Wall1 from '../images/walls/one.jpeg';
import Wall2 from '../images/walls/two.jpeg';

const AboutPage = () => {
  const palette = {
    white: '#F5F5F3',
    lightGray: '#ADADAD',
    gray: '#727272',
    darkGreen: '#246A4A',
    black: '#1D1D1F',
    blue: '#35457C',
    lightBlue: '#9CACE3',
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pic, setSize] = React.useState('md');
  const finalRef = React.useRef();

  const handleSizeClick = (newPic) => {
    setSize(newPic);
    onOpen();
  };

  const pictures = [Image1, Image2, Image3, Image4, Image5, Image6];

  return (
    <Layout pageTitle="rbc">
      <Container maxW='100%' m='0' p='0'>
        <Box px={{ base: '10%', lg: '32' }} py={{ base: '12', lg: '24' }} className={orelega} color={palette.black}>
          <Stack spacing='4'>
            <Tag size='lg' w='fit-content' borderRadius='full' color={palette.black} bg='transparent' border='1px' borderColor={palette.black}>INTERNSHIP</Tag>
            <Heading size='3xl' style={{ fontFamily: 'orelega' }}>Royal Bank of Canada</Heading>
            <Text fontSize='1.8rem'>transforming credit adjudication strategy and processes within home equity finance</Text>
          </Stack>
        </Box>

        <Box display='flex' justifyContent='center'>
          <Image src={RbcHero} alt='rbc hero' />
        </Box>

        <Box px='10%' py={{ base: '12', lg: '24' }}>
          <Stack spacing={{ base: '8', lg: '20' }}>
            <VStack maxW={{ base: '100%', lg: '60%' }} spacing='4' alignItems='flex-start'>
              <Heading size='sm' color={palette.lightGray} style={{ fontFamily: 'orelega' }}>01 | OVERVIEW</Heading>
              <Text fontSize='2xl' fontWeight='black' color={palette.black} className={lato}>engineering for canada's largest bank</Text>
              <Text fontSize='lg' color={palette.black} className={lato}>
                During my 4-month internship at RBC, I had the opportunity to work on a cutting-edge project aimed at revolutionizing the mortgage application processs.
                Throughout the internship, I collaborated with experienced professionals who mentored me in agile software development and coding skills.
                This project not only provided valuable industry experience but also equipped me with the skills that will benefit my future career.
                I am proud to have contributed to a project with the potential to make a significant impact on RBC's operations and enhance customer experience.
              </Text>
            </VStack>
            <Stack spacing={{ base: '4', lg: '0' }} alignItems='flex-start' display='flex' flexWrap='wrap' direction={{ base: 'column', lg: 'row' }}>
              <VStack spacing='1' alignItems='flex-start' w='fit-content'>
                <Heading pb='3' size='sm' color={palette.blue}>MY ROLE</Heading>
                {['Software Engineer', 'Intern'].map((item, index) => (
                  <Text color={palette.gray} key={index}>{item}</Text>
                ))}
              </VStack>
              <Spacer />
              <VStack spacing='1' alignItems='flex-start' w='fit-content'>
                <Heading pb='3' size='sm' color={palette.blue}>TEAM</Heading>
                {['Digital Transformation', 'Retail Banking', 'Payment Technology'].map((item, index) => (
                  <Text color={palette.gray} key={index}>{item}</Text>
                ))}
              </VStack>
              <Spacer />
              <VStack spacing='1' alignItems='flex-start' w='fit-content'>
                <Heading pb='3' size='sm' color={palette.blue}>TOOLS</Heading>
                {['Java (Spring Framework)', 'Docker', 'Camunda', 'Jira & Confluence'].map((item, index) => (
                  <Text color={palette.gray} key={index}>{item}</Text>
                ))}
              </VStack>
              <Spacer />
              <VStack spacing='1' alignItems='flex-start' w='fit-content'>
                <Heading pb='3' size='sm' color={palette.blue}>TIMELINE</Heading>
                {['May - Aug 2022'].map((item, index) => (
                  <Text color={palette.gray} key={index}>{item}</Text>
                ))}
              </VStack>
              <Spacer />
            </Stack>
          </Stack>
        </Box>

        <Box px='10%' py={{ base: '12', lg: '24' }} display='flex' justifyContent='center' bg={palette.blue}>
          <VStack maxW={{ base: '100%', lg: '60%' }} spacing='4'>
            <Heading size='sm' color={palette.lightBlue} style={{ fontFamily: 'orelega' }} textAlign='center'>02 | THE CHALLENGE</Heading>
            <Text fontSize={{ base: 'xl', lg: '3xl' }} color='white' className={lato} textAlign='center'>How might we replace the outdated mortage application software and improve the evaluation of creditworthiness for applicants?</Text>
          </VStack>
        </Box>

        <Box px='10%' py={{ base: '12', lg: '24' }}>
          <VStack maxW={{ base: '100%', lg: '60%' }} spacing='4' alignItems='flex-start'>
            <Heading size='sm' color={palette.lightGray} style={{ fontFamily: 'orelega' }}>03 | KEY INITIATIVES</Heading>
            <Text fontSize='2xl' fontWeight='black' color={palette.black} className={lato}>what i did & what i learned</Text>
            <Text fontSize='lg' color={palette.black} className={lato}>
              This experience not only opened my eyes to the banking industry and agile software development, but also taught me the importance project management—bridging the gap between business and technology.
              I got to witness the integral role of product owners in leading presentations and meetings, gaining firsthand insights into their ability to guide and drive project discussions effectively.
            </Text>
            <Text pb={{ base: '8', lg: '16' }} fontSize='lg' color={palette.black} className={lato}>
              Additionally, I had the privilege of working closely with a senior developer who mentored me throughout the internship.
              Her experience and expertise, along with the opportunity to collaborate with other professionals, expanded my technical knowledge and problem-solving abilities.
            </Text>
          </VStack>
          <HStack align='start' spacing={4} className={lato}>
            <Flex w='100%' flexDir='column'>
              <Heading size='md' pb='4' color={palette.blue} className={lato}>successes</Heading>
              <UnorderedList spacing={2}>
                <ListItem>
                  Streamlined auto-adjudication backend logic, saving hours of work daily and enhancing evaluation efficiency.
                </ListItem>
                <ListItem>
                  Implemented 40+ comprehensive unit tests, increasing code coverage by 75%, improving quality and reducing bugs.
                </ListItem>
                <ListItem>
                  Successfully showcased seamless frontend-backend integration, demonstrating the feature's value during a team demo.
                </ListItem>
                <ListItem>
                  Integrated low latency GraphQL endpoints, supporting 100+ requests per second, improving performance and enabling future scalability.
                </ListItem>
              </UnorderedList>
            </Flex>
            <Flex w='100%' flexDir='column'>
              <Heading size='md' pb='4' color={palette.blue} className={lato}>challenges</Heading>
              <UnorderedList spacing={2}>
                <ListItem>
                  Navigating complex mortgage workflows, understanding regulations, and identifying improvements.
                </ListItem>
                <ListItem>
                  Adapting to agile development, collaborating in fast-paced environments with tight timelines.
                </ListItem>
                <ListItem>
                  Overcoming technical hurdles during legacy code migration, collaborating with senior developers.
                </ListItem>
                <ListItem>
                  Managing project priorities, multitasking, and communicating effectively in dynamic team environments.
                </ListItem>
              </UnorderedList>
            </Flex>
          </HStack>
        </Box>
        
        <Box px='10%' py={{ base: '12', lg: '24' }} display='flex' flexDir='column' alignItems='center' bg={palette.blue}>
          <VStack maxW={{ base: '100%', lg: '60%' }} pb='8' spacing='4'>
            <Heading size='sm' color={palette.lightBlue} style={{ fontFamily: 'orelega' }} textAlign='center'>04 | INSPIRING MOMENTS</Heading>
            <Text fontSize={{ base: 'xl', lg: '3xl' }} color='white' className={lato} textAlign='center'>Unforgettable experiences that shaped my journey in software engineering.</Text>
          </VStack>
          <Tabs size='lg' isFitted variant='unstyled' w='100%' borderRadius='base' bg='white'>
            <TabList color={palette.blue}>
              <Tab _selected={{ fontWeight: 'semibold' }}>one</Tab>
              <Tab _selected={{ fontWeight: 'semibold' }}>two</Tab>
            </TabList>
            <TabIndicator
              height='1'
              bg={palette.blue}
            />
            <TabPanels>
              <TabPanel display='flex' flexDir={{ base: 'column', lg: 'row' }} p='8'>
                <Image src={Wall1} alt='wall one' w={{ base: '100%', lg: '40%' }} objectFit='cover' pr={{ base: '0', lg: '4' }} pb={{ base: '4', lg: '0' }} />
                <VStack w={{ base: '100%', lg: '60%' }} pl={{ base: '0', lg: '4' }} alignItems='start'>
                  <Heading size='lg' className={lato}>Whiteboard Conversations</Heading>
                  <Text fontSize='md' color={palette.black} className={lato}>
                    Stepping into the RBC office at Waterpark Place, I was captivated by the walls all covered in whiteboard material—like a canvas for unleashing creativity and brainstorming ideas. One afternoon, as my team wrapped up for the day, I joined a conversation between the senior develops and a business analyst. They delved into the intricate logic of a crucial factor in the mortgage application process. In a spontaneous move, one of the developed reached for a marker and began writing on the office wall. It was definitely unusual for me at first, as I grew up with the norm that drawing on walls was strictly prohibited.
                  </Text>
                  <Text fontSize='md' color={palette.black} className={lato}>
                    For half an hour, we engaged in a vibrant discussion, taking turns illustrating our thoughts on the vast canvas. As a visual learner, I found it liberating to be able to physically visualize my ideas and thought process. It was during this captivating conversation that I realized and understood the importance of communication between engineers and analysts. Ultimately, the whiteboard diagram remained a testament to our collaboration, lingering on the wall for weeks after our conversation. Its significance, etched in my memory, encapsulated the fusion of creativity, problem-solving, and effective communication that I embraced throughout my internship journey.
                  </Text>
                </VStack>
              </TabPanel>
              <TabPanel display='flex' flexDir={{ base: 'column', lg: 'row' }} p='8'>
                <Image src={Wall2} alt='wall two' w={{ base: '100%', lg: '40%' }} objectFit='cover' pr={{ base: '0', lg: '4' }} pb={{ base: '4', lg: '0' }} />
                <VStack w={{ base: '100%', lg: '60%' }} pl={{ base: '0', lg: '4' }} alignItems='start'>
                  <Heading size='lg' className={lato}>The Kanban Tapestry</Heading>
                  <Text fontSize='md' color={palette.black} className={lato}>
                    As I exited the office on my last day of work, I passed by this wall of sticky post-it notes and couldn’t help but stop and stare it one last time. The notes basically outlined the entire application being developed by this RBC team, kind of like a mega kanban board. Looking at this wall reminded me of my small role in the grand scheme, with even my team of ~20 developers and analysts occupying just one column among the QA team, product owners, and others. Nevertheless, it was fascinating to recognize that each person had a specific role to play in this massive operation.
                  </Text>
                  <Text fontSize='md' color={palette.black} className={lato}>
                    Each colourful note represented completed tasks, solved problems, and achieved milestones. This colourful wall filled me with a sense of accomplishment and gratitude for being part of the journey. With a mix of nostalgia and excitement, I took one last look, realizing that those sticky notes were more than reminders; they were a testament to the invaluable experience and knowledge gained during my internship. The wall of post-it notes will for a long time remind me of the importance of teamwork, the impact of individual contributions, and the endless possibilities that lie ahead in career.
                  </Text>
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        <Box px='10%' py={{ base: '12', lg: '24' }}>
          <VStack maxW={{ base: '100%', lg: '60%' }} spacing='4' alignItems='flex-start'>
            <Heading size='sm' color={palette.lightGray} style={{ fontFamily: 'orelega' }}>05 | CONCLUSION</Heading>
            <Text fontSize='2xl' fontWeight='black' color={palette.black} className={lato}>leaving my mark</Text>
            <Text fontSize='lg' color={palette.black} className={lato}>
              Reflecting on my time at RBC, I can genuinely say that it has left an indelible mark on my journey as a software engineer.
              Each task I tackled and completed was done with a sense of joy that reignited my passion for coding.
              The memories made during my internship, whether over Webex or in person, will forever hold a special place in my heart.
            </Text>
            <Text fontSize='lg' color={palette.black} className={lato}>
              Saying goodbye to everyone during our final social gathering, overlooking the harbourfront, was bittersweet.
              Ultimately, I feel more confident and ready to take on new challenges in my career.
              Thank you, RBC, for this extraordinary opportunity and experience.
              I am excited to carry the spirit of excellence and innovation with me as I continue on my journey.
            </Text>
          </VStack>
        </Box>

        <Box px='10%' pt='0' pb={{ base: '12', lg: '24' }}>
          <VStack maxW={{ base: '100%', lg: '60%' }} spacing='4' pb='4' alignItems='flex-start'>
            <Heading size='sm' color={palette.lightGray} style={{ fontFamily: 'orelega' }}>06 | HIGHLIGHTS</Heading>
            <Text fontSize='2xl' fontWeight='black' color={palette.black} className={lato}>some of my favourite moments 💙</Text>
          </VStack>
          
          <SimpleGrid columns={{ sm: 2, md: 3 }} spacing='4'>
            {pictures.map((pic, index) => (
              <Card p='4' key={index}>
                <Image src={pic} alt='rbc' onClick={() => handleSizeClick(pic)} />
              </Card>
            ))}
          </SimpleGrid>
          
          <Modal onClose={onClose} size='md' isOpen={isOpen} finalFocusRef={finalRef}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader />
              <ModalCloseButton />
              <ModalBody>
                <Image src={pic} />
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose} ref={finalRef}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>

      </Container>
    </Layout>
  );
};

export const Head = () => <Seo title="rbc" />;

export default AboutPage;
