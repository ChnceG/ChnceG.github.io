/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'bold-red': '#EF233C',
        'text-offwhite': '#EDF2F4',
        'background-blue': '#2B2D42',
      },
      fontFamily: {
        'impact': ['Impact', 'sans-serif'],
      },

    },
  },
  plugins: [],
}

