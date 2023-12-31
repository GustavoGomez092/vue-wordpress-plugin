const { scopedPreflightStyles } = require('tailwindcss-scoped-preflight');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    scopedPreflightStyles({
      cssSelector: '#WPVue',
    }),
  ],
}

