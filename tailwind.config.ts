import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto-sans-kr)', 'sans-serif'],
      },
      colors: {
        brand: {
          navy: '#1e3a8a', // blue-900
          blue: '#2563eb', // blue-600
          light: '#eff6ff', // blue-50
          gray: '#64748b', // slate-500
        }
      }
    },
  },
  plugins: [],
};
export default config;