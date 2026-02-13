/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'party-yellow': '#FAEE05', // Ein kräftiges Party-Gelb
      },
    },
  },
  plugins: [],
}