/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cairo': ['Cairo', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#B572E8',
          secondary: '#B49EF4',
          accent: '#B2C9FF',
          surface: '#FDFDFD',
          base: '#E6E6E6',
          ink: '#2C2844',
          inkMuted: '#4C4672',
          inkSubtle: '#7D78A2',
          brown: '#2C2844',
          orange: '#B2C9FF',
          gold: '#B49EF4',
          blue: '#B2C9FF',
          offwhite: '#E6E6E6',
          beige: '#FDFDFD',
          purple: '#B49EF4',
          purpleMedium: '#B49EF4',
          purpleLight: '#D2E0FF',
          pink: '#B49EF4',
          pinkAccent: '#B572E8',
          blueViolet: '#B2C9FF',
          blueLight: '#D2E0FF',
          textDark: '#2C2844',
          textSecondary: '#4C4672',
          textLight: '#7D78A2',
        }
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle, #F2F7FF 0%, #D2E0FF 55%, #B2C9FF 100%)',
        'soft-flow': 'linear-gradient(135deg, rgba(180, 158, 244, 0.35) 0%, rgba(178, 201, 255, 0.4) 45%, rgba(210, 224, 255, 0.55) 100%)',
        'soft-sheen': 'linear-gradient(135deg, rgba(181, 114, 232, 0.2) 0%, rgba(178, 201, 255, 0.25) 50%, rgba(210, 224, 255, 0.5) 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}