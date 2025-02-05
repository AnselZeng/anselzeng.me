import {
  Container,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";

export const PlacesTable = () => {
  const countries = [
    { flag: "🇳🇱", name: "Netherlands", continent: "Northwestern Europe", date: "December 4, 2002", status: "Lived In" },
    { flag: "🇨🇳", name: "China", continent: "East Asia", date: "August 28, 2003", status: "Lived In" },
    { flag: "🇲🇻", name: "Maldives", continent: "South Asia", date: "December 5, 2005", status: "Visited" },
    { flag: "🇫🇷", name: "France", continent: "Western Europe", date: "September 19, 2006", status: "Visited" },
    { flag: "🇲🇨", name: "Monaco", continent: "Western Europe", date: "September 23, 2006", status: "Visited" },
    { flag: "🇹🇭", name: "Thailand", continent: "Southeast Asia", date: "March 25, 2007", status: "Visited" },
    { flag: "🇻🇳", name: "Vietnam", continent: "Southeast Asia", date: "June 24, 2008", status: "Visited" },
    { flag: "🇵🇭", name: "Philippines", continent: "Southeast Asia", date: "March 20, 2008", status: "Visited" },
    { flag: "🇲🇾", name: "Malaysia", continent: "Southeast Asia", date: "February 28, 2009", status: "Visited" },
    { flag: "🇬🇷", name: "Greece", continent: "Southeast Europe", date: "January 31, 2010", status: "Visited" },
    { flag: "🇨🇦", name: "Canada", continent: "North America", date: "August 8, 2010", status: "Lived In" },
    { flag: "🇺🇸", name: "United States", continent: "North America", date: "December 22, 2013", status: "Visited" },
    { flag: "🇦🇼", name: "Aruba", continent: "North/South America", date: "December 22, 2014", status: "Visited" },
    { flag: "🇲🇽", name: "Mexico", continent: "North America", date: "December 24, 2016", status: "Visited" },
    { flag: "🇵🇦", name: "Panama", continent: "North America", date: "December 25, 2017", status: "Visited" },
    { flag: "🇨🇷", name: "Costa Rica", continent: "North America", date: "March 10, 2018", status: "Visited" },
    { flag: "🇵🇷", name: "Puerto Rico", continent: "North America", date: "December 23, 2018", status: "Visited" },
    { flag: "🇨🇺", name: "Cuba", continent: "North America", date: "December 27, 2022", status: "Visited" },
    { flag: "🇨🇼", name: "Curaçao", continent: "North/South America", date: "December 20, 2023", status: "Visited" },
    { flag: "🇧🇶", name: "Bonaire", continent: "North/South America", date: "December 25, 2023", status: "Visited" },
    { flag: "🇸🇽", name: "Sint Maarten", continent: "North America", date: "December 19, 2024", status: "Visited" },
    { flag: "🇦🇮", name: "Anguilla", continent: "North America", date: "December 21, 2024", status: "Visited" },
    { flag: "🇰🇷", name: "South Korea", continent: "East Asia", date: "Spring 2025", status: "Next Up" },
  ];

  return (
    <Container px={12} maxW="container.lg">
      <Heading pt={{ base: 12, lg: 24 }} pb={4} size="md">
        my travel logs
      </Heading>
      <TableContainer>
        <Table variant="striped" colorScheme="orange">
          <Thead>
            <Tr>
              <Th>Flag</Th>
              <Th>Country/Territory</Th>
              <Th>Continent</Th>
              <Th>Entry Date</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {countries.map((country, index) => (
              <Tr key={index}>
                <Td>{country.flag}</Td>
                <Td>{country.name}</Td>
                <Td>{country.continent}</Td>
                <Td>{country.date}</Td>
                <Td>{country.status}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Flag</Th>
              <Th>Country/Territory</Th>
              <Th>Continent</Th>
              <Th>Entry Date</Th>
              <Th>Status</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Container>
  );
};
