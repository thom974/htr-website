import { Container, Heading, HStack } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Thin from "./helpers";

function Sponsor({ name }) {
  return (
    <Flex
      boxShadow="md"
      _hover={{ boxShadow: "outline" }}
      backgroundColor={useColorModeValue("gray.200", "gray.700")}
      borderRadius="20px"
      padding="20"
    >
      <Heading>{name}</Heading>
    </Flex>
  );
}

const sponsors = [
  <Sponsor key="a" name="Sponsor A" />,
  <Sponsor key="b" name="Sponsor B" />,
  <Sponsor key="c" name="Long Sponsor name" />,
];

const Sponsors = (args) => {
  return (
    <Container mt="24" minW="full" left="0" textAlign="center" id={args.id}>
      <Heading fontSize="3rem" mb="5">
        Sponsors
      </Heading>
      <Thin fontSize="1rem">checkout our awesome supporters!</Thin>
      <HStack justify="space-evenly" padding="10">
        {[...sponsors]}
      </HStack>
    </Container>
  );
};
export default Sponsors;
