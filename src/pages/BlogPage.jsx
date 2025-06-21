// src/pages/BlogPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// BlogPage component (placeholder for actual blog post content)
function BlogPage({ blogPosts }) {
  const { id } = useParams(); // Get the blog post ID from the URL
  const { t } = useTranslation();

  // Find the specific blog post based on the ID
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-24 text-center text-gray-500 dark:text-gray-400">
        <h2 className="text-3xl font-bold mb-4">Blog Post Not Found</h2>
        <p>The post you are looking for does not exist.</p>
        {/* Corrected href attribute for the link */}
        <p>You can navigate back to the <a href="/blog" className="text-purple-600 hover:underline">main blog page</a>.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 md:p-12 transition-colors duration-300">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">{post.date}</p>
        <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          {/* This is where the full blog post content would go */}
          <p>{post.summary}</p>
          <p>This is a placeholder for the full content of "{post.title}". In a real application, you would fetch the full Markdown or HTML content for this post based on its ID.</p>
          <p>You can expand this section to include detailed articles, images, and code snippets.</p>
          <p>Thank you for reading!</p>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;