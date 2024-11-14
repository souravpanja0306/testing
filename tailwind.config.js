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
      animation: {
        blink: 'blink 2s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { backgroundColor: '#141d31' },
          '50%': { backgroundColor: '#000000' },
        },
      },
    },
  },
  plugins: [],
}