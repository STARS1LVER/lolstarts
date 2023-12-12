/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {
      colors:{
        lolbg: '#042028',
        lolGold: '#C28F2C'
      }
    },
  },
  plugins: [
    require('flowbite/plugin') // add this line
  ],
}

