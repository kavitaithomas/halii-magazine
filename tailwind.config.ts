import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        cream: "#fcfcff",
      },
      fontFamily: {
        coterie: ["var(--font-coterie)"],
        ephesis: ["var(--font-ephesis)"],
      },
    },
  },
};
export default config;
