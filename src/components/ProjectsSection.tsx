
import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      name: 'Jarvis AI',
      description: 'Personal AI assistant built with Python and natural language processing. Features voice commands, task automation, and system integration.',
      tech: ['Python', 'NLP', 'Speech Recognition', 'TensorFlow'],
      github: 'https://github.com/anupam/jarvis-ai',
      status: 'Active'
    },
    {
      name: 'Auto-Reply Bot',
      description: 'Intelligent chatbot for automated customer support with context-aware responses and integration capabilities.',
      tech: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/anupam/auto-reply-bot',
      status: 'Completed'
    },
    {
      name: 'Blog CMS',
      description: 'Full-featured content management system with markdown support, user authentication, and admin dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'JWT'],
      github: 'https://github.com/anupam/blog-cms',
      status: 'Active'
    },
    {
      name: 'EduLearn Platform',
      description: 'E-learning platform with course management, progress tracking, and interactive quizzes for students and educators.',
      tech: ['React', 'Express', 'MongoDB', 'WebRTC'],
      github: 'https://github.com/anupam/edulearn-platform',
      status: 'In Development'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="terminal-border bg-black/50 p-6 mb-8">
          <div className="mb-4">
            <span className="text-terminal-cyan">anupam@arch</span>
            <span className="text-terminal-text">:</span>
            <span className="text-terminal-amber">~/projects</span>
            <span className="text-terminal-text">$ ls -la</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-terminal-text">
            ./projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="terminal-border bg-black/30 p-4 hover:bg-black/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-terminal-cyan">
                    {project.name}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded ${
                    project.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'Completed' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-terminal-text text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="terminal-button text-xs"
                  >
                    git clone
                  </a>
                  <button className="terminal-button text-xs">
                    ./run.sh
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a 
            href="https://github.com/anupam"
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-button"
          >
            git remote -v
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
