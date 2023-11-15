/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'hunter-green': '#386641',
        'maio-verde': '#6A994E',
        'android-verde': '#A7C957',
        'casca-ovo': '#F2E8CF',
        'castanha-profunda': '#BC4749',
        'verde-leve': '#92E3A9'
      },
      fontFamily: {
        poppins: ['poppins', 'sans-serif'],
        montserrat: ['montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}