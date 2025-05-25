import React from 'react';
import { ArrowDown } from 'lucide-react';

const ResumeButton = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1i5dpxkWpL9tBWVPybZOaiSkVXuzzZ0Hx/view"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-5 flex flex-col items-center text-purple-300 group z-30"
    >
      <span className="text-lg font-extrabold tracking-widest mb-2">RESUME</span>
      <div className="w-10 h-16 border-2 border-purple-300 rounded-full flex items-center justify-center group-hover:shadow-[0_0_20px_#a78bfa] transition-all">
        <ArrowDown className="w-5 h-5 text-purple-300 group-hover:translate-y-1 transition-transform" />
      </div>
    </a>
  );
};

export default ResumeButton;
