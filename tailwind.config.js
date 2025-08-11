/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'driving': {
          'primary': '#DC2626',      // Kırmızı - vurgu rengi
          'secondary': '#1F2937',    // Daha koyu gri - ana arka plan
          'accent': '#111827',       // Neredeyse siyah - ikincil arka plan
          'text': '#FFFFFF',         // Beyaz - ana metin rengi
          'text-dark': '#111827',    // Koyu metin rengi
          'muted': '#6B7280',        // Orta gri - muted metin
        }
      },
    },
  },
  plugins: [],
} 