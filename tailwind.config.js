/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        buttonheartbeat: "buttonheartbeat 2s infinite ease-in-out",
      },
      colors: {
        bgPrimary: "#eff1f5",
        bgSecondary: "#ccd0da",
        darkBgPrimary: "#181825",
        darkBgSecondary: "#313244",

        primary: "#25d1b5",

        textPrimary: "#1b123d",
        textSecondary: "#353750",

        darkTextPrimary: "#cdd6f4",
        darkTextSecondary: "#bac2de",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        sm: { min: "320px", max: "649px" },
        md: { min: "650px", max: "768px" },
        lg: { min: "769px", max: "1024px" },
        xl: { min: "1025px", max: "1600px" },
      },
      keyframes: {
        buttonheartbeat: {
          "0%": {
            "box-shadow": '0 0 0 0 theme("colors.darkTextPrimary")',
            transform: "scale(1)",
          },
          "50%": {
            "box-shadow": '0 0 0 7px theme("colors.darkTextPrimary/0")',
            transform: "scale(1.05)",
          },
          "100%": {
            "box-shadow": '0 0 0 0 theme("colors.darkTextPrimary/0")',
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
