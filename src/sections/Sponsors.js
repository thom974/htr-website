import { Container, Heading, HStack } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import Thin from "./helpers";

class Sponsor {
  constructor(name) {
    this.name = name;
  }
  get jsx() {
    return (
      <Flex backgroundColor="black" borderRadius="20px" padding="20">
        <Heading>{this.name}</Heading>
      </Flex>
    );
  }
}

const sponsors = [
  new Sponsor("Sponsor A"),
  new Sponsor("Sponsor B"),
  new Sponsor("Long Sponsor Name"),
];

const Sponsors = () => {
  return (
    <Container
      mt="24"
      minW="full"
      left="0"
      textAlign="center"
      position="absolute"
    >
      <Heading fontSize="3rem" mb="5">
        Sponsors
      </Heading>
      <Thin fontSize="1rem">checkout our awesome supporters!</Thin>
      <HStack justify="space-evenly" padding="16">
        {sponsors.map((sponsor) => {
          return sponsor.jsx;
        })}
      </HStack>
    </Container>
  );
};
export default Sponsors;
