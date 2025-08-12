import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // SPA fallback - tüm route'ları index.html'e yönlendir
    historyApiFallback: true,
  },
  preview: {
    // Production preview için de aynı ayarı ekle
    historyApiFallback: true,
  }
}) 