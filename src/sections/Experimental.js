import { Flex } from '@chakra-ui/react'
import { useEffect } from 'react'
import gsap from 'gsap'

const Experimental = () => {

    /**
     * HANDLE ANIMATIONS
     */
    useEffect(() => {
        const tl = new gsap.timeline()
        tl.fromTo(
            '#quote', 
            { width: '0' },
            { width: '235', ease: 'steps(37)', duration: 8 }
        )
    })

    return (
        <Flex
            w='full'
            h='50vh'
            p={0}
            spacing={10}
            alignItems='stretch'
            flexDirection=''
        >
            <div id='quote' text-align='center'>
                This is a div with some text in it. 
            </div>
        </Flex>
    )
}

export default Experimental