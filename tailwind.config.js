/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "5%",
        sm: "8%",
        md: "5%",
        lg: "5%",
        xl: "5%%",
      },
      center: true,
    },
    extend: {
      colors: {
        acend: {
          25: "#EFF6F2",
          100: "#2C8C57",
          "theme-light": "#EFF6F2",
          "theme-dark": "#0F2F1D",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
