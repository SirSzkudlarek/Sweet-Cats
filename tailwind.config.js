/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./home-page.html"
  ],
  theme: {
    extend: {
      height: {
        '448px': '28rem',
      },
      colors: {
        'blue-gradient': '#1d457d',
        'purple-gradient': '#8655b1',
        'pink-gradient': '#c62dfd',
        'pink': '#ffc0cb',
        'pinkBorder': '#F09999'
      },
      backgroundImage: {
        'homepage-pattern': "url('../graphics/homepage/background-pattern.jpg')",
      },
      dropShadow: {
        'font-shadow': '1px 1px 1px #616161',
      },
      boxShadow: {
        'pink-s': '0px 0px 105px 26px rgba(255,192,203,0.9)',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
      },
    },
    fontFamily: {
      'Concert-One': ['Concert One', 'cursive'],
    },
  },
  plugins: [],
}
