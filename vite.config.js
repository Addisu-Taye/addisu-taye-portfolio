// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Defines the Vite configuration
export default defineConfig(({ command }) => {
  const isProduction = command === 'build'; // Check if the command is 'build'
  const base_path = isProduction ? '/addisu-taye-portfolio/' : '/';

  return {
    base: base_path,
    plugins: [react()],
    build: {
      rollupOptions: {
        // This external configuration tells Rollup to treat any path
        // that starts with our 'base_path' as an external resource.
        // This is a common workaround for issues where Rollup incorrectly
        // tries to bundle assets referenced by absolute paths in index.html.
        external: (id) => id.startsWith(base_path),
      },
    },
  };
});