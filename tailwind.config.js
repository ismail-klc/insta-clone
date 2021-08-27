module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '2xs': '.65rem',
       },
       colors: {
         'btnBlue': 'rgb(0, 149, 246)'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
