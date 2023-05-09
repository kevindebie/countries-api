const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
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
            'dark-bg': '#202c37',
            'dark-blue': '#2b3945',
            'darkest-blue': '#111517',
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

