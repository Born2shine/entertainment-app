/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'isDark': '#10141f',
        'isDarkBlue': '#161d2f',
        'isGray': '#787b86',
        'isWhite-100': '#e4e8ec',
      }
    },
  },
  plugins: [],
}
