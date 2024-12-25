import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') //fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: path.resolve(__dirname, '../dist') // Utilise __dirname pour définir le chemin absolu
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: false
  }
})
