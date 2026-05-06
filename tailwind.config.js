/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#09090b",
          soft: "#131316",
          card: "#18181b",
        },
        accent: {
          DEFAULT: "#c9a87c",
          light: "#e8d5b8",
          dark: "#a38556",
        },
        muted: "#a1a1aa",
      },
      fontFamily: {
        display: ["Unbounded", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(0,0,0,0.3)",
        card: "0 4px 24px rgba(0,0,0,0.4)",
        glow: "0 0 40px rgba(201,168,124,0.15)",
      },
      backgroundImage: {
        "grad-accent": "linear-gradient(135deg, #c9a87c 0%, #e8d5b8 100%)",
        "grad-dark": "linear-gradient(180deg, #131316 0%, #09090b 100%)",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-rev": "marquee-rev 45s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
