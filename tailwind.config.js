/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        textColor2: '#0A0B0F',
        textColor3: '#000F1B', 
        background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
      },
      backgroundImage: {
        "gradient-logo": `linear-gradient(90deg, #00FF8F 0%, #00A1FF 100%)`,
      },
      fontFamily: 
      {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        outfit:['"Outfit"','sans-serif']
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
} 