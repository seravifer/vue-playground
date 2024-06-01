module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#262638",
        neutrals: {
          10: "#F9F9FB",
          300: "#A8A8C8",
        },
      },
      boxShadow: {
        custom: "0px 1px 3px 0px #D6D5DB33",
        "custom-2": "0px 1px 3px 0px #9E9EA333",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
