// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Corrected import paths for pages and components
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogSection from './components/BlogSection';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("App.jsx: useEffect initiated.");
    const fetchPortfolioData = async () => {
      console.log("App.jsx: fetchPortfolioData starting...");
      try {
        const response = await fetch('/data.json');
        console.log("App.jsx: Response received. Status OK:", response.ok);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("App.jsx: Data fetched successfully:", data);
        setPortfolioData(data);
      } catch (e) {
        console.error("App.jsx: Error fetching portfolio data:", e);
        setError(e.message);
      } finally {
        console.log("App.jsx: fetchPortfolioData finished. Setting loading to false.");
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  if (loading) {
    console.log("App.jsx: Rendering Loading state.");
    return (
      <div className="flex items-center justify-center min-h-screen text-2xl text-gray-700 dark:text-gray-300">
        Loading portfolio...
      </div>
    );
  }

  if (error) {
    console.log("App.jsx: Rendering Error state. Error:", error);
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600 text-2xl">
        Error loading portfolio: {error}
      </div>
    );
  }

  if (!portfolioData) {
    console.log("App.jsx: portfolioData is null after loading, rendering null.");
    return null; // This case should theoretically not be hit if loading is false and no error
  }

  console.log("App.jsx: Rendering main application with portfolioData:", portfolioData);
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
                <BlogSection blogPosts={portfolioData.blogPosts} />
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