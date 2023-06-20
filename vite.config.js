import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'

let UrlArray
if (process.platform === 'win32') {
  UrlArray = __dirname.split('\\')
} else {
  UrlArray = __dirname.split('/')
}
const finalPath = UrlArray.slice(Math.max(UrlArray.length - 3, 0)).join('/')

export default defineConfig(({ command, mode }) => {
  if (mode === 'development') {
    return {
      base: `/${finalPath}/`,
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
      base: `/${finalPath}/dist`,
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

