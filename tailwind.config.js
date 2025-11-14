// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const nativewindPreset = require("nativewind/preset");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.js"
  ],
  // use whatever the require returned (it may be a function or object)
  presets: [nativewindPreset],
  theme: {
    extend: {},
  },
  plugins: [],
};
