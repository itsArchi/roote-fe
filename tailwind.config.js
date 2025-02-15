/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        primary: '#227D54',
        secondary: '#2DA46F',
        textSecondary: '#02542D',
        textNeutral: '#434343',
      },
    },
  },
  plugins: [],
}