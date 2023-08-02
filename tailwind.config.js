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
        myGray: "#F5F5F4",
        myGreen: "#5FCCA0",
        myBlack: "#0A0A0A",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
