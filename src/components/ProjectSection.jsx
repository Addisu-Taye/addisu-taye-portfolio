import React from "react";

const projects = [
  {
    title: "AI Job Assistant",
    description: "Scrapes jobs, generates resumes & cover letters, and applies automatically.",
    tech: ["React", "Django", "Ollama", "Playwright"],
    link: "#",
  },
  {
    title: "Offline Attendance App",
    description: "Flutter-based GPS attendance tracker with sync logic and admin dashboard.",
    tech: ["Flutter", "MySQL", "WorkManager"],
    link: "#",
  },
];

const ProjectSection = () => (
  <section id="projects" className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
      Projects
    </h2>
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {projects.map((p, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 hover:shadow-xl transition"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{p.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{p.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tech.map((t, i) => (
              <span
                key={i}
                className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded"
              >
                {t}
              </span>
            ))}
          </div>
          <a
            href={p.link}
            className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectSection;
