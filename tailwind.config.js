/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1e3a8a', // Deep blue
        secondary: '#64748b', // Slate
        'accent-bg': '#e0f2fe', // Light blue background
        'accent-ui': '#bae6fd', // Buttons/Highlights
        surface: '#ffffff',
      },
      boxShadow: {
        'card': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', // Deeper shadow
      }
    },
  },
  plugins: [],
}
