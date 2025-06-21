// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle'; // Assuming ThemeToggle is here
import LanguageToggle from './LanguageToggle'; // Assuming LanguageToggle is here

// Navbar component for navigation across the portfolio
function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-b-lg mb-8 fixed w-full z-10 top-0 transition-colors duration-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Site Title/Logo */}
        <Link to="/" className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-4 md:mb-0">
          {t('welcome')}
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 text-lg font-medium transition-colors duration-200 rounded-md p-2">
            {t('home')}
          </Link>
          {/* Note: Projects and Contact are part of the Home page for this setup */}
          <Link to="/blog" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 text-lg font-medium transition-colors duration-200 rounded-md p-2">
            {t('blog')}
          </Link>

          {/* Theme and Language Toggles */}
          <div className="flex items-center space-x-4 ml-0 md:ml-4">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;