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


module.exports = {
  theme: {
    extend: {
      keyframes: {
        wiggleY: {
          '0%, 100%': { transform: 'rotateY(0deg)' },
          '25%': { transform: 'rotateY(5deg)' },
          '75%': { transform: 'rotateY(-5deg)' },
        },
      },
      animation: {
        wiggleY: 'wiggleY 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

