'use client';
import { Box, Stack, VStack, Heading, Text, Spacer, useBreakpointValue } from '@chakra-ui/react';
import { FC } from 'react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

interface OverviewProps {
  heading: string;
  overviewTitle: string;
  overviewText: string[];
  roles: string[];
  team: string[];
  tools: string[];
  timeline: string[];
  colors: {
    lightGray: string;
    black: string;
    primaryColour: string;
    gray: string;
  };
}

const Overview: FC<OverviewProps> = ({
  heading,
  overviewTitle,
  overviewText,
  roles,
  team,
  tools,
  timeline,
  colors,
}) => {
  const showSpacer = useBreakpointValue({ base: false, lg: true });

  return (
    <Box px={{ base: 6, lg: 12 }} py={{ base: 12, lg: 24 }} maxW="container.lg" m="auto">
      <Stack spacing={{ base: 8, lg: 20 }}>
        <VStack spacing={4} alignItems="flex-start">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Heading size="sm" color={colors.lightGray} fontFamily="orelega">
              {heading}
            </Heading>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Text fontSize="2xl" fontWeight="black" color={colors.black}>
              {overviewTitle}
            </Text>
          </MotionBox>
          {overviewText.map((text, index) => (
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Text fontSize="lg" color={colors.black} key={index}>
                {text}
              </Text>
            </MotionBox>
          ))}
        </VStack>

        <Stack
          spacing={{ base: 4, lg: 0 }}
          alignItems="flex-start"
          flexWrap="wrap"
          direction={{ base: 'column', lg: 'row' }}
        >
          <VStack spacing={1} alignItems="flex-start" w="fit-content">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Heading pb={3} size="sm" color={colors.primaryColour}>
                MY ROLE
              </Heading>
              {roles.map((role, index) => (
                <Text color={colors.gray} key={index}>
                  {role}
                </Text>
              ))}
            </MotionBox>
          </VStack>
          <Spacer />

          <VStack spacing={1} alignItems="flex-start" w="fit-content">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Heading pb={3} size="sm" color={colors.primaryColour}>
                TEAM
              </Heading>
              {team.map((item, index) => (
                <Text color={colors.gray} key={index}>
                  {item}
                </Text>
              ))}
            </MotionBox>
          </VStack>
          <Spacer />

          <VStack spacing={1} alignItems="flex-start" w="fit-content">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Heading pb={3} size="sm" color={colors.primaryColour}>
                TOOLS
              </Heading>
              {tools.map((tool, index) => (
                <Text color={colors.gray} key={index}>
                  {tool}
                </Text>
              ))}
            </MotionBox>
          </VStack>
          <Spacer />

          <VStack spacing={1} alignItems="flex-start" w="fit-content">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Heading pb={3} size="sm" color={colors.primaryColour}>
                TIMELINE
              </Heading>
              {timeline.map((item, index) => (
                <Text color={colors.gray} key={index}>
                  {item}
                </Text>
              ))}
            </MotionBox>
          </VStack>
          {showSpacer && <Spacer />}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Overview;
