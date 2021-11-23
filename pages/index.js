/**
 * EXTERNAL IMPORTS
 */
import { Container, Divider } from '@chakra-ui/react';

/**
 * COMPONENTS
 */
import Navigation from '../src/sections/Navigation';
import Title from '../src/sections/Title';
import Description from '../src/sections/Description';
import Details from '../src/sections/Details';
import Canvas from '../src/sections/Canvas';
import About from '../src/sections/About';
import Streams from '../src/sections/Streams';
import Schedule from '../src/sections/Schedule';
import Sponsors from '../src/sections/Sponsors';
import Team from '../src/sections/Team';
import RegisterContact from '../src/sections/RegisterContact';
import FAQ from '../src/sections/FAQ';
import Footer from '../src/sections/Footer';
const Divide = () => {
	return <Divider mt={{sm: '50', lg: "100"}}></Divider>;
};

const Home = () => {
	return (
		<Container maxW="full" p="0" h="auto" alignItems="center">
			<Navigation />

			<Container maxW="75vw" p="0" mt={{sm:"0", md:"16"}} h="auto">
				<Title />
				<Description />
				<Details />
				<Canvas />
				<Divide />
				<About id="about" />
				<Divide />
				<Streams id="streams" />
				<Divide />
				<Schedule id="schedule" />
				<Divide />
				<FAQ />
				<Divide />
				<Sponsors id="sponsors" />
				<Divide />
				<Team id="team" />
				<Divide />
				<RegisterContact id="register" />
				<Divide />
				<Footer />
			</Container>
		</Container>
	);
};

export default Home;
