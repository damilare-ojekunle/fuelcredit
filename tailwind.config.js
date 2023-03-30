/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { min: "1600px" },
      xl: { max: "1599px" },
      lg: { max: "1280px" },
      md: { max: "1024px" },
      sm: { max: "950px" },
      "2xs": { max: "640px" },
      xs: { max: "400px" },
      xss: { max: "350px" },
      tab: { min: "769px", max: "900px" },
    },
    extend: {
      colors: {
        "primary-green": "var(--primary-green)",
        "secondary-green": "var(--secondary-green)",
        "input-placeholder": "var(--input-placeholder)",
        "input-gray": "var(--input-gray)",
        "primary-gray": "var(--primary-gray)",
        overlay: "var(--overlay)",
      },
      fontFamily: {
        "brink-regular": ["brink-regular"],
        "brink-bold": ["brink-bold"],
      },
    },
  },
  plugins: [],
};
