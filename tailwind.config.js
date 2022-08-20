/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#F7F7F7",
          secondary: "#F7F7F8",
          accent: "#202124",
          neutral: "#637381",
          "bg-main": "#FFFFFF",
          info: "#564FB1",
          success: "#1BBB70",
          warning: "#DF7E07",
          error: "#FA5C5C",
        },
      },
      {
        dark: {
          primary: "#17181B",
          secondary: "#17181B",
          accent: "#202124",
          neutral: "#F3F4F6",
          "bg-main": "#17181B",
          info: "#98A8DD",
          success: "#1BBB70",
          warning: "#F59E0B",
          error: "#FB7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
