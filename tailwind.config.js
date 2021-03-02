const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          softviolet: 'hsl(273, 75%, 66%)',
          softblue: 'hsl(240, 73%, 65%)',
          darkblue: 'hsl(238, 29%, 16%)',
          darkgray_b_v: 'hsl(237, 12%, 33%)',
          darkgray_b: 'hsl(240, 6%, 50%)',
          darkgray_b_l: 'hsl(240, 5%, 91%)',
        },
        red: {
          softred: 'hsl(240, 5%, 91%)',
          red: '#F47B56',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
