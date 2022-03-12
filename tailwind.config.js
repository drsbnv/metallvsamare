const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['_site/**/*.*'],
	darkMode: false, // or 'media' or 'class'
	theme: { 
		container: {
			center: true,
			padding: '1rem',
		},
		screens: {
			'sm': '640px',
			// => @media (min-width: 640px) { ... }

			'md': '768px',
			// => @media (min-width: 768px) { ... }

			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1200px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		colors: {
			accent: 'tomato',
			deep: '#222222',
			transparent: 'transparent',
			current: 'currentColor',
			blue: colors.blue,
			black: colors.black,
			white: colors.white,
			gray: colors.trueGray,
			indigo: colors.indigo,
			red: colors.rose,
			yellow: colors.amber,
		},
		extend: {
			// fontFamily: {
			// 	sans: ['Hyundai', ...defaultTheme.fontFamily.sans],
			// },
		},
	},
	variants: {
		extend: {},
	},	
	plugins: [],
}
