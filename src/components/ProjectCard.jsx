// src/components/ProjectCard.jsx
import React from 'react';
import { LuGithub, LuExternalLink } from 'react-icons/lu'; // Using lucide-react for icons
import { useTranslation } from 'react-i18next';

// ProjectCard component displays individual project details
function ProjectCard({ project }) {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700">
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
        // Corrected onError fallback URL
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/808080/FFFFFF?text=Project'; }}
      />
      <div className="p-6">
        {/* Project Title */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        {/* Project Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* Links to GitHub and Live Demo */}
        <div className="flex flex-wrap gap-3">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300 font-medium"
            >
              <LuGithub className="w-5 h-5" />
              <span>{t('view_on_github')}</span>
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium"
            >
              <LuExternalLink className="w-5 h-5" />
              <span>{t('view_live')}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;