import React from 'react';

const BlogCard = ({ title, date, tags, children, featured }) => (
  <div className={`p-6 mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transform transition hover:scale-105 ${featured ? 'border-2 border-blue-500 animate-pulse' : ''}`}>
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-sm text-gray-500">{date}</p>
    <div className="my-2 text-sm">
      {tags.map(tag => (
        <span key={tag} className="mr-2 px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
          #{tag}
        </span>
      ))}
    </div>
    <div className="mt-2">{children}</div>
  </div>
);

export default BlogCard;
