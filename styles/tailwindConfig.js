const defaultTheme = require("tailwindcss/defaultTheme");
const radixColors = require("@radix-ui/colors");

const colorsObjectsArray = Object.entries(radixColors).map(([key, value]) => {
  const color = {};
  color[key] = Object.entries(value).reduce((acc, [key, value]) => {
    const number = key.replace(new RegExp("^[a-zA-z]+"), "");
    acc[number] = value;
    return acc;
  }, {});
  return color;
});

const colors = colorsObjectsArray.reduce(
  (acc, color) => ({ ...acc, ...color }),
  {}
);

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["{app,pages,components,lib}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
      },
    },
    colors,
  },
  safelist: [
    "!duration-0",
    "!delay-0",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwindcss-brand-colors"),
    require("taos/plugin"),
  ],
};
