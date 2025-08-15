import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Food-Delivery-app-landing-page-main/',
  plugins: [react()]
})
