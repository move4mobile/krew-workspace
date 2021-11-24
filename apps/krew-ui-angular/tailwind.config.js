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
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'brand-01': 'var(--brand-01)',
        'brand-01-darker': 'var(--brand-01-darker)',
        'brand-01-lighter': 'var(--brand-01-lighter)',

        'brand-01-placeholder': 'var(--brand-01-placeholder)',

        'brand-02:': 'var(--brand-02)',

        white: 'var(--white)',

        'gray-light:': 'var(--gray-light)',
        'gray-lightest:': 'var(--gray-lightest)',

        'gray-block-bg': 'var(--gray-block-bg)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
