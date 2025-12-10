/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f7f2',
          100: '#e3ebe0',
          200: '#c5d6bf',
          300: '#9caf88',
          400: '#7d9466',
          500: '#637a4d',
          600: '#4d613b',
        },
        sand: {
          50: '#fdfbf7',
          100: '#f7f3eb',
          200: '#e8dcc4',
          300: '#d6c299',
          400: '#c4a873',
        },
        pink: {
          50: '#fdf6f5',
          100: '#fbeceb',
          200: '#f4c7c3',
          300: '#ea9f99',
          400: '#de726b',
        },
        lavender: {
          50: '#f7f5fa',
          100: '#edeaf4',
          200: '#c5b9d4',
          300: '#a692b8',
          400: '#8a709c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'breathe': 'breathe 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        }
      }
    },
  },
  safelist: [
    'text-red-500',
    'text-gray-900',
    'bg-white',
    'text-sage-600',
    'bg-sage-50',
  ],
  plugins: [],
}
