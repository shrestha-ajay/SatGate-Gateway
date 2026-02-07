import { defineConfig } from 'vite';

export default defineConfig({
  // IMPORTANT: This must match your GitHub repository name
  base: '/SatGate-Gateway/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
  server: {
    port: 3000,
  },
});