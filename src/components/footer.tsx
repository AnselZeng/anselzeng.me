"use client";
import { Container, Flex, HStack, Box, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faMedium,
  faYoutube,
  faSpotify,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    label: "LinkedIn",
    icon: faLinkedinIn,
    url: "https://www.linkedin.com/in/anselzeng/",
    hoverColor: "#0A65C2",
  },
  {
    label: "GitHub",
    icon: faGithub,
    url: "https://github.com/AnselZeng",
    hoverColor: "#1F2328",
  },
  {
    label: "Medium",
    icon: faMedium,
    url: "https://anselzeng.medium.com/",
    hoverColor: "#292929",
  },
  {
    label: "YouTube",
    icon: faYoutube,
    url: "https://www.youtube.com/@AnselZeng",
    hoverColor: "#FF0000",
  },
  {
    label: "Spotify",
    icon: faSpotify,
    url: "https://open.spotify.com/user/21qlylh2xqrwsmdnu4aymmrui",
    hoverColor: "#1DB954",
  },
];

const Footer = () => {
  return (
    <Container maxW="100%" p={0} bg="#FFCD90">
      <Flex
        direction="column"
        maxW="80rem"
        px={12}
        py={8}
        m="auto"
        align="center"
      >
        <HStack spacing={5} mb={4}>
          {socialLinks.map(({ label, icon, url, hoverColor }) => (
            <Box
              key={label}
              as="a"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              color="#FFF4DF"
              p={0}
              borderRadius="md"
              _hover={{
                color: hoverColor,
                transform: "scale(1.06)",
                transition: "transform 0.2s ease-in-out",
              }}
              aria-label={label}
            >
              <FontAwesomeIcon icon={icon} size='2xl' />
            </Box>
          ))}
        </HStack>
        <Text textAlign='center' color='#793802'>
          © 2025 - Ansel Zeng
        </Text>
      </Flex>
    </Container>
  );
};

export default Footer;
