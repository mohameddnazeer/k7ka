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
          brown: '#5A3825',
          orange: '#C96A3D',
          gold: '#E0A96D',
          blue: '#2E4A62',
          offwhite: '#F7F3EF',
          beige: '#EFE6DD',
          purple: '#5A3825',
          purpleMedium: '#7A4D35',
          purpleLight: '#F3EFEA',
          pink: '#C96A3D',
          pinkAccent: '#C96A3D',
          blueViolet: '#2E4A62',
          textDark: '#3b2a1e',
          textSecondary: '#5A3825',
        }
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle, #EFE6DD, #F7F3EF)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}