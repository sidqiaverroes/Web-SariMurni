/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "c-darkgreen": "#063427",
        "c-green": "#06543C",
        "c-lightgreen": "#38785D",
        "c-darkergold": "#926F2F",
        "c-darkgold": "#AF8C4A",
        "c-gold": "#C4A15D",
        "c-gold2": "#D4BF66",
        "c-lightgold": "#F4E896",
      },
      backgroundImage: {
        "hero-image": "url('/hero-img.png')",
        "komoditas-image": "url('/komoditas-img.png')",
      },
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%": {
            "background-size": "200% 200%",
            "background-position": "0%",
          },
          "100%": {
            "background-size": "200% 200%",
            "background-position": "200%",
          },
        },
      },
    },
  },
  plugins: [],
};
