import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import vueJsx from '@vitejs/plugin-vue-jsx'
import checker from 'vite-plugin-checker'
import { consoleFormat } from '@szhou/script-tools'
import * as path from 'path'

consoleFormat()

// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(),
  // base: '/assets/temp',
  // base: '/csd/dist/build/h5',
  publicDir: path.resolve(__dirname, './public'),
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
    port: 8443,
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
  // define: {
  //   'process.env.MODE_ENV': JSON.stringify(process.env.MODE_ENV),
  // },
})
