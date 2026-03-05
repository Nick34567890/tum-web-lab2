/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  prefix: 'tw-',
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        deep:   '#4a3341',
        mid:    '#6d4d6e',
        purple: '#7e6991',
        muted:  '#a3a4be',
        soft:   '#e0e6e9',
        cream:  '#f5f2f0',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
