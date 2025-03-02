import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: '/Ajith-Profile/',
  resolve: {
    extensions: ['.js', '.jsx'], // 👈 Ensure Vite resolves .jsx correctly
  },
  server: {
    mimeTypes: {
      'text/jsx': ['js', 'jsx'], // 👈 Force Vite to serve JSX as JavaScript
    },
  },
})
  