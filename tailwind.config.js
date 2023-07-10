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
      }
    },
  },
  plugins: [],
}

