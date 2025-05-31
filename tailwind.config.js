/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A',
          50: '#E6EBFF',
          100: '#C5D3FF',
          200: '#94ABFF',
          300: '#6283FF',
          400: '#315BFF',
          500: '#0033FF',
          600: '#0029CC',
          700: '#001F99',
          800: '#001566',
          900: '#000A33',
        },
        secondary: {
          DEFAULT: '#F59E0B',
          50: '#FEF3E0',
          100: '#FDE6C0',
          200: '#FBCE80',
          300: '#F9B541',
          400: '#F7A31D',
          500: '#F59E0B',
          600: '#C47D08',
          700: '#935D06',
          800: '#623E04',
          900: '#311F02',
        },
        accent: {
          DEFAULT: '#C084FC',
          50: '#F7ECFE',
          100: '#EFDAFD',
          200: '#DFB5FB',
          300: '#D090F9',
          400: '#C084FC',
          500: '#AA56F7',
          600: '#9428F3',
          700: '#7D0AE3',
          800: '#6108AF',
          900: '#45067B',
        },
        background: {
          dark: '#0F172A',
          medium: '#1E40AF',
          light: '#6366F1',
        },
        text: {
          light: '#F8FAFC',
          muted: '#CBD5E1',
          dark: '#1E293B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Nunito Sans', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(192, 132, 252, 0.15)',
        'glow-md': '0 0 25px rgba(192, 132, 252, 0.25)',
        'glow-lg': '0 0 35px rgba(192, 132, 252, 0.35)',
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(to bottom right, #0F172A, #1E40AF, #6366F1)',
        'gradient-card': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
        'gradient-button': 'linear-gradient(90deg, #1E3A8A, #4F46E5)',
        'gradient-gold': 'linear-gradient(90deg, #F59E0B, #FBBF24)',
        'gradient-lavender': 'linear-gradient(90deg, #C084FC, #A855F7)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(192, 132, 252, 0.15)' },
          '50%': { boxShadow: '0 0 30px rgba(192, 132, 252, 0.35)' },
        },
      },
    },
  },
  plugins: [],
};