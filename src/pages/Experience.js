import React from 'react';
import PageWrapper from '../components/PageWrapper';

const Experience = () => {
  return (
    <PageWrapper>
        <div className="text-white p-8">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <form className="max-w-md space-y-4">
            <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 rounded bg-gray-700 text-white"
            />
            <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 rounded bg-gray-700 text-white"
            />
            <textarea
            placeholder="Your Message"
            className="w-full p-2 rounded bg-gray-700 text-white h-32"
            />
            <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
            Send Message
            </button>
        </form>
        </div>
    </PageWrapper>
  );
};

export default Experience;
