/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px'],
    },
    extend: {
      fontFamily: {
        Azeret: ['Azeret Mono', 'Monospace'],
        work: ['Work Sans', 'sans-serif'],
        lexend: ['Lexend Deca', 'sans-serf'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
      colors: {
        primary: '#ECEEFF',
        secondary: '#7E7E7E',
        'coral-red': '#FF6452',
        'slate-gray': '#6D6D6D',
        'pale-blue': '#F5F6FF',
        'white-400': 'rgba(255, 255, 255, 0.80)',
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        hero: "url('assets/herobg.png')",
        villan: "url('assets/grid.svg')",
        gradient1: "url('assets/purpleGradient1.jpg')",
        gradient2: "url('assets/purpleGradient2.jpg')",
      },
      screens: {
        wide: '1440px',
      },
    },
  },
  plugins: [],
};
