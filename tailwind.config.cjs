/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tilt_neon: "Tilt Neon , cursive",
        poppins: "Poppins , sans-serif",
      },
    },
  },
  plugins: [],
};
