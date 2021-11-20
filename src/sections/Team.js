/* eslint-disable react/jsx-key */
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

function Member({ name, icon }) {
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
      <Heading textAlign="center">{name}</Heading>
      <Box boxSize="100px">
        <Image src={icon} alt="Img Not found" borderRadius="full" />
      </Box>
    </Flex>
  );
}

const Members = [
  <Member
    name="Justin Frank"
    icon="https://avatars.githubusercontent.com/u/69999075?v=4"
  />,
  <Member
    name="Thomas Luc"
    icon="https://avatars.githubusercontent.com/u/74675902?v=4"
  />,
  <Member
    name="Temp"
    icon="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7c%2FProfile_avatar_placeholder_large.png&f=1&nofb=1"
  />,
  <Member
    name="Temp"
    icon="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7c%2FProfile_avatar_placeholder_large.png&f=1&nofb=1"
  />,
  <Member
    name="Temp"
    icon="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7c%2FProfile_avatar_placeholder_large.png&f=1&nofb=1"
  />,
  <Member
    name="Temp"
    icon="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7c%2FProfile_avatar_placeholder_large.png&f=1&nofb=1"
  />,
  <Member
    name="Temp"
    icon="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7c%2FProfile_avatar_placeholder_large.png&f=1&nofb=1"
  />,
  <Member
    name="Temp"
    icon="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7c%2FProfile_avatar_placeholder_large.png&f=1&nofb=1"
  />,
].map((member, i) => {
  return (
    <Member
      name={member.props.name}
      icon={member.props.icon}
      key={`Member: ${i}`}
    ></Member>
  );
});
Members.push();
const Team = (args) => {
  return (
    <VStack id={args.id} mt='100'>
      <Heading>Meet The Team</Heading>
      <Thin>...</Thin>
      <Grid
        templateColumns="repeat(4,1fr)"
        padding="5"
        gap={10}
        placeItems="center"
      >
        {[...Members]}
      </Grid>
    </VStack>
  );
};
export default Team;
