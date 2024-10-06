/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		animation: {
		  'scroll': 'scroll 40s linear infinite',
		  'fade-in': 'fadeIn 0.5s ease-out',
		  'slide-up': 'slideUp 0.5s ease-out',
		  'pulse-glow': 'pulseGlow 2s infinite',
		},
		keyframes: {
		  'scroll': {
			'0%': { transform: 'translateX(0)' },
			'100%': { transform: 'translateX(calc(-250px * 6))' }
		  },
		  'fadeIn': {
			'0%': { opacity: '0' },
			'100%': { opacity: '1' }
		  },
		  'slideUp': {
			'0%': { transform: 'translateY(50px)', opacity: '0' },
			'100%': { transform: 'translateY(0)', opacity: '1' }
		  },
		  'pulseGlow': {
			'0%, 100%': { boxShadow: '0 0 5px 0 rgba(66, 153, 225, 0.5)' },
			'50%': { boxShadow: '0 0 20px 5px rgba(66, 153, 225, 0.7)' }
		  }
		},
	  },
	},
	plugins: [],
  }