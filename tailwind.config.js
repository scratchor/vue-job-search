/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      "bgray-1": "#dadce0",
      "bgray-2": "#f8f9fa",
      "bgray-3": "#80868b",
      "bb-1": "#1967d2",
      "bb-2": "#4285f4",
      "bgreen-1": "#137333",
      white: "#ffffff",
    },
    boxShadow: {
      blue: "0 0 3px 3px #4285f4",
      gray: "0 1px 3px 0 rgba(60, 64, 67, .3)",
    },
  },
  variants: {
    extend: {
      margin: ["first"],
    },
  },
  plugins: [],
};
