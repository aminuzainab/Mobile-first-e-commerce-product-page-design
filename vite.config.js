import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Mobile-first-e-commerce-product-page-design/",

  server: {
    watch: {
      // ignore editor temp files, system files and node_modules to reduce noisy HMR events
      ignored: ['**/node_modules/**', '**/.git/**', '**/*.swp', '**/*~', '**/.DS_Store']
    }
  }
})
