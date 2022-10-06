import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import unoCSS from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  optimizeDeps: { include: ['firebase/app', 'firebase/firestore'] },
  plugins: [
    unoCSS({
      presets: [
        presetUno(),
        presetIcons(),
        presetAttributify(),
      ],
    }),
    autoImport(),
    Components(),
    vue(),
  ],

})
