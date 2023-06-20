import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/main.js'),
      name: 'vue-wp',
      // the proper extensions will be added
      fileName: 'vue-wp',
    },
    outDir: './dist/dist'
  },
  define: {
    'process.env': {}
  },
  plugins: [vue()],
  server: {
    port: 5173
  }
})
