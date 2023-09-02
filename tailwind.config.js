/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["nimbus-sans-extended", "neue-haas-grotesk-text", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
