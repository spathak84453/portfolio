import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617"
        },
        mint: "#20c997",
        coral: "#ff6b6b",
        amberline: "#f5b94f",
        ocean: "#0891b2"
      },
      boxShadow: {
        glass: "0 24px 80px rgba(15, 23, 42, 0.16)"
      },
      backgroundImage: {
        "mesh-light":
          "radial-gradient(circle at 18% 22%, rgba(32,201,151,.16), transparent 28%), radial-gradient(circle at 76% 18%, rgba(255,107,107,.14), transparent 26%), radial-gradient(circle at 72% 78%, rgba(245,185,79,.15), transparent 30%)",
        "mesh-dark":
          "radial-gradient(circle at 18% 22%, rgba(32,201,151,.18), transparent 30%), radial-gradient(circle at 76% 18%, rgba(255,107,107,.16), transparent 26%), radial-gradient(circle at 72% 78%, rgba(8,145,178,.18), transparent 30%)"
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        shimmer: "shimmer 2.2s linear infinite",
        float: "float 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
