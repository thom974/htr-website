/**
 * EXTERNAL IMPORTS
 */
import { Container, Flex, VStack } from '@chakra-ui/react'

/**
 * COMPONENTS 
 */
import Navigation from '../src/sections/Navigation'
import Title from '../src/sections/Title'
import Description from '../src/sections/Description'


const Home = () => {
  return (
    <Container maxW='full' p='0' h='auto' alignItems='center'>
      <Navigation />

      <Container maxW='75vw' p='0' mt='40' h='auto'>
        <Title />
        <Description />
      </Container>
    </Container>
  )
}

export default Home