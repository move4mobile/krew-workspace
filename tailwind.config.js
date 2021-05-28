function guessProductionMode() {
  const argv = process.argv.join(' ').toLowerCase();
  const isProdEnv = process.env.NODE_ENV === 'production';
  return isProdEnv || [' build', ':build', 'ng b', '--prod'].some(command => argv.includes(command));
}

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
  prefix: '',
  mode: 'jit',
  purge: {
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
