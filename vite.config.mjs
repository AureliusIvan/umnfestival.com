import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'

export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      custom: {
        families: [
          {
            name: 'Rocket Vintage',
            local: './src/Asset/Font/Rocket Vintage.ttf',
            src: './src/Asset/Font/Rocket Vintage.ttf',
          },
          {
            name: 'Louis George Cafe',
            local: './src/Asset/Font/Louis George Cafe.ttf',
            src: './src/Asset/Font/Louis George Cafe.ttf',
          }
        ],
      },
    }),
  ],
})
