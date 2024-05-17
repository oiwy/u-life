/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    colors: {
      black: "#070d08",
      gray: "#e2f3eb",
      "gray-2": "#d3edee",
      white: "#f0f9f9",
      blue: "#ade1e5",
      green: "#99d19c",
    },
    extend: {},
  },
  plugins: [],
};
