const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}',  flowbite.content(),],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FBFBFB',
          DEFAULT: '#FFC530',
          dark: '#D9D9D9',
          xtra: '#F2690C',
          xtra2: '#8E6B6B',

        },
        secondary: {
          light: '#BF94FF',
          DEFAULT: '#F6F5F0',
          dark: '#131313',
          xtra:'#4B044B',
          xtra2:'#999999'
        },
        danger: {
          light: '#fc8181',
          DEFAULT: '#f56565',
          dark: '#e53e3e',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}

