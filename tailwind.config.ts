import type { Config } from "tailwindcss";

const config: Config = {
  variants: {
    extend: {
      backdropFilter: ["responsive"], // Habilita las variantes de responsive para backdropFilter
      backdropBlur: ["responsive"], // Habilita las variantes de responsive para backdropBlur
      backgroundColor: ["responsive", "hover", "focus", "active"],
      boxShadow: ["responsive", "hover", "focus"],
    },
  },
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
        primary: "#f3c614", // Ejemplo de color principal de aferbootcamp.es
        secondary: "#0e2f44", // Ejemplo de color secundario
      },
    },
  },
  plugins: [
    require("tailwindcss-filters"), // Asegúrate de tener este plugin instalado
  ],
};
export default config;
