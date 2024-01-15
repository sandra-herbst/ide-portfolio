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
          DEFAULT: '#ffffff',
          "pink": "#fda4af",
        },
        "secondary": {
          DEFAULT: '#ffffff',
          "blue": "#6999d7",
        },
        "accent": {
          DEFAULT: '#CC7832',
        },
        "black": "#1F1E25",
        "gray": "#2B2C32",
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

