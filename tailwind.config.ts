import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,md,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FF6969",
        "main-bg": "#FFF5E0",
        "font-color": "#141E46",
        // dark mode
        "main-bg-dark": "#141E46",
        "font-color-dark": "#FFF5E0",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
