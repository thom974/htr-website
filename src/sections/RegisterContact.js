import { Flex, Heading, VStack } from "@chakra-ui/layout";
import { RedditIcon } from "react-share";
import Thin from "./helpers";

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const RegisterContact = (args) => {
  return (
    <VStack id={args.id} alignItems="left" mt='24'>
      <Heading mb='5'>Register & Contact</Heading>
      <Thin fontSize='1rem'>sign up & get in touch with us!</Thin>
      <Flex direction="row" w="full" justify="space-evenly" pt='16'>
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
