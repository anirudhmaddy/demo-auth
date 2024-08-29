import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        poppins: ['var(--font-poppins)'],
        montserrat: ['var(--font-montserrat)'],
        dmsans: ['var(--font-dmsans)'],
        ubuntu: ['var(--font-ubuntu)'],
        arima: ['var(--font-arima)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
export default config;
