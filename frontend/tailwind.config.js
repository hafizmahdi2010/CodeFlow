/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode using a CSS class
  theme: {
    extend: {
      colors: {
        background: '#121212',
        foreground: '#E0E0E0',
        primary: '#40A9F3', // Updated primary color
        secondary: '#03DAC6',
        accent: '#FF4081',
        error: '#CF6679',
        border: '#292929',
        highlight: '#282828',
        cardBg: '#1E1E1E',
        hover: '#333333',
        disabled: '#555555',
      },
    },
  },
  plugins: [],
}
