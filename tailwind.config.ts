import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBg: '#111111',
        darkCard: '#1C1C1E',
        darkBorder: '#2a2a2a',
        neonGreen: '#39FF14',
        neonBlue: '#00d4ff',
        neonPink: '#ff0099',
        textPrimary: '#FFFFFF',
        textMuted: '#EAEAEA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        neonGreen: '0 0 12px #39FF14',
        neonBlue: '0 0 12px #00d4ff',
        neonPink: '0 0 12px #ff0099',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
      },
    },
  },
  plugins: [],
};

export default config;