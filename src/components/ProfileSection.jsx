// src/components/ProjectSection.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next'; // Import useTranslation

// ProjectSection component displays a grid of projects
// Now accepts `selectedCategory` to filter projects
function ProjectSection({ projects, selectedCategory }) {
  const { t } = useTranslation(); // Initialize useTranslation

  if (!projects) {
    return <div className="text-center py-10 text-gray-500 dark:text-gray-400">Loading projects...</div>;
  }

  // Filter projects based on the selected category
  const filteredProjects = projects.filter(project => {
    if (selectedCategory === 'All Projects') {
      return true; // Show all projects if 'All Projects' is selected
    }
    // Check if the project has categories and if the selected category is included
    return project.categories && project.categories.includes(selectedCategory);
  });

  if (filteredProjects.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 dark:text-gray-400">
        No projects found for the selected category: "{t(selectedCategory.toLowerCase().replace(/\s/g, '_') || selectedCategory)}".
      </div>
    );
  }

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 rounded-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
          My <span className="text-purple-600">{t('projects')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;