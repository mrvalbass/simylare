import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        forestGreen: "#014652",
        beige: "#fefae0",
        flashyGreen: "#B9FF67",
        woodenBrown: "#65411a",
      },
      fontFamily: {
        Hanken: ["Hanken Grotesk", "sans-serif"],
        Libre: ["Libre Baskerville", "serif"],
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        banner: "banner 25s linear infinite",
      },
      keyframes: {
        banner: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% / 3))" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
