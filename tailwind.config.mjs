/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,md,mdx,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#EFF1FF',
        ink: '#F8FAFC',
        muted: '#94A3B8',
        line: '#2E344D',
        surface: '#0B1120',
        surface2: '#111827',
        signal: {
          DEFAULT: '#7C3AED',
          dark: '#6366F1',
        },
      },
      boxShadow: {
        glow: '0 24px 120px rgba(124, 58, 237, 0.14)',
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          '"SFMono-Regular"',
          '"JetBrains Mono"',
          'Menlo',
          'Consolas',
          '"Liberation Mono"',
          'monospace',
        ],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
