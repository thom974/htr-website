import { Container, Flex, Heading, VStack } from '@chakra-ui/layout';
import Thin from './helpers';

class Time {
	constructor(time, name) {
		this.time = time;
		this.name = name;
	}
	get jsx() {
		return (
			<Flex justify="space-between" w="75vw" p="7">
				<Heading>{this.time}</Heading>
				<p>/</p>
				<Thin>{this.name}</Thin>
			</Flex>
		);
	}
}

const Times = [
	new Time('9:00 - 9:30', 'Opening Ceremony'),
	new Time('9:30 - 10:00', 'Team Finder Session'),
	new Time('10:00 - 11:00', 'Workshop #1 - Introduction to Python'),
];

const Schedule = () => {
	return (
		<Container textAlign="center" mt="16">
			<Heading fontSize="3rem">Schedule</Heading>
			<Thin fontSize="1.25rem">event activities, hour by hour</Thin>
			<VStack mt="8">
				{Times.map(time => {
					return time.jsx;
				})}
			</VStack>
		</Container>
	);
};

export default Schedule;
