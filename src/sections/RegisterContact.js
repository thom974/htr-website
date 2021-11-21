import { Flex, Heading, VStack, HStack, Link } from "@chakra-ui/layout";
import { RedditIcon, EmailIcon, LivejournalIcon,  } from "react-share";
import { SocialIcon } from 'react-social-icons'
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
          
          <HStack pl='20' spacing={12} pb='6'>
            <SocialIcon network='sharethis' />
            <Thin fontSize='1rem'>
              <Link 
                href='https://docs.google.com/forms/d/1r8_S_RepQEqpBaR2SHO2B7iBX1AmAPgGZAg4JyorVmM/edit?usp=sharing '
                isExternal
              >
                register here!
              </Link>
            </Thin>
          </HStack>

          <HStack pl='20' spacing={12} pb='6'>
            <SocialIcon network='email' />
            <Thin fontSize='1rem'>hacktheridge@gmail.com</Thin>
          </HStack>

          <HStack pl='20' spacing={12} pb='6'>
            <SocialIcon network='instagram'/>
            <Thin fontSize='1rem'>@hacktheridge</Thin>
          </HStack>

          <HStack pl='20' spacing={12} pb='6'>
            <SocialIcon network='discord'/>
            <Thin fontSize='1rem'>coming soon!</Thin>
          </HStack>

          <HStack pl='20' spacing={12} pb='6'>
            <SocialIcon network='rss'/>
            <Thin fontSize='1rem'>devpost: coming soon!</Thin>
          </HStack>

        </VStack>
      </div>
    </VStack>
  );
};

export default RegisterContact;
