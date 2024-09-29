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
      },
      fontFamily: {
        Hanken: ["Hanken Grotesk", "sans-serif"],
        Libre: ["Libre Baskerville", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
