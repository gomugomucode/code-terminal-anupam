
import React from 'react';
import TypewriterText from './TypewriterText';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="text-terminal-cyan text-sm font-mono mb-2">
            <span className="text-terminal-text">anupam@arch</span>
            <span className="text-terminal-text">:</span>
            <span className="text-terminal-amber">~</span>
            <span className="text-terminal-text">$ </span>
            <span className="text-terminal-cyan">whoami</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-terminal-text mb-4">
            <TypewriterText 
              text="Anupam" 
              speed={100}
            />
          </h1>
          
          <div className="text-xl md:text-2xl text-terminal-cyan font-mono mb-6">
            <TypewriterText 
              text="Full Stack Developer & Arch Linux Enthusiast" 
              delay={1000}
              speed={50}
            />
          </div>
        </div>

        <div className="terminal-window max-w-2xl mx-auto">
          <div className="terminal-header">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-terminal-text text-sm">terminal</span>
          </div>
          
          <div className="terminal-body text-left text-sm">
            <div className="mb-2">
              <span className="text-terminal-cyan">$</span>
              <span className="text-terminal-text"> cat about.txt</span>
            </div>
            <div className="text-terminal-text leading-relaxed">
              <TypewriterText 
                text="BCA Student passionate about full-stack development, open-source software, and Linux systems. Building innovative solutions with modern web technologies."
                delay={3000}
                speed={30}
              />
            </div>
            <div className="mt-4">
              <span className="text-terminal-cyan">$</span>
              <span className="animate-blink">_</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <a 
            href="#projects" 
            className="terminal-button"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            ./view_projects
          </a>
          <a 
            href="#contact" 
            className="terminal-button"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            ./contact_me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
