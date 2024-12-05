/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    container: {
      center: true,
    },
    fontFamily:{
        "one":["Yuji Mai", 'serif'],
        "Two":["Parkinsans", 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}