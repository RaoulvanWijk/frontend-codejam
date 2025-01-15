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
        irishGrover: ['Irish Grover', 'cursive'], 
        concertOne: ['Concert One', 'cursive'],
      },
    },
    colors: { 
      ...colors,
      'bg': '#FFEBC6',
    },
  },
  plugins: [],
};
