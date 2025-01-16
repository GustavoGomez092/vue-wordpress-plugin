const { scopedPreflightStyles, isolateInsideOfContainer } = require('tailwindcss-scoped-preflight');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,vue}',
  ],
  prefix: 'tw-',
  theme: {
    extend: {},
  },
  plugins: [
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer('.Sauron'),
    }),
  ],
}

