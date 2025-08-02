import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// const isGitHubPages = process.env.GITHUB_PAGES === 'true';

// https://vitejs.dev/config/
export default defineConfig({
  // base: isGitHubPages ? '/cordis-hotel-frontend/' : '/',
  base: '/',
  plugins: [react()],
})
