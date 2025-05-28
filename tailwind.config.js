/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Covers all files in src
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#FFFFFF',
        'secondary-background': '#F7F7F8',
        'accent-1': '#E6ECEF',
        'accent-2': '#D3DEE5',
        'text-primary': '#333336',
        'text-secondary': '#A0A0A5',
      },
      fontFamily: {
        'stint-ultra-expanded': ['Stint Ultra Expanded', 'sans-serif'],
      },
      dropShadow: {
        'shade-1': '0 4px 6px rgba(0, 0, 0, 0.1)', // Custom drop-shadow for shade-1
        'shade-2': '0 10px 15px rgba(0, 0, 0, 0.15)', // Custom drop-shadow for shade-2
      },
    },
  },
  plugins: [],
};