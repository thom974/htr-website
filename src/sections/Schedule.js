import { Container, Flex, Heading, VStack, Text } from "@chakra-ui/layout";
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
      <Flex justify="space-between" w={{sm: '90vw', lg: "75vw"}} p="7">
        <Heading fontSize={{sm: 'md', lg: '2xl'}}>{this.time}</Heading>
        <Text alignSelf='center' ml='2' mr='2'>/</Text>
        <Thin fontSize={{sm: 'sm', lg: '2xl'}}>{this.name}</Thin>
      </Flex>
    );
  }
}

const Times = [
  new Time("9:00 - 9:30", "Opening Ceremony"),
  new Time("9:30 - 10:00", "Team Finder Session"),
  new Time("10:00 - 11:00", "Workshop #1 - Introduction to Python"),
  new Time("11:00 - 12:00", "Workshop #2 - TBD"),
  new Time("12:00 - 1:00", "Lunch Break"),
  new Time("1:00 - 2:00", "Workshop #3 - TBD"),
  new Time("2:00 - 3:00", "Fun Event"),
  new Time("3:00 - 4:00", "Workshop #4 - Intro to Web Development With Flask"),
  new Time("4:00 - 5:00", "Workshop #5 - Intro to Game Dev with pygame"),
  new Time("5:00 - 7:45", "No activities planned - wrap up coding!"),
  new Time("7:45", "Project Deadline"),
  new Time("7:45 - 8:45", "Judging"),
  new Time("8:45 - 9:15", "Judge Deliberation"),
  new Time("9:15 - 9:30", "Results & Closing Ceremony"),
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
    <Container textAlign="center" mt={{sm: '50', lg: "24"}}id={args.id}>
      <div className='scheduleHeading'>
      <Heading fontSize={{ sm:'1.25rem',lg: "3rem"}} mb="5">
        Schedule
      </Heading>
      <Thin fontSize={{ sm:'0.75rem', lg: "1rem"}}>event activities, hour by hour</Thin>
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
