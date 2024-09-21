// tailwind.config.ts
import type { Config } from "tailwindcss";
import { bundlerModuleNameResolver } from "typescript";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx,ts,tsx}", // Ensure all relevant file extensions are included
  ],
  theme: {
    extend: {
      textShadow: {
        md: "2px 2px 4px rgba(0.4, 0.4, 0, 0.5)",
      },
      keyframes: {
        widen: {
          "30%": { width: "1500%" },
          "70%": { width: "1500%" },
        },
      },
      animation: {
        widen: "widen 12s ease-in-out",
      },
      backgroundImage: {
        "auth-bg": "url('@/assets/pics/bg.png')",
      },
      translate: {
        dbl: "[200%]",
      },
      colors: {
        blue: { 15: "#003FC4", 5: "#E1F1FF", 1: "#0B4EDA", 2: "#083CA7" },
        black: { 1: "#111111" },
        gray: { 1: "#7A8188" },
      },
    },
  },
  plugins: [],
};

export default config;
