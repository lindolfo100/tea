import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.DEPLOY_BASE ?? '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon-192.png', 'icon-512.png'],
      manifest: {
        name: 'Fala Thales — Vamos conversar!',
        short_name: 'Fala Thales',
        description: 'App de comunicação com foco em diálogo para o Thales',
        lang: 'pt-BR',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#f7f9fc',
        theme_color: '#aecdf2',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
})
