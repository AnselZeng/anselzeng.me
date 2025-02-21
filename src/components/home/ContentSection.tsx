import { Image, Box, Container, Heading, HStack, Text, VStack, Link, Badge } from "@chakra-ui/react";
import { FC } from 'react';
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface ContentProps {
  imageUrl: string;
  imageAlt: string;
  boxImageUrl: string;
  boxImageAlt: string;
  maxImageHeight: number | string;
  boxMaxHeight: number | string;
  heading: string;
  description: string;
  tags: string;
  reverse?: boolean;
  link?: string;
  color?: string;
}

const Content: FC<ContentProps> = ({
  imageUrl,
  imageAlt,
  boxImageUrl,
  boxImageAlt,
  maxImageHeight,
  boxMaxHeight,
  heading,
  description,
  tags,
  reverse = false,
  link,
  color = '#000'
}) => {
  return (
    <HStack
      spacing={8}
      flexDirection={{ base: 'column', lg: reverse ? 'row-reverse' : 'row' }}
      w="100%"
    >
      <VStack w="100%" align="start" spacing={4}>
        <Image src={imageUrl} alt={imageAlt} maxH={maxImageHeight} />
        {link ? (
          <Link
            href={link}
            _hover={{
              textDecoration: 'none',
              backgroundSize: '200% 100%',
              transition: 'background-size 0.4s ease',
            }}
            sx={{
              background: `linear-gradient(to right, ${color}, black 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              transition: 'background-size 0.4s ease',
            }}
          >
            <Heading>{heading}</Heading>
          </Link>
        ) : (
          <Heading _hover={{ cursor: 'not-allowed' }}>
            {heading}
            <Badge ml={2} colorScheme='red' fontSize="medium">
              wip
            </Badge>
          </Heading>
        )}
        <Text>{description}</Text>
        <Text fontSize={10} textTransform="uppercase" letterSpacing={1.69}>
          {tags}
        </Text>
      </VStack>
      
      {link ? (
        <Link
          href={link}
          _hover={{ textDecoration: 'none' }}
          w="100%"
          h="100%"
        >
          <Box
            w="100%"
            h="100%"
            minH={60}
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
            _hover={{
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '100%',
                height: '100%',
                background: `radial-gradient(circle, ${color} 1%, ${color} 8%, transparent 44%)`,
                transform: 'translate(-50%, -50%)',
                transition: 'opacity 0.4s ease',
                opacity: 1,
              },
              img: {
                transform: 'translateY(-8px)',
              }
            }}
            sx={{
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '100%',
                height: '100%',
                background: `radial-gradient(circle, ${color} 1%, ${color} 8%, transparent 44%)`,
                transform: 'translate(-50%, -50%)',
                transition: 'opacity 0.4s ease',
                opacity: 0,
              }
            }}
          >
            <Image
              src={boxImageUrl}
              alt={boxImageAlt}
              objectFit="cover"
              maxH={boxMaxHeight}
              transition="transform 0.4s ease"
            />
          </Box>
        </Link>
      ) : (
        <Box
          w="100%"
          h="100%"
          minH={60}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={boxImageUrl}
            alt={boxImageAlt}
            objectFit="cover"
            maxH={boxMaxHeight}
            _hover={{ cursor: 'not-allowed' }}
          />
        </Box>
      )}
    </HStack>
  );
};

const ContentSection = () => {
  return (
    <Container bg="white" p={0} maxW="100%">
      <Container px={{ base: 6, lg: 12 }} py={{ base: '12', lg: '24' }} maxW="container.lg">
        <VStack spacing={{ base: 10, lg: 20 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Content
              imageUrl='/home/telus.svg'
              imageAlt='telus'
              boxImageUrl='/home/telus.png'
              boxImageAlt='telus'
              maxImageHeight={8}
              boxMaxHeight={44}
              heading='Telus'
              description='Streamlining operations with a dynamic ticket management system.'
              tags='Software Engineering // DevOps // Internship'
              reverse={true}
              link='/work/telus'
              color='#66CC00'
            />
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Content
              imageUrl='/home/ips.svg'
              imageAlt='ips'
              boxImageUrl='/home/ips.png'
              boxImageAlt='ips'
              maxImageHeight={12}
              boxMaxHeight={48}
              heading='Ivey Product Society'
              description="Enhancing spotify's social experience through customization on the profile page."
              tags='Product Management // UX Research // Fellowship'
              link='/work/ips'
              color='#B4A3C5'
            />
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Content
              imageUrl='/home/rbc.svg'
              imageAlt='rbc'
              boxImageUrl='/home/rbc.png'
              boxImageAlt='rbc'
              maxImageHeight={12}
              boxMaxHeight={56}
              heading='Royal Bank of Canada'
              description='Redefining the mortgage application process by building an enhanced evaluation engine for consumers and advisors.'
              tags='Software Engineering // Full-stack // Internship'
              reverse={true}
              link='/work/rbc'
              color='#0066D0'
            />
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Content
              imageUrl='/home/tweebaa.svg'
              imageAlt='tweebaa'
              boxImageUrl='/home/tweebaa.png'
              boxImageAlt='tweebaa'
              maxImageHeight={12}
              boxMaxHeight={60}
              heading='Tweebaa'
              description="Pioneering the future of e-commerce through value-exchanging social networking."
              tags='UX/UI Design // Wireframing // Internship'
            />
          </MotionBox>
        </VStack>
      </Container>
    </Container>
  );
};

export default ContentSection;
