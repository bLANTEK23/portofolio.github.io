/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14B8A6',
        dark: '#0F172A',
        secondary: '#64748B'
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
