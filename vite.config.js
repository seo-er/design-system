import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages: https://seo-er.github.io/design-system/
// Repository name must be "design-system" (see README).
const GITHUB_PAGES_BASE = '/design-system/'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? GITHUB_PAGES_BASE : '/',
  plugins: [react(), tailwindcss()],
}))
