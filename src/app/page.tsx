"use client";
import {
  Image,
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Flex,
  Divider,
  Button,
  Stack
} from "@chakra-ui/react";
import ContentSection from "@/components/home/ContentSection";

export default function Home() {
  return (
    <Container bg="#FFF8EB" maxW="100%" p={0}>
      <Container
        px={12}
        py={{ base: '12', lg: '24' }}
        maxW="container.lg"
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          gap={{ base: '6', lg: '12' }}
          pt={{ base: '12', lg: '0' }}
          direction={{ base: 'column', lg: 'row' }}
          align="center"
        >
          <VStack gap={2} align="flex-start">
            <Flex align="center">
              <Divider 
                borderColor="black" 
                borderWidth="1" 
                orientation="horizontal" 
                width="1.5rem" 
              />
              <Text fontSize="smaller" ml={2}>
                HELLO
              </Text>
            </Flex>
            <Heading>
              I&apos;m <Text as="span" color="orange">Ansel</Text> Zeng
            </Heading>
            <Text fontSize={{ base: 'small', lg: 'medium' }}>
              CS & business student, with a passion for software development and leading positive change. I find inspiration in the ever-evolving world of technology, staying up-to-date with the latest advancements and exploring how they can be leveraged to create meaningful experiences for users.
            </Text>
            <Button
              as="a"
              href="/Ansel_Zeng_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              size={{ base: 'xs', lg: 'sm' }}
              mt={3}
              variant="outline"
              borderColor="orange"
              color="orange"
              _hover={{ bg: "orange", color: "black" }}
              _active={{ bg: "orange", color: "white" }}
            >
              Download Resume
            </Button>
          </VStack>
          <Box
            width="auto"
            height="auto"
            maxWidth="313px"
            maxHeight="469px"
            overflow="hidden"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src="/home/me.png"
              alt="me"
              boxSize="100%"
              objectFit="cover"
              maxWidth="100%"
              maxHeight="100%"
            />
          </Box>
        </Stack>
      </Container>

      <ContentSection />
    </Container>
  );
}
