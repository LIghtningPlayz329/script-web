
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0c1a33", // Keep the base color but with reduced intensity
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#2980B9", // Slightly less intense blue
          hover: "#2471A3",
          light: "#AED6F1", // Lighter, less intense blue
          dark: "#1A5276"
        },
        secondary: {
          DEFAULT: "#0d2042",
          hover: "#16325f"
        },
        accent: {
          DEFAULT: "#85C1E9", // Less intense accent blue
          hover: "#5DADE2"
        },
        border: "rgba(33, 150, 243, 0.12)", // More subtle blue border
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "background-shine": "background-shine 2s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "background-shine": {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
