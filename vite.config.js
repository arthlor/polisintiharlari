import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/polisintiharlari/',
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    }
  }
})
