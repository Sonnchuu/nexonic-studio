/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'min-black': '#111111',
        'min-gray': '#444444',
        'min-light-gray': '#F5F5F5',
        'min-white': '#FFFFFF',
        'min-accent': '#000000', // Monochrome accent
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0em',
        wide: '0.02em',
        wider: '0.04em',
        widest: '0.08em',
      },
    },
  },
  plugins: [],
}
