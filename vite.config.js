import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import blogPages from './blog-pages.js';

export default defineConfig({
  plugins: [react(), blogPages()],
});
