// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "welcome": "Welcome to my portfolio",
          "download_resume": "Download Resume",
          // Other translations...
        }
      },
      am: {
        translation: {
          "welcome": "ሰላም ወደ ፖርትፎሊዮዬ",
          "download_resume": "ሪዙሜ እንደ PDF አስተዋይ",
          // Other translations...
        }
      }
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language in case the selected language is not available
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
