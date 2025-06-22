// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Default fallback translations
const defaultResources = {
  en: {
    translation: {
      welcome: "Welcome to my Portfolio!",
      home: "Home",
      projects: "Projects",
      blog: "Blog",
      contact: "Contact",
      download_resume: "Download Resume",
      view_on_github: "View on GitHub",
      view_live: "View Live",
      recent_blog_posts: "Recent Blog Posts",
      read_more: "Read More",
      all_rights_reserved: "All rights reserved.",
      all_projects: "All Projects",
      full_stack: "Full Stack",
      machine_learning: "Machine Learning",
      web: "Web",
      backend: "Backend",
      frontend: "Frontend",
      mobile_app: "Mobile App",
      multi_agent: "Multi Agent",
      ai_ml: "AI/ML",
      simulation: "Simulation",
      ui_ux: "UI/UX"
    }
  },
  am: {
    translation: {
      welcome: "ወደ ፖርትፎሊዮዬ እንኳን ደህና መጡ!",
      home: "ዋና ገጽ",
      projects: "ፕሮጀክቶች",
      blog: "ብሎግ",
      contact: "አግኙኝ",
      download_resume: "ሪዙሜ አውርድ",
      view_on_github: "በጊትሀብ ይመልከቱ",
      view_live: "ቀጥታ ይመልከቱ",
      recent_blog_posts: "የቅርብ ጊዜ የብሎግ ልጥፎች",
      read_more: "ተጨማሪ ያንብቡ",
      all_rights_reserved: "መብቱ በህግ የተጠበቀ ነው፡፡",
      all_projects: "ሁሉም ፕሮጀክቶች",
      full_stack: "ሙሉ ስታክ",
      machine_learning: "ማሽን መማር",
      web: "ድር",
      backend: "ባክኤንድ",
      frontend: "ፍሮንትኤንድ",
      mobile_app: "ሞባይል መተግበሪያ",
      multi_agent: "ብዙ ወኪል",
      ai_ml: "AI/ML",
      simulation: "ሲሙሌሽን",
      ui_ux: "UI/UX"
    }
  }
};

i18n.use(initReactI18next).init({
  resources: defaultResources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false // React already escapes values
  }
});

export default i18n;