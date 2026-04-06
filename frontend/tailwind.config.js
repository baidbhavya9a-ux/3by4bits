/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary':    '#0A0F1E',
        'bg-secondary':  '#111827',
        'bg-tertiary':   '#1E293B',
        'bg-card':       '#141B2D',
        'blue-primary':  '#1A56DB',
        'purple-main':   '#7C3AED',
      },
      fontFamily: {
        display: ['Space Mono', 'monospace'],
        body: ['Inter', 'sans-serif'],
        code: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'sonar': 'sonar-ring 2s ease-out infinite',
        'slide-up': 'slideUp 0.3s ease-out',
        'fade-in': 'fadeIn 0.2s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'sonar-ring': {
          '0%':   { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
        'slideUp': {
          '0%':   { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',     opacity: '1' },
        },
        'fadeIn': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'glow': {
          '0%':   { boxShadow: '0 0 5px rgba(26, 86, 219, 0.4)' },
          '100%': { boxShadow: '0 0 20px rgba(26, 86, 219, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};
