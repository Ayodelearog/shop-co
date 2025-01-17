import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "0px",
      desktop: "768px",
    },
    extend: { 
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        gray: "#F2F0F1",
      },
      fontFamily: {
        integral: ["var(--font-integral-cf)", "sans-serif"],
        satoshi: ["var(--font-satoshi)", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        bold: "700",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
