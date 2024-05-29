/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,jsx}"],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#00FF66',
    }),
    extend: {},
  },
  plugins: [],
}

