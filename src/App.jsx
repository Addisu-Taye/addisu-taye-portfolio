import React from "react";
import ProfileSection from "./components/ProfileSection";
import ProjectSection from "./components/ProjectSection";
import ContactForm from "./components/ContactForm";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="font-sans">
      <ThemeToggle />
      <ProfileSection />
      <ProjectSection />
      <ContactForm />
    </div>
  );
}

export default App;
