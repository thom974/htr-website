/**
 * EXTERNAL EXPORTS
 */
import {
    Flex,
    HStack,
    Heading
} from '@chakra-ui/react'

const Navigation = () => {
    return (
        <Flex
            w='full'
            mt={10}
            justifyContent='flex-end'
        >
            <HStack
                spacing={59}
                pr={59}
            >
                <Heading fontSize='xl'>About</Heading>
                <Heading fontSize='xl'>Streams</Heading>
                <Heading fontSize='xl'>Schedule</Heading>
                <Heading fontSize='xl'>Sponsors</Heading>
                <Heading fontSize='xl'>Team</Heading>
                <Heading fontSize='xl'>Register</Heading>
            </HStack>
        </Flex>
    )
}

export default Navigation