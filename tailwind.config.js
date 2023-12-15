/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {
      colors:{
        lolbg: '#111111',
        lolGold: '#C28F2C',
        bgtitle: '#061c25',
        hoverbg: '#006680'
      }
    },
  },
  plugins: [
    require('flowbite/plugin') // add this line
  ],
}

