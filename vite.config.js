import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: './',
  plugins: [vue()],
  server: {
    proxy: {
      '/products': 'http://localhost:4000'
    },
    allowedHosts: ['vena-nonperishing-nongregariously.ngrok-free.dev']
  }
})