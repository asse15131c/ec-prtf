import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        // sm: "0.5rem", // 8px
        // base: "0.75rem", // 12px
        // md: "1.125rem", // 18px
        // lg: "1.5rem", // 24px

        sm: "4px", // 8px
        base: "6px", // 12px
        md: "9px", // 18px
        lg: "12px", // 24px
      },
      fontFamily: {
        textGyreHero: [
          "var(--font-textGyreHero)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
    fontSize: {
      // base: "1.0625rem", // 17px
      base: "12px", // 17px
    },
    colors: {
      grey: "#EEEEEE",
      darkgrey: "#A5A5A5",
      white: "#fff",
      black: "#1D1D1D",
      red: "#ff0000",
      blue: "#0000ff",
      yellow: "#ffff00",
    },
  },
  plugins: [],
};
export default config;
