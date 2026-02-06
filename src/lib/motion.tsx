'use client';

import {
  AccordionItem,
  Box,
  Grid,
  HStack,
  Image,
  Tr,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

/**
 * Shared motion-wrapped Chakra components so we don't re-declare them in every page.
 * Use these for consistent animated sections (hero, cards, etc.).
 */
export const MotionBox = motion(Box);
export const MotionVStack = motion(VStack);
export const MotionHStack = motion(HStack);
export const MotionGrid = motion(Grid);
export const MotionImage = motion(Image);
export const MotionTr = motion(Tr);
export const MotionAccordionItem = motion(AccordionItem);
