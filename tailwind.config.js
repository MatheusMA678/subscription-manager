/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#18181C",
        primaryBlue: "#026ACB",
        primaryGreen: "#05BB62",
      },
      fontFamily: {
        UBold: "UBold, sans-serif",
        USemi: "USemi, sans-serif",
        URegular: "URegular, sans-serif",
        RHDSemi: "RHDSemi, sans-serif",
        RHDRegular: "RHDRegular, sans-serif",
      },
    },
  },
  plugins: [],
};
