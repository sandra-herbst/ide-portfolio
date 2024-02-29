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
        "primary": {
          DEFAULT: "#ffffff",
          "pink": "#fda4af",
        },
        "secondary": {
          DEFAULT: "#ffffff",
          "blue": "#3673F1",
          "dark-blue": "#2C436E",
        },
        "accent": {
          DEFAULT: "#CC7832",
        },
        "gray": {
          50: "#65666d",
          100: "#3f4046",
          200: "#2B2C32",
          300: "#25252c",
        },
        "black": "#1F1E25",
        "white": "#E1E1E1",
      },
      fontFamily: {
        sans: [
          'Inter',
          {
            fontFeatureSettings: '"cv11", "ss01"',
            fontVariationSettings: '"opsz" 32'
          },
        ],
        mono: ['JetBrains Mono']
      },
    }
  },
  plugins: [],
}

