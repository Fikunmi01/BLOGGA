/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Tilt Prism', 'cursive'],
        'serif': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
