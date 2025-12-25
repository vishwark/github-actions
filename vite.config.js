import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Determine base URL for GitHub Pages
// If VITE_BASE_URL is set, use it; otherwise default to /github-actions/ for GitHub Pages
const getBaseUrl = () => {
  if (process.env.VITE_BASE_URL) {
    return process.env.VITE_BASE_URL
  }
  // Default to /github-actions/ for GitHub Pages deployment
  return '/github-actions/'
}

// https://vite.dev/config/
export default defineConfig({
  base: getBaseUrl(),
  plugins: [react()],
  define: {
    // Expose environment variables globally
    __API_ENDPOINT__: JSON.stringify(process.env.VITE_API_ENDPOINT || 'https://api.example.com'),
    __ENVIRONMENT__: JSON.stringify(process.env.VITE_ENVIRONMENT || 'development'),
  },
})
