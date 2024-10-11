import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import vueJsx from '@vitejs/plugin-vue-jsx'
import checker from 'vite-plugin-checker'

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
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/uni.scss";',
      },
    },
  },
})
