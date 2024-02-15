/** @type {import('tailwindcss').Config} */
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
      },
      height: {
        'header-height': '50px',
        'process-height': '110px'
      },
      width: {
        'table-width': '250px',
        'process-width': '850px',
      },
      margin: {
        'header-margin': '22px',
      },
    },
  },
}
