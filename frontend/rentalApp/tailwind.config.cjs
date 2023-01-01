/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
    colors: {
      transparent: 'transparent',
      mainBlue : '#3563e9',
      white : '#ffffff',
      mainBlack : '#1A202C',
      lighterBlack : '#90A3BF',
      mainRed : '#ED3F3F',
      lighterDark2: '#596780',
    },
  },
  plugins: [],
}
