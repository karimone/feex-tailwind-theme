module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#961432',
        'secondary': '#1F7A8C',
        'tertiary': '#B9D4EF',
      },
      backgroundImage: theme => ({
        'feex-header': "url('/images/header-bg.jpg')"
    }),
    fontFamily: {
      'montserrat': ['Montserrat'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
}
