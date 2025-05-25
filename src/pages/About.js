import React from 'react';
import PageWrapper from '../components/PageWrapper';

const About = () => {
  return (
    <PageWrapper>
        <div className="text-white p-8">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p>
            I'm a software developer passionate about building intuitive UIs,
            solving real-world problems with code, and exploring new technologies.
        </p>
        </div>
    </PageWrapper>
  );
};

export default About;