/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app.vue'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
