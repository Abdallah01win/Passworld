/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sakemoru': ['Sake Moru', 'url("~/assets/fonts/SakeMoru-Regular.otf")'],
      rum: ['"Rum Raisin"', 'sans-serif'],
      plexMono: ['"IBM Plex Mono"', 'sans-serif'],
    },
    extend: {
      colors:{
        'background': "#F9F5F2",
        'myPurple': {
          100: "#CCB3F5",
          200: "#632DBC",
        },
        'myGold': {
          100: '#FFEBCF',
          200: '#F89828',
          300: '#FAC82F',
        },
        'myRed': '#FF0F00',
        'myGreen': '#01DC2C',
        'myBlack': "#1F1F1F",
      }
    },
  },
  plugins: [],
}

