import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ProfileSection = () => (
  <section className="flex flex-col items-center text-center py-16 px-6 sm:px-10 bg-white dark:bg-gray-900 transition-colors duration-300">
    {/* Profile Image */}
    <img
      src="https://github.com/addisu-taye.png"
      alt="Addisu Taye Profile"
      className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-700 shadow-md hover:scale-105 transition-transform duration-300"
    />

    {/* Name */}
    <h1 className="text-4xl font-extrabold mt-6 text-gray-800 dark:text-white">
      Addisu Taye
    </h1>

    {/* Animated Typing Text */}
    <div className="mt-2 h-6 text-lg text-blue-600 dark:text-blue-400 font-mono overflow-hidden border-r-2 border-blue-600 dark:border-blue-400 whitespace-nowrap animate-typing">
      Full-Stack Software Engineer | 10+ Years of Experience
    </div>

    {/* Short Bio */}
    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-xl">
      Passionate about scalable, user-centric solutions in mobile, web, and cloud development.
    </p>

    {/* Categorized Skills */}
    <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-left w-full max-w-5xl px-6 sm:px-12">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">🚀 Frontend</h3>
        <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
          <li>Flutter (Mobile & Web)</li>
          <li>React, Tailwind CSS</li>
          <li>HTML, CSS, JavaScript</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">🧠 Backend</h3>
        <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
          <li>Django, FastAPI</li>
          <li>RESTful APIs, JWT, Firebase</li>
          <li>PostgreSQL, MySQL</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">☁️ Cloud & DevOps</h3>
        <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
          <li>AWS (EC2, S3, RDS, Lambda)</li>
          <li>Docker, Nginx</li>
          <li>CI/CD, GitHub Actions</li>
        </ul>
      </div>
    </div>

    {/* Social Icons */}
    <div className="flex mt-8 space-x-6">
      <a
        href="https://github.com/addisu-taye"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/addisu-taye"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
    </div>

    {/* CTA */}
    <a
      href="#projects"
      className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
    >
      View My Work
    </a>
  </section>
);

export default ProfileSection;
