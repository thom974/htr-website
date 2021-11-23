import { HStack, Heading } from "@chakra-ui/react";

import { useEffect } from "react";

import gsap from "gsap";

const Details = () => {
  useEffect(() => {
    gsap.from(".details", { x: 50, opacity: 0, ease: "power4", duration: 2 });
  });

  return (
    <div className="details">
      <HStack
        alignItems="center"
        justifyContent="space-evenly"
        mt="8"
        w="full"
        spacing={{ sm: "2" }}
      >
        <Heading fontSize={{ sm: "xs", lg: "xl" }}>Virtual Hackathon</Heading>
        <Heading fontSize={{ sm: "xs", lg: "xl" }} pr={{ sm: "4", md: "0" }}>
          /
        </Heading>
        <Heading fontSize={{ sm: "xs", lg: "xl" }}>December 11th, 2021</Heading>
        <Heading fontSize={{ sm: "xs", lg: "xl" }} pr={{ sm: "4", md: "0" }}>
          /
        </Heading>
        <Heading fontSize={{ sm: "xs", lg: "xl" }}>12 Hour Event</Heading>
      </HStack>
    </div>
  );
};

export default Details;
