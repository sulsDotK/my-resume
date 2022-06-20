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
      sans: ['"Roboto Slab"']
    },
    extend: {
      colors: {
        'pale-yellow-1': '#F1D1B5',
        'pale-yellow-2': '#FFFFFF'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
