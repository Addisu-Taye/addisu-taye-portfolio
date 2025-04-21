import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import BlogCard from '../components/BlogCard';
import examplePost from '../blog/example-post.md';

const Blog = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(examplePost)
      .then(res => res.text())
      .then(setContent);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">📰 Blog</h1>
      <BlogCard title="My First Post" date="2025-04-21" tags={["AI", "Career"]} featured>
        <ReactMarkdown>{content}</ReactMarkdown>
      </BlogCard>
    </div>
  );
};

export default Blog;
