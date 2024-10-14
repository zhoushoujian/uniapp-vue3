import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import vueJsx from '@vitejs/plugin-vue-jsx'
import checker from 'vite-plugin-checker'
import { consoleFormat } from '@szhou/script-tools'

consoleFormat()

// https://vitejs.dev/config/
export default defineConfig({
  // root: './src',
  root: process.cwd(),
  plugins: [
    uni(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    checker({
      vueTsc: true,
      overlay: false,
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 8888,
    strictPort: true,
    open: `/`,
    hmr: {
      overlay: false,
    },
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/uni.scss";',
      },
    },
  },
})
