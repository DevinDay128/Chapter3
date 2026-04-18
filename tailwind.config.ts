import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2f6fb",
          100: "#dfe9f4",
          200: "#b9cee5",
          300: "#8caed2",
          400: "#5a89bc",
          500: "#3a6ba3",
          600: "#2b5586",
          700: "#23446c",
          800: "#1d3857",
          900: "#0f2336",
        },
        sand: {
          50: "#faf7f1",
          100: "#f2ead7",
          200: "#e5d6af",
          300: "#d4bc82",
        },
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
