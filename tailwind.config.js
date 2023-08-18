/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      sans: ["Montserrat", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      screens: {
        "3xl": "1800px",
      }
    },
  },
  plugins: [],
};

