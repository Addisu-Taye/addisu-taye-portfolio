// src/pages/HomePage.jsx
import React from 'react';
import ProfileSection from '../components/ProfileSection';
import ProjectSection from '../components/ProjectSection';
import BlogSection from '../components/BlogSection';

// HomePage component displays the main sections of the portfolio
// It receives data (profile, projects, blogPosts) as props from App.jsx
function HomePage({ profile, projects, blogPosts }) {
  return (
    <div className="space-y-16">
      <ProfileSection profile={profile} />
      <ProjectSection projects={projects} />
      <BlogSection blogPosts={blogPosts} />
    </div>
  );
}

export default HomePage;