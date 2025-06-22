// src/components/CategoryFilter.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

// CategoryFilter component for filtering projects by category
function CategoryFilter({ projects, onSelectCategory, activeCategory }) {
  const { t } = useTranslation();

  // Extract all unique categories from the projects data
  const allCategories = ['All Projects']; // Start with 'All Projects'
  if (projects) {
    projects.forEach(project => {
      if (project.categories) {
        project.categories.forEach(category => {
          if (!allCategories.includes(category)) {
            allCategories.push(category);
          }
        });
      }
    });
  }

  // Define a mapping for translation keys.
  // This allows displaying user-friendly translated names for categories
  // while keeping the internal category logic consistent.
  const categoryTranslationMap = {
    'All Projects': 'all_projects',
    'Full Stack': 'full_stack',
    'Machine Learning': 'machine_learning',
    'Web': 'web',
    'Backend': 'backend',
    'Frontend': 'frontend',
    'Mobile App': 'mobile_app',
    'Multi Agent': 'multi_agent',
    'AI/ML': 'ai_ml',
    'Simulation': 'simulation',
    'UI/UX': 'ui_ux'
    // Add more mappings as needed for other categories
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 py-8 px-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-12 transition-colors duration-300">
      {allCategories.map((category) => {
        // Get the translation key, or use the category name directly if no specific translation is found
        const translationKey = categoryTranslationMap[category] || category;
        const displayName = t(translationKey);

        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-5 py-2 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out
              ${activeCategory === category
                ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-purple-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-purple-900'
              }
            `}
          >
            {displayName}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;