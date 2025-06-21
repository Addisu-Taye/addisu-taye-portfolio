// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Corrected import paths for pages and components
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogSection from './components/BlogSection'; // <--- Ensure this import is present

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPortfolioData(data);
      } catch (e) {
        setError(e.message);
        console.error("Failed to load portfolio data:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-2xl text-gray-700 dark:text-gray-300">
        Loading portfolio...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600 text-2xl">
        Error loading portfolio: {error}
      </div>
    );
  }

  if (!portfolioData) {
    return null;
  }

  return (
    <div className="font-sans min-h-screen flex flex-col pt-20">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                profile={portfolioData.profile}
                projects={portfolioData.projects}
                blogPosts={portfolioData.blogPosts}
              />
            }
          />
          <Route
            path="/blog/:id"
            element={
              <BlogPage blogPosts={portfolioData.blogPosts} />
            }
          />
          <Route
            path="/blog"
            element={
              <div className="container mx-auto px-4 py-24">
                <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
                  My <span className="text-purple-600">Blog</span>
                </h1>
                <BlogSection blogPosts={portfolioData.blogPosts} /> {/* BlogSection is used here */}
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;