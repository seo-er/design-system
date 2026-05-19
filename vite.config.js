import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages: 저장소 이름이 다르면 base 경로를 맞춰 주세요 (예: '/my-repo/')
const repoName = 'design-system-app'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? `/${repoName}/` : '/',
  plugins: [react(), tailwindcss()],
  base: '/design-system-core/',
})
