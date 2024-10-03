/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scan React components for Tailwind classes
    './public/index.html',
  ],
  theme: {
    colors: {
      primary: '#7B4C82',
      white: 'white',
      black: '#575B6A',
      pink: '#D69CAE'
    },
    extend: {
      fontFamily: {
        main: ['"EB Garamond"', 'serif'], // Adding EB Garamond
        second: ['"Urbanist"', 'serif']
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInDown: 'fadeInDown 0.5s ease-out forwards',
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}

