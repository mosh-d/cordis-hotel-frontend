// vite.config.gh.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/cordis-hotel-frontend/',
  plugins: [react()],
});