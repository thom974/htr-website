import { Flex, Heading, VStack, HStack } from "@chakra-ui/layout";
import { RedditIcon } from "react-share";
import Thin from "./helpers";

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const RegisterContact = (args) => {
  useEffect(() => {
    gsap.from('.rcHeading', {
      scrollTrigger: {
        trigger: '.rcHeading',
        start: 'bottom bottom'
      },
      x: 50,
      opacity: 0,
      duration: 1.5
    })

    gsap.from('.rcIcons', {
      scrollTrigger: {
        trigger: '.rcIcons',
        start: 'bottom bottom'
      },
      x: -50,
      opacity: 0,
      duration: 1.5,
      delay: 0.1
    })
  })

  return (
    <VStack id={args.id} alignItems="left" mt='24'>
      <div className='rcHeading'>
        <Heading mb='5'>Register & Contact</Heading>
        <Thin fontSize='1rem'>sign up & get in touch with us!</Thin>
      </div>
      <div className='rcIcons'>
        <VStack direction="row" w="full" pt='16' alignItems='flex-start'>
          <HStack pl='20' spacing={12}>
            <RedditIcon />
            <Thin fontSize='1rem'>description of thing here</Thin>
          </HStack>
        </VStack>
      </div>
    </VStack>
  );
};

export default RegisterContact;
