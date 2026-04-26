/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm memorial palette
        ivory: "#FAF6EF",
        parchment: "#F3ECDF",
        sand: "#E8DDC8",
        beige: "#D8C9AE",
        clay: "#A8907A",
        cocoa: "#6B5544",
        charcoal: "#2A241F",
        gold: "#A98948",
        goldsoft: "#C7A86B",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Playfair Display", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightish: "-0.01em",
        wideish: "0.08em",
        wider2: "0.18em",
      },
      maxWidth: {
        prose2: "62ch",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(42,36,31,0.04), 0 8px 30px rgba(42,36,31,0.06)",
      },
      animation: {
        "fade-up": "fadeUp 900ms ease-out both",
        "fade-in": "fadeIn 1100ms ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
