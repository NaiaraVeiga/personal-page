/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
      extend: {
          colors: {
              "theme-primary": "#123A5F",
              "theme-secondary":"#e1d5e1",
              "theme-tertiary": "#C0C0C0",
          },
      },
  },
};