import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        asap: ["var(--font-asap)"],
        sans: ["var(--font-onest)"],
        onest: ["var(--font-onest)"],
        inter: ["var(--font-inter)"],
        manrope: ["var(--font-manrope)"],
        roboto: ["var(--font-roboto)"],
        poppins: ["var(--font-poppins)"],
        "plus-jakarta-sans": ["var(--font-plus-jakarta-sans)"],
        "dm-sans": ["var(--font-dm-sans)"],
        prata: ["var(--font-prata)"],
      },
      screens: {
        "1440": "1440px",
        "1280": "1280px",
        "1080": "1080px",
        "850": "850px",
        "650": "650px",
        "480": "480px",
      },
      boxShadow: {
        blue: "0px 16px 24px 0px rgba(5, 200, 232, 0.3)",
        gray_1: "0px 16px 24px 0px rgba(5, 200, 232, 0.05)",
      },
      animation: {
        marquee: "marquee 35s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        ".pause": {
          "animation-play-state": "paused",
        },
      });
    },
  ],
};
export default config;
