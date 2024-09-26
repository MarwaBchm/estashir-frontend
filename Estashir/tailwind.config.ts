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
        md: "2px 2px 4px rgba(0.2, 0.2, 0, 0.2)",
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
        blue: {
          15: "#003FC4",
          5: "#E1F1FF",
          1: "#0B4EDA",
          2: "#083CA7",
          3: "#0300A3",
          4: "#5A83D8",
          6: "#0300A3",
          7: "#CEF0FF",
          8: "#C5E6FF",
        },
        black: { 1: "#111111" },
        gray: { 1: "#7A8188" },
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};

export default config;
