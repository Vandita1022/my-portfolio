import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import StarryBackground from './components/StarryBackground';
import RightSidePanel from './components/RightSidePanel';
import LeftSidePanel from './components/LeftSidePanel';
import ResumeButton from './components/ResumeButton';
import CursorGlow from './components/CursorGlow';

import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import About from './pages/About';

// We define a wrapper component here so we can use `useLocation` inside it
const AppWrapper = () => {
  const location = useLocation();

  return (
    <>
      <StarryBackground />
      <RightSidePanel />
      <LeftSidePanel />
      <ResumeButton />
      <CursorGlow />
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
