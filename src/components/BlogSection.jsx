// src/components/BlogSection.jsx
import React from 'react';
import BlogCard from './BlogCard';
import { useTranslation } from 'react-i18next';

// BlogSection component displays a grid of blog post summaries
function BlogSection({ blogPosts }) {
  const { t } = useTranslation();

  if (!blogPosts || blogPosts.length === 0) {
    return <div className="text-center py-10 text-gray-500 dark:text-gray-400">No blog posts to display.</div>;
  }

  return (
    <section id="blog" className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300 rounded-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
          {t('recent_blog_posts')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;