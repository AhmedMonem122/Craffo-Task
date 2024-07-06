/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        Default: "24px",
        sm: "40px",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },

    extend: {
      colors: {
        primary: "rgb(40,40,40)",
      },
    },
  },
  plugins: [],
};
