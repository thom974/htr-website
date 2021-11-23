import {
  Container,
  Heading,
  HStack,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/layout";
import { Flex, Box, VStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Thin from "./helpers";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Sponsor({ name, icon, link }) {
  return (
    // <GridItem colSpan="1">
    <Flex
      as="a"
      href={link}
      boxShadow="md"
      _hover={{ boxShadow: "outline" }}
      backgroundColor={useColorModeValue("gray.200", "gray.700")}
      borderRadius="20px"
      alignItems="center"
      justifyContent="center"
      padding="10"
      h="300px"
    >
      <Image src={icon} alt="Image Not Found" />
    </Flex>
    // </GridItem>
  );
}

const sponsors = [
  <Sponsor
    key="a"
    name="Hatch"
    icon="https://smractionplan.ca/sites/default/files/hatch-logo.png"
    link="https://www.hatch.com/"
  />,
  <Sponsor
    key="b"
    name="Echo3d"
    icon="https://static.wixstatic.com/media/c42fea_ff5b920019e44de49db0d882911bce83~mv2.png/v1/fill/w_144,h_22,al_c,q_85,usm_0.66_1.00_0.01/echo3D%20-%20Logo%202021.webp"
    link="https://www.echo3d.co/"
  />,
  <Sponsor
    key="c"
    name="Spirit Of Math"
    icon="https://spiritofmath.com/wp/wp-content/uploads/2019/08/SoM-Logo.png"
    link="https://spiritofmath.com/"
  />,
  <Sponsor
    key="c"
    name="Longos"
    icon="https://www.cafh.ca/uploads/8/5/2/8/85289610/editor/longos-logo_1.png"
    link="https://www.longos.com/"
  />,
  <Sponsor
    key="c"
    name="Siemens"
    icon="https://blog.tryvoomer.com/content/images/2021/09/Siemens-Logo.png"
    link="https://new.siemens.com/ca/en.html"
  />,
  <Sponsor
    key="c"
    name="Tim Hortons"
    icon="https://upload.wikimedia.org/wikipedia/commons/9/94/Tim_Hortons_Logo.png"
    link="https://www.timhortons.ca/"
  />,
];

const sponsorsWrap = (sponsors) => {
  const sponsorsWrapped = [];
  sponsors.forEach((sponsor, index) => {
    sponsorsWrapped.push(<div className={`sponsor${index}`}>{sponsor}</div>);
  });

  return sponsorsWrapped;
};

const Sponsors = (args) => {
  useEffect(() => {
    const tl = new gsap.timeline({
      scrollTrigger: {
        trigger: ".sponsorsHeading",
        start: "bottom bottom",
      },
      delay: 0.2,
    });

    for (let i = 0; i < sponsors.length; i++) {
      tl.from(`.sponsor${i}`, { x: -50 - 50 * i, opacity: 0 });
    }
  });

  return (
    <Container mt="24" minW="full" left="0" textAlign="center" id={args.id}>
      <div className="sponsorsHeading">
        <Heading fontSize="3rem" mb="6">
          Sponsors
        </Heading>
        <Thin fontSize="1rem">checkout our awesome supporters!</Thin>
      </div>
      <div className="sponsorsStack">
        <SimpleGrid p="10" columns="3" rowGap="10" columnGap="5">
          {[...sponsorsWrap(sponsors)]}
        </SimpleGrid>
      </div>
    </Container>
  );
};
export default Sponsors;
