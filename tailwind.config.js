/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100:'#e0f2fe',
          200:'#bae6fd',
          300:'#7dd3fc',
          400:'#38bdf8',
          500:'#0ea5e9',
          600:'#0284c7',
          700:'#0369a1',
          800:'#075985',
          900:'#0c4a6e',
          950:'#082f49',
        },
      },
      animation: {
        wiggle: 'wiggle 200ms ease-in-out infinite',
        click:'click 300ms ease-in-out'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        click: {
          '0%, 100%': { transform: 'translateY(1px)' },
          '50%': { transform: 'translateY(-1px)' },
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night","winter"],
  },
}

