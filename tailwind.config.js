/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5D87FF',
          foreground: '#ffffff',
          50: '#EEF3FF',
          100: '#D9E3FF',
          200: '#B3C8FF',
          300: '#8DACFF',
          400: '#6691FF',
          500: '#5D87FF',
          600: '#4A6FE8',
          700: '#3857CC',
          800: '#2640AF',
          900: '#142893',
        },
        secondary: {
          DEFAULT: '#49BEFF',
          foreground: '#ffffff',
        },
        success: {
          DEFAULT: '#13DEB9',
          foreground: '#ffffff',
        },
        warning: {
          DEFAULT: '#FFAE1F',
          foreground: '#ffffff',
        },
        error: {
          DEFAULT: '#FA896B',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#F6F9FC',
          foreground: '#6c757d',
        },
        border: '#e5eaef',
        background: '#F6F9FC',
        foreground: '#2A3547',
        card: {
          DEFAULT: '#ffffff',
          foreground: '#2A3547',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        lg: '12px',
        md: '8px',
        sm: '6px',
      },
      boxShadow: {
        card: '0px 7px 30px 0px rgba(90,114,123,0.11)',
        'card-lg': '0px 10px 60px 0px rgba(90,114,123,0.18)',
      },
    },
  },
  plugins: [],
}
