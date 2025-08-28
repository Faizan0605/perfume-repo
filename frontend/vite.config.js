import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 5173, // your React port
    proxy: {
      '/api': {
        target: 'http://localhost:5221', // backend port
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
