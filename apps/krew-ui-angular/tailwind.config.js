const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');

const withOpacity =
  varName =>
  ({ opacityValue }) =>
    `rgba(var(${varName}), ${opacityValue || 1})`;

module.exports = {
  content: [join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'), ...createGlobPatternsForDependencies(__dirname)],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-01': withOpacity('--brand-01'),
        'brand-01-darker': 'var(--brand-01-darker)',
        'brand-01-lighter': 'var(--brand-01-lighter)',

        'brand-01-placeholder': 'var(--brand-01-placeholder)',

        'brand-02:': 'var(--brand-02)',

        'gray-light:': 'var(--gray-light)',
        'gray-lightest:': 'var(--gray-lightest)',

        'gray-block-bg': 'var(--gray-block-bg)',
      },
      fontFamily: {
        display: ['SF Pro Display', ...defaultTheme.fontFamily.sans],
        body: ['SF Pro Text', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
