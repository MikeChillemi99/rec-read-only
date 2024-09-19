/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'anti-flash-white': '#F1F1F1',
        'untited-nations-blue': '#6491DE',
        'dark-cerulean': '#073D7F',
      },
    }
  },
  plugins: [],
}