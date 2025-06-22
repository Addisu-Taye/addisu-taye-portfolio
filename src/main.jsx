// src/main.jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css'; // Importing App.css for global styles including Tailwind
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter for routing context
import i18n, { loadTranslations } from './i18n'; // Import the i18n instance and the loading function
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider

// Main render function, wrapped in a component to manage i18n loading state
function MainAppWrapper() {
  const [i18nReady, setI18nReady] = useState(false);

  useEffect(() => {
    const initApp = async () => {
      try {
        await loadTranslations(); // Ensure translations are loaded
        setI18nReady(true); // Mark i18n as ready
      } catch (error) {
        console.error("Failed to initialize i18n:", error);
        // Fallback or error display if i18n initialization fails
        const rootElement = document.getElementById('root');
        if (rootElement) {
          rootElement.innerHTML = '<div style="text-align: center; color: red; padding-top: 50px;">Failed to load application due to translation issues.</div>';
        }
      }
    };

    initApp();

    // Listen for i18n's initialized event for robustness
    i18n.on('initialized', () => {
      setI18nReady(true);
    });

    // Cleanup listener on unmount (though for root, it might not unmount)
    return () => {
      i18n.off('initialized', () => {
        setI18nReady(true);
      });
    };
  }, []); // Run once on mount

  if (!i18nReady) {
    return (
      <div className="flex items-center justify-center min-h-screen text-2xl text-gray-700 dark:text-gray-300">
        Loading translations...
      </div>
    );
  }

  // Get the base URL from Vite's environment variables
  // import.meta.env.BASE_URL will be '/' in development, and '/addisu-taye-portfolio/' in production (from vite.config.js)
  const basename = import.meta.env.BASE_URL;

  return (
    <React.StrictMode>
      {/* I18nextProvider makes the i18n instance available to all components */}
      <I18nextProvider i18n={i18n}>
        {/* Router component provides routing context to the entire application */}
        {/* Pass the basename to BrowserRouter to correctly handle routing in subdirectories like GitHub Pages */}
        <Router >
          <App />
        </Router>
      </I18nextProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<MainAppWrapper />);