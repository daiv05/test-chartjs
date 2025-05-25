import { defineConfig } from 'vite';

export default defineConfig({
  root: 'estadisticas',
  server: {
    port: 5173,
    open: true
  },
  base: '/dist/',

})
