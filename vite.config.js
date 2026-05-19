import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages project site: https://<user>.github.io/<repo>/
// CI sets GITHUB_REPOSITORY to "owner/repo" — base must match the repo segment.
const repoSegment =
  process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'design-system'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? `/${repoSegment}/` : '/',
  plugins: [react(), tailwindcss()],
})
