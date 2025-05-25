import React from 'react';
import PageWrapper from '../components/PageWrapper';

const Projects = () => {
  return (
    <PageWrapper>
        <div className="text-white p-8">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Sketch Classifier</h2>
            <p className="text-sm mt-2">A computer vision model that classifies hand-drawn sketches using machine learning techniques.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Panache Shopping App</h2>
            <p className="text-sm mt-2">Antique shopping app with user personas, storyboards, and wireframes.</p>
            </div>
        </div>
        </div>
    </PageWrapper>
  );
};

export default Projects;
