const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        0.5: "0.5px",
        1.5: "1.5px",
      },
      aspectRatio: {
        rect: "2 / 1",
        "4/3": "4 / 3",
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    plugin(function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("in", "&_");
    }),
  ],
};
