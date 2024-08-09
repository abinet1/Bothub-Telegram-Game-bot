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
          100: "#d3d8e1",
          200: "#a7b1c4",
          300: "#7c8aa7",
          400: "#50638a",
          500: "#051b43",
          600: "#041735",
          700: "#031227",
          800: "#020e19",
          900: "#01090c"
        },
        backgroundshade: {
            100: "#dab8ff",
            200: "#c288ff",
            300: "#aa57ff",
            400: "#9227ff",
            500: "#7700ff",
            600: "#6500d1",
            700: "#5300a3",
            800: "#410075",
            900: "#2f0047"
        },
        primaryshade: {
            100: "#c9f5ff",
            200: "#96eaff",
            300: "#63e0ff",
            400: "#30d5ff",
            500: "#0ed4ff",
            600: "#0bb0d1",
            700: "#088ca3",
            800: "#066875",
            900: "#034447"
        },
        secondaryshade: {
            100: "#f5ffc9",
            200: "#ebff96",
            300: "#e0ff63",
            400: "#d6ff30",
            500: "#c0ff0e",
            600: "#a0d10b",
            700: "#80a308",
            800: "#607506",
            900: "#404703"
        },
        whiteshade: {
            100: "#ffffff",
            200: "#ffffff",
            300: "#ffffff",
            400: "#ffffff",
            500: "#ffffff",
            600: "#cccccc",
            700: "#999999",
            800: "#666666",
            900: "#333333"
        }
      },
    },
  },
  plugins: [],
}

