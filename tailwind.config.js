/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        hero: "calc(100vh - 104px)",
      },
      colors: {
        primary: "#09152d",
        secondary: '#5ad4d7',
      },
      backgroundImage: {
        'hero': 'url("/images/card-bg-2.jpg")',
        'how-works': 'url("/images/card-2.jpg")',
        'contact': 'url("/images/card-3.jpg")',
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        urbanist: ["var(--font-urbanist)"],
      },
    },
  },
};

