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
        <Image src={icon} alt="Img Not Found" borderRadius="full" />
      </Box>
    </Flex>
  );
}

const Members = [
  <Member
    name="Aayaan Naqvi"
    icon="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7c%2FProfile_avatar_placeholder_large.png&f=1&nofb=1"
  />,
  <Member
    name="Yaser Nossibeh"
    icon="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7c%2FProfile_avatar_placeholder_large.png&f=1&nofb=1"
  />,
  <Member
    name="Ernest Wang"
    icon="https://cdn.discordapp.com/attachments/583816025808568336/912072900511690832/D1907643-8B21-4957-8863-D005861F452A.jpg"
  />,
  <Member
    name="Thomas Luc"
    icon="https://avatars.githubusercontent.com/u/74675902?v=4"
  />,
  <Member
    name="Justin Frank"
    icon="https://avatars.githubusercontent.com/u/69999075?v=4"
  />,
  <Member
    name="Vincent Sun"
    icon="https://cdn.discordapp.com/attachments/909887057143431208/912062034730946641/AOh14GgtHb1KpxcQ7BrhuVszDKAmO1PxgZh7CrWGKqhos288-p-rw-no.png"
  />,
  <Member
    name="Tudor Barsan"
    icon="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7c%2FProfile_avatar_placeholder_large.png&f=1&nofb=1"
  />,
  <Member
    name="Shayaan Kazi"
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
      <Heading mb='6'>Meet The Team</Heading>
      <Thin fontSize='1rem'>the people that made Hack The Ridge possible!</Thin>
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
