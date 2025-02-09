import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#F2F4F5",
          100: "#E4E7E9",
          200: "#C9CFD2",
          300: "#ADB7BC",
          400: "#929FA5",
          500: "#77878F",
          600: "#5F6C72",
          700: "#475156",
          800: "#303639",
          900: "#191C1F",
        },
        primary: {
          50: "#FFF3EB",
          100: "#FFE7D6",
          200: "#FFCEAD",
          300: "#FFB685",
          400: "#FF9D5C",
          500: "#FA8232",
          600: "#DE732D",
          700: "#99501F",
          800: "#663514",
          900: "#331B0A",
        },
        secondary: {
          50: "#EAF6FE",
          100: "#D5EDFD",
          200: "#ABDBFA",
          300: "#81C9F8",
          400: "#57B7F5",
          500: "#2DA5F3",
          600: "#2484C2",
          700: "#1B6392",
          800: "#124261",
          900: "#092131",
        },
        success: {
          50: "#EAF7E9",
          100: "#D5F0D3",
          200: "#ABE0A7",
          300: "#81D17C",
          400: "#57C150",
          500: "#2DB224",
          600: "#248E1D",
          700: "#1B6B16",
          800: "#12470E",
          900: "#092407",
        },
        warning: {
          50: "#FDFAE7",
          100: "#FBF4CE",
          200: "#F7E99E",
          300: "#F3DE6D",
          400: "#EFD33D",
          500: "#EBC80C",
          600: "#BCA00A",
          700: "#8D7807",
          800: "#5E5005",
          900: "#2F2802",
        },
        danger: {
          50: "#FDEEEE",
          100: "#FCDEDE",
          200: "#F8BCBC",
          300: "#F59B9B",
          400: "#F17979",
          500: "#EE5858",
          600: "#BE4646",
          700: "#8F3535",
          800: "#5F2323",
          900: "#301212",
        },
      },

      // ✅ إضافة Keyframes
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        cardFade: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },

      // ✅ إضافة Animation Classes
      animation: {
        fadeInUp: "fadeInUp 1s ease-out",
        cardFade: "cardFade 0.8s ease-out",
      },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
