/**
 * EXTERNAL EXPORTS
 */
import {
    HStack,
    Text,
    Box
} from '@chakra-ui/react'

import { useEffect } from 'react'

import gsap from 'gsap'
import { TextPlugin } from 'gsap/dist/TextPlugin'
gsap.registerPlugin(TextPlugin)

const Description = () => {
    useEffect(() => {
        animateText(1)
    })
    
    return (
        <HStack
            alignItems='center'
            justifyContent='center'
            mt='35'
            w='full'
        >
            <Box mt='3'> 
                <p style={{fontSize: '1.5em'}} id='desc'></p>
            </Box>
        </HStack>
    )
}

const animateText = (phrase) => {
    let text = ''
    phrase = phrase > 4 ? 1 : phrase
    switch(phrase) {
        case 1:
            text = 'design.'
            break
        case 2:
            text = 'collaborate.'
            break
        case 3:
            text = 'innovate.'
            break
        case 4:
            text = 'develop.'
            break
    }   

    const tl = gsap.timeline({
        repeat: 1,
        repeatDelay: 2,
        yoyo: true, 
        onComplete: () => {
            animateText(phrase + 1)
        }
    })

    tl.to('#desc', {
        text: {
            value: text
        },
        duration: 0.5,
        ease: 'none',
    })
}

export default Description