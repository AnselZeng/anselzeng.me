"use client";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Page() {
  const { isOpen, onOpen, onClose } = useDisclosure();  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    onOpen();
  };

  return (
    <Container bg="#FFF8EB" maxW="100%" p={0}>
      <Container maxW="container.xl" p={0}>
        <Flex py={6} />
        <VStack px={12} py={{ base: 12, lg: 24 }} maxW="container.lg" m="auto">
          <Text>welcome to my</Text>
          <Heading textAlign="center">design portfolio</Heading>
        </VStack>
      </Container>

      <Container px={0} py={{ base: 12, lg: 24 }} maxW="100%" bg="white">
        <Container px={12} maxW="container.lg">
          <Heading pb={4} size="md">
            a brief introduction
          </Heading>
          <Text pb={4}>
            Since my first internship as a UX/UI designer, I fell in love with Figma and discovered a passion for creating intuitive, user-focused designs.
            I&apos;ve always felt a strong creative drive, which led me to volunteer for design roles in school projects, assignments, and even case competitions—crafting everything from mock interfaces to full design concepts.
          </Text>
          <Text>
            I thrive on the challenge of transforming abstract ideas into thoughtful user experiences that blend functionality and aesthetics.
            My journey in design is fueled by a constant curiosity and a desire to make digital interactions seamless, engaging, and meaningful for users everywhere.
          </Text>
        </Container>
      </Container>

      <Container px={12} pt={{ base: 12, lg: 24 }} maxW={"container.lg"}>
        <Box sx={{ columnCount: { base: 1, lg: 2 }, columnGap: 12 }}>
          {["/design/timbuddies.png", "/design/pepsico.png", "/design/lilprotectors.png", "/design/agrilink.png"].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Design Image ${index + 1}`}
              mb={12}
              cursor="pointer"
              onClick={() => handleImageClick(src)}
            />
          ))}
        </Box>
      </Container>
      
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={4}>
            {selectedImage && <Image src={selectedImage} alt="Selected Design" />}
          </ModalBody>
        </ModalContent>
      </Modal>

      <Flex py={{ base: 0, lg: 12 }} />
    </Container>
  );
}
