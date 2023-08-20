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
        "c-darkgreen": "#0F1F2F",
        "c-green": "#0A2749",
        "c-lightgreen": "#1E3957",
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
        zoomOut: "zoomOut 10s ease infinite",
        translateDown: "translateDown 5s ease infinite",
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
        translateDown: {
          "0%": {
            translate: "0px 0px",
          },
          "50%": {
            translate: "0px 12px",
          },
          "100%": {
            translate: "0px 0px",
          },
        },
        zoomOut: {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(2)",
          },
        },
      },
    },
  },
  plugins: [],
};
