/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-blue': '#00C4CC',
      },
      height: {
        'header-height': '50px',
      },
    },
  },
}
