
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        shopee: {
          orange: '#EE4D2D',
          'orange-dark': '#D73211',
          bg: '#F5F5F5',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
