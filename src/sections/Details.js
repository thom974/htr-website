import { HStack, Heading } from "@chakra-ui/react";

const Details = () => {
  return (
    <HStack alignItems="center" justifyContent="space-evenly" mt="24" w="full">
      <Heading fontSize="xl">Virtual Hackathon</Heading>
      <Heading fontSize="xl">/</Heading>
      <Heading fontSize="xl">December 11th, 2021</Heading>
      <Heading fontSize="xl">/</Heading>
      <Heading fontSize="xl">12 Hour Event</Heading>
    </HStack>
  );
};

export default Details;
