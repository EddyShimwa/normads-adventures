export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-in forwards'
      },
      fontSize: {
        '2xs': '0.5rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}