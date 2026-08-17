export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0C0C0C",
        mist: "#D7E2EA",
        steel: "#646973",
        ice: "#BBCCD7",
        deepPurple: "#18011F",
        magenta: "#B600A8",
        violet: "#7621B0",
        warmOrange: "#BE4C00",
        electricBlue: "#2D9CFF"
      },
      fontFamily: {
        display: ["Kanit", "Noto Sans SC", "system-ui", "sans-serif"],
        sans: ["Kanit", "Noto Sans SC", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 36px rgba(182, 0, 168, 0.22)",
        ice: "0 20px 70px rgba(187, 204, 215, 0.08)"
      }
    }
  },
  plugins: []
};
