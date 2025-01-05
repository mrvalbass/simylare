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
      },
    },
  },
  plugins: [],
};
export default config;
