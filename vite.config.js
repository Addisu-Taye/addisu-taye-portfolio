// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Defines the Vite configuration
export default defineConfig(({ command }) => {
  return {
    base: '/',
    plugins: [react()]
  };
});