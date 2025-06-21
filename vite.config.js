// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  const isProduction = command === 'build';

  return {
    // This MUST match your GitHub repository name
    // Example: if your repo is 'addisu-taye-portfolio', then use '/addisu-taye-portfolio/'
   base: isProduction ? '/addisu-taye-portfolio/' : '/',
    plugins: [react()],
  };
});