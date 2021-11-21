import {
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Container,
  Divider,
} from "@chakra-ui/layout";
import Thin from "./helpers";

import { useEffect } from "react";

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const StreamText = (args) => {
  args = args.children;
  const textAlign = args.right ? "right" : "left";
  const padding = args.right ? { pl: '16' } : { pr: '16' }

  return (
    <Container>
      <Heading fontSize="2rem" textAlign={textAlign}>
        {args.header}
      </Heading>
      <Thin {...padding} mt="12" textAlign={textAlign} lineHeight="2rem" fontSize="0.9rem">
        {args.content}
      </Thin>
    </Container>
  );
};

const Streams = (args) => {
  useEffect(() => {
    gsap.from('.streamsHeading', {
      scrollTrigger: {
        trigger: '.streamsHeading',
        start: 'bottom bottom',
      },
      y: -50,
      opacity: 0,
      duration: 1
    })

    gsap.from('.streamsTextOne', {
      scrollTrigger: {
        trigger: '.streamsHeading',
        start: 'bottom bottom'
      },
      y: -100,
      opacity: 0,
      duration: 2
    })

    gsap.from('.streamsTextTwo', {
      scrollTrigger: {
        trigger: '.streamsHeading',
        start: 'bottom bottom'
      },
      y: -100,
      opacity: 0,
      duration: 2
    })
  })

  return (
    <VStack id={args.id} w="full" align="center" h="auto" mt="24">
      <div className='streamsHeading'>
        <Heading fontSize="3rem" mb="6">
          Streams
        </Heading>
        <Thin fontSize="1rem">the competitions you can join</Thin>
      </div>
      <SimpleGrid columns="2" w="100%" pt="70">
        <div className='streamsTextOne'>
          <StreamText>
            {{
              header: "Coding Stream",
              content:
                "For the curious programmer to the passionate developer seeking to make change. While competing in the coding stream, you'll be heavily focused on tech based solutions to any problem or inconvenience you can think of. In the end, you'll present your project to a panel of judges for critique. A coding submission is required.",
              right: false,
            }}
          </StreamText>
        </div>
        <div className='streamsTextTwo'>
          <StreamText>
            {{
              header: "Business Stream",
              content:
                "For the entrepreneurially driven students willing to pursue their newfound\nideas and interests. If you have a business concept in mind and want to see how it might fare in the real world, you're in the right place. Pitch your idea with or without deliverables, no coding required.",
              right: true,
            }}
          </StreamText>
        </div>
      </SimpleGrid>
    </VStack>
  );
};

export default Streams;
