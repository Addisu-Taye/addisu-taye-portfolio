// src/components/LanguageToggle.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { LuGlobe } from 'react-icons/lu'; // Using lucide-react for icons

// LanguageToggle component to switch between English and Amharic
function LanguageToggle() {
  const { i18n } = useTranslation();

  // Function to change the language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <LuGlobe className="text-gray-700 dark:text-gray-300 text-xl" />
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300
          ${i18n.language === 'en' ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-purple-200 dark:hover:bg-gray-600'}
        `}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('am')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300
          ${i18n.language === 'am' ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-purple-200 dark:hover:bg-gray-600'}
        `}
      >
        AM
      </button>
    </div>
  );
}

export default LanguageToggle;