/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: {
          dark: "#4A3933",
          medium: "#7D5A50",
          light: "#B4846C",
          cream: "#F5F1E8",
          gold: "#D4B481",
        },
        accent: {
          primary: "#8B5D33",
          secondary: "#D4B481",
        },
        success: "#2E7D32",
        warning: "#ED6C02",
        error: "#D32F2F",
      },
      fontFamily: {
        heading: ["Tajawal", "sans-serif"],
        body: ["IBM Plex Sans Arabic", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideUp: "slideUp 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
