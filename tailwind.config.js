/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
    },
    colors: {
      blueC: "hsl(228, 45%, 44%)",
      // Primary
      Tomato: "hsl(4, 100%, 67%)",
      TomatoGra: "rgb(225, 38, 106)",
      // Neutral
      "Dark-Slate-Grey": "hsl(234, 29%, 20%)",
      "Charcoal-Grey": "hsl(235, 18%, 26%)",
      Grey: "hsl(231, 7%, 60%)",
      White: "hsl(0, 0%, 100%)"
    },
  },
  plugins: [],
}

