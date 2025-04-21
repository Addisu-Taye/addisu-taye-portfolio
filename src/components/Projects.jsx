import React from 'react';

const Projects = () => (
  <section className="py-12 px-6 bg-white text-gray-800">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold">AI Job Assistant</h3>
          <p className="text-sm mt-2">An AI-powered web app that applies for jobs on your behalf, generating custom resumes and cover letters.</p>
        </div>
        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold">Territory Tracker</h3>
          <p className="text-sm mt-2">Offline-first Flutter app with OpenStreetMap for managing house-to-house ministry territories.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
