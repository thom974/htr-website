/**
 * EXTERNAL IMPORTS
 */
import { Container } from '@chakra-ui/react';

/**
 * COMPONENTS
 */
import Streams from '../src/sections/Streams';
import Navigation from '../src/sections/Navigation';
import Title from '../src/sections/Title';
import Description from '../src/sections/Description';
import Details from '../src/sections/Details';

const Home = () => {
	return (
		<Container maxW="full" p="0" h="auto" alignItems="center">
			<Navigation />

			<Container maxW="75vw" p="0" mt="40" h="auto">
				<Title />
				<Description />
				<Details />
				<Streams />
			</Container>
		</Container>
	);
};

export default Home;
