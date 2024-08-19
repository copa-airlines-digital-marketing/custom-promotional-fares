/** @type {import('tailwindcss').Config} */
export default {
	presets: [require('cmds-tailwind-styles')],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				'xs': {'max': '599px'},    // Up to 566px (max-width)
				'xs-567': '567px',		   // 567px and up (min-width)
				'sm': '600px',             // 600px and up (min-width)
				'md': '960px',             // 960px and up (min-width)
				'md-1248': '1248px',             // 960px and up (min-width)
				'lg': '1367px',    
				// => @media (min-width: 992px) { ... }
			  },
			},
		},	
};

