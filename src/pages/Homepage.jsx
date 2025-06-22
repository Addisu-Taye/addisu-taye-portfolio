// src/pages/HomePage.jsx
import React, { useState } from 'react'; // Import useState
import ProfileSection from '../components/ProfileSection';
import ProjectSection from '../components/ProjectSection';
import BlogSection from '../components/BlogSection';
import AboutMe from '../components/AboutMe';
import CategoryFilter from '../components/CategoryFilter'; // Import new component

// HomePage component displays the main sections of the portfolio
// It receives data (profile, projects, blogPosts) as props from App.jsx
function HomePage({ profile, projects, blogPosts }) {
  // State to manage the currently selected category for projects
  const [selectedCategory, setSelectedCategory] = useState('All Projects');

  return (
    <div className="space-y-16">
      <ProfileSection profile={profile} />
      <AboutMe />
      {/* Category Filter for Projects */}
      <CategoryFilter
        projects={projects} // Pass all projects to derive categories
        onSelectCategory={setSelectedCategory} // Callback to update selected category
        activeCategory={selectedCategory} // Currently active category for styling
      />
      <ProjectSection
        projects={projects}
        selectedCategory={selectedCategory} // Pass selected category to filter projects
      />
      <BlogSection blogPosts={blogPosts} />
    </div>
  );
}

export default HomePage;