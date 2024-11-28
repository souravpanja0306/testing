/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'custom-bounce': 'custom-bounce 2s infinite',
        'blink': 'blink 2s linear infinite',
        'infinity-round': 'infinity-round 15s linear infinite',
        'text-from-left': 'text-from-left 1s ease-out',
        'text-from-right': 'text-from-right 1s ease-out',
      },
      keyframes: {
        'custom-bounce': {
          '0%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'ease-in-out' },
          '50%': { transform: 'translateY(-50px)', animationTimingFunction: 'ease-in' },
        },
        'blink': {
          '0%, 100%': { backgroundColor: '#141d31' },
          '50%': { backgroundColor: '#000000' },
        },
        'infinity-round': {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'text-from-left': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'text-from-right': {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      fontFamily: {
        dancing: ['Dancing Script', 'sans-serif'],
        playwrite: ['Playwrite GB S', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
