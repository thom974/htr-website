/**
 * EXTERNAL
 */
import { Flex, HStack, Heading } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { IconButton } from "@chakra-ui/button";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
// import {} from "@chakra/icons"
const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex w="full" mt={10} justifyContent="flex-end">
      <HStack spacing={59} pr={59}>
        <Heading as="a" href="#about" fontSize="xl">
          About
        </Heading>
        <Heading as="a" href="#streams" fontSize="xl">
          Streams
        </Heading>
        <Heading as="a" href="#schedule" fontSize="xl">
          Schedule
        </Heading>
        <Heading as="a" href="#sponsors" fontSize="xl">
          Sponsors
        </Heading>
        <Heading as="a" href="#team" fontSize="xl">
          Team
        </Heading>
        <Heading as="a" href="#register" fontSize="xl">
          Register
        </Heading>
        <IconButton aria-label="Toggle Mode" onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </IconButton>
      </HStack>
    </Flex>
  );
};

export default Navigation;
