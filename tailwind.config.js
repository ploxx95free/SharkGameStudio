/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gradient1: {
          100: "#7B61FF",
        },
        gradient2: {
          100: "#AA82FF",
        },
      },
      fontFamily: {
        gotham: ["Gotham", "sans-serif"],
      },
    },
  },
  plugins: [],
};
