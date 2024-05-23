import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "medium-red": "#FF4C4C", // Un rojo más moderado
        "medium-pink": "#FFA6C9", // Un rosa medio, no tan brillante pero alegre
      },
    },
  },
  plugins: [],
};
export default config;
