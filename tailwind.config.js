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
        title: "UBold, sans-serif",
        title2: "RHDSemi, sans-serif",
        primary: "RHDRegular, sans-serif",
      },
    },
  },
  plugins: [],
};
