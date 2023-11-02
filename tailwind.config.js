/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "beta-mobile": "url('/shared/mobile/bg-beta.jpg')",
        "beta-desktop": "url('/shared/desktop/bg-beta.jpg')",
        "beta-tablet": "url('/shared/tablet/bg-beta.jpg')",
      },
      colors: {
        peachBlush: "#FFC593",
        mauveRose: "#BC7198",
        sapphireBlue: "#5A77FF",
        offWhite: "#999999",
        lightGray: "#DFDFDF",
      },
      fontSize: {
        "custom-12": "0.75rem",
        "custom-13": "0.815rem",
        "custom-15": "0.9375rem",
        "custom-18": "1.125rem",
        "custom-24": "1.5rem",
        "custom-32": "2rem",
        "custom-40": "2.5rem",
      },
      letterSpacing: {
        wide: "0.125rem",
        widest: ".208rem",
      },
      lineHeight: {
        25: "25px",
        40: "40px",
      },
    },
  },
  plugins: [],
};
