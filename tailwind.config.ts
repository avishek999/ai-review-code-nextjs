import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        loading: "loading 1.5s linear infinite",
      },
      keyframes: {
        loading: {
          "0%, 100%": { transform: "translateX(-100px)", width: "30px" },
          "50%": { transform: "translateX(300px)", width: "200px" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
