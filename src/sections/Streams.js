import {
	Heading,
	Text,
	VStack,
	SimpleGrid,
	Container,
	Divider,
} from '@chakra-ui/layout';
import Thin from './helpers';

const StreamText = args => {
	args = args.children;
	const textAlign = args.right ? 'right' : 'left';
	return (
		<Container>
			<Heading fontSize="2rem" textAlign={textAlign}>
				{args.header}
			</Heading>
			<Thin mt="12" textAlign={textAlign} lineHeight="2rem">
				{args.content}
			</Thin>
		</Container>
	);
};

const Streams = () => {
	return (
		<VStack w="full" align="center" h="auto" mt="24">
			<Heading fontSize="3rem">Streams</Heading>
			<Thin fontSize="1.25rem">the competitions you can join</Thin>
			<SimpleGrid columns="2" w="100%" pt="5">
				<StreamText>
					{{
						header: 'Coding Stream',
						content:
							"For the curious programmer to the passionate developer seeking to make change. While competing in the coding stream, you'll be heavily focused on tech based solutions to any problem or inconvenience you can think of. In the end, you'll present your project to a panel of judges for critique. A coding submission is required.",
						right: false,
					}}
				</StreamText>
				<StreamText>
					{{
						header: 'Business Stream',
						content:
							"For the entrepreneurially driven students will to pursue their newfound\nideas and interests. If you have a business concept in mind and want to see how it might fare in the real world, you're in the right place. Pitch your idea with or without deliverables, no coding required.",
						right: true,
					}}
				</StreamText>
			</SimpleGrid>
		</VStack>
	);
};

export default Streams;
