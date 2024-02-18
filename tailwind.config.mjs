/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // bg: "#121317",
        // bg: "#1f1f1f",
        bg: "#19191B",
        title: "#979B8D",
        subtitle: "#C2410C",
        link: "#54b9ff"
      },
      fontFamily: {
        readex: "Readex Pro",
        nabla: "Nabla",
        nunito: "Nunito",
        ubuntu: "Ubuntu Mono",
      },
      dropShadow: {
        up: "0 -5px 5px #131414",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
