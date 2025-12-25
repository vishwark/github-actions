import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_URL || '/',
  plugins: [react()],
  define: {
    // Expose environment variables globally
    __API_ENDPOINT__: JSON.stringify(process.env.VITE_API_ENDPOINT || 'https://api.example.com'),
    __ENVIRONMENT__: JSON.stringify(process.env.VITE_ENVIRONMENT || 'development'),
  },
})
