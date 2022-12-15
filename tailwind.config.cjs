/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // todos os Arquivos tsx
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image-promo': "url('https://connectparts.vteximg.com.br/arquivos/12-banner_mobile_pt.png?v=638064536425770000')",
      },
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      boxShadow: {
        'card': [],
      },

      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
        orange: {
          500: "#fb5c01",
          200: "#ffce89"
        },
        blue: {
          500: "#81D8F7",
          800: "#212529",
          900: "#171c22",
        },

        red: {
          500: "#F75A68",
        },
        green: {
          500: "#52d82e",
          600: "#28bc2b",
        },
        gray: {
          50: "#f1f1f1",
          100: "#dee2e6",
          200: "#C4C4CC",
          300: "#8D8D99",
          500: "#323238",
          600: "#29292E",
          700: "#121214",
          900: "#09090A",
        },
      boxShadow: {
        "luz": "box-shadow: 0 2px 10px 0 #fb5c01;"
      }
      },
    },
  },
  plugins: [],
};
