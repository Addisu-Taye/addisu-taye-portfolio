import React from 'react';

const ResumeSection = () => (
  <div className="py-12 text-center">
    <h2 className="text-4xl font-bold text-gray-800">Download My Resume</h2>
    <p className="text-gray-600 mt-4">Click below to download my resume in PDF format.</p>
    <a
      href="/path/to/resume.pdf" // Replace with your actual resume link
      download
      className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all"
    >
      Download Resume
    </a>
  </div>
);

export default ResumeSection;
