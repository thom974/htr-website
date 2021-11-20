import { Container, Flex, VStack } from '@chakra-ui/react';

import Details from '../src/sections/Details';
import Cart from '../src/sections/Cart';
import Experimental from '../src/sections/Experimental';

const Home = () => {
	return (
		<Container maxW="container.xl" p={0} h="auto">
			<Flex
				h={{ base: 'auto', md: '100vh' }}
				py={[0, 10, 20]}
				direction={{ base: 'column-reverse', md: 'row' }}
			>
				<Details />
				<Cart />
			</Flex>
			<Experimental />
		</Container>
	);
};

export default Home;
