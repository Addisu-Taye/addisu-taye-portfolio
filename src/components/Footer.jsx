// src/components/Footer.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

// Footer component for the application
function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-white dark:bg-gray-800 shadow-t-md rounded-t-lg mt-8 py-6 text-center text-gray-600 dark:text-gray-300 transition-colors duration-300">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Addisu Taye. {t('all_rights_reserved')}
        </p>
      </div>
    </footer>
  );
}

export default Footer;