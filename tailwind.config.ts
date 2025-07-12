import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neonGreen: '#00ffae',
        neonPink: '#ff0099',
        neonBlue: '#00d4ff',
        darkBg: '#0a0a0a',
        darkCard: '#131313',
        darkBorder: '#2a2a2a',
      },
      fontFamily: {
        display: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
        sans: ['var(--font-sans)'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;