import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // Use relative base so assets are referenced relatively. This avoids 404s
  // when the site is served from subpaths (or when Pages serves from a project page).
  base: './',
  plugins: [vue()]
})
