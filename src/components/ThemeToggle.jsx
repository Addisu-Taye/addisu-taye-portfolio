import React from 'react';

const ThemeToggle = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button onClick={toggleTheme} className="fixed bottom-4 left-4 p-2 rounded-full shadow-lg bg-white dark:bg-gray-700">
      🌓
    </button>
  );
};

export default ThemeToggle;
