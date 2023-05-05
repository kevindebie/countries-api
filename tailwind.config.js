const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      'index.html',
      'country.html',
      './src/*.html',
      './src/js/*.js'

  ],
  theme: {
    colors: {
      ...colors,
      'light-gray': '#fafafa',
      'dark-gray': '#858585',
    },
    extend: {
      fontFamily: {
        'sans': ['Nunito Sans', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
      require('@tailwindcss/typography'),
  ],
}

