import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

export type Section = {
  type: "text";
  content: string;
} | {
  type: "imageGroup";
  images: { src: string; alt: string; }[];
};

interface BlogPostProps {
  title: string;
  date: string;
  readTime: string;
  sections: Section[];
}

export default function BlogPost({ title, date, readTime, sections }: BlogPostProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    onOpen();
  };

  return (
    <Container bg="#FFF8EB" maxW="100%" p={0}>
      <Container maxW="container.xl" p={0}>
        <Flex py={6} maxW="container.xl" m="auto" />
        <Container px={{ base: 6, lg: 12 }} py={{ base: 12, lg: 24 }} maxW="container.lg">
          <VStack align="start" spacing={6}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Heading size="2xl">{title}</Heading>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <HStack>
                <Avatar name="Ansel Zeng" src="/blog/pfp.png" />
                <VStack spacing={0} align="start">
                  <Text>Ansel Zeng</Text>
                  <Text fontSize="small">{date} • {readTime}</Text>
                </VStack>
              </HStack>
            </MotionBox>
            {sections.map((section, index) => (
              <MotionBox
                key={index}
                w="100%"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {section.type === "text" ? (
                  <Text>{section.content}</Text>
                ) : (
                  <SimpleGrid columns={{ base: 1, lg: Math.min(section.images.length, 3) }} spacing={{ base: 6, lg: 4 }}>
                    {section.images.map((image, imgIndex) => (
                      <MotionImage
                        key={imgIndex}
                        src={image.src}
                        alt={image.alt}
                        w="100%"
                        borderRadius="md"
                        cursor="pointer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleImageClick(image.src)}
                        transition={{ duration: 0.2 }}
                      />
                    ))}
                  </SimpleGrid>
                )}
              </MotionBox>
            ))}
          </VStack>
        </Container>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton zIndex={2} />
          <ModalBody p={0}>
            <Image
              src={selectedImage}
              alt="Selected image"
              w="100%"
              borderRadius="md"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
}
