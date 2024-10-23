/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F2F8F3',
        'secondary': '#528362',
        'accent': '#295131'

      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {
        'layout': 'repeat(auto-fit, minmax(250px, 300px))'
      },
    },
  },
  plugins: [],
}
