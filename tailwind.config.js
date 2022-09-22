/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: media, // or 'media' or 'false'

  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        body: "#17171F",
        "selected-text": "#A3A3FF",
        theme: "#3f3fff",
        nav: "#404053",
        secondary: "#9191a4",
        badge: "#3f3f51",
        "badgewhite": "#3f3fff",
        "input-border": "#565666",
        input: "#2a2a35",
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
