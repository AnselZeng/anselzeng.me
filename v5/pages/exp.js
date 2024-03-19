import { Box, Button, Card, CardBody, CardHeader, Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

function CustomCard({ iconSrc, heading, subheading, text, imageSrc, colour, buttonLink }) {
  return (
    <Box
      mx={12}
      _hover={{
        boxShadow: `0 0 20px ${colour}`,
        transform: 'scale(1.02)',
        transition: 'transform 0.2s ease-in-out',
      }}
      transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
      borderRadius="lg"
    >
      <Card direction={'row'} size={'lg'} borderRadius={'lg'} bg={'white'}>
        <Stack p={12} spacing={4} w={'50%'}>
          <CardHeader p={0}>
            <div style={{ borderRadius: '30%', overflow: 'hidden', width: '40px', height: '40px' }}>
              <Image src={iconSrc} width={40} height={40} />
            </div>
            <Heading color={'#323235'} fontSize={'3xl'} py={2}>{heading}</Heading>
            <Heading size={'xs'} color={'#5E5E63'}>{subheading}</Heading>
          </CardHeader>
          <CardBody p={0}>
            <Text color={'#5E5E63'} mb={4}>{text}</Text>
            {buttonLink && heading !== 'Tweebaa' ? (
              <Link href={buttonLink}>
                <Button colorScheme={'facebook'} rightIcon={<FaArrowRight />}>
                  Read the Case Study
                </Button>
              </Link>
            ) : null}
            {heading === 'Tweebaa' ? (
              <Button size={'sm'} colorScheme={'facebook'} variant={'outline'} isDisabled>
                This case isn't ready yet
              </Button>
            ) : null}
          </CardBody>
        </Stack>
        <Container w={'50%'} pl={0} pr={12} py={12}>
          <Container height={'100%'} position={'relative'}>
            <Image src={imageSrc} fill={true} objectFit='contain' />
          </Container>
        </Container>
      </Card>
    </Box>
  );
}

export default function Experiences() {
  return (
    <SimpleGrid spacing={12} maxW={'container.lg'} m={'auto'} my={6} py={6} id="experience">
      <CustomCard
        iconSrc={'/icons/telus.svg'}
        heading={'Telus'}
        subheading={'INTERNSHIP • MAY – AUG 2023'}
        text={'Developing a management system to optimize ticket creation and tracking.'}
        imageSrc={'/images/tms.png'}
        colour={'#E7FFCF'}
        buttonLink={'/exp/telus'}
      />
      <CustomCard
        iconSrc={'/icons/ips.svg'}
        heading={'Ivey Product Society'}
        subheading={'FELLOWSHIP • JAN – APR 2023'}
        text={'Utilizing lean product development process to enhance Spotify\'s social experience.'}
        imageSrc={'/images/bad.png'}
        colour={'#BFBBDF'}
        buttonLink={'/exp/ips'}
      />
      <CustomCard
        iconSrc={'/icons/rbc.svg'}
        heading={'Royal Bank of Canada'}
        subheading={'INTERNSHIP • MAY – AUG 2022'}
        text={'Enhancing the auto-adjudication logic for flagging low-quality mortgage applications.'}
        imageSrc={'/images/mas.png'}
        colour={'#BFE2FF'}
        buttonLink={'/exp/rbc'}
      />
      <CustomCard
        iconSrc={'/icons/tweebaa.svg'}
        heading={'Tweebaa'}
        subheading={'INTERNSHIP • MAY – AUG 2021'}
        text={'Translating user insights into refined design prototypes, wireframes, and sitemaps.'}
        imageSrc={'/images/explore.png'}
        colour={'#D2DFFF'}
      />
    </SimpleGrid>
  );
}
