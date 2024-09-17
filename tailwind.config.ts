import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require("@tailwindcss/typography"),
    nextui({
      themes: {
        light: {
          extend: "light",
          colors: {
            secondary: {
              DEFAULT: "#81d2c3",
            },
          },
        },
        dark: {
          extend: "dark",
          colors: {
            secondary: {
              DEFAULT: "#81d2c3",
            },
          },
        },
      },
    }),
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.4)",
          "0 0px 55px rgba(255, 255,255, 0.7)",
        ],
      },
      screens: {
        tabletmd: { max: "1024px" },
        custom900: { max: "900px" },
        custom900_min: "900px",
        mobilexll: { max: "640px" },
        "2k": "2000px",
      },
    },
  },
};
export default config;
