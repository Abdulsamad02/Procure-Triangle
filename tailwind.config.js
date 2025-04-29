/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f3f8',
          100: '#cce7f1',
          200: '#99cfe3',
          300: '#66b7d5',
          400: '#339fc7',
          500: '#0087b9',
          600: '#006c94',
          700: '#00516f',
          800: '#00364a',
          900: '#001b25',
        },
        secondary: {
          50: '#e6f7ed',
          100: '#ccf0db',
          200: '#99e0b7',
          300: '#66d193',
          400: '#33c16f',
          500: '#00b24b',
          600: '#008e3c',
          700: '#006b2d',
          800: '#00471e',
          900: '#00240f',
        },
      },
      animation: {
        'wave': 'wave 10s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-in-out',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

