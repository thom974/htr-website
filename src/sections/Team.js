import { Image, Img } from "@chakra-ui/image";
import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  VStack,
} from "@chakra-ui/layout";
import Thin from "./helpers";

class Member {
  constructor(name, icon) {
    this.name = name;
    this.icon = icon;
  }
  get jsx() {
    return (
      <Flex
        background="black"
        borderRadius="20px"
        padding="5"
        boxSize="30vh"
        direction="column"
        justify="space-evenly"
        align="center"
      >
        <Heading textAlign="center">{this.name}</Heading>
        <Box boxSize="100px">
          <Image src={this.icon} alt="Img Not found" borderRadius="full" />
        </Box>
      </Flex>
    );
  }
}
const Members = [
  new Member(
    "Justin Frank",
    "https://avatars.githubusercontent.com/u/69999075?v=4"
  ),
  new Member(
    "Thomas Luc",
    "https://avatars.githubusercontent.com/u/74675902?v=4"
  ),
  new Member(
    "Temp",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7c%2FProfile_avatar_placeholder_large.png&f=1&nofb=1"
  ),
  new Member(
    "Temp",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7c%2FProfile_avatar_placeholder_large.png&f=1&nofb=1"
  ),
  new Member(
    "Temp",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7c%2FProfile_avatar_placeholder_large.png&f=1&nofb=1"
  ),
  new Member(
    "Temp",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7c%2FProfile_avatar_placeholder_large.png&f=1&nofb=1"
  ),
  new Member(
    "Temp",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7c%2FProfile_avatar_placeholder_large.png&f=1&nofb=1"
  ),
  new Member(
    "Temp",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7c%2FProfile_avatar_placeholder_large.png&f=1&nofb=1"
  ),
];
Members.push();
const Team = (args) => {
  return (
    <VStack id={args.id}>
      <Heading>Meet The Team</Heading>
      <Thin>...</Thin>
      <Grid
        templateColumns="repeat(4,1fr)"
        padding="5"
        gap={10}
        // w="full"
        placeItems="center"
      >
        {Members.map((member) => {
          return member.jsx;
        })}
      </Grid>
    </VStack>
  );
};
export default Team;
