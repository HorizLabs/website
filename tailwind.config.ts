import type { Config } from "tailwindcss";
// @ts-expect-error TailwindCSS Motion has file
import tailwindcssMotion from "tailwindcss-motion";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    tailwindcssMotion
  ],
} satisfies Config;
