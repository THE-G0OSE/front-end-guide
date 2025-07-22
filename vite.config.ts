import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss(), visualizer()],
  resolve: {
    alias: {
      "@hooks": path.resolve(__dirname, "./src/shared/lib/hooks"),
      "@utils": path.resolve(__dirname, "./src/shared/lib/utils"),
      "@": path.resolve(__dirname, "./src")
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: { 
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['motion'],
          axios: ['axios'],
          redux: ['react-redux', '@reduxjs/toolkit'],
          react_three: ['@react-three/fiber', '@react-three/drei'],
          three: ['three']
        }
      }
    }
  }
})
