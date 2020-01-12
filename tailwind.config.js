module.exports = {
  theme: {
    extend: {
      width: {
        '48': '48%',
        '4vw': '4vw',
        '44vw': '44vw',
        '100vw': '100vw'
      },
      padding: {
        '4vw': '4vw'
      }
    },
    screens: {
      'sm': {'min': '0px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px'},
    },
    zIndex: {
      '-1': '-1',
    }
  },
  variants: {
    width: ['odd', 'even', 'responsive']
  },
  plugins: [require('tailwindcss'), require('postcss-preset-env')],
}
