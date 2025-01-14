import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  publicDir: 'public', // 默认值，确保没有被改动
  plugins: [react()],
})
