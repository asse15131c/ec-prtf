import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        blink: "blink 0.3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      spacing: {
        sm: "0.25rem", // 4px
        base: "0.375rem", // 6px
        md: "0.5625rem", // 9px
        lg: "0.75rem", // 12px
      },
      fontFamily: {
        neueHaasUnica: [
          "var(--font-neueHaasUnica)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      keyframes: {
        blink: {
          "0%, to": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
    fontSize: {
      base: "0.6875rem", // 11px
    },
    colors: {
      grey: "#EEEEEE",
      darkgrey: "#A5A5A5",
      white: "#fff",
      black: "#1D1D1D",
      red: "#ff0000",
      blue: "#0000ff",
      yellow: "#ffff00",
      transparent: "transparent",
    },
  },
  plugins: [],
};
export default config;
