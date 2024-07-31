/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        futura: ['Futura', 'Verdana', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

