module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#961432',
      },
      backgroundImage: theme => ({
        'feex-header': "url('/images/header-bg.jpg')"
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
}
