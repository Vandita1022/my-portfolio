import React from 'react';
import { Link } from 'react-router-dom';

import icon1 from '../images/home.png';
import icon2 from '../images/skills.png';
import icon3 from '../images/projects.png';
import icon4 from '../images/experience.png';
import icon5 from '../images/about_me.png';
import icon6 from '../images/linkedin.png';

const buttons = [
  { icon: icon1, path: '/', label: 'Home' },
  { icon: icon2, path: '/skills', label: 'Skills' },
  { icon: icon3, path: '/projects', label: 'Projects' },
  { icon: icon4, path: '/experience', label: 'Experience' },
  { icon: icon5, path: '/about', label: 'About Me' },
  { icon: icon6, path: '/extra', label: 'LinkedIn' }, // optional
];

const RightSidePanel = () => {
  return (
    <div className="fixed top-40 right-5 h-[calc(100vh-2.5rem)] w-16 bg-transparent flex flex-col items-center py-4 space-y-4 z-20">
      {buttons.map(({ icon, path, label }, index) => (
        <Link to={path} key={index} className="group relative">
          <button className="w-10 h-10 rounded-md overflow-hidden transition-transform hover:scale-105 hover:shadow-[0_0_12px_4px_rgba(255,255,255,0.8)]">
            <img
              src={icon}
              alt={`icon-${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
          {/* Tooltip */}
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-30">
            {label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default RightSidePanel;
