import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['.ddev.site'], // wildcard for DDEV hostnames
  },
}))