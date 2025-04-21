import React from "react";
import ProjectSection from "./components/ProjectSection";
import ContactForm from "./components/ContactForm";
import ThemeToggle from "./components/ThemeToggle";
import BlogSection from './components/BlogSection'; 
import ResumeSection from './components/ResumeSection'; 
import LanguageToggle from './components/LanguageToggle'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import ProfileSection from './components/ProfileSection';

function App() {
  return (
    <div className="font-sans">
      <LanguageToggle />
      <ResumeSection />
      <BlogSection />
      <ThemeToggle />
      <ProfileSection />
      <ProjectSection />
      <ContactForm />
      <Routes>
        <Route path="/" element={<ProfileSection />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
