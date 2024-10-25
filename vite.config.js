import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/audemysite/',  // replace 'your-repo-name' with the name of your GitHub repository
})
