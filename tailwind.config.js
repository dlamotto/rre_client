/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx}',
],
  theme: {
   
    extend: {
      colors:
      {
        'background-color': '#071e22',
        'header-color': '#1d7874',
        'button-color': '#679289'
      }
    },
  },
  plugins: [],
}
