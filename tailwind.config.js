/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'scale(1.2) rotate(7deg)'
          },
          '50%': {
            transform: 'scale(0.8) rotate(-7deg)'
          },
        }
      }
    },
  },
  variants: {},
  plugins: [],
};
