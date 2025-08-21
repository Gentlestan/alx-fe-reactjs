import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react({
      // 👇 allow JSX in .js files
      babel: {
        plugins: [],
      },
      include: [/\.jsx?$/], // matches .js and .jsx
    }),
    tailwindcss(),
  ],
})
