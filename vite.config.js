// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Defines the Vite configuration
export default defineConfig(({ command }) => {
  const isProduction = command === 'build'; // Check if the command is 'build'
  // Determine the base path based on whether it's a production build or local development
  // For GitHub Pages, this should be the repository name. For local, it's just '/'.
  const base_path = isProduction ? '/addisu-taye-portfolio/' : '/';

  return {
    // Set the base URL for the application.
    // In production, this matches the GitHub repository name for GitHub Pages deployment.
    // In development, it defaults to the root path '/'.
    base: base_path,
    // Use the React plugin for Vite, which enables React Fast Refresh and JSX transformation.
    plugins: [react()],
    // No specific Rollup options needed here for basic React/Vite/Router setup.
  };
});