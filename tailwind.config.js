/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

export default {
	content: {
		files: [
			"./index.html",
			"./src/**/*.{js,ts,jsx,tsx}",
			"./src/components/**/*.{js,ts,jsx,tsx}"
		],
  	extract
  	},
  	theme: {
		screens,
		fontSize,
		extend: {},
		fontFamily: {
			'impact': ['Impact', 'sans-serif'],
			'inter': ['Inter', 'sans-serif']
		}
  	},
	plugins: [
		fluid
	],
}