/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: "#ff006e",
          magenta: "#f72585",
          cyan: "#00d9ff",
          purple: "#b537f2",
          violet: "#7209b7",
          blue: "#3a0ca3",
          lime: "#00f5ff",
        },
        dark: {
          bg: "#0a0e27",
          surface: "#1a1f3a",
          card: "#232e4d",
        },
      },
      backgroundImage: {
        "gradient-neon": "linear-gradient(135deg, #ff006e 0%, #f72585 25%, #b537f2 50%, #7209b7 75%, #00d9ff 100%)",
        "gradient-pink-cyan": "linear-gradient(135deg, #ff006e 0%, #00d9ff 100%)",
        "gradient-purple-pink": "linear-gradient(135deg, #b537f2 0%, #ff006e 100%)",
        "gradient-text-neon": "linear-gradient(90deg, #ff006e 0%, #f72585 25%, #b537f2 50%, #00d9ff 75%, #00f5ff 100%)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        mono: ["Fira Code", "ui-monospace", "monospace"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 4s ease infinite",
        "fade-in-up": "fade-in-up 1s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "neon-flicker": "neon-flicker 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 0, 110, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 217, 255, 0.5)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translate3d(0, 60px, 0)" },
          "100%": { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        "neon-flicker": {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": { opacity: "1", textShadow: "0 0 10px #ff006e, 0 0 20px #ff006e, 0 0 30px #ff006e" },
          "20%, 24%, 55%": { opacity: "0.5", textShadow: "0 0 5px #ff006e" },
        },
      },
      boxShadow: {
        "neon-pink": "0 0 20px rgba(255, 0, 110, 0.5), 0 0 40px rgba(255, 0, 110, 0.3)",
        "neon-cyan": "0 0 20px rgba(0, 217, 255, 0.5), 0 0 40px rgba(0, 217, 255, 0.3)",
        "neon-purple": "0 0 20px rgba(181, 55, 242, 0.5), 0 0 40px rgba(181, 55, 242, 0.3)",
        "neon-glow": "0 0 30px rgba(255, 0, 110, 0.4), inset 0 0 20px rgba(0, 217, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
