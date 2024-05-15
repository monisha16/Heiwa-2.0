/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      base: '#34558b',
    },
    extend: {
      fontFamily: {
        nunito: ['monospace', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
