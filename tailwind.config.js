const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "*.html"
  ],
  theme: {
    colors: {
      ...colors,
      'light-gray': '#fafafa',

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

