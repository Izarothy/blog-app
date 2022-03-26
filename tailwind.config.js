module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0D0D0D',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      tinos: ['Tinos', 'serif'],
    },
  },
  plugins: [],
  darkMode: 'class',
};
