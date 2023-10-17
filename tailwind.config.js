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

    screens: {
      'sm': '300px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('current', '&.active');
  }),
  
  ],
}