/**
 * EXTERNAL EXPORTS
 */
import { VStack, Heading } from "@chakra-ui/react";

import { useEffect } from "react";

import gsap from "gsap";

const Title = () => {
  useEffect(() => {
    gsap.from(".title", { x: -50, opacity: 0, duration: 2, ease: "power4" });
  });

  return (
    <VStack alignItems="center" w="full">
      <div className="title">
        <Heading fontSize={{ sm: "6xl", lg: "8xl" }}>Hack The Ridge</Heading>
      </div>
    </VStack>
  );
};

export default Title;
