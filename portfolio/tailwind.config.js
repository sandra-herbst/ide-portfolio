/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    // add or override certain properties of the default theme with extend keyword
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-up': {
          'from': {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          'to': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
        },
        'jump-in-out': {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.25s ease-out',
        'fade-out-up': 'fade-out-up 0.25s ease-out',
        'jump-in-out': 'jump-in-out 2s',
      },
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      // configure color palette here
      colors: {
        "primary": {
          "pink": "#fda4af",
        },
        "secondary": {
          "blue": "#1057E5",
          "dark-blue": "#2C436E",
          "active-blue": "#282a36",
        },
        "accent": {
          DEFAULT: "#CC7832",
        },
        "success": {
          DEFAULT: "#19b963",
        },
        "gray": {
          0: "#AAAAAA",
          50: "#989898",
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

