import {
	extendTheme,
	theme as base,
	withDefaultColorScheme,
	withDefaultVariant,
} from '@chakra-ui/react';

import { mode } from '@chakra-ui/theme-tools';

const inputSelectStyle = {
	variants: {
		filled: {
			field: {
				_focus: {
					borderColor: 'htr.500',
				},
			},
		},
	},
};

const brandRing = {
	_focus: {
		ring: 2,
		ringColor: 'htr.500',
	},
};

const theme = extendTheme(
	{
		fonts: {
			heading: `Major Mono Display, ${base.fonts?.heading}`,
			body: `Montserrat, ${base.fonts?.body}`,
			default: `Montserrat, ${base.fonts?.body}`,
		},
		colors: {
			htr: { 600: '#5078af', 500: '#699DE4', 400: '#A4C2F4' }, // 500 is normal, 400 is light, 600 is darker
		},
		components: {
			Input: { ...inputSelectStyle },
			Select: { ...inputSelectStyle },
			Checkbox: {
				baseStyle: {
					control: { ...brandRing },
				},
			},
			Button: {
				variants: {
					primary: props => ({
						...brandRing,
						backgroundColor: mode('htr.500', 'htr.500')(props),
						color: mode('white', 'gray.800')(props),
						_hover: {
							backgroundColor: mode('htr.400', 'htr.400')(props),
						},

						_active: {
							backgroundColor: mode('htr.600', 'htr.600')(props),
						},
					}),
				},
			},
		},
		textStyles: {
			thin: {
				fontSize: '1.5em',
				fontWeight: 'light',
			}
		}
	},
	withDefaultColorScheme({
		colorScheme: 'htr',
		components: ['Checkbox'],
	}),
	withDefaultVariant({
		variant: 'filled',
		components: ['Input', 'Select'],
	})
);

export default theme;
