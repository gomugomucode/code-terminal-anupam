
import React from 'react';

const AboutSection = () => {
  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Node.js', 
    'Python', 'Java', 'MongoDB', 'PostgreSQL', 'Git', 'Docker'
  ];

  const tools = [
    'Arch Linux', 'DWM', 'VS Code', 'Neovim', 'Terminal', 'Git', 
    'Docker', 'Postman', 'Firefox', 'Thunderbird'
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="terminal-border bg-black/50 p-6 mb-8">
          <div className="mb-4">
            <span className="text-terminal-cyan">anupam@arch</span>
            <span className="text-terminal-text">:</span>
            <span className="text-terminal-amber">~</span>
            <span className="text-terminal-text">$ cat about.txt</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-terminal-text">
            ./about_me
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-terminal-cyan">$ whoami</h3>
              <p className="text-terminal-text mb-4 leading-relaxed">
                BCA student passionate about full-stack development and open-source technologies. 
                I live in the terminal, breathe Linux, and believe that clean code is a work of art.
              </p>
              <p className="text-terminal-text mb-4 leading-relaxed">
                When I'm not coding, you'll find me customizing my Arch Linux setup, 
                contributing to open-source projects, or exploring the latest in web technologies.
              </p>
              <p className="text-terminal-text leading-relaxed">
                Currently focused on building scalable web applications and improving my 
                system administration skills.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-terminal-cyan">$ ls skills/</h3>
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-2 text-terminal-amber">Languages & Frameworks:</h4>
                <div className="flex flex-wrap">
                  {skills.map((skill, index) => (
                    <span key={index} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2 text-terminal-amber">Tools & Environment:</h4>
                <div className="flex flex-wrap">
                  {tools.map((tool, index) => (
                    <span key={index} className="tech-tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="terminal-border bg-black/50 p-6">
          <div className="mb-4">
            <span className="text-terminal-text">$ neofetch</span>
          </div>
          <div className="ascii-art text-xs md:text-sm">
            <pre>
{`                   -\`
                  .o+\`                 anupam@portfolio
                 \`ooo/                 -----------------
                \`+oooo:                OS: Arch Linux x86_64
               \`+oooooo:               Kernel: Learning & Building
               -+oooooo+:              Uptime: 3+ years coding
             \`/:-:++oooo+:             Shell: zsh with oh-my-zsh
            \`/++++/+++++++:            WM: dwm (custom build)
           \`/++++++++++++++:           Theme: Terminal Green
          \`/+++ooooooooooooo/\`         Terminal: st (suckless)
         ./ooosssso++osssssso+\`        CPU: Curiosity & Caffeine
        .oossssso-\`\`\`\`/ossssss+\`       Memory: Constantly learning
       -osssssso.      :ssssssso.      Disk: ~/projects (growing)
      :osssssss/        osssso+++.     
     /ossssssss/        +ssssooo/-     
   \`/ossssso+/:-        -:/+osssso+\`   
  \`+sso+:-\`                 \`.-/+oso:  
 \`++:.                           \`-/+/
 .\`                                 \`/`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
