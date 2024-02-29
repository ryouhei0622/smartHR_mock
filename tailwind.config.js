/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-blue': '#00C4CC',
        'base-gray': '#F8F7F6',
        'table-header': '#F2F1F0',
        'table-row': '#FFFFFF',
        'company-gray': '#ABA7A1',
        'gray-blue': '#48aeb3',
      },
      height: {
        'header-height': '50px',
        'process-height': '110px',
      },
      width: {
        'table-width': '250px',
        'process-width': '850px',
      },
      margin: {
        'header-margin': '20px',
      },
      boxShadow: {
        'btn-shadow': 'rgba(0, 0, 0, 0.1) 0 -2px 2px inset',
      },
    },
  },
  plugins: [
    plugin(function({ addComponents, theme }) {
      const newComponents = {
        '.base-focus': {
          '&:focus': {
            outline: 'none',
            boxShadow: `0 0 0 2px ${theme('colors.gray.400')}80`, 
            opacity: '0.5', 
          },
        },
      };
      addComponents(newComponents);
    }),
  ],
}
