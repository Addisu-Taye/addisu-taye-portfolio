import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ProfileSection = () => (
  <section className="flex flex-col items-center text-center py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
    <img
      src="https://github.com/addisu-taye.png"
      alt="Addisu Taye Profile"
      className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-700 shadow-md hover:scale-105 transition-transform duration-300"
    />
    <h1 className="text-4xl font-bold mt-6 text-gray-800 dark:text-white">Addisu Taye</h1>

    {/* Animated Typing Text */}
    <div className="mt-2 h-6 text-lg text-blue-600 dark:text-blue-400 font-mono overflow-hidden border-r-2 border-blue-600 dark:border-blue-400 whitespace-nowrap animate-typing">
      Software Engineer | Flutter | Django | Cloud Architect
    </div>

    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
      10+ Years of Experience · Passionate About Scalable, Human-Centered Solutions
    </p>

    {/* Social Icons */}
    <div className="flex mt-5 space-x-6">
      <a
        href="https://github.com/addisu-taye"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xl"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/addisu-taye"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xl"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
    </div>

    {/* Call to action */}
    <a
      href="#projects"
      className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
    >
      View My Work
    </a>
  </section>
);

export default ProfileSection;
