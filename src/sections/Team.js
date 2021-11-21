/* eslint-disable react/jsx-key */
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image, Img } from "@chakra-ui/image";
import { Box, Flex, Grid, Heading, VStack } from "@chakra-ui/layout";
import Thin from "./helpers";

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function Member({ name, icon }) {
  return (
    <Flex
      boxShadow="md"
      _hover={{ boxShadow: "outline" }}
      backgroundColor={useColorModeValue("gray.200", "gray.700")}
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
    <div className={`member${i}`}>
      <Member
        name={member.props.name}
        icon={member.props.icon}
        key={`Member: ${i}`}
      ></Member>
    </div>
  );
});

const Team = (args) => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.memberGrid',
        start: 'center bottom'
      },
      delay: 0
    })

    for (let i=0; i<Members.length; i++) {
      const r = Math.floor(i / 4)
      const c = i % 4

      if (r % 2 == 0) {
        tl.from(`.member${i}`, {
          x: -50 + -50 * c,
          opacity: 0
        })
      } else {
        tl.from(`.member${i}`, {
          x: 50 + 50 * c,
          opacity: 0
        })
      }
    }
  })

  return (
    <VStack id={args.id} mt="100">
      <Heading>Meet The Team</Heading>
      <Thin>...</Thin>
      <div className='memberGrid'>
        <Grid
          templateColumns="repeat(4,1fr)"
          pt="50"
          gap={10}
          placeItems="center"
        >
          {[...Members]}
        </Grid>
      </div>
    </VStack>
  );
};
export default Team;
