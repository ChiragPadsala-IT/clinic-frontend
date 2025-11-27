/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f6fbff",
          100: "#eaf6ff",
          500: "#2563eb",
        },
      },
    },
  },
  plugins: [],
};
