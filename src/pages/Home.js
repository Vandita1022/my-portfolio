import React from 'react';
import PageWrapper from '../components/PageWrapper';

const Home = () => {
  return (
    <PageWrapper>
        <div className="text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p>This is the homepage. Explore my skills, projects, and more!</p>
        </div>
    </PageWrapper>
  );
};

export default Home;
