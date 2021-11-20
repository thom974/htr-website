import { Flex, Heading, VStack } from "@chakra-ui/layout";
import { RedditIcon } from "react-share";
import Thin from "./helpers";

const RegisterContact = (args) => {
  return (
    <VStack id={args.id} alignItems="left">
      <Heading>Register & Contact</Heading>
      <Thin>sign up for even & get in touch with us!</Thin>
      <Flex direction="row" w="full" justify="space-evenly">
        <RedditIcon />
        <RedditIcon />
        <RedditIcon />
        <RedditIcon />
        <RedditIcon />
        <RedditIcon />
        <RedditIcon />
        <RedditIcon />
        <RedditIcon />
        <RedditIcon />
      </Flex>
    </VStack>
  );
};

export default RegisterContact;
