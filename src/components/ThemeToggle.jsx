// src/components/ThemeToggle.jsx
import React, { useState, useEffect } from 'react';
import { LuSun, LuMoon } from 'react-icons/lu'; // Using lucide-react for icons

// ThemeToggle component to switch between light and dark themes
function ThemeToggle() {
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  // Effect to update the 'dark' class on the document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // Save theme preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <LuMoon className="w-5 h-5" /> // Moon icon for light theme
      ) : (
        <LuSun className="w-5 h-5" /> // Sun icon for dark theme
      )}
    </button>
  );
}

export default ThemeToggle;