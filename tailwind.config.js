/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['Dancing Script', 'sans-serif'],
        playwrite: ['Playwrite GB S', 'sans-serif'],
      },
    },
  },
  plugins: [],
}