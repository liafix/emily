import type { Config } from 'tailwindcss';
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { midnight: '#0B0A0E', obsidian: '#17121A', pearl: '#F0E9E5', rose: '#C7A4B7' },
      fontFamily: { display: ['Georgia', 'Times New Roman', 'serif'], sans: ['Arial', 'Helvetica', 'sans-serif'] },
    },
  },
  plugins: [],
} satisfies Config;
