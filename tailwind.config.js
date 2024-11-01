/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite-react/tailwind'
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      screens: {
        kobus: "2012px",
        pc: "1740px",
        "big-screen": "2040px",
      
      colors: {
        primary: "#F2F8F3",
        secondary: "#528362",
        accent: "#295131",
      },
      fontFamily: {
        heading: ["Inter", "sans-serif"],
        body: ["Roboto", "sans-serif"],
        italiana: ["Italiana", "sans-serif"],
      },
      gridTemplateColumns: {
        layout: "repeat(auto-fit, minmax(250px, 300px))",
      },
    },
  },
  plugins: [],
},
  plugins: [
    flowbite.plugin(),
  ],
}
