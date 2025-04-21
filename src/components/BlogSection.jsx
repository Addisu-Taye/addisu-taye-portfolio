import React from 'react';
import { useTranslation } from 'react-i18next';

const BlogSection = () => {
  const { t } = useTranslation();

  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-800">{t('welcome')}</h2>
      {/* Blog posts */}
    </div>
  );
};

export default BlogSection;
