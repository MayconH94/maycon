import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    open: true, // abre o navegador ao rodar npm run dev
    port: 5190, // porta própria, para não colidir com outro projeto na 5173
    strictPort: true, // se a 5190 estiver ocupada, avisa em vez de trocar sozinho
  },
})