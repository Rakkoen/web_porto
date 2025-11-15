/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme colors based on Vercel Ship branding
        primary: {
          DEFAULT: '#FFFFFF', // Monochrome white accent
          50: '#FFFFFF',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        // Dark theme specific colors
        dark: {
          primary: '#000000', // Pure black background
          secondary: '#0D0D0D', // Secondary background
          tertiary: '#1A1A1A', // Dark gradient start
          text: '#FFFFFF', // Primary text
          'text-secondary': '#CCCCCC', // Secondary text
          border: 'rgba(255, 255, 255, 0.08)', // Subtle borders
          'shadow-subtle': 'rgba(255, 255, 255, 0.05)', // Subtle light shadow
          'shadow-card': '0 4px 20px rgba(0, 0, 0, 0.6)', // Card shadow
        },
        // Keep gray scale for compatibility
        gray: {
          50: '#FFFFFF',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Söhne', 'Neue Haas Grotesk', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.6)',
        'subtle': '0 1px 3px rgba(255, 255, 255, 0.05)',
      },
      letterSpacing: {
        'tight': '0.5px', // For tech-minimal feel
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(to bottom, #1A1A1A, #000000)',
      }
    },
  },
  plugins: [],
}