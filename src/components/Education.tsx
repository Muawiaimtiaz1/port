import type React from 'react';

const Education: React.FC = () => {
  const educationData = [
    {
      id: 'edu-1',
      degree: 'PhD in Artificial Intelligence',
      focus: 'Advanced AI Systems & Deep Learning',
      institution: 'The Islamia University of Bahawalpur',
      location: 'Bahawalpur, Pakistan',
      period: '2022 - Present',
      description: 'Conducting research on cutting-edge AI models and their applications in real-world scenarios. Areas of focus include deep learning, NLP, and reinforcement learning. Currently working on a dissertation related to explainable AI.'
    },
    {
      id: 'edu-2',
      degree: 'MS in Artificial Intelligence',
      focus: 'Machine Learning & Computer Vision',
      institution: 'The Islamia University of Bahawalpur',
      location: 'Bahawalpur, Pakistan',
      period: '2020 - 2022',
      description: 'Completed coursework and research in neural networks, AI ethics, and visual computing. Thesis focused on object detection using YOLO and deep convolutional models.'
    },
    {
      id: 'edu-3',
      degree: 'BS in Computer Science',
      focus: 'Software Engineering & Algorithms',
      institution: 'The Islamia University of Bahawalpur',
      location: 'Bahawalpur, Pakistan',
      period: '2016 - 2020',
      description: 'Built a strong foundation in programming, data structures, and systems development. Final year project focused on intelligent traffic management using image processing.'
    }
  ]
  

  return (
    <section id="education" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Education
        </h2>

        <div className="space-y-8">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="bg-zinc-900 rounded-xl p-6 shadow-lg transition-all hover:shadow-xl hover:translate-y-[-5px]"
            >
              <div className="flex flex-col md:flex-row md:gap-6">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-teal-500">{edu.degree}</h3>
                  <p className="text-gray-400 text-sm mb-2">{edu.focus}</p>
                  <p className="text-white font-medium">{edu.institution}</p>
                  <p className="text-gray-400 text-sm">{edu.location}</p>
                  <p className="text-gray-400 text-sm mt-2">{edu.period}</p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
