/** @type {import('tailwindcss').Config} */

import animations from "tailwindcss-animate";
import { transitionDuration } from "./src/styles/animations";
import { colors } from "./src/styles/colors";
import { fontFamily } from "./src/styles/fonts";
import { screens } from "./src/styles/screens";

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  plugins: [animations],
  theme: {
    extend: {
      colors,
      fontFamily,
      transitionDuration,
    },
    screens
  },
};
