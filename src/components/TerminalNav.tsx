
import React, { useState } from 'react';

const TerminalNav = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'home', command: 'cd ~' },
    { id: 'about', label: 'about', command: 'cat about.txt' },
    { id: 'projects', label: 'projects', command: 'ls projects/' },
    { id: 'contact', label: 'contact', command: 'ping contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-terminal-bg/90 backdrop-blur-sm border-b border-terminal-text/30">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-terminal-cyan">anupam@arch</span>
            <span className="text-terminal-text">:</span>
            <span className="text-terminal-amber">~</span>
            <span className="text-terminal-text">$</span>
          </div>
          
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`terminal-button text-sm ${
                  activeSection === item.id 
                    ? 'border-terminal-text bg-terminal-text/20' 
                    : ''
                }`}
                title={item.command}
              >
                ./{item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TerminalNav;
