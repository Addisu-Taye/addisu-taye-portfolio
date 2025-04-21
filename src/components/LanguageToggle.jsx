import React from 'react';
import i18n from 'i18next';

const LanguageToggle = () => {
  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'am' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <button onClick={toggleLanguage} className="fixed bottom-4 right-4 p-2 rounded-full shadow-lg bg-white dark:bg-gray-700">
      {i18n.language === 'en' ? '🇪🇹' : '🇬🇧'}
    </button>
  );
};

export default LanguageToggle;
