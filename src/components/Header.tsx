import type React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="https://github.com/Saeed-Engr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.instagram.com/engr_saeed/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Instagram size={20} />
            <span className="sr-only">Instagram</span>
          </a>
        </div>

        <a
          href="#contact"
          className="flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <Mail size={20} className="mr-2" />
          <span>GET IN TOUCH</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
