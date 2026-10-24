import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

const srcDir = fileURLToPath(new URL('./src', import.meta.url))
const abstractsDir = fileURLToPath(new URL('./src/styles/abstracts', import.meta.url)).replace(
  /\\/g,
  '/',
)
const productsProxy = {
  '/api/products': {
    target: 'https://app.econverse.com.br',
    changeOrigin: true,
    rewrite: () => '/teste-front-end/junior/tecnologia/lista-produtos/produtos.json',
  },
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': srcDir,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${abstractsDir}" as *;\n`,
      },
    },
  },
  server: {
    proxy: productsProxy,
    watch: {
      usePolling: true,
      interval: 1000,
      ignored: ['**/node_modules/**', '**/.git/**', '**/.husky/**', '**/tests/**'],
    },
  },
  preview: {
    proxy: productsProxy,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.ts'],
    include: ['tests/**/*.test.{ts,tsx}'],
    restoreMocks: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/main.tsx', 'src/**/*.d.ts'],
    },
  },
})
