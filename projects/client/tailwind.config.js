/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aese: {
          50: "#f2eeff",
          100: "#e6deff",
          200: "#daceff",
          300: "#cebeff",
          400: "#c2aeff",
          500: "#b69dff",
          600: "#aa8dff",
          700: "#9e7dff",
          800: "#926dff",
          900: "#865DFF",
          1000: "#7853e5",
          1100: "#6b4acc",
          1200: "#5d41b2",
        },
      },
    },
  },
  plugins: [],
};
