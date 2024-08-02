/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary : '#0ef'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'kalnia': ['Kalnia Glaze', 'serif']
      },
      animation: {
        'typing-xl': 'typing-desk 5s steps(17, end) infinite, kedip infinite',
        'typing': 'typing 5s steps(17, end) infinite, kedip infinite',
        'marquee': 'marquee 6s linear infinite'
      },
      keyframes: {
        'typing': {
          '0%': {
            width: '0%',
          },
          '100%': {
            width: '15rem'
          },
        },
        'marquee': {
          '0%': {
            'transform': 'translateX(0)',
          },
          '100%': {
            'transform': 'translateX(-100%)'
          }
        },
        'typing-desk': {
          '0%': {
            width: '0%',
          },
          '100%': {
            width: '22rem'
          },
        },
      }
    },
  },
  plugins: [],
}

