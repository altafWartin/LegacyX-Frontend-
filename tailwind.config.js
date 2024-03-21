/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background:  "#171719",
        
        gray: {
          100: "#262629",
          200: "#171719",
          300: "#141414",
          400: "#070506",
          500: "rgba(255, 255, 255, 0.4)",
          600: "rgba(255, 255, 255, 0.08)",
          700: "rgba(255, 255, 255, 0.3)",
          800: "rgba(255, 255, 255, 0.87)",
        },
        white: "#fff",
        gainsboro: {
          100: "#e6e6e6",
          200: "rgba(230, 230, 230, 0.3)",
        },
      },
      spacing: {},
      fontFamily: {
        gilroy: "Gilroy",
      },
      borderRadius: {
        xl: "20px",
        "lg-3": "18.3px",
        "3xs": "10px",
        sm: "14px",
      },
    },
    fontSize: {
      "xs-7": "0.731rem",
      "2xs-8": "0.675rem",
      "7xl": "1.625rem",
      "2xl": "1.313rem",
      "3xs-4": "0.588rem",
      lg: "1.125rem",
      "19xl": "2.375rem",
      "11xl": "1.875rem",
      "4xl": "1.438rem",
      base: "1rem",
      "3xl": "1.375rem",
      xs: "0.75rem",
      inherit: "inherit",
    },
    screens: {
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
