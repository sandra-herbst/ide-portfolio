/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    // add or override certain properties of the default theme with extend keyword
    extend: {
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      // configure color palette here
      colors: {
        "primary-color": {
          DEFAULT: '#ffffff',
          "pink": "#fda4af",
        },
        "secondary-color": {
          DEFAULT: '#ffffff',
          "blue": "#6999d7",
        },
        "accent-color": {
          DEFAULT: '#ffffff',
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "64px",
      },
    }
  },
  plugins: [],
}

