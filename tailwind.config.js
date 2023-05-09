/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: { 
      barlow: ['Barlow', ...defaultTheme.fontFamily.sans],
      fraunces: ['Fraunces', ...defaultTheme.fontFamily.serif],
      ...defaultTheme.fontFamily
    }
  },
  plugins: [],
}

