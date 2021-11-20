import '@fontsource/major-mono-display';

import '../styles/globals.css';

import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../src/theme/index';
import '../src/theme/styles.css';

const MyApp = ({ Component, pageProps }) => {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
};

export default MyApp;
