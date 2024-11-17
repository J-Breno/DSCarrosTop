/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dscarrostop: "#3C9AF0",
      },
      width: {
        960: "960px",
      },
    },
  },
  plugins: [],
};
