/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./index.html","./src/**/*.{html,js}", "./**/*.{html,js}"],
  theme: {
    extend: {
      container:{
        center:true
      },
      colors:{
        "primary":"#4E60FF",
        "secondary":"#EDEEF2",
        "tertiary":"#F8F9FF",
        "quaternary":"#697BFF"
      }
    },
    fontFamily:{
      'nunito': 'Nunito, sans-serif'
    }
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant('hocus', ['&:hover', '&:focus'])
    })
  ],
  darkMode: "class"
}

