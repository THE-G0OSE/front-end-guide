import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()], // Добавил плагин tailwindcss
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src") // Всё ради красивых импортов
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {     // Сразу разбил приложение на чанки
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['motion'],
          axios: ['axios'],
          redux: ['react-redux']
        }
      }
    }
  }
})
