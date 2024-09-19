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
      colors: { blue: { 15: "#003FC4" } },
    },
  },
  plugins: [],
};

export default config;
