import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "2rem", lg: "3rem" },
    },
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FBF6EF",
          100: "#F5EDE1",
          200: "#EFE3D0",
          300: "#E6D4BC",
        },
        coffee: {
          50: "#F7EFE5",
          100: "#EDDBC4",
          200: "#DCBE9B",
          300: "#C9A173",
          400: "#B0834F",
          500: "#8F6033",
          600: "#6F4423",
          700: "#563519",
          800: "#3F2712",
          900: "#2B1A0C",
        },
        olive: {
          DEFAULT: "#46594B",
          light: "#6A7D6E",
          dark: "#33443A",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        serif: [
          "var(--font-playfair)",
          "Playfair Display",
          "Georgia",
          "serif",
        ],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(43, 26, 12, 0.18)",
        card: "0 8px 30px -10px rgba(43, 26, 12, 0.14)",
        lift: "0 24px 50px -20px rgba(43, 26, 12, 0.3)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-16px) rotate(5deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-26px)" },
        },
        steam: {
          "0%": { transform: "translateY(0) scaleX(1)", opacity: "0" },
          "20%": { opacity: "0.55" },
          "100%": {
            transform: "translateY(-110px) scaleX(1.6)",
            opacity: "0",
          },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        steam: "steam 3.2s ease-out infinite",
        "spin-slow": "spin-slow 24s linear infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
