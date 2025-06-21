// src/components/AboutMe.jsx
import React from 'react';

const AboutMe = () => (
  <section className="py-12 px-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-lg shadow-md transition-colors duration-300">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 dark:text-purple-300 mb-4">About Me</h2>
      <p className="text-lg leading-relaxed">
        I'm a passionate software engineer with over a decade of experience building full-stack applications,
        cloud-based architectures, and AI-powered tools. I specialize in Flutter, Django, and AWS, and I love
        solving real-world problems through clean, scalable code and intuitive design.
      </p>
    </div>
  </section>
);

export default AboutMe;