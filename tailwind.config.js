/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['"Inter"']
    },
    extend: {
      colors: {
        'pale-yellow-1': '#F9F9F9',
        'pale-yellow-2': '#FFFFFF',
        'purple-main': '#5555E5',
        'purple-sub': '#B2B2E3'
      },
      fontSize: {
        xs: '.5rem',
        sm: '.75rem',
        tiny: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem'
      },
      fontWeight: {
        'extra-light': 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        'extra-bold': 800,
        black: 900
      }
    }
  }
}
