/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'hslVeryDarkBlue': 'hsl(238, 29%, 16%)',
          'hslSoftRed': 'hsl(14, 88%, 65%)',
          'hslSoftViolet': 'hsl(273, 75%, 66%)',
          'hslSoftBlue': 'hsl(240, 73%, 65%)',
          'hslVeryDarkGrayishBlue': 'hsl(237, 12%, 33%)',
          'hslDarkGrayishBlue': 'hsl(240, 6%, 50%)',
          'hslLightGrayishBlue': 'hsl(240, 5%, 91%)'
        }
      },
    },
    plugins: [],
  }