/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["K2D", "Regular"],
      },
      colors: {
        // primary: "#0049DC",
        primary: {
          50: "#77A3DE",
          DEFAULT: "#224A94", // This is for bg-primary and text-primary
          400: "#5986D9", // For bg-primary-400 and text-primary-500
          600: "#18397F", // For bg-primary-400 and text-primary-500
        },
        footer: "#E2EEFF",
        secondary: "#33FF57",
        dark: "#151515",
        zDark: "#0A0A0A",
        muted: "#8c8c8c",
      },
      backgroundImage: {
        "slide-1":
          "url('https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        "slide-2":
          "url('https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        // "footer-texture": "url('/img/footer-texture.png')",
        glass: "rgba(255, 255, 255, 0.27)",
        "bg-1": "./src/assets/images/bg-1.jpg",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".bg-glass": {
          // background: "rgba(255, 255, 255, 0.27)",
          background: "rgb(5 9 158 / 82%)",
          // backdropFilter: "blur(4.9px)",
          WebkitBackdropFilter: "blur(4.9px)",
        },
      });
    },
  ],
};
