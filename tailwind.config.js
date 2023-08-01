/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ['"Poppins"', "sans-serif"],
      Montserrat: ['"Montserrat"', "sans-serif"],
    },
    extend: {
      screens: {
        xs: "420px",
      },
      colors: {
        background: "#FFFFFF",
        myRed: "#FF0F00",
        myPurple: {
          100: "#CB9BFB",
        },
        myGold: {
          100: "#F9FD91",
        },
        myGray: {
          100: "#909090",
          200: "#F4F2F0",
          300: "#F5F5F4",
        },
        myGreen: "#5FCCA0",
        myGreen2: "#B7F3B1",
        myGreen3: "#C7FD90",
        myGreen4: "#12edba",
        myBlack: "#0A0A0A",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
