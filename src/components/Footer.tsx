import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#home" className="text-2xl font-bold gradient-text">
              Eyader.
            </a>
            <p className="mt-4 text-slate-400 max-w-xs">
              Building the future of software, one line of code at a time.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-6">
              {[
                { icon: <Github size={20} />, href: 'https://github.com/eyaderaddisbelete' },
                { icon: <Linkedin size={20} />, href: 'https://linkedin.com' },
                { icon: <Twitter size={20} />, href: '#' },
                { icon: <Instagram size={20} />, href: '#' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Eyader Addis Belete. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
