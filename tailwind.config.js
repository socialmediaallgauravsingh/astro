/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mystic: {
          50: '#f6f4ff',
          100: '#edebfe',
          200: '#dcd7fe',
          300: '#cabffd',
          400: '#aa99fc',
          500: '#906cf9',
          600: '#7c4ef4',
          700: '#6c3ce0',
          800: '#5a32bc',
          900: '#4c2d99',
          950: '#2e1b65',
        },
      },
      backgroundImage: {
        'stars': "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=80')",
      },
    },
  },
  plugins: [],
};