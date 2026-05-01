import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5FBF8F",
        secondary: "#1F2A44",
        accent: "#A8E6CF",
        surface: "#F6FBF8",
        "hero-mint": "#E8F5EE",
        muted: "#6B7280",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(2.5rem,5vw,4rem)", { lineHeight: "1.15", fontWeight: "700" }],
        "hero-lg": ["clamp(3rem,5.5vw,4rem)", { lineHeight: "1.12", fontWeight: "700" }],
      },
      boxShadow: {
        card: "0 10px 30px rgba(0, 0, 0, 0.05)",
        nav: "0 8px 24px rgba(31, 42, 68, 0.06)",
      },
      borderRadius: {
        "4xl": "2rem",
        "3xl": "1.5rem",
        "2xl": "16px",
        xl: "14px",
      },
      backgroundImage: {
        "gradient-pharma": "linear-gradient(135deg, #5FBF8F 0%, #A8E6CF 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
