module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      "primary": "#151515",
      "secondary": "#301B3F",
      "tertiary": "#3C415C",
      "quaternary": "#B4A5A5",
      "light": "#FFFFFF",
      "dark": "#000000",
      "transparent": "#FFFFFF00",
    }
  },
  variants: {
    extend: {},
  }
}
