module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  animation: {
    pulse: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
  },

  keyframes: {
    pulse: {
      "0%, 100%": {
        opacity: 0.3,
      },
      "50%": {
        opacity: 1,
      },
    },
  },
  variants: {},
  plugins: [],
};
