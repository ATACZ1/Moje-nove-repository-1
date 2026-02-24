/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50:  '#faf8f4',
          100: '#f5f0e8',
          200: '#ede3d0',
          300: '#dfd0b4',
          400: '#cdb892',
          500: '#bea175',
          600: '#a8895a',
          700: '#8c6f47',
          800: '#735a3c',
          900: '#5e4a32',
        },
        stone: {
          warm: '#c8b89a',
          light: '#e8ddd0',
          mid:   '#b5a08a',
        },
        cream: '#faf8f4',
        bark:  '#7c6242',
        forest:'#4a5e4a',
      },
      fontFamily: {
        serif:  ['"Cormorant Garamond"', '"Georgia"', 'serif'],
        sans:   ['"Jost"', '"Inter"', 'sans-serif'],
        display:['"Cormorant Garamond"', 'serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
