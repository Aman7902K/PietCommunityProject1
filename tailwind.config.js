/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Adjust file paths if needed
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#010409', // Custom color
      },
    },
  },
  plugins: [],
};
