/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#599EEA",
      purple: "#844FF6",
      green: "#0FB77A",
      lightOrange: "#FAB70A",
      gradientOrange: "#FFDDCD",
      orangeDefault: "#FF5403",
      orange: "#F09468",
      gray0: "#EFF1F6",
      gray400: "#56616B",
      gray500: "#31373D",
    },
    extend: {
      fontFamily: {
        sohne: ['var(--font-sohne)']
      }
  
    }
  },
  plugins: [],
};
