import {
  Box,
  VStack,
  Heading,
  Text,
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  TabPanels,
  TabPanel,
  Image,
} from '@chakra-ui/react';
import { FC } from 'react';

interface TwoTabsProps {
  heading: string;
  subtitle: string;
  tabs: {
    tabLabels: string[];
    tabPanels: {
      imageSrc?: string;
      altText?: string;
      heading: string;
      texts: string[];
    }[];
  };
  colors: {
    secondaryColour: string;
    white: string;
    black: string;
    primaryColour: string;
  };
}

const TwoTabs: FC<TwoTabsProps> = ({ heading, subtitle, tabs, colors }) => {
  return (
    <Box px={12} py={{ base: '12', lg: '24' }} bg={colors.primaryColour}>
      <Box
        px={{ base: 0, lg: 12 }}
        maxW="container.lg"
        m="auto"
        display="flex"
        flexDir="column"
        alignItems="center"
      >
        <VStack maxW={{ base: '100%', lg: '80%' }} pb={8} spacing={4}>
          <Heading
            size="sm"
            color={colors.secondaryColour}
            fontFamily="orelega"
            textAlign="center"
          >
            {heading}
          </Heading>
          <Text fontSize={{ base: 'xl', lg: '3xl' }} color="white" textAlign="center">
            {subtitle}
          </Text>
        </VStack>
        <Tabs size="lg" isFitted variant="unstyled" borderRadius="base" bg={colors.white}>
          <TabList color={colors.primaryColour}>
            {tabs.tabLabels.map((label, index) => (
              <Tab key={index} _selected={{ fontWeight: 'semibold' }}>
                {label}
              </Tab>
            ))}
          </TabList>
          <TabIndicator height="1" bg={colors.primaryColour} />
          <TabPanels>
            {tabs.tabPanels.map((panel, index) => (
              <TabPanel
                key={index}
                display="flex"
                flexDir={{ base: 'column', lg: 'row' }}
                p={8}
              >
                {panel.imageSrc ? (
                  <>
                    <Image
                      src={panel.imageSrc}
                      alt={panel.altText}
                      w={{ base: '100%', lg: '40%' }}
                      objectFit="cover"
                      pr={{ base: 0, lg: 4 }}
                      pb={{ base: 4, lg: 0 }}
                    />
                    <VStack
                      w={{ base: '100%', lg: '60%' }}
                      pl={{ base: 0, lg: 4 }}
                      alignItems="start"
                      color={colors.black}
                    >
                      <Heading size="lg">{panel.heading}</Heading>
                      {panel.texts.map((text, textIndex) => (
                        <Text key={textIndex} fontSize="md">
                          {text}
                        </Text>
                      ))}
                    </VStack>
                  </>
                ) : (
                  <VStack w="100%" alignItems="start" color={colors.black}>
                    <Heading size="lg">{panel.heading}</Heading>
                    {panel.texts.map((text, textIndex) => (
                      <Text key={textIndex} fontSize="md">
                        {text}
                      </Text>
                    ))}
                  </VStack>
                )}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default TwoTabs;
