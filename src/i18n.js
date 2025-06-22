// src/i18n.js
// Configuration for i18next, a popular internationalization framework for JavaScript.
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 1. Initialize i18n instance immediately.
// It will have default/empty resources until data.json is loaded.
i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources: {}, // Start with empty resources
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if the selected one is not available
    interpolation: {
      escapeValue: false // React already escapes values, so no need for i18next to do it
    }
  })
  .catch(error => {
    console.error("Initial i18n setup failed:", error);
  });

// 2. Function to load translations from data.json asynchronously.
// This will be called from main.jsx and waited upon.
const loadTranslations = async () => {
  try {
    const response = await fetch('/data.json'); // Adjust path if data.json is elsewhere
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Add fetched resources to the already initialized i18n instance
    if (data.i18n) {
      Object.keys(data.i18n).forEach(lang => {
        i18n.addResourceBundle(lang, 'translation', data.i18n[lang].translation, true, true);
      });
      // Optionally change language to a default if the current one isn't in fetched bundles
      if (!i18n.hasResourceBundle(i18n.language, 'translation')) {
        i18n.changeLanguage('en');
      }
    }
  } catch (error) {
    console.error("Failed to fetch translation resources:", error);
    // Even if fetch fails, i18n instance is still initialized with fallback,
    // so the app can render without crashing due to i18n issues.
  }
};

// Export the i18n instance directly and the async loading function
export { loadTranslations };
export default i18n; // Export the i18n instance for I18nextProvider