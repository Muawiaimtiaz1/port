import type React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto bg-zinc-900 rounded-xl p-8 shadow-lg">
        <h3 className="text-2xl mb-8 text-center text-gray-300 uppercase tracking-wider">
          Here is a little background
        </h3>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="bg-zinc-800 rounded-full h-24 w-24 flex items-center justify-center mb-4">
              <span className="text-orange-500 text-4xl font-bold">A</span>
            </div>
          </div>

          <div className="md:w-2/3">
          <p className="text-gray-300 leading-relaxed mb-4">
  Hey 👋 I am a Machine Learning Engineer currently based in Pakistan.
  I am pursuing a PhD in Artificial Intelligence at The Islamia University of Bahawalpur,
  after completing my MS in Artificial Intelligence and BS in Computer Science from the same institution.
</p>

<p className="text-gray-300 leading-relaxed mb-4">
  My work focuses on research and development in artificial intelligence, particularly in the areas
  of deep learning, computer vision, and natural language processing. I am passionate about applying
  AI to solve real-world challenges and building innovative, scalable machine learning systems.
</p>

<p className="text-gray-300 leading-relaxed">
  Beyond my academic and professional pursuits, I enjoy exploring emerging AI tools,
  mentoring junior developers, and staying engaged with the broader tech community.
  I'm driven by the mission to use AI for social good and contribute to impactful technological advancement.
</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
