import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

// Determine the environment
const isNode = process.env.NODE_ENV === 'node';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      // Use Node.js functions if in a Node.js environment, else use browser-compatible functions
      '@': isNode
        ? path.join(__dirname, 'src') // Use Node.js path.join for file paths
        : new URL('./src', import.meta.url).pathname, // Use browser-compatible URL
    },
  }
})

// alias: {
//   '@': fileURLToPath(new URL('./src', import.meta.url))
// }