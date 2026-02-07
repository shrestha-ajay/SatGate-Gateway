import { defineConfig } from 'vite';

export default defineConfig({
  // Base must match the repository name for GitHub Pages
  base: '/SatGate-Gateway/',
  define: {
    // This explicitly defines the process object for the browser
    'process.env': {
      API_KEY: JSON.stringify(process.env.API_KEY || '')
    }
  },
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