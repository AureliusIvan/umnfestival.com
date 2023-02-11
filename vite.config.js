import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePluginFonts } from 'vite-plugin-fonts'
// import 'virtual:index.scss';
// import "./src/Asset/Font/Rocket Vintage.ttf"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    // VitePluginFonts([
    //   './src/Asset/Font/Rocket Vintage.ttf',
    //   './src/Asset/Font/Louis George Cafe.ttf',
    // ])
  ],
})
