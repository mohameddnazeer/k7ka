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
          primary: '#A91D22',
          secondary: '#A91D22',
          accent: '#A91D22',
          surface: '#FFFFFF',
          base: '#faf9f6',
          ink: '#1F2937',
          inkMuted: '#4B5563',
          inkSubtle: '#9CA3AF',
          brown: '#1F2937',
          orange: '#A91D22',
          gold: '#A91D22',
          blue: '#1F2937',
          offwhite: '#faf9f6',
          beige: '#faf9f6',
          purple: '#A91D22',
          purpleMedium: '#A91D22',
          purpleLight: '#FEE2E2',
          pink: '#A91D22',
          pinkAccent: '#A91D22',
          blueViolet: '#1F2937',
          blueLight: '#E5E7EB',
          textDark: '#1F2937',
          textSecondary: '#4B5563',
          textLight: '#9CA3AF',
        }
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle, #faf9f6 0%, #FEE2E2 55%, #FCA5A5 100%)',
        'soft-flow': 'linear-gradient(135deg, rgba(169, 29, 34, 0.05) 0%, rgba(31, 41, 55, 0.03) 45%, rgba(250, 249, 246, 0.8) 100%)',
        'soft-sheen': 'linear-gradient(135deg, rgba(169, 29, 34, 0.1) 0%, rgba(31, 41, 55, 0.05) 50%, rgba(250, 249, 246, 0.9) 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}