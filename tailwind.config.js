module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          500: '#707070',
          700: '#424242',
          850: '#1d1d1d',
          900: '#141416',
          100: '#f3f3f3'
        },
        teal: {
          400: '#28af91'
        },
        stone: {
          900: '#1a1d22'
        }
      },
      spacing: {
        'available': '-webkit-fill-available',
      }
    },
  },
  plugins: [],
}
