module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      sm: ['16px', '21px'],
      md: ['20px', '26px'],
      lg: ['24px', 'auto'],
      xl: ['32px', 'auto'],
      '2xl': ['40px', 'auto'],
      '3xl': ['56px', 'auto'],
      '4xl': ['64px', 'auto'],
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
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
