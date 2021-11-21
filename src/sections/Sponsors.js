import { Container, Heading, HStack } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Thin from "./helpers";

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

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

const sponsorsWrap = (sponsors) => {
  const sponsorsWrapped = []
  sponsors.forEach((sponsor, index) => {
    sponsorsWrapped.push(
      <div className={`sponsor${index}`}>
        {sponsor}
      </div>
    )
  })

  return sponsorsWrapped
}

const Sponsors = (args) => {
  useEffect(() => {

    const tl = new gsap.timeline({
      scrollTrigger: {
        trigger: '.sponsorStack',
        start: 'center bottom'
      },
      delay: 0.6
    })

    for (let i=0; i<sponsors.length; i++) {
      tl.from(`.sponsor${i}`, { x: -50 -50 * i, opacity: 0 })
    }
  })

  return (
    <Container mt="24" minW="full" left="0" textAlign="center" id={args.id}>
      <Heading fontSize="3rem" mb="5">
        Sponsors
      </Heading>
      <Thin fontSize="1rem">checkout our awesome supporters!</Thin>
      <div className='sponsorsStack'>
        <HStack justify="space-evenly" padding="10">
          {[...sponsorsWrap(sponsors)]}
        </HStack>
      </div>
    </Container>
  );
};
export default Sponsors;
