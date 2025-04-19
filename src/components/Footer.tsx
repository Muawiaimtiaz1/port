import type React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Muhammad Saeed. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
