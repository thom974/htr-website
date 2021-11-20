/**
 * EXTERNAL IMPORTS
 */
import { Container, Flex, VStack } from '@chakra-ui/react';

/**
 * COMPONENTS
 */
import Navigation from '../src/sections/Navigation';
import Streams from '../src/sections/Streams';
import Title from '../src/sections/Title';

const Home = () => {
	return (
		<Container maxW="full" p="0" h="auto" alignItems="center">
			<Navigation />

			<Container maxW="75vw" p="0" mt="40" h="auto">
				<Title />
			</Container>

			<Container maxW="75vw" p="0" mt="40" h="auto">
				<Streams />
			</Container>
		</Container>
	);
};

export default Home;
