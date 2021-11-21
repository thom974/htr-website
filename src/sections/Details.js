import { HStack, Heading } from "@chakra-ui/react";

import { useEffect } from "react";

import gsap from 'gsap'

const Details = () => {
  useEffect(() => {
    gsap.from('.details', { x: 50, opacity:0, ease: 'power4', duration: 2 })
  })

  return (
    <div class='details'>
      <HStack alignItems="center" justifyContent="space-evenly" mt="8" w="full">
        <Heading fontSize="xl">Virtual Hackathon</Heading>
        <Heading fontSize="xl">/</Heading>
        <Heading fontSize="xl">December 11th, 2021</Heading>
        <Heading fontSize="xl">/</Heading>
        <Heading fontSize="xl">12 Hour Event</Heading>
      </HStack>
    </div>
  );
};

export default Details;
