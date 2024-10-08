import { reactRouter } from '@react-router/dev/vite'
import tailwind from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => ({
  build: {
    cssMinify: mode === 'production',
    minify: mode === 'production',
  },
  plugins: [tsconfigPaths(), reactRouter(), tailwind()],
}))
