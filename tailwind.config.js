/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'custom-bounce': 'custom-bounce 2s infinite',
      },
      keyframes: {
        'custom-bounce': {
          '0%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'ease-in-out' },
          '50%': { transform: 'translateY(-50px)', animationTimingFunction: 'ease-in' },
        },
      },
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