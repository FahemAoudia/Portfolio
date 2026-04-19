import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "rgb(10 12 20 / <alpha-value>)",
          elevated: "rgb(16 19 32 / <alpha-value>)",
        },
        accent: {
          cyan: "#22d3ee",
          violet: "#a78bfa",
          rose: "#fb7185",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgb(255 255 255 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.04) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgb(34 211 238 / 0.25), transparent), radial-gradient(ellipse 60% 40% at 100% 0%, rgb(167 139 250 / 0.2), transparent)",
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      boxShadow: {
        glass: "0 0 0 1px rgb(255 255 255 / 0.06), 0 24px 80px rgb(0 0 0 / 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
