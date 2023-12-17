/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryFromGradient: "#fde047",
        primaryToGradient: "#F97316",
        secondaryfromGradient: "#5A7CFF",
        secondaryToGradient: "#5FC6FF",
      },
      backgroundImage: {
        hexagonbackground: "url(/Hexagon.svg)",
        hexagon2background: "url(/Hexagon2.svg)",
      },

      width: {
        inherit: "inherit",
      },

      screens: {
        "5xl": "2000px",
        "landscape-phone": {
          raw: "(min-width: 300px) and (max-height: 550px)",
        },
      },

      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        lexend: ["var(--font-lexend)", "sans-serif"],
        eduQLD: ["var(--font-eduQLD)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
