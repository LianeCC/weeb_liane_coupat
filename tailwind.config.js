/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: '#0f1729',    // fond bleu foncé
        secondary: '#9333EA',  // violet vif
        tertiary: '#C084FC',   // violet clair
        rose: '#be185d',       // rose
        white: '#ffffff',      // blanc 
      },
    },
  },
  plugins: [],
}



