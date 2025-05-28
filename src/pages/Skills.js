import React from 'react';
import PageWrapper from '../components/PageWrapper';
import NeonLogo from '../components/NeonLogo';
import {
  Code2,
  Database,
  Globe,
  Server,
  Cpu,
  Shield,
  Palette,
  Zap,
} from 'lucide-react';

const Skills = () => {
  // Extract color parts to use in JS styles (for glow)
  const skills = [
    { name: 'React', icon: Code2, colorFrom: '#60a5fa', colorTo: '#2563eb' },       // from-blue-400 to-blue-600
    { name: 'Node.js', icon: Server, colorFrom: '#4ade80', colorTo: '#15803d' },    // from-green-400 to-green-600
    { name: 'Python', icon: Cpu, colorFrom: '#facc15', colorTo: '#ea580c' },        // from-yellow-400 to-orange-500
    { name: 'PostgreSQL', icon: Database, colorFrom: '#a78bfa', colorTo: '#7c3aed' }, // from-purple-400 to-purple-600
    { name: 'AWS', icon: Globe, colorFrom: '#fb923c', colorTo: '#ef4444' },         // from-orange-400 to-red-500
    { name: 'Docker', icon: Shield, colorFrom: '#22d3ee', colorTo: '#3b82f6' },     // from-cyan-400 to-blue-500
    { name: 'GraphQL', icon: Zap, colorFrom: '#f472b6', colorTo: '#f43f5e' },       // from-pink-400 to-rose-500
    { name: 'MongoDB', icon: Database, colorFrom: '#22c55e', colorTo: '#16a34a' },  // from-green-500 to-emerald-600
    { name: 'Figma', icon: Palette, colorFrom: '#c084fc', colorTo: '#7c3aed' },     // from-violet-400 to-purple-500
  ];

  return (
    <PageWrapper>
      <div className="w-full md:w-1/2 mx-auto mt-12 mb-12 relative">
        <NeonLogo text="Skills" />
        <section className="py-20 px-4 bg-transparent relative overflow-hidden">

          {/* Background blobs */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-3 gap-x-1 gap-y-3">
              {skills.map((skill) => (
                <div key={skill.name} className="group relative flex flex-col items-center">

                  {/* Skill box with default glow */}
                  <div
                    className="relative w-16 h-16 md:w-20 md:h-20 bg-gray-800/80 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-gray-700/90"
                    style={{
                      border: '2px solid transparent',
                      boxShadow: `0 0 8px 2px ${skill.colorFrom}88`,
                    }}
                  >
                    <skill.icon
                      className="w-5 h-5 md:w-6 md:h-6 text-gray-300 group-hover:text-white transition-all duration-300 group-hover:scale-110"
                    />
                    {/* Hover border glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]"
                      style={{
                        background: `linear-gradient(to right, ${skill.colorFrom}, ${skill.colorTo})`,
                        WebkitMask:
                          'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'destination-out',
                        maskComposite: 'exclude',
                      }}
                    >
                      <div className="w-full h-full bg-gray-800 rounded-2xl"></div>
                    </div>
                  </div>

                  {/* Floating dots
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
                  <div
                    className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"
                    style={{ animationDelay: '0.2s' }}
                  ></div> */}

                  {/* Skill name */}
                  <div className="mt-1 text-center">
                    <h3 className="text-xs font-semibold text-white">{skill.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom CSS for hover box-shadow (glow) without affecting transform */}
        <style>{`
          .group:hover > div.relative {
            box-shadow: 0 0 14px 4px var(--tw-gradient-stops, transparent) !important;
            border-color: transparent !important;
          }
          /* We use inline style for the box-shadow color per skill */
        `}</style>
      </div>
    </PageWrapper>
  );
};

export default Skills;
