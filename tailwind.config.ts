import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#6FA7E8",
        "blue-deep": "#5B93D6",
        purple: "#A58BE8",
        "purple-deep": "#8F73D6",
        yellow: "#F7D35A",
        "yellow-deep": "#E9BE3A",
        pink: "#EFA0AA",
        "pink-deep": "#E28591",
        green: "#65D58A",
        "green-deep": "#4CBE74",
        paper: "#FFFDF7",
        ink: "#111111",
      },
      boxShadow: {
        hard: "7px 7px 0 #111111",
        "hard-sm": "4px 4px 0 #111111",
        "hard-xs": "3px 3px 0 #111111",
        "hard-lg": "9px 9px 0 #111111",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
};
export default config;
