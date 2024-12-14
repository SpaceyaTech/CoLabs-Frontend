/** @type {import('tailwindcss').Config} */
import { Description } from "@radix-ui/react-dialog";
import shadcnTailwindPlugin from "./src/components/lib/shadcn-tailwind-config";
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "ff-poppins": ["Poppins", "sans-serif"],
        "ff-inconsolata": ["Inconsolata", "monospace"],
      },
      colors: {
        brand: {
          1: "#383C3A",
          gray: {
            1: "#C6C6C6",
            2: "#989A9A",
            3: "#8C9E99",
            4: "#413535",
            5: "#DED6D6",
            6: "#B4B1B1",
            7: "#635D5D",
            8: "#B3B8B7",
            9: "#f3faf8", //#B3B8B7CC
            10: "D9D9D9",
          },
          green: {
            1: "#14A97C",
            2: "#02FBB0",
            3: "#19FDC7",
            4: "#144E40",
            5: "#294740",
            6: "#2D8067",
            7: "#9AF5E0",
            8: "#294740CC",
          },
        },
        // Text colors
        heading: "E9EDEC",

        sidebar: {
          DEFAULT: "oklch(var(--sidebar-background))",
          foreground: "oklch(var(--sidebar-foreground))",
          primary: "oklch(var(--sidebar-primary))",
          "primary-foreground": "oklch(var(--sidebar-primary-foreground))",
          accent: "oklch(var(--sidebar-accent))",
          "accent-foreground": "oklch(var(--sidebar-accent-foreground))",
          border: "oklch(var(--sidebar-border))",
          ring: "oklch(var(--sidebar-ring))",
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-animate"),
    shadcnTailwindPlugin,
  ],

  daisyui: {
    themes: [
      {
        collabs: {
          "color-scheme": "dark",
          primary: "#2D8067",
          "primary-content": "#000000",
          secondary: "#1db88e",
          "secondary-content": "#000c07",
          accent: "#1db8ab",
          "accent-content": "#000c0b",
          neutral: "#19362d",
          "neutral-content": "#cdd3d1",
          "base-100": "#16181D",
          "base-300": "#110c0d",
          "base-content": "#B3B8B7",
          success: "#00a96e",
          error: "#852e32",
          info: "#00b5ff",
          warning: "#ffbe00",
          // "--animation-btn": ".25s",
          // "--animation-input": ".2s",
          // "--border-btn": "1px",
          // "--btn-focus-scale": ".95",
          // "--rounded-badge": "1.9rem",
          // "--rounded-box": "1rem",
          // "--rounded-btn": ".5rem",
          // "--tab-border": "1px",
          // "--tab-radius": ".5rem",
        },
      },
    ],
  },
};
