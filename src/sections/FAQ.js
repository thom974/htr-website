import {
    SimpleGrid,
    GridItem,
    Text,
    Heading,
    HStack,
    VStack,
    Divider,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Flex
} from '@chakra-ui/react'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { OrthographicCamera } from 'three'
gsap.registerPlugin(ScrollTrigger)

const Question = args => {
    args = args.children

    return (
        <AccordionItem
        >
            <AccordionButton _focus={{
                border: 'none'
            }}>
                <Flex pt='5' pb='5'>
                    <Heading fontSize='2rem'>
                        {args.question}
                    </Heading>
                </Flex>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pt='5' pb='5'>
                <Text fontSize='1rem'>
                    {args.answer}
                </Text>
            </AccordionPanel>
        </AccordionItem>
    )
}

const FAQ = () => {
    useEffect(() => {
        gsap.from('.faqHeading', {
            scrollTrigger: {
                trigger: '.faqHeading',
                start: 'bottom bottom'
            },
            x: 50,
            opacity: 0, 
            duration: 1.5,
            ease: 'power4',
        })

        gsap.from('.faqInfo', {
            scrollTrigger: {
                trigger: '.faqHeading',
                start: 'bottom bottom'
            },
            x: -50,
            opacity: 0,
            duration: 1.5,
            ease: 'power4',
            delay: 0.3
        })
    })

    return (
        <SimpleGrid
            mt='24'
            w='full'
            columns='5'
            spacing={20}
        >
            <GridItem colSpan={2} alignSelf='center'>
                <VStack>
                    <Heading fontSize="10rem" mb="5" className='faqHeading'>
                        FAQ
                    </Heading>
                </VStack>
            </GridItem>
            <GridItem colSpan={3}>
                <div className='faqInfo'>
                    <Accordion
                        allowToggle
                        allowMultiple
                    >
                        <Question >
                            {
                                {
                                    question: 'I have a question about...',
                                    answer: 'This is a sample answer. Expect it to be relatively short, from one to two sentences.'
                                }
                            }
                        </Question>
                        <Question >
                            {
                                {
                                    question: 'I have a question about...',
                                    answer: 'This is a sample answer. Expect it to be relatively short, from one to two sentences.'
                                }
                            }
                        </Question>
                        <Question >
                            {
                                {
                                    question: 'I have a question about...',
                                    answer: 'This is a sample answer. Expect it to be relatively short, from one to two sentences.'
                                }
                            }
                        </Question>
                    </Accordion>
                </div>
            </GridItem>
        </SimpleGrid>
    )
}

export default FAQ