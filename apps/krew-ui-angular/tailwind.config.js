module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['apps/krew-ui-angular/**/*.{html,ts}', 'libs/krew-angular/**/*.{html,ts}'],
  },
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'brand-01': ({ opacityValue }) => `rgba(var(--brand-01), ${opacityValue})`,
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
