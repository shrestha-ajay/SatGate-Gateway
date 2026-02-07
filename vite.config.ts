import { defineConfig } from 'vite';

export default defineConfig({
  // IMPORTANT: This must match your GitHub repository name
  base: '/SatGate-Gateway/',
  define: {
    // Shims process.env to prevent ReferenceErrors in the browser
    'process.env': {}
  },
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