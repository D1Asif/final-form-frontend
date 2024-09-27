import { keepTheme } from 'keep-react/keepTheme';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/src/assets/hero-image.jpg')",
      },
    },
  },
  plugins: [],
}

export default keepTheme(config);