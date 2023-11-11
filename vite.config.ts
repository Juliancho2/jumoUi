/// <reference types="vitest"/>
/// <reference types="vite/client"/>

import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS()],
  test: {
    environment: 'jsdom',
    globals: true
  }
});
