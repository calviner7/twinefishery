/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        custom: ['Prompt', 'sans-serif'], // Register the Google Font
      },
      animation: {
        glitch: "glitch 0.7s steps(5, end) forwards",
        fadeOut: 'fadeOut 0.5s ease-out forwards',
      },
      keyframes: {
        glitch: {
          "0%": { clipPath: "inset(20% 0 60% 0)" },
          "20%": { clipPath: "inset(10% 0 50% 0)" },
          "40%": { clipPath: "inset(30% 0 40% 0)" },
          "60%": { clipPath: "inset(20% 0 30% 0)" },
          "80%": { clipPath: "inset(40% 0 20% 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}

