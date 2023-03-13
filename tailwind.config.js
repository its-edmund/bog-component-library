module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        midnight: {
          200: '#5A50B3',
          300: '#473F91',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
