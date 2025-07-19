/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',                    // if you have a public/index.html
    './src/**/*.{js,jsx,ts,tsx}', // all JS/TSX files in your src folder
  ],
  theme: {
    extend: {
      // Design System Colors
      colors: {
        cordisEmphasis: 'var(--cordis-emphasis)',
        cordisLightGray: 'var(--cordis-light-gray)',
        cordisAccent: 'var(--cordis-accent)',
        cordisBlack: 'var(--cordis-black)',
        cordisWhite: 'var(--cordis-white)',
        cordisTextColor: 'var(--cordis-text-color)',
        cordisGray: 'var(--cordis-gray)',
        primary: 'var(--cordis-emphasis)',
        secondary: 'var(--cordis-accent)',
        gray: {
          50: 'var(--color-gray-50)',
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)',
        }
      },
      fontFamily: {
        sans: ['Cambay', 'ui-sans-serif', 'system-ui'],
        serif: ['Cormorant', 'serif'],
        primary: 'var(--font-family-primary)',
        secondary: 'var(--font-family-secondary)',
        cambay: ['Cambay', 'sans-serif'],
        cormorant: ['Cormorant', 'serif'],
      },
      fontSize: {
        'xs': 'var(--text-xs)',      /* 12px */
        'sm': 'var(--text-sm)',      /* 14px */
        'base': 'var(--text-base)',  /* 16px */
        'lg': 'var(--text-lg)',      /* 18px */
        'xl': 'var(--text-xl)',      /* 20px */
        '2xl': 'var(--text-2xl)',    /* 24px */
        '3xl': 'var(--text-3xl)',    /* 30px */
        '4xl': 'var(--text-4xl)',    /* 36px */
        '5xl': 'var(--text-5xl)',    /* 48px */
        '6xl': 'var(--text-6xl)',    /* 60px */
      },
      spacing: {
        '1': 'var(--space-1)',
        '2': 'var(--space-2)',
        '3': 'var(--space-3)',
        '4': 'var(--space-4)',
        '5': 'var(--space-5)',
        '6': 'var(--space-6)',
        '8': 'var(--space-8)',
        '10': 'var(--space-10)',
        '12': 'var(--space-12)',
        '16': 'var(--space-16)',
        '20': 'var(--space-20)',
        '24': 'var(--space-24)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        'full': 'var(--radius-full)',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
      },
      transitionDuration: {
        'fast': 'var(--transition-fast)',
        'normal': 'var(--transition-normal)',
        'slow': 'var(--transition-slow)',
      },
      zIndex: {
        'dropdown': 'var(--z-dropdown)',
        'sticky': 'var(--z-sticky)',
        'fixed': 'var(--z-fixed)',
        'modal-backdrop': 'var(--z-modal-backdrop)',
        'modal': 'var(--z-modal)',
        'popover': 'var(--z-popover)',
        'tooltip': 'var(--z-tooltip)',
      }
    },
  },
  plugins: [],
}