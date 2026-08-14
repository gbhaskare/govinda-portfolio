export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#111113',
        muted: 'rgba(255,255,255,0.08)',
        accent: {
          DEFAULT: '#6EE7FF', // cyan-ish accent
          deep: '#60A5FA',
        },
      },
      boxShadow: {
        'soft-lg': '0 10px 30px rgba(2,6,23,0.6)',
      },
      keyframes: {
        'float': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
      },
    },
  },
  plugins: [],
};
