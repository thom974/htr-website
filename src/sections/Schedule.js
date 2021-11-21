import { Container, Flex, Heading, VStack } from "@chakra-ui/layout";
import Thin from "./helpers";

import { useEffect } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

class Time {
  constructor(time, name) {
    this.time = time;
    this.name = name;
  }
  get jsx() {
    return (
      <Flex justify="space-between" w="75vw" p="7">
        <Heading>{this.time}</Heading>
        <p>/</p>
        <Thin>{this.name}</Thin>
      </Flex>
    );
  }
}

const Times = [
  new Time("9:00 - 9:30", "Opening Ceremony"),
  new Time("9:30 - 10:00", "Team Finder Session"),
  new Time("10:00 - 11:00", "Workshop #1 - Introduction to Python"),
];

const Schedule = (args) => {
  useEffect(() => {
    gsap.from('.scheduleHeading', {
      scrollTrigger: {
        trigger: '.scheduleHeading',
        start: 'bottom bottom'
      },
      x: -50,
      opacity: 0
    })

    for (let i=0; i < Times.length; i++) {
      gsap.from(`.schedule${i}`, {
        scrollTrigger: {
          trigger: `.schedule${i}`,
          start: 'bottom bottom'
        },
        x: -50 + -50 * i,
        opacity: 0,
        duration: 2
      })
    }
  })

  return (
    <Container textAlign="center" mt="24" id={args.id}>
      <div className='scheduleHeading'>
      <Heading fontSize="3rem" mb="5">
        Schedule
      </Heading>
      <Thin fontSize="1rem">event activities, hour by hour</Thin>
      </div>
      <VStack mt="8">
        {Times.map((time, index) => {
          return (
            <div className={`schedule${index}`}>
              {time.jsx}
            </div>
          )
        })}
      </VStack>
    </Container>
  );
};

export default Schedule;
