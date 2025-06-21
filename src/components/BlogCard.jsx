// src/components/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// BlogCard component displays a summary of a blog post
function BlogCard({ post }) {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden p-6 border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-all duration-300">
      {/* Blog Post Title */}
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{post.title}</h3>
      {/* Blog Post Date */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{post.date}</p>
      {/* Blog Post Summary */}
      <p className="text-gray-700 dark:text-gray-300 mb-4">{post.summary}</p>
      {/* Read More Link (placeholder) */}
      <Link
        to={`/blog/${post.id}`} // Link to a specific blog post (adjust route as needed)
        className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-200 font-medium transition-colors duration-300"
      >
        <span>{t('read_more')}</span>
        {/* Corrected SVG xmlns attribute */}
        <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>
      </Link>
    </div>
  );
}

export default BlogCard;