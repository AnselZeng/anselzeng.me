import { Box, Stack, Tag, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface HeaderProps {
  tag: string;
  title: string;
  subtitle: string;
}

const Header: FC<HeaderProps> = ({ tag, title, subtitle }) => {
  return (
    <Box px={12} py={{ base: 12, lg: 24 }} color="#1D1D1F" maxW="container.lg" m="auto">
      <Stack spacing={4}>
        <Tag
          size="lg"
          w="fit-content"
          borderRadius="full"
          color="#1D1D1F"
          bg="transparent"
          border="1px"
          borderColor="#1D1D1F"
        >
          {tag}
        </Tag>
        <Heading size="3xl" fontFamily="orelega">
          {title}
        </Heading>
        <Text fontSize="1.8rem">
          {subtitle}
        </Text>
      </Stack>
    </Box>
  );
};

export default Header;
