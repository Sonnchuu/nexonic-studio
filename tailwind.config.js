/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'alt-red': '#FF3B30',
        'alt-black': '#0B0B0C',
        'alt-dark': '#111112',
        'alt-white': '#FFFFFF',
        'alt-off-white': '#FAFAFA',
        'alt-gray': '#F4F4F4',
        'alt-neutral': '#1A1A1A',
        'alt-light-border': '#DADADA',
        'alt-soft-pink': '#FFE5E5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'neo': '6px 6px 0px 0px #000000',
        'neo-red': '6px 6px 0px 0px #FF3B30',
        'neo-sm': '4px 4px 0px 0px #000000',
        'neo-hover': '2px 2px 0px 0px #000000',
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
}
