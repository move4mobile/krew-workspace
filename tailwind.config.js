module.exports = {
  prefix: '',
  mode: 'jit',
  purge: {
    enabled: process.env.TAILWIND_MODE === 'build',
    content: [
      './apps/krew-ui-angular/**/*.{html,ts,css,scss,sass,less,styl}',
      './libs/krew-angular/**/*.{html,ts,css,scss,sass,less,styl}',
    ],
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
