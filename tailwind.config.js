/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        dark: "#2B2B2B",
        primary: "#8D5CF6",
        grayLight: "#E6E8EC",
        grayText: "#777E90",
      },
    },
  },
  plugins: [],
};
