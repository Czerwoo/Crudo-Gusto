import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "beige-color": "#f1ebdd",
        "white-color": "#f8f5ee",
        // prettier-ignore
        "red": "#ff0000",
        "main-font-color": "#404040",
      },
      fontFamily: {
        "main-font": "Cormorant Garamond",
        "quotation-font": ['"Dancing Script"', "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
