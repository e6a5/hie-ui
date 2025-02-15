/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#171717",
          dark: "#ffffff"
        },
        background: {
          DEFAULT: "#ffffff",
          dark: "#171717"
        }
      }
    }
  }
} 