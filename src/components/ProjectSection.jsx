// src/components/ProjectSection.jsx
import React from 'react';
import ProjectCard from './ProjectCard';

// ProjectSection component displays a grid of projects
function ProjectSection({ projects }) {
  if (!projects || projects.length === 0) {
    return <div className="text-center py-10 text-gray-500 dark:text-gray-400">No projects to display.</div>;
  }

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 rounded-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
          My <span className="text-purple-600">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;