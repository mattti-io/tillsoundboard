/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Bricolage Grotesque', 'sans-serif'],
      },
      backgroundImage: {
        'tillwest': "url('/assets/tillwest.JPG')"
      }
    },
  },
  plugins: [],
}