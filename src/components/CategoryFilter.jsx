// src/components/CategoryFilter.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

// Map category names to background classes
const getCategoryClass = (category) => {
  switch (category) {
    case 'All Projects': return 'bg-purple-600';
    case 'Full Stack': return 'bg-indigo-600';
    case 'Machine Learning': return 'bg-blue-600';
    case 'Web': return 'bg-green-600';
    case 'Backend': return 'bg-yellow-600';
    case 'Frontend': return 'bg-pink-600';
    case 'Mobile App': return 'bg-teal-600';
    case 'Multi Agent': return 'bg-orange-600';
    case 'AI/ML': return 'bg-red-600';
    case 'Simulation': return 'bg-gray-600';
    case 'UI/UX': return 'bg-cyan-600';
    default: return 'bg-gray-600';
  }
};

function CategoryFilter({ projects, onSelectCategory, activeCategory }) {
  const { t } = useTranslation();

  const allCategories = ['All Projects'];
  if (projects) {
    projects.forEach(project => {
      project.categories?.forEach(category => {
        if (!allCategories.includes(category)) {
          allCategories.push(category);
        }
      });
    });
  }

  return (
    <div className="flex flex-wrap justify-center gap-3 py-8 px-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-12 transition-colors duration-300">
      {allCategories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-5 py-2 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out
            ${activeCategory === category
              ? `${getCategoryClass(category)} text-white shadow-lg transform scale-105`
              : 'bg-gray-200 text-gray-700 hover:bg-purple-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-purple-900'
            }
          `}
        >
          {t(category.toLowerCase().replace(/\s+/g, '_') || category)}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;