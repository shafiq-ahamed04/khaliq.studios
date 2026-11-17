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
          dark: '#1c2156',
          deep: '#151945',
          light: '#3e46a3',
        },
        amber: {
          DEFAULT: '#F5A623',
          warm: '#F5A623',
          glow: '#ffb947',
          dark: '#c48012',
        },
        surface: {
          offwhite: '#F5F4F0',
          dark: '#0D0D1A',
          card: '#131325',
          rowHover: '#2D3480',
        },
        silver: {
          DEFAULT: '#A0A0B0',
          mist: '#A0A0B0',
          light: '#d2d2db',
          dark: '#68687b',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      borderRadius: {
        'none': '0px',
      }
    },
  },
  plugins: [],
}
