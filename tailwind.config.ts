import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      colors: {
        cream: "#F4EFE6",
        ivory: "#FAF7F1",
        warm: "#FFFDF8",
        sand: "#D8C6AA",
        taupelight: "#CBB99E",
        champagne: "#B88A3B",
        honey: "#A9782F",
        palegold: "#E5D6BA",
        walnut: "#342F2A",
        taupe: "#6F6255",
        clay: "#9B8064",
        goldline: "rgba(184, 138, 59, 0.25)",
        sandgold: "#E8DDCA",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(52, 47, 42, 0.10)",
        gold: "0 16px 36px rgba(184, 138, 59, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
