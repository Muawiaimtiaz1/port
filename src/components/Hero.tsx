import type React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center py-20 relative">
      <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Concentric circles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="absolute rounded-full border border-gray-800"
              style={{
                width: `${i * 25}%`,
                height: `${i * 25}%`,
                opacity: 1 - (i * 0.15)
              }}
            />
          ))}
        </div>

        {/* Profile Image */}
        <div className="relative mb-8 z-10">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-800">
            <img
              src="{`${process.env.PUBLIC_URL}/images/pic.png`}"

              alt="Muhammad Saeed"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-gray-400 tracking-widest uppercase mb-4 z-10">
          Machine Learning Engineer
        </h2>

        {/* Name with highlight */}
        <h1 className="text-6xl font-bold text-center mb-16 z-10">
          Hi, the name's Muhammad Saeed <span className="text-teal-500">|</span>
        </h1>

        {/* Navigation */}
        <nav className="flex justify-center space-x-12 text-gray-400 uppercase tracking-wider text-sm z-10">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        </nav>
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a
          href="#about"
          className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
