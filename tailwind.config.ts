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
          "0 0px 55px rgba(255, 255,255, 0.8)",
        ],
      },
      screens: {
        max1050: { max: "1050px" },
        xxl: { max: "1920px" },
        xlg: "1366px",
        xlgm: { max: "1366px" },
        xl: { max: "1280px" },
        xl_min: "1280px",
        tabletxl: { max: "1194px" },
        tabletxl_min: "1194px",
        tabletlg: { max: "1155px" },
        tabletmd: { max: "1024px" },
        custom900: { max: "900px" },
        custom900_min: "900px",
        tabletsm: { max: "834px" },
        tabletxs: { max: "800px" },
        tabletxs_min: "800px",
        mobilexl: { max: "600px" },
        mobilexl_min: "600px",
        mobilexll: { max: "640px" },
        mobilexlll: { max: "700px" },
        mobilexlgl: { max: "550px" },
        mobilexlg: { max: "500px" },
        mobilexlg_min: "500px",
        mobilexlm: { max: "420px" },
        mobilesm: { max: "393px" },
        mobilexs: { max: "360px" },
      },
    },
  },
};
export default config;
