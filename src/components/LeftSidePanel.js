import React from 'react';

import linkedinIcon from '../images/linkedin.png';
import githubIcon from '../images/github.png';
import emailIcon from '../images/email.png';
import twitterIcon from '../images/linkedin.png';
import resumeIcon from '../images/linkedin.png';
import blogIcon from '../images/linkedin.png';

const links = [
  { icon: linkedinIcon, url: 'https://www.linkedin.com/in/yourprofile' },
  { icon: githubIcon, url: 'https://github.com/yourusername' },
  { icon: emailIcon, url: 'mailto:youremail@example.com' },
  { icon: twitterIcon, url: 'https://twitter.com/yourhandle' },
  { icon: resumeIcon, url: '/your_resume.pdf' },
  { icon: blogIcon, url: 'https://yourblog.com' },
];

const LeftSidePanel = () => {
  return (
    <div className="fixed top-40 left-5 h-[calc(100vh-2.5rem)] w-16 bg-transparent flex flex-col items-center py-4 space-y-4 z-20">
      {links.map(({ icon, url }, index) => (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className="w-8 h-8 rounded-md overflow-hidden hover:scale-105 transition-transform"
        >
          <img
            src={icon}
            alt={`social-icon-${index + 1}`}
            className="w-full h-full object-cover"
          />
        </a>
      ))}
    </div>
  );
};

export default LeftSidePanel;
