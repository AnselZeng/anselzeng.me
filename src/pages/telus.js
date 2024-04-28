import * as React from 'react';
import {
  Box, Button, Card, Container, Flex, Heading, Image, ListItem, Modal, ModalBody, ModalCloseButton, 
  ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Spacer, Stack, Tab, TabIndicator, 
  TabList, TabPanel, TabPanels, Tabs, Tag, Text, UnorderedList, VStack, useDisclosure 
} from '@chakra-ui/react';
import Layout from '../components/caseLayout';
import Seo from '../components/seo';
import { lato, orelega } from '../components/layout.module.css';
import TelusHero from '../images/telus_hero.png';
import Image1 from '../images/telus/1.jpeg';
import Image2 from '../images/telus/2.jpeg';
import Image3 from '../images/telus/3.jpeg';
import Image4 from '../images/telus/4.jpeg';
import Image5 from '../images/telus/5.jpeg';
import Image6 from '../images/telus/6.jpeg';
import Lab from '../images/walls/three.jpeg';
import Mockup from '../images/telus/tms.png';

const AboutPage = () => {
  const palette = {
    lightGray: '#ADADAD',
    veryLightGray: '#EBEBEB',
    gray: '#727272',
    black: '#1D1D1F',
    purple: '#4B286D',
    lightPurple: '#BA99DD',
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
    <Layout pageTitle="telus">
      <Container maxW='100%' m='0' p='0'>
        <Box px={{ base: '10%', lg: '32' }} py={{ base: '12', lg: '24' }} className={orelega} color={palette.black}>
          <Stack spacing='4'>
            <Tag size='lg' w='fit-content' borderRadius='full' color={palette.black} bg='transparent' border='1px' borderColor={palette.black}>INTERNSHIP</Tag>
            <Heading size='3xl' style={{ fontFamily: 'orelega' }}>Telus</Heading>
            <Text fontSize='1.8rem'>streamlining operations with a dynamic ticket management system</Text>
          </Stack>
        </Box>

        <Box display='flex' justifyContent='center'>
          <Image src={TelusHero} alt='telus hero' />
        </Box>

        <Box px='10%' py={{ base: '12', lg: '24' }}>
          <Stack spacing={{ base: '8', lg: '20' }}>
            <VStack maxW={{ base: '100%', lg: '60%' }} spacing='4' alignItems='flex-start'>
              <Heading size='sm' color={palette.lightGray} style={{ fontFamily: 'orelega' }}>01 | OVERVIEW</Heading>
              <Text fontSize='2xl' fontWeight='black' color={palette.black} className={lato}>transforming telecommunications with telus</Text>
              <Text fontSize='lg' color={palette.black} className={lato}>
                Joining Telus Corporation as a Software Engineer Intern during the summer of 2023 marked a transformative journey into the realm of telecommunications.
                Immersed within the ORAN Orchestration and Automation team, I explored the cutting-edge potential of Open RAN technology and its capacity to redefine mobile networks.
                From engaging in collaborative research and development initiatives to navigating the intricacies of telecom infrastructure, my internship provided invaluable hands-on learning experiences, encapsulating my journey through immersive lab tours, discussions on challenges, and highlighting technological innovations on the forefront of telecom innovation.
              </Text>
            </VStack>
            <Stack spacing={{ base: '4', lg: '0' }} alignItems='flex-start' display='flex' flexWrap='wrap' direction={{ base: 'column', lg: 'row' }}>
              <VStack spacing='1' alignItems='flex-start' w='fit-content'>
                <Heading pb='3' size='sm' color={palette.purple}>MY ROLE</Heading>
                {['Software Engineer', 'Intern'].map((item, index) => (
                  <Text color={palette.gray} key={index}>{item}</Text>
                ))}
              </VStack>
              <Spacer />
              <VStack spacing='1' alignItems='flex-start' w='fit-content'>
                <Heading pb='3' size='sm' color={palette.purple}>TEAM</Heading>
                {['Open RAN', 'Orchestration & Automation', 'DevOps', 'Infrastructure'].map((item, index) => (
                  <Text color={palette.gray} key={index}>{item}</Text>
                ))}
              </VStack>
              <Spacer />
              <VStack spacing='1' alignItems='flex-start' w='fit-content'>
                <Heading pb='3' size='sm' color={palette.purple}>TOOLS</Heading>
                {['JavaScript', 'Google Sheets API', 'Linux', 'Kubernetes'].map((item, index) => (
                  <Text color={palette.gray} key={index}>{item}</Text>
                ))}
              </VStack>
              <Spacer />
              <VStack spacing='1' alignItems='flex-start' w='fit-content'>
                <Heading pb='3' size='sm' color={palette.purple}>TIMELINE</Heading>
                {['May – Aug 2023'].map((item, index) => (
                  <Text color={palette.gray} key={index}>{item}</Text>
                ))}
              </VStack>
              <Spacer />
            </Stack>
          </Stack>
        </Box>

        <Box px='10%' py={{ base: '12', lg: '24' }} display='flex' justifyContent='center' bg={palette.purple}>
          <VStack maxW={{ base: '100%', lg: '60%' }} spacing='4'>
            <Heading size='sm' color={palette.lightPurple} style={{ fontFamily: 'orelega' }} textAlign='center'>02 | THE CHALLENGE</Heading>
            <Text fontSize={{ base: 'xl', lg: '3xl' }} color='white' className={lato} textAlign='center'>How can we navigate the complexities of legacy infrastructure to pave the way for next-generation telecommunications solutions?</Text>
          </VStack>
        </Box>

        <Box px='10%' py={{ base: '12', lg: '24' }}>
          <VStack maxW={{ base: '100%', lg: '60%' }} spacing='4' alignItems='flex-start'>
            <Heading size='sm' color={palette.lightGray} style={{ fontFamily: 'orelega' }}>03 | UNTANGLING COMPLEXITY</Heading>
            <Text fontSize='2xl' fontWeight='black' color={palette.black} className={lato}>hold on, what exactly <i>is</i> ORAN?</Text>
            <Text fontSize='lg' color={palette.black} className={lato}>
              Open RAN, or <b>Open Radio Access Network</b>, revolutionizes the telecom industry's approach to building and operating mobile networks. Unlike traditional systems, which rely on a single vendor for tightly integrated components, Open RAN fosters an open and flexible ecosystem. By separating various parts of the radio access network, it allows operators to utilize equipment from multiple vendors adhering to common standards, ensuring seamless interoperability.
            </Text>
            <Text pb={{ base: '8', lg: '16' }} fontSize='lg' color={palette.black} className={lato}>
              This shift from vendor lock-in to an open architecture empowers mobile operators to make changes and upgrades more efficiently. With ORAN, the reliance on proprietary equipment is reduced, promoting competition and innovation in the industry. By embracing this new paradigm, telecom companies can enhance network flexibility and scalability while delivering improved services to users worldwide.
            </Text>
          </VStack>
          <Heading size='md' pb='4' color={palette.purple} className={lato}>Key Components</Heading>
          <Stack align='start' spacing={4} className={lato} flexDir={{ base: 'column', lg: 'row' }}>
            <Flex w='100%' flexDir='column'>
              <UnorderedList spacing={2}>
                <ListItem>
                  Radio Units (RUs): These physical components, commonly known as antennas, transmit and receive signals to and from mobile devices. They facilitate communication by relaying signals between smartphones and cell towers.
                </ListItem>
                <ListItem>
                  Distributed Units (DUs): Following signal reception from RUs, DUs undertake processing and management tasks. They handle encoding, decoding, and signal modulation, ensuring smooth data transfer across various mediums.
                </ListItem>
              </UnorderedList>
            </Flex>
            <Flex w='100%' flexDir='column'>
              <UnorderedList spacing={2}>
                <ListItem>
                  Centralized Units (CUs): Acting as central coordinators for multiple DUs, CUs manage radio resources, optimize signal distribution, and ensure seamless communication across the network. They play a crucial role in enhancing connectivity and user experiences.
                </ListItem>
                <ListItem>
                  Core Network: As the heart of the telecommunications infrastructure, the Core Network routes data, connects to other networks (e.g., internet, other mobile networks), and manages various services like voice calls and data transfer.
                </ListItem>
              </UnorderedList>
            </Flex>
          </Stack>
        </Box>
        
        <Box px='10%' py={{ base: '12', lg: '24' }} display='flex' flexDir='column' alignItems='center' bg={palette.purple}>
          <VStack maxW={{ base: '100%', lg: '60%' }} pb='8' spacing='4'>
            <Heading size='sm' color={palette.lightPurple} style={{ fontFamily: 'orelega' }} textAlign='center'>04 | EDUCATIONAL INSIGHTS</Heading>
            <Text fontSize={{ base: 'xl', lg: '3xl' }} color='white' className={lato} textAlign='center'>Key moments of learning during my internship.</Text>
          </VStack>
          <Tabs size='lg' isFitted variant='unstyled' w='100%' borderRadius='base' bg='white'>
            <TabList color={palette.purple}>
              <Tab _selected={{ fontWeight: 'semibold' }}>one</Tab>
              <Tab _selected={{ fontWeight: 'semibold' }}>two</Tab>
            </TabList>
            <TabIndicator
              height='1'
              bg={palette.purple}
            />
            <TabPanels>
              <TabPanel display='flex' flexDir={{ base: 'column', lg: 'row' }} p='8'>
                <Image src={Lab} alt='wall one' w={{ base: '100%', lg: '30%' }} objectFit='cover' pr={{ base: '0', lg: '4' }} pb={{ base: '4', lg: '0' }} />
                <VStack w={{ base: '100%', lg: '70%' }} pl={{ base: '0', lg: '4' }} alignItems='start'>
                  <Heading size='lg' className={lato}>Telus Lab Tour</Heading>
                  <Text fontSize='md' color={palette.black} className={lato}>
                    One of the most captivating and valuable components of my internship was the immersive lab tour at Telus' testing facility. Stepping into the lab was like entering a realm where theory meets practicality, offering an intimate glimpse into the intricacies of cutting-edge technology. The lab houses three main rooms: the core chamber, the RAN chamber, and the device chamber.
                  </Text>
                  <Text fontSize='md' color={palette.black} className={lato}>
                    The meticulous attention to detail in the lab's controlled environments, such as the icy temperatures of the switch room, highlights the significance of maintaining optimal conditions for the equipment's optimal performance. The sight of the colossal server room, along with the loud humming of cooling fans, exemplified the dedication to precision and reliability in the realm of telecommunications infrastructure.
                  </Text>
                </VStack>
              </TabPanel>
              <TabPanel display='flex' flexDir={{ base: 'column', lg: 'row' }} p='8'>
                <VStack w='100%' alignItems='start'>
                  <Heading size='lg' className={lato}>3rd Generation Partnership Project</Heading>
                  <Text fontSize='md' color={palette.black} className={lato}>
                    During my time working within the ORAN organization, I delved into the world of 3GPP, the driving force behind mobile communication standards from 2G to the latest 5G technology. 3GPP's specifications not only facilitate seamless interoperability among devices and network elements but also foster a competitive market by allowing equipment from various vendors to work together. This global standardization simplifies network deployment and scaling, crucial for telecommunications companies like Telus to provide consistent connectivity worldwide.
                  </Text>
                  <Text fontSize='md' color={palette.black} className={lato}>
                    In the context of Telus's work, the synergy between 3GPP and Open RAN technology is particularly noteworthy. Open RAN's open interfaces and standardized components align with 3GPP's philosophy, enabling Telus to integrate equipment from different vendors seamlessly. This integration not only optimizes network performance and innovation but also ensures a smooth transition to future technologies while maintaining compatibility with existing infrastructure, ultimately enhancing user experiences for Telus customers.
                  </Text>
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        <Box px='10%' py={{ base: '12', lg: '24' }}>
          <VStack maxW={{ base: '100%', lg: '60%' }} spacing='4' alignItems='flex-start'>
            <Heading size='sm' color={palette.lightGray} style={{ fontFamily: 'orelega' }}>05 | MY WORK</Heading>
            <Text fontSize='2xl' fontWeight='black' color={palette.black} className={lato}>the devops ticket management system</Text>
            <Text fontSize='lg' color={palette.black} className={lato}>
              The latter part of my internship at Telus provided a unique opportunity to tackle a crucial challenge encountered by the team: the absence of a centralized ticket management system. Reliance on Excel had resulted in inefficiencies and hindered effective workload management. Teaming up with a fellow developer, I took the lead in developing an internal ticket management system tailored to Telus' specific needs.
            </Text>
            <Text fontSize='lg' color={palette.black} className={lato}>
              Embracing the "dream small" philosophy advocated by my manager, we focused on crafting a Minimum Viable Product before expanding features. The journey of building the full-stack application in React was filled with exhilarating challenges, each feature introducing innovative ideas and requiring meticulous attention to detail. Through rigorous testing and debugging, I honed my problem-solving skills and learned the importance of prioritization, ensuring timely delivery of a functional solution to the team. This experience marked significant growth in my journey as a software engineer, pushing me beyond my comfort zone and enhancing my ability to transform challenges into opportunities.
            </Text>
          </VStack>
        </Box>

        <Box mx='10%' px='10%' py={{ base: '10', lg: '20' }} bg={palette.veryLightGray}>
          <VStack maxW='100%' spacing='4' alignItems='flex-start'>
            <Text m='auto' pb='4' fontSize='2xl' fontWeight='black' color={palette.black} className={lato}>mockup</Text>
            <Image src={Mockup} alt='mockup' />
            <Text fontSize='lg' color={palette.black} className={lato}>
              This design showcases the login page, main ticket grid display, create ticket modal window, and ticket details modal window for <b>streamlined ticket management</b>.
            </Text>
          </VStack>
        </Box>
        
        <Box px='10%' py={{ base: '12', lg: '24' }}>
          <VStack maxW={{ base: '100%', lg: '60%' }} spacing='4' alignItems='flex-start'>
            <Heading size='sm' color={palette.lightGray} style={{ fontFamily: 'orelega' }}>06 | END OF BEGINNING</Heading>
            <Text fontSize='2xl' fontWeight='black' color={palette.black} className={lato}>closing the chapter</Text>
            <Text fontSize='lg' color={palette.black} className={lato}>
              Reflecting on my time at Telus, it's evident that it was a transformative experience in the realm of DevOps. This internship immersed me in the real-world challenges of business operations and software development, pushing me to expand my skills and knowledge. From tackling new concepts to leading the ticket management system project, I've seen substantial growth in my abilities.
            </Text>
            <Text fontSize='lg' color={palette.black} className={lato}>
              As I conclude this internship, I recognize it as just the beginning of my professional journey. The lessons learned and skills acquired here are invaluable assets as I navigate the ever-changing landscape of software engineering and telecommunications innovation. Here's to the unexpected hurdles, the intricate problem-solving, and the satisfaction of turning ideas into reality.
            </Text>
          </VStack>
        </Box>

        <Box px='10%' pb={{ base: '12', lg: '24' }}>
          <VStack maxW={{ base: '100%', lg: '60%' }} spacing='4' pb='4' alignItems='flex-start'>
            <Heading size='sm' color={palette.lightGray} style={{ fontFamily: 'orelega' }}>07 | HIGHLIGHTS</Heading>
            <Text fontSize='2xl' fontWeight='black' color={palette.black} className={lato}>some of my favourite moments 💜</Text>
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

export const Head = () => <Seo title="telus" />;

export default AboutPage;
