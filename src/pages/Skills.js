import React from 'react';
import PageWrapper from '../components/PageWrapper';

const Skills = () => {
  return (
    <PageWrapper>
      <div className="text-white p-8">
        <h1 className="text-3xl font-bold mb-4">Skills</h1>
        <ul className="list-disc list-inside space-y-2">
          <li>JavaScript / React</li>
          <li>Node.js / Express</li>
          <li>Python</li>
          <li>HTML / CSS / Tailwind CSS</li>
          <li>Machine Learning / Computer Vision</li>
        </ul>
      </div>
    </PageWrapper>
  );
};

export default Skills;
