import { defineConfig } from 'vite';

export default defineConfig({
  // Base must match the repository name for GitHub Pages
  base: '/SatGateway-Gateway/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
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