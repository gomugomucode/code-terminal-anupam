
import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="terminal-border bg-black/50 p-6 mb-8">
          <div className="mb-4">
            <span className="text-terminal-cyan">anupam@arch</span>
            <span className="text-terminal-text">:</span>
            <span className="text-terminal-amber">~</span>
            <span className="text-terminal-text">$ ping contact</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-terminal-text">
            ./get_in_touch
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-terminal-cyan">$ curl contact_info</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-terminal-amber">email:</span>
                  <a 
                    href="mailto:anupam@example.com" 
                    className="text-terminal-text hover:text-terminal-cyan transition-colors"
                  >
                    anupam@example.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-terminal-amber">github:</span>
                  <a 
                    href="https://github.com/anupam" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terminal-text hover:text-terminal-cyan transition-colors"
                  >
                    github.com/anupam
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-terminal-amber">linkedin:</span>
                  <a 
                    href="https://linkedin.com/in/anupam" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terminal-text hover:text-terminal-cyan transition-colors"
                  >
                    linkedin.com/in/anupam
                  </a>
                </div>
              </div>

              <div className="ascii-art">
                <pre className="text-xs">
{`    ╭─────────────────────╮
    │   Let's Connect!    │
    │  ─────────────────  │
    │  Always open to     │
    │  collaborations,    │
    │  opportunities &    │
    │  tech discussions   │
    ╰─────────────────────╯`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-terminal-cyan">$ vim message.txt</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-terminal-amber text-sm mb-2">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-terminal-text/30 rounded px-3 py-2 text-terminal-text focus:border-terminal-text focus:outline-none"
                    placeholder="your_name"
                  />
                </div>
                
                <div>
                  <label className="block text-terminal-amber text-sm mb-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-terminal-text/30 rounded px-3 py-2 text-terminal-text focus:border-terminal-text focus:outline-none"
                    placeholder="your_email@domain.com"
                  />
                </div>
                
                <div>
                  <label className="block text-terminal-amber text-sm mb-2">
                    Message:
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-black/50 border border-terminal-text/30 rounded px-3 py-2 text-terminal-text focus:border-terminal-text focus:outline-none resize-none"
                    placeholder="Write your message here..."
                  />
                </div>
                
                <button 
                  type="submit"
                  className="terminal-button w-full"
                >
                  ./send_message.sh
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="text-center text-terminal-gray text-sm">
          <p>$ uptime: Building connections since 2024</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
