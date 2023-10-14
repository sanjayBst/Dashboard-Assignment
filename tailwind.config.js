const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'tilt': ['Tilt Neon']
    },
    extend: {
      colors:{
        'sidebar': '#040440',
        'faded': '#2d2d69',
       'bars': '#5a32ea',
       'fadedBars': '#f2efff'
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('current', '&.active');
  }),
  
  ],
}