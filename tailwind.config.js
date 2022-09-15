// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          blue: {
            700: 'hsl(var(--color-theme-blue-700) / <alpha-value>)',
            800: 'hsl(var(--color-theme-blue-800) / <alpha-value>)',
            900: 'hsl(var(--color-theme-blue-900) / <alpha-value>)',
          },
          gray: {
            50: 'hsl(var(--color-theme-gray-50) / <alpha-value>)',
            500: 'hsl(var(--color-theme-gray-500) / <alpha-value>)',
          },
        },
      },
      fontFamily: {
        sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
