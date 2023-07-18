/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14183E",
        jellyBean: "#DF6951",
        orange: "#F1A501",
        lightGray: "#5E6282",
        
      },
      backgroundImage: {
        prey: "linear-gradient(90deg, #FFEEEE, #DDEFBB)",
        lilly:
          "linear-gradient(90deg, #E52D27, #B31217)",
        conic:
          "linear-gradient(90deg, #ECE9E6, #FFFFFF)",
        icony:
          "linear-gradient(90deg, #ECE7E6, #FFFFFF)",
        jelly:
          "linear-gradient(90deg, #1488CC, #2B32B2)",
        bell:
          "linear-gradient(90deg, #000C40, #607D8B)",
      },
    },
  },
  plugins: [],
}

