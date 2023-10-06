import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: [
      {
          find: /@\/components\/((?!.*[.](ts|js|tsx|jsx|vue)$).*$)/,
          replacement: fileURLToPath(
              new URL("./src/components/$1/index.vue", import.meta.url)
          ),
      },
      {
          find: "@",
          replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ]
  },
  test: {
    coverage: {
      provider: 'istanbul', // or 'v8'
      reporter: ['text', 'json', 'html'],
    },
  },
})
