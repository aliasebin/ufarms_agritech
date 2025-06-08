import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF", // White
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: "#2E7D32", // Green (main brand color)
        "primary-dark": "#1B5E20", // Dark green
        "primary-light": "#4CAF50", // Light green
        secondary: "#26A69A", // Teal/Cyan
        "secondary-dark": "#00695C", // Dark teal
        "secondary-light": "#4DD0E1", // Light teal
        tertiary: "#FFC107", // Yellow (promoted)
        "tertiary-light": "#FFEB3B", // Light yellow
        "tertiary-dark": "#FF8F00", // Dark yellow/orange
        accent: "#66BB6A", // Light green accent
        "accent-yellow": "#FFD54F", // Medium yellow
        "accent-green": "#81C784", // Medium green
        "accent-blue": "#81D4FA", // Very light blue (much lighter)
        "light-blue": "#E1F5FE", // Very light blue for subtle accents
        foreground: "hsl(var(--primary-foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #2E7D32 0%, #26A69A 50%, #FFC107 100%)",
        "gradient-primary-dark": "linear-gradient(135deg, #1B5E20 0%, #00695C 50%, #FF8F00 100%)",
        "gradient-secondary": "linear-gradient(135deg, #26A69A 0%, #FFC107 100%)",
        "gradient-accent": "linear-gradient(135deg, #4CAF50 0%, #66BB6A 50%, #FFEB3B 100%)",
        "gradient-light": "linear-gradient(135deg, #E8F5E8 0%, #E0F2F1 30%, #E1F5FE 70%, #FFF9C4 100%)",
        "gradient-hero": "linear-gradient(135deg, #2E7D32 0%, #26A69A 40%, #81D4FA 70%, #FFC107 100%)",
        "gradient-card":
          "linear-gradient(135deg, rgba(46, 125, 50, 0.05) 0%, rgba(38, 166, 154, 0.05) 40%, rgba(129, 212, 250, 0.03) 70%, rgba(255, 193, 7, 0.05) 100%)",
        "gradient-green-teal": "linear-gradient(135deg, #2E7D32 0%, #26A69A 100%)",
        "gradient-teal-yellow": "linear-gradient(135deg, #26A69A 0%, #FFC107 100%)",
        "gradient-green-yellow": "linear-gradient(135deg, #2E7D32 0%, #FFC107 100%)",
        "gradient-tri-color": "linear-gradient(135deg, #2E7D32 0%, #26A69A 40%, #81D4FA 70%, #FFC107 100%)",
        "gradient-soft": "linear-gradient(135deg, #E8F5E8 0%, #E0F2F1 30%, #E1F5FE 70%, #FFFDE7 100%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        full: "9999px",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "gradient-shift": {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-shift": "gradient-shift 6s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
export default config
