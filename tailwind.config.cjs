/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        hand: ['"Patrick Hand"', 'cursive'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        czech: {
          blue: '#164e87',
          red: '#e53e3e',
          beige: '#fcf8e3',
          bg: '#f3f4f6',
        },
      },
    },
  },
  plugins: [],
};
