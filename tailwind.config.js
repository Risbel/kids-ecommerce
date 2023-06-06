/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-kids": "#F99B7D",
        "orangeStrong-kids": "#FF865E",
        "pink-kids": "#FFAEC0",
        "ocre-kids": "#F6BA6F",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
});
