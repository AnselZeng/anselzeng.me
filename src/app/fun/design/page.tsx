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
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

export default function Page() {
  const { isOpen, onOpen, onClose } = useDisclosure();  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    onOpen();
  };

  const images = ["/design/timbuddies.png", "/design/pepsico.png", "/design/lilprotectors.png", "/design/agrilink.png"];

  return (
    <Container bg="#FFF8EB" maxW="100%" p={0}>
      <Container maxW="container.xl" p={0}>
        <Flex py={6} />
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <VStack px={{ base: 6, lg: 12 }} py={{ base: 12, lg: 24 }} maxW="container.lg" m="auto">
            <Text>welcome to my</Text>
            <Heading textAlign="center">design portfolio</Heading>
          </VStack>
        </MotionBox>
      </Container>

      <Container px={0} py={{ base: 12, lg: 24 }} maxW="100%" bg="white">
        <Container px={{ base: 6, lg: 12 }} maxW="container.lg">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
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
          </MotionBox>
        </Container>
      </Container>

      <Container px={{ base: 6, lg: 12 }} pt={{ base: 12, lg: 24 }} maxW={"container.lg"}>
        <Box sx={{ columnCount: { base: 1, lg: 2 }, columnGap: 12 }}>
          {images.map((src, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MotionImage
                src={src}
                alt={`Design Image ${index + 1}`}
                mb={{ base: 6, lg: 12 }}
                cursor="pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleImageClick(src)}
                transition={{ duration: 0.2 }}
                style={{ 
                  width: '100%',
                  objectFit: 'cover'
                }}
              />
            </MotionBox>
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

      <Flex py={{ base: 3, lg: 12 }} />
    </Container>
  );
}
