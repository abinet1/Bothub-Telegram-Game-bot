/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#7700FF",
        primary: "#0ED4FF",
        secondary: "#C0FF0E",
        white: "#FFFFFF",
        dark: "#051b43",
        darkshade: {
          100: "#e6e7e8",
          200: "#cccfd1",
          300: "#b3b8ba",
          400: "#99a0a3",
          500: "#80898d",
          600: "#667175",
          700: "#4d595e",
          800: "#334247",
          900: "#1a2a2f",
        }
      },
    },
  },
  plugins: [],
}

