import {
  Box,
  Container,
  Heading,
  Badge,
  Text,
  VStack,
  HStack,
  useBreakpointValue,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Tooltip,
  Collapse,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionTr = motion(Tr);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const PlacesTable = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const toggleExpanded = (countryName: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(countryName)) {
      newExpanded.delete(countryName);
    } else {
      newExpanded.add(countryName);
    }
    setExpandedRows(newExpanded);
  };

  const countries = [
    { flag: "🇳🇱", name: "Netherlands", continent: "Northwestern Europe", date: "December 4, 2002", status: "Lived In", color: "blue" },
    { flag: "🇨🇳", name: "China", continent: "East Asia", date: "August 28, 2003", status: "Lived In", color: "red" },
    { flag: "🇲🇻", name: "Maldives", continent: "South Asia", date: "December 5, 2005", status: "Visited", color: "teal" },
    { flag: "🇫🇷", name: "France", continent: "Western Europe", date: "September 19, 2006", status: "Visited", color: "blue" },
    { flag: "🇲🇨", name: "Monaco", continent: "Western Europe", date: "September 23, 2006", status: "Visited", color: "red" },
    { flag: "🇹🇭", name: "Thailand", continent: "Southeast Asia", date: "March 25, 2007", status: "Visited", color: "red" },
    { flag: "🇻🇳", name: "Vietnam", continent: "Southeast Asia", date: "June 24, 2008", status: "Visited", color: "red" },
    { flag: "🇵🇭", name: "Philippines", continent: "Southeast Asia", date: "March 20, 2008", status: "Visited", color: "blue" },
    { flag: "🇲🇾", name: "Malaysia", continent: "Southeast Asia", date: "February 28, 2009", status: "Visited", color: "orange" },
    { flag: "🇬🇷", name: "Greece", continent: "Southeast Europe", date: "January 31, 2010", status: "Visited", color: "blue" },
    { 
      flag: "🇨🇦", 
      name: "Canada", 
      continent: "North America", 
      date: "August 8, 2010", 
      status: "Lived In", 
      color: "red",
      expandable: true,
      subLocations: [
        { name: "Alberta", status: "Visited" },
        { name: "British Columbia", status: "Visited" },
        { name: "New Brunswick", status: "Visited" },
        { name: "Northwest Territories", status: "Visited" },
        { name: "Nova Scotia", status: "Visited" },
        { name: "Ontario", status: "Lived In" },
        { name: "Prince Edward Island", status: "Visited" },
        { name: "Québec", status: "Visited" },
      ]
    },
    { 
      flag: "🇺🇸", 
      name: "United States", 
      continent: "North America", 
      date: "December 22, 2013", 
      status: "Visited", 
      color: "blue",
      expandable: true,
      subLocations: [
        { name: "Arizona", status: "Visited" },
        { name: "California", status: "Visited" },
        { name: "Florida", status: "Visited" },
        { name: "Illinois", status: "Visited" },
        { name: "Massachusetts", status: "Visited" },
        { name: "Michigan", status: "Visited" },
        { name: "Nevada", status: "Visited" },
        { name: "New York", status: "Visited" },
        { name: "Utah", status: "Visited" },
        { name: "Washington", status: "Visited" },
        { name: "Washington, D.C. (Federal District)", status: "Visited" },
      ]
    },
    { flag: "🇦🇼", name: "Aruba", continent: "North/South America", date: "December 22, 2014", status: "Visited", color: "orange" },
    { flag: "🇲🇽", name: "Mexico", continent: "North America", date: "December 24, 2016", status: "Visited", color: "green" },
    { flag: "🇵🇦", name: "Panama", continent: "North America", date: "December 25, 2017", status: "Visited", color: "blue" },
    { flag: "🇨🇷", name: "Costa Rica", continent: "North America", date: "March 10, 2018", status: "Visited", color: "blue" },
    { flag: "🇵🇷", name: "Puerto Rico", continent: "North America", date: "December 23, 2018", status: "Visited", color: "blue" },
    { flag: "🇨🇺", name: "Cuba", continent: "North America", date: "December 27, 2022", status: "Visited", color: "red" },
    { flag: "🇨🇼", name: "Curaçao", continent: "North/South America", date: "December 20, 2023", status: "Visited", color: "orange" },
    { flag: "🇧🇶", name: "Bonaire", continent: "North/South America", date: "December 25, 2023", status: "Visited", color: "orange" },
    { flag: "🇸🇽", name: "Sint Maarten", continent: "North America", date: "December 19, 2024", status: "Visited", color: "red" },
    { flag: "🇦🇮", name: "Anguilla", continent: "North America", date: "December 21, 2024", status: "Visited", color: "blue" },
    { flag: "🇦🇹", name: "Austria", continent: "Central Europe", date: "September 9, 2025", status: "Visited", color: "blue" },
    { flag: "🇨🇿", name: "Czech Republic", continent: "Central Europe", date: "September 11, 2025", status: "Visited", color: "blue" },
    { flag: "🇰🇷", name: "South Korea", continent: "East Asia", date: "Spring 2026", status: "Next Up", color: "purple" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Lived In":
        return "green";
      case "Visited":
        return "blue";
      case "Next Up":
        return "purple";
      default:
        return "gray";
    }
  };

  // Canada Map Component
  const CanadaMap = () => {
    const provinces = [
      { name: "Alberta", visited: true, lived: false },
      { name: "British Columbia", visited: true, lived: false },
      { name: "New Brunswick", visited: true, lived: false },
      { name: "Northwest Territories", visited: true, lived: false },
      { name: "Nova Scotia", visited: true, lived: false },
      { name: "Ontario", visited: true, lived: true },
      { name: "Prince Edward Island", visited: true, lived: false },
      { name: "Québec", visited: true, lived: false },
    ];

    return (
      <Box>
        <Text fontSize="sm" fontWeight="600" color="gray.700" mb={3} textAlign="center">
          Canadian Provinces & Territories
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={2} w="100%">
          {provinces.map((province, index) => (
            <HStack key={province.name} spacing={2} py={0.5}>
              <Text fontSize="xs" color="gray.400" fontWeight="600" minW="16px" textAlign="center">
                {index + 1}
              </Text>
              <Text fontSize="sm" color="gray.600" fontWeight="500" flex={1}>
                {province.name}
                {province.lived && ' 🏠'}
              </Text>
            </HStack>
          ))}
        </SimpleGrid>
      </Box>
    );
  };

  // USA Map Component
  const USAMap = () => {
    const states = [
      { name: "Arizona", visited: true },
      { name: "California", visited: true },
      { name: "Florida", visited: true },
      { name: "Illinois", visited: true },
      { name: "Massachusetts", visited: true },
      { name: "Michigan", visited: true },
      { name: "Nevada", visited: true },
      { name: "New York", visited: true },
      { name: "Utah", visited: true },
      { name: "Washington", visited: true },
      { name: "Washington, D.C. (Federal District)", visited: true },
    ];

    return (
      <Box>
        <Text fontSize="sm" fontWeight="600" color="gray.700" mb={3} textAlign="center">
          US States Visited
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={2} w="100%">
          {states.map((state, index) => (
            <HStack key={state.name} spacing={2} py={0.5}>
              <Text fontSize="xs" color="gray.400" fontWeight="600" minW="16px" textAlign="center">
                {index + 1}
              </Text>
              <Text fontSize="sm" color="gray.600" fontWeight="500" flex={1}>
                {state.name}
              </Text>
            </HStack>
          ))}
        </SimpleGrid>
      </Box>
    );
  };

  return (
    <Container maxW="container.xl" px={{ base: 6, lg: 12 }}>
      <MotionVStack
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        spacing={16}
      >
        <MotionVStack variants={itemVariants} spacing={4} textAlign="center">
          <Badge
            colorScheme="teal"
            variant="subtle"
            px={3}
            py={1}
            borderRadius="full"
            fontSize="sm"
            fontWeight="600"
          >
            Travel Logs
          </Badge>
          <Heading
            fontSize={{ base: '3xl', lg: '4xl' }}
            fontWeight="700"
            color="gray.800"
          >
            My Travel Journey
          </Heading>
          <Text
            fontSize="lg"
            color="gray.600"
            maxW="600px"
            mx="auto"
            lineHeight="1.6"
          >
            A chronological record of my global adventures and experiences across continents.
          </Text>
        </MotionVStack>

        <MotionBox variants={itemVariants} w="full">
          <TableContainer
            borderRadius="xl"
            border="1px solid"
            borderColor="gray.200"
            bg="white"
            boxShadow="lg"
            overflowX="auto"
          >
            <Table variant="simple" size={isMobile ? "sm" : "md"}>
              <Thead bg="gray.50">
                <Tr>
                  <Th color="gray.700" fontWeight="600" fontSize="sm">Flag</Th>
                  <Th color="gray.700" fontWeight="600" fontSize="sm">Country/Territory</Th>
                  <Th color="gray.700" fontWeight="600" fontSize="sm" display={{ base: "none", md: "table-cell" }}>Continent</Th>
                  <Th color="gray.700" fontWeight="600" fontSize="sm">Date</Th>
                  <Th color="gray.700" fontWeight="600" fontSize="sm">Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {countries.map((country, index) => (
                  <React.Fragment key={country.name}>
                    <MotionTr
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10px" }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      _hover={{
                        bg: "gray.50",
                      }}
                      sx={{
                        transition: "all 0.2s ease",
                        "&:hover": {
                          transform: "translateY(-1px)",
                        }
                      }}
                      cursor={country.expandable ? "pointer" : "default"}
                      onClick={country.expandable ? () => toggleExpanded(country.name) : undefined}
                    >
                      <Td fontSize="lg" verticalAlign="middle">{country.flag}</Td>
                      <Td fontWeight="600" color="gray.800" verticalAlign="middle">
                        <HStack spacing={1} align="center">
                          <Text m={0} p={0}>{country.name}</Text>
                          {country.expandable && (
                            <Text fontSize="sm" color="gray.500" m={0} p={0}>
                              {expandedRows.has(country.name) ? <ChevronDownIcon /> : <ChevronRightIcon />}
                            </Text>
                          )}
                        </HStack>
                      </Td>
                      <Td color="gray.600" display={{ base: "none", md: "table-cell" }} verticalAlign="middle">{country.continent}</Td>
                      <Td color="gray.600" fontSize="sm" verticalAlign="middle">{country.date}</Td>
                      <Td verticalAlign="middle">
                        <Badge
                          colorScheme={getStatusColor(country.status)}
                          variant="subtle"
                          px={2}
                          py={1}
                          borderRadius="full"
                          fontSize="xs"
                          fontWeight="600"
                        >
                          {country.status}
                        </Badge>
                      </Td>
                    </MotionTr>
                    
                    {country.expandable && (
                      <Tr>
                        <Td colSpan={5} p={0}>
                          <Collapse in={expandedRows.has(country.name)} animateOpacity>
                            <Box bg="gray.50" px={4} py={4} borderLeft="3px solid" borderLeftColor="gray.300" overflow="hidden">
                              {country.name === "Canada" ? <CanadaMap /> : <USAMap />}
                            </Box>
                          </Collapse>
                        </Td>
                      </Tr>
                    )}
                  </React.Fragment>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </MotionBox>
      </MotionVStack>
    </Container>
  );
};
