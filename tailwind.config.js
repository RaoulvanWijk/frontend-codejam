/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inspiration: ['Inspiration', 'cursive'], // Voeg je font hier toe
      },
    },
    colors: { 
      ...colors,
      'bg': '#FFEBC6',
    },
  },
  plugins: [],
};
