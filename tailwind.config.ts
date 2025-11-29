import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            lineHeight: '1.75',
            'code': {
              fontSize: '0.9em',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            'pre': {
              fontSize: '14px',
              lineHeight: '1.6',
              padding: '1.25rem 1.5rem',
            },
            'pre code': {
              fontSize: '14px',
              padding: '0',
            },
          },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
      },
    },
  },
  plugins: [],
} satisfies Config;

