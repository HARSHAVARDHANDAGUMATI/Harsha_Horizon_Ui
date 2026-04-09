/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f1edff',
          100: '#e4dcff',
          200: '#c9baff',
          300: '#a58dff',
          400: '#7f63ff',
          500: '#4318ff',
          600: '#3311db',
          700: '#2610a8',
        },
        navy: {
          50: '#d0dcfb',
          100: '#aac0fe',
          200: '#a3b9f8',
          300: '#728fe6',
          400: '#3652ba',
          500: '#1b3bbb',
          600: '#24388a',
          700: '#1b2559',
          800: '#111c44',
          900: '#0b1437',
        },
      },
      boxShadow: {
        horizon: '0 20px 45px rgba(112, 144, 176, 0.14)',
        soft: '0 12px 28px rgba(112, 144, 176, 0.12)',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      backgroundImage: {
        'brand-radial':
          'radial-gradient(circle at top left, rgba(67,24,255,0.22), transparent 55%)',
      },
    },
  },
  plugins: [],
}
