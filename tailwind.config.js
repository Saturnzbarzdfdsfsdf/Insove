/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['*.{html,js}'],
	theme: {
		container: {
			padding: {
				DEFAULT: '15px',
			},
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '960px',
			xl: '1330px',
		},
		extend: {
			colors: {
				primary: '#242a2b',
				secondary: '#808080',
				accent: {
					DEFAULT: '#1cbccf',
					secondary: '#18abbc',
					tertiary: '#90c6cd',
				},
				gray: '#E8F0F1',
			},
			fontFamily: {
				primary: 'Poppins',
			},
			boxShadow: {
				custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
				custom2: '0px 2px 30px 0px rgba(8, 73, 81, 0.06)',
			},
			backgroundImage: {
				services: 'url(../../assets/img/services/bg.svg)',
				testimonials: 'url(../../assets/img/testimonials/bg.svg)',
				departments: 'url(../../assets/img/departments/bg.svg)',
				quiteLeft: 'url(../../assets/img/testimonials/quote-left/bg.svg)',
				quiteRight: 'url(../../assets/img/testimonials/quote-right/bg.svg)',
			},
		},
	},
	plugins: [],
}
