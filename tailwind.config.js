/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      animation: {
        typing: 'typing 4s steps(40, end) infinite',
      },
      keyframes: {
        typing: {
          '0%, 100%': { width: '0' },
          '50%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
};
