import { Flex, Heading, VStack, HStack, Link } from "@chakra-ui/layout";
import { SocialIcon } from "react-social-icons";
import Thin from "./helpers";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const RegisterContact = (args) => {
  useEffect(() => {
    gsap.from(".rcHeading", {
      scrollTrigger: {
        trigger: ".rcHeading",
        start: "bottom bottom",
      },
      x: 50,
      opacity: 0,
      duration: 1.5,
    });

    gsap.from(".rcIcons", {
      scrollTrigger: {
        trigger: ".rcIcons",
        start: "bottom bottom",
      },
      x: -50,
      opacity: 0,
      duration: 1.5,
      delay: 0.1,
    });
  });

  return (
    <VStack id={args.id} alignItems="left" mt="24">
      <div className="rcHeading">
        <Heading mb="5">Register & Contact</Heading>
        <Thin fontSize="1rem">sign up & get in touch with us!</Thin>
      </div>
      <div className="rcIcons">
        <VStack direction="row" w="full" pt="16" alignItems="flex-start">
          <HStack pl="20" spacing={12} pb="6">
            <SocialIcon
              target="_blank"
              network="sharethis"
              url="https://docs.google.com/forms/d/1r8_S_RepQEqpBaR2SHO2B7iBX1AmAPgGZAg4JyorVmM/edit?usp=sharing"
            />
            <Thin fontSize="1rem">
              <Link
                href="https://docs.google.com/forms/d/1r8_S_RepQEqpBaR2SHO2B7iBX1AmAPgGZAg4JyorVmM/edit?usp=sharing"
                isExternal
              >
                register here!
              </Link>
            </Thin>
          </HStack>

          <HStack pl="20" spacing={12} pb="6">
            <SocialIcon network="mailto" url="mailto:hacktheridge@gmail.com" />
            <Thin fontSize="1rem">
              <Link href="mailto:hacktheridge@gmail.com" isExternal>
                hacktheridge@gmail.com
              </Link>
            </Thin>
          </HStack>

          <HStack pl="20" spacing={12} pb="6">
            <SocialIcon
              target="_blank"
              url="https://www.instagram.com/hacktheridge/"
              network="instagram"
              isExternal
            />
            <Thin fontSize="1rem">
              <Link href="https://www.instagram.com/hacktheridge/" isExternal>
                @hacktheridge
              </Link>
            </Thin>
          </HStack>

          <HStack pl="20" spacing={12} pb="6">
            <SocialIcon network="discord" />
            <Thin fontSize="1rem">coming soon!</Thin>
          </HStack>

          <HStack pl="20" spacing={12} pb="6">
            <SocialIcon network="rss" />
            <Thin fontSize="1rem">devpost: coming soon!</Thin>
          </HStack>
        </VStack>
      </div>
    </VStack>
  );
};

export default RegisterContact;
