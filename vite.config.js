import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import blogPages from './blog-pages.js';

export default defineConfig({
  plugins: [react(), blogPages()],
  // in development the forms post to the Node server (npm run dev:server)
  server: { proxy: { '/api': 'http://localhost:3000' } },
});
