/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./**/*.tsx"],
  theme: {
    extend: {
      textColor: {
        'brand-green': '#4ADE5C',
      },
      backgroundColor: {
        green: '#4ADE5C',
      },
      colors: {
        lstnGreen: {
          50: '#F0FDF1',
          100: '#DCFCDF',
          200: '#BBF7C2',
          300: '#86EF93',
          400: '#4ADE5C',
          500: '#25DA3C',
          600: '#16A328',
          700: '#158023',
          800: '#166521',
          900: '#14531E',
        },
        lstnBlueGray: {
          50: '#ECEFF1',
          100: '#CFD8DC',
          200: '#B0BEC5',
          300: '#90A4AE',
          400: '#78909C',
          500: '#607D8B',
          600: '#546E7A',
          700: '#455A64',
          800: '#37474F',
          900: '#263238',
        },
        lstnGray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
    },
  },
  plugins: []
}