/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#2f1f18',   // deep espresso
        'brand-mid':  '#6b4b36',   // warm brown
        'brand-warm': '#c69c6d',   // warm accent (caramel)
        'brand-cream':'#f6f2ee',   // page background / cream
        'brand-light':'#efe8e0',   // very light warm
        // keep some legacy tokens for compatibility
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
      },
      fontFamily: {
        serif:  ['"EB Garamond"', 'Georgia', 'serif'],
        sans:   ['"Karla"', 'Inter', 'sans-serif'],
        display:['"EB Garamond"', 'serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.35) 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
