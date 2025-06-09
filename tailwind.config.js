/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F8F9FA',
        'secondary-background': '#E9ECEF',
        'accent-1': '#DEE2E6',
        'accent-2': '#CED4DA',
        'text-primary': '#6C757D',
        'text-secondary': '#495057',
        'text-tertiary': '#343A40',
        'text-quaternary': '#212529',
      },
      fontFamily: {
        'stint-ultra-expanded': ['Stint Ultra Expanded', 'sans-serif'],
      },
      dropShadow: {
        'shade-1': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'shade-2': '0 10px 15px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};