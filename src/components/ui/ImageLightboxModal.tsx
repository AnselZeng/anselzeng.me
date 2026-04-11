'use client';

import {
  Box,
  HStack,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

export type ImageLightboxNavigation = {
  onPrev: () => void;
  onNext: () => void;
};

export interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  alt: string;
  navigation?: ImageLightboxNavigation;
}

export function ImageLightboxModal({
  isOpen,
  onClose,
  imageSrc,
  alt,
  navigation,
}: ImageLightboxModalProps) {
  const showNav = Boolean(navigation);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnOverlayClick>
      <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(4px)" />
      <ModalContent
        maxW={{ base: 'calc(100vw - 1rem)', md: 'min(92vw, 900px)' }}
        w="fit-content"
        maxH="90vh"
        mx="auto"
        my={4}
        borderRadius="xl"
        overflow="hidden"
        bg="white"
        boxShadow="2xl"
        borderWidth="1px"
        borderColor="blackAlpha.200"
      >
        <ModalCloseButton
          top={3}
          right={3}
          zIndex={10}
          size="md"
          borderRadius="full"
          bg="white"
          color="gray.800"
          boxShadow="md"
          _hover={{ bg: 'gray.100' }}
        />
        <ModalBody p={0} maxH="90vh" lineHeight={0}>
          <Box position="relative" display="inline-block" maxW="100%">
            <Image
              src={imageSrc}
              alt={alt}
              maxH="85vh"
              maxW={{ base: 'calc(100vw - 1rem)', md: 'min(92vw, 900px)' }}
              w="auto"
              h="auto"
              display="block"
              objectFit="contain"
              loading="eager"
              decoding="async"
            />
            {showNav && (
              <HStack
                position="absolute"
                top="50%"
                left={2}
                right={2}
                justify="space-between"
                transform="translateY(-50%)"
                pointerEvents="none"
              >
                <Box pointerEvents="auto">
                  <IconButton
                    aria-label="Previous image"
                    icon={<ChevronLeftIcon />}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigation!.onPrev();
                    }}
                    bg="white"
                    color="gray.800"
                    boxShadow="md"
                    borderRadius="full"
                    size="md"
                    _hover={{ bg: 'gray.100' }}
                  />
                </Box>
                <Box pointerEvents="auto">
                  <IconButton
                    aria-label="Next image"
                    icon={<ChevronRightIcon />}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigation!.onNext();
                    }}
                    bg="white"
                    color="gray.800"
                    boxShadow="md"
                    borderRadius="full"
                    size="md"
                    _hover={{ bg: 'gray.100' }}
                  />
                </Box>
              </HStack>
            )}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
