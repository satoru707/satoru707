/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ["Fira Code", "monospace"],
      },
      colors: {
        "neo-dark": "#121212",
        "neo-dark-lighter": "#1E1E1E",
        "neo-gray": "#2D2D2D",
        "neo-green": "#00FF41",
        "neo-green-dim": "#00CC33",
        "neo-blue": "#0C4A6E",
        "neo-blue-bright": "#0EA5E9",
      },
      boxShadow: {
        "neo-glow-green": "0 0 10px rgba(0, 255, 65, 0.5)",
        "neo-glow-blue": "0 0 10px rgba(14, 165, 233, 0.5)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#FFFFFF",
            a: {
              color: "#00FF41",
              "&:hover": {
                color: "#00CC33",
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
};
