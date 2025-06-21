// src/components/ProfileSection.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { LuMail, LuLinkedin, LuGithub, LuDownload } from 'react-icons/lu'; // Using lucide-react for icons

// ProfileSection component displays personal information
function ProfileSection({ profile }) {
  const { t } = useTranslation();

  if (!profile) {
    return <div className="text-center py-10 text-gray-500 dark:text-gray-400">Loading profile...</div>;
  }

  return (
    <section id="profile" className="py-16 md:py-24 text-center">
      <div className="container mx-auto px-4">
        {/* Profile Image */}
        <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-purple-500 dark:border-purple-400 shadow-lg">
          <img
            src={profile.profileImage}
            alt={profile.name}
            className="w-full h-full object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/808080/FFFFFF?text=Profile'; }}
          />
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3 leading-tight">
          {profile.name}
        </h1>
        <p className="text-xl md:text-2xl text-purple-700 dark:text-purple-300 font-semibold mb-6">
          {profile.title}
        </p>

        {/* Bio */}
        <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          {profile.bio}
        </p>

        {/* Social Links and Resume */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center space-x-2 px-5 py-2 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300 font-medium"
              aria-label="Email me"
            >
              <LuMail className="w-5 h-5" />
              <span>Email</span>
            </a>
          )}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-5 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
              aria-label="LinkedIn profile"
            >
              <LuLinkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          )}
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-5 py-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300 font-medium"
              aria-label="GitHub profile"
            >
              <LuGithub className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          )}
          {profile.resumePdf && (
            <a
              href={profile.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-5 py-2 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-700 transition-colors duration-300 font-medium"
              aria-label="Download Resume"
            >
              <LuDownload className="w-5 h-5" />
              <span>{t('download_resume')}</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;