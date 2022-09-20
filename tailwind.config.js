/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#264653',
          secondary: '#E76F51',
          accent: '#2A9D8F',
          neutral: '#151628',
          'base-100': '#ffffff',
          info: '#61BACC',
          success: '#2A9D8F',
          warning: '#E9C46A',
          error: '#FB3243',
        },
      },
    ],
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat Alternates', 'sans-serif'],
        OpenSans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
