import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'

let UrlArray
if (process.platform === 'win32') {
  UrlArray = __dirname.split('\\')
} else {
  UrlArray = __dirname.split('/')
}

export default defineConfig(({ command, mode }) => {
  if (mode === 'development') {
    return {
      resolve: {
        alias: [
          { find: '@', replacement: path.resolve(__dirname, 'src') }
        ]
      },
      build: {
        lib: {
          // Could also be a dictionary or array of multiple entry points
          entry: resolve(__dirname, 'src/main.js'),
          name: 'vue-wp',
          // the proper extensions will be added
          fileName: 'vue-wp',
        },
      },
      define: {
        'process.env': {}
      },
      plugins: [vue()],
      server: {
        port: 5173
      }
    }
  }
  if (mode === 'production') {
    return {
      resolve: {
        alias: [
          { find: '@', replacement: path.resolve(__dirname, 'src') }
        ]
      },
      build: {
        lib: {
          // Could also be a dictionary or array of multiple entry points
          entry: resolve(__dirname, 'src/main.js'),
          name: 'vue-wp',
          // the proper extensions will be added
          fileName: 'vue-wp',
        },
      },
      define: {
        'process.env': {}
      },
      plugins: [vue()],
      server: {
        port: 5173
      }
    }
  }
})

