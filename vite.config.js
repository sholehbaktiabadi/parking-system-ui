import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDotenv } from 'dotenv'
configDotenv()
export default defineConfig({
  plugins: [react()],
  server: {
    port: +process.env.VITE_APP_PORT,
    strictPort: true,
    host: true
  },
  preview: {
    port: +process.env.VITE_APP_PORT,
    strictPort: true
  },
})
