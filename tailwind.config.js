/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      //rum: ['"Rum Raisin"', 'sans-serif'],
      Poppins: ['"Poppins"', 'sans-serif'],
      Montserrat: ['"Montserrat"', 'sans-serif'],
    },
    extend: {
      colors:{
        'background': "#FFFFFF",
        'myPurple': {
          100: "#CB9BFB",
        },
        'myGold': {
          100: '#F9FD91',
        },
        'myGray': {
          100: '#909090',
          200: '#F4F2F0',
        },
        'myRed': '#FF0F00',
        'myGreen': '#5FCCA0',
        'myGreen2': '#B7F3B1',
        'myGreen3': '#C7FD90',
        'myGreen4': '#12edba',
        'myBlack': "#0A0A0A",
      }
    },
  },
  plugins: [],
}

