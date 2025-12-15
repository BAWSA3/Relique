// tailwind.config.ts
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
        // Primary Brand
        relique: {
          purple: "#822a80",
          "purple-light": "#9a3d98",
          "purple-dark": "#6a2268",
        },
        // Backgrounds
        bg: {
          primary: "#00142e",
          secondary: "#0a1f3d",
          tertiary: "#132844",
          card: "#1a3050",
          hover: "#1f3a5c",
        },
        // Text
        text: {
          primary: "#ffffff",
          secondary: "#bcbec0",
          muted: "#9a8479",
        },
        // Accents
        accent: {
          gold: "#b27e2b",
          "gold-light": "#d4a447",
          cyan: "#00aeef",
          teal: "#92d2e0",
        },
        // Semantic
        success: "#2ecc71",
        warning: "#b27e2b",
        error: "#e74c3c",
        info: "#00aeef",
        // Rarity
        rarity: {
          common: "#bcbec0",
          uncommon: "#2ecc71",
          rare: "#00aeef",
          ultra: "#822a80",
          secret: "#b27e2b",
        },
      },
      fontFamily: {
        display: ["var(--font-baron)", "system-ui", "sans-serif"],
        body: ["var(--font-telegrafico)", "system-ui", "sans-serif"],
        sans: ["var(--font-telegrafico)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-xl": ["3.75rem", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-lg": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.2" }],
        "display-xs": ["1.5rem", { lineHeight: "1.2" }],
      },
      letterSpacing: {
        "ultra-wide": "0.2em",
        "extra-wide": "0.15em",
      },
      borderRadius: {
        relique: "2px",
        "relique-md": "4px",
        "relique-lg": "6px",
      },
      boxShadow: {
        relique: "0 4px 12px rgba(0, 0, 0, 0.4)",
        "relique-lg": "0 8px 24px rgba(0, 0, 0, 0.5)",
        "relique-glow": "0 0 20px rgba(130, 42, 128, 0.3)",
        "relique-glow-gold": "0 0 20px rgba(178, 126, 43, 0.3)",
      },
      animation: {
        "fade-up": "fadeUp 0.4s ease-out",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

