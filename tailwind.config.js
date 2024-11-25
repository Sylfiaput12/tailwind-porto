/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',

    },
    extend: {
      colors:{
        primary : '#0ea5e9',
        secondary: '#9ca3af',
        dark: '#111827'
      }, 
      screens:{
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}

