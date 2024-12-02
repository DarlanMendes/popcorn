/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily:{
        logo:'Luckiest Guy, ui-serif',
        title: 'Rubik Mono One, monospace'
      }
    },
  },
  plugins: [],
}