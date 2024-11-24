import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        pageBg: '#F7F9FC',
        header: '#3182CE',
        hover: '#dbeafe',
        textPrimary: '#2D3748',
        rowAlt: '#F7F9FC',
        rowBorder: '#F7F9FC',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
    daisyui: {
      themes: ['light'],
    },
  },
  plugins: [require('daisyui')],
} satisfies Config;
