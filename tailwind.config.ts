import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#101820",
          50: "#222f3d",
          100: "#1d2730",
          200: "#18212a",
          800: "#131c25",
          900: "#101820",
          950: "#0b1016",
        },
        graphite: {
          DEFAULT: "#1D2730",
          light: "#2A3742",
          border: "#32414E",
        },
        gold: {
          DEFAULT: "#C5A46D",
          light: "#D8BC8B",
          dark: "#A8874E",
          subtle: "rgba(197, 164, 109, 0.15)",
        },
        offwhite: "#F5F5F2",
        lightgrey: "#E7EAED",
        textgrey: "#66727D",
        accent: {
          gold: "#C5A46D",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "Manrope", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
