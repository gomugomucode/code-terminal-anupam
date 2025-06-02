
import React from 'react';
import TypewriterText from './TypewriterText';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl w-full">
        <div className="terminal-border bg-black/50 p-8 mb-8">
          <div className="mb-4">
            <span className="text-terminal-cyan">anupam@arch</span>
            <span className="text-terminal-text">:</span>
            <span className="text-terminal-amber">~</span>
            <span className="text-terminal-text">$ </span>
            <TypewriterText text="whoami" speed={100} />
          </div>
          
          <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">
            <div className="mb-2">
              <span className="text-terminal-text">> </span>
              <TypewriterText 
                text="Anupam – Full Stack Developer" 
                delay={2000}
                speed={80}
              />
            </div>
            <div className="mb-2">
              <span className="text-terminal-text">> </span>
              <TypewriterText 
                text="& Arch Linux Enthusiast" 
                delay={5000}
                speed={80}
              />
            </div>
          </div>

          <div className="text-terminal-gray text-sm md:text-base">
            <TypewriterText 
              text="Building elegant solutions with code, one commit at a time." 
              delay={8000}
              speed={50}
            />
          </div>
        </div>

        <div className="ascii-art text-center opacity-60">
          <pre className="text-xs md:text-sm">
{`    ╔══════════════════════════════════════╗
    ║  Welcome to Anupam's Digital Space   ║
    ║  --------------------------------    ║
    ║  > Crafting code since BCA days      ║
    ║  > Linux enthusiast & open source    ║
    ║  > Building the future, line by line ║
    ╚══════════════════════════════════════╝`}
          </pre>
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="terminal-button"
          >
            ./view_projects.sh
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="terminal-button"
          >
            ./contact.sh
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
