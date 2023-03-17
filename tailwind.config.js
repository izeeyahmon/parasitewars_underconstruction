/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  	"./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        'marqueeRight': 'marqueeRight 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      fontFamily: {
	    poppins: ['Poppins', 'sans-serif'],
	    campton: ['Neue Campton Test', 'Poppins', 'sans-serif'],
	  },
	  colors: {
	  	white: '#fff',
	    gray: {
        300: '#D4D0DF',
        400: '#E5E5F3',
      },
	    purple: {
	    	300: '#281952',
	    	400: '#1A0F38',
	    	700: '#0E0720'
	    },
	    blue: {
	    	400: '#404EED',
	    }
	  },
    },
  },
  plugins: [],
}
