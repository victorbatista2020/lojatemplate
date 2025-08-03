import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Use a opção 'base' para configurar o caminho público no Vite
export default defineConfig({
  base: '/lojatemplate/',
    
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8080,
    open: true,
  },
  build: {
    target: 'esnext',
    sourcemap: true,
  },
})