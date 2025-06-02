
import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <footer className="bg-black/50 border-t border-terminal-text/30 py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="terminal-border bg-black/50 p-4">
          <div className="grid md:grid-cols-3 gap-4 text-xs">
            <div>
              <span className="text-terminal-amber">system_status:</span>
              <span className="text-terminal-text ml-2">online</span>
            </div>
            <div>
              <span className="text-terminal-amber">uptime:</span>
              <span className="text-terminal-text ml-2">{formatTime(currentTime)}</span>
            </div>
            <div>
              <span className="text-terminal-amber">location:</span>
              <span className="text-terminal-text ml-2">~/portfolio</span>
            </div>
          </div>
          
          <div className="border-t border-terminal-text/20 mt-4 pt-4 text-center">
            <p className="text-terminal-gray text-xs">
              <span className="text-terminal-cyan">anupam@arch</span>
              <span className="text-terminal-text">:</span>
              <span className="text-terminal-amber">~</span>
              <span className="text-terminal-text">$ echo "Built with ❤️ and lots of coffee" | cowsay</span>
            </p>
            <div className="ascii-art mt-2">
              <pre className="text-xs">
{` _________________________________
< Built with ❤️ and lots of coffee >
 ---------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`}
              </pre>
            </div>
            <p className="text-terminal-text text-xs mt-2">
              © 2024 Anupam. All rights reserved. | 
              <span className="text-terminal-cyan ml-1">Open source enthusiast</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
