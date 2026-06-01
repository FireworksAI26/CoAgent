import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(221 20% 22%)",
        background: "hsl(228 30% 7%)",
        card: "hsl(228 27% 10%)",
        muted: "hsl(226 17% 17%)",
        foreground: "hsl(210 20% 95%)",
        accent: "hsl(231 82% 66%)"
      }
    }
  },
  plugins: []
};

export default config;
