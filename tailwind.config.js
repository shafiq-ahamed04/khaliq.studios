/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#2D3480',
          dark: '#1C2156',
          deep: '#151945',
          light: '#3E46A3',
        },
        amber: {
          DEFAULT: '#F5A623',
          warm: '#F5A623',
          glow: '#FFB947',
          dark: '#C48012',
        },
        surface: {
          cream: '#F6F4EE',
          beige: '#EEEAE1',
          dark: '#0D0D1A',
          cardDark: '#121224',
          cardLight: '#FFFFFF',
        },
        ink: {
          DEFAULT: '#1B1B1B',
          60: '#1B1B1B99',
          40: '#1B1B1B66',
        },
        silver: {
          DEFAULT: '#A0A0B0',
          mist: '#B0B0C4',
          light: '#D2D2DB',
        }
      },
      fontFamily: {
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
        display: ['"Manrope"', 'sans-serif'],
        serif: ['"Manrope"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      }
    },
  },
  plugins: [],
}
